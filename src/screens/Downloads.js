import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Alert } from "react-native";
import Icon from "react-native-vector-icons";
import Icon2 from "react-native-vector-icons/Ionicons";
import RNPopoverMenu from "react-native-popover-menu";
import { NoContent } from "../components";
import AsyncStorage from "@react-native-community/async-storage";

const Downloads = ({ navigation }) => {
  const [sermons, setSermons] = useState([]);
  const popoverRef = useRef();

  useEffect(() => {
    AsyncStorage.getItem("downloads").then(downloads => {
      if (downloads !== null) {
        setSermons(JSON.parse(downloads));
      }
    });
  }, []);

  const openMore = sermon => {
    const play = <Icon family="EvilIcons" name="play" color="#000" size={24} />;
    const trash = (
      <Icon
        family="MaterialIcons"
        name="delete-forever"
        color="#000"
        size={24}
      />
    );
    // console.log(play, trash);
    let menus = [
      {
        menus: [
          { label: "Play", icon: play },
          { label: "Delete", icon: trash }
        ]
      }
    ];
    RNPopoverMenu.Show(popoverRef.current, {
      title: "Actions",
      menus: menus,
      onDone: (selection, selectionMenu) => {
        if (selectionMenu === 0) {
          navigation.navigate("AudioPlayer", { sermon: sermon });
        } else {
          onDeleteSermon(sermon);
        }
      },
      onCancel: () => {}
    });
  };

  const onDeleteSermon = sermon => {
    console.log(sermon.title);
    Alert.prompt(
      "Delete Sermon?",
      "You want to delete this sermon?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  return (
    <Container>
      {sermons.length > 0 ? (
        <Playlists>
          {sermons.map(sermon => (
            <React.Fragment key={sermon.id}>
              <Playlist>
                <PlayPoster>
                  <Poster source={{ uri: sermon.image }} />
                  <PlayInfo>
                    <Title>{sermon.title}</Title>
                    <Preacher>{sermon.preacher}</Preacher>
                  </PlayInfo>
                </PlayPoster>
                <MoreBtn
                  activeOpacity={0.7}
                  onPress={() => openMore(sermon)}
                  ref={popoverRef}
                >
                  <Icon2 name="ios-more" size={24} color="rgba(0,0,0,0.6)" />
                </MoreBtn>
              </Playlist>
            </React.Fragment>
          ))}
        </Playlists>
      ) : (
        <NoContent text="No sermon in your playlist, download sermons to have them appear here." />
      )}
    </Container>
  );
};

Downloads.navigationOptions = {
  title: "Downloads"
};

const Container = styled.ScrollView`
  flex: 1;
  padding: 20px 10px;
`;
const Playlists = styled.View`
  width: 100%;
`;
const Playlist = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom-color: rgba(0,0,0,.05)
  border-bottom-width: 1px;
`;
const PlayPoster = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 8;
`;
const Poster = styled.Image`
  width: 60px;
  height: 60px;
  resize-mode: cover;
  margin-right: 10px;
`;
const PlayInfo = styled.View`
  flex: 1;
`;
const Title = styled.Text`
  text-transform: uppercase;
  color: #000;
  font-family: "BrandonGrotesque-Regular";
  font-size: 14px;
  /* width: 100%; */
`;
const Preacher = styled(Title)`
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  color: #999999;
`;
const MoreBtn = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export default Downloads;
