import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import TrackPlayer from "react-native-track-player";
import {
  usePlaybackState,
  useTrackPlayerProgress
} from "react-native-track-player/lib/hooks";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/EvilIcons";
import { secondsToMinutes } from "../constants/Helper";
import { PlayCircle, PauseCircle } from "../constants/Icons";
import AsyncStorage from "@react-native-community/async-storage";

const AudioPlayer = ({ navigation }) => {
  const sermon = navigation.getParam("sermon");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const playbackState = usePlaybackState();

  const track = {
    id: sermon._id,
    url: sermon.audio,
    title: sermon.title,
    artist: sermon.preacher,
    album: "ROG Sermons",
    genre: "Christian",
    artwork: sermon.image
  };

  useEffect(() => {
    AsyncStorage.getItem("downloads").then(downloads => {
      if (downloads !== null) {
        JSON.parse(downloads).forEach(element => {
          if (element.title.toLowerCase() === sermon.title.toLowerCase()) {
            setIsDownloaded(true);
            track.url = element.audio;
          }
        });
      }
    });
    TrackPlayer.setupPlayer();
    TrackPlayer.updateOptions({
      ratingType: TrackPlayer.RATING_5_STARS,
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
        TrackPlayer.CAPABILITY_SEEK_TO
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP
      ],
      playIcon: require("../../assets/images/play_btn.png"),
      pauseIcon: require("../../assets/images/pause_btn.png"),
      stopIcon: require("../../assets/images/stop_btn.png")
    });
    TrackPlayer.addEventListener("remote-stop", _ => {
      setIsPlaying(false);
    });
    TrackPlayer.addEventListener("remote-pause", _ => {
      setIsPlaying(false);
    });
    TrackPlayer.addEventListener("remote-play", _ => {
      setIsPlaying(true);
    });
  }, []);

  const togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    setIsPlaying(!isPlaying);
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(track);
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  const onSeekComplete = async value => {
    TrackPlayer.seekTo(value);
  };

  const progress = useTrackPlayerProgress();

  return (
    <Container>
      <Header>
        <CloseBtn activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Icon name="close" size={28} color="#000" />
        </CloseBtn>
      </Header>
      <Player>
        <AlbumCover source={{ uri: sermon.image }} />
        <AlbumTitle>{sermon.title}</AlbumTitle>
        <AlbumPreacher>{sermon.preacher}</AlbumPreacher>
      </Player>
      <Controls>
        <Timers>
          <Timer>{secondsToMinutes(progress.position)}</Timer>
          {playbackState === TrackPlayer.STATE_BUFFERING && (
            <Timer>Buffering</Timer>
          )}
          <Timer>{secondsToMinutes(progress.duration)}</Timer>
        </Timers>
        <SeekBar
          step={1}
          value={progress.position}
          maximumValue={progress.duration}
          minimumTrackTintColor="#800080"
          maximumTrackTintColor="red"
          thumbTintColor="#800080"
          onSlidingComplete={onSeekComplete}
        />
        <Button activeOpacity={0.6} onPress={togglePlayback}>
          {isPlaying ? <PauseCircle size={40} /> : <PlayCircle size={40} />}
        </Button>
      </Controls>
    </Container>
  );
};

AudioPlayer.navigationOptions = {
  headerShown: false
};

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
const CloseBtn = styled.TouchableOpacity`
  padding: 15px;
`;
const Player = styled.View`
  flex: 4;
  margin-top: 50px;
  align-items: center;
`;
const AlbumCover = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  margin-bottom: 20px;
`;
const AlbumTitle = styled.Text`
  font-family: "BrandonGrotesque-Bold";
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
`;
const AlbumPreacher = styled(AlbumTitle)`
  font-family: "BrandonGrotesque-Medium";
  font-size: 13px;
  opacity: 0.7;
  margin-top: 5px;
`;
const Controls = styled.View`
  background: #fff;
  width: 100%;
  /* flex: 2; */
  /* height: 200px; */
  align-items: center;
  /* margin-top: 50px; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px 35px;
  elevation: 3;
`;
const Timers = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 5px 0px;
`;
const Timer = styled.Text`
  font-family: "BrandonGrotesque-Medium";
  font-size: 15px;
  color: rgba(0, 0, 0, 0.9);
`;
const SeekBar = styled(Slider)`
  width: 100%;
  height: 50px;
`;
const Button = styled.TouchableOpacity`
  align-self: center;
  margin-top: 5px;
`;

export default AudioPlayer;
