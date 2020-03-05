import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Feather";
import FastImage from "react-native-fast-image";
import RNBackgroundDownloader from "react-native-background-downloader";
import RNFetchBlob from "rn-fetch-blob";
import { Header } from "../components";
import Toast from "react-native-easy-toast";
import AsyncStorage from "@react-native-community/async-storage";

const SermonDetails = ({ navigation }) => {
  const sermon = navigation.getParam("sermon");
  const [isDownloaded, setIsDownloaded] = useState(false);
  const toast = useRef(null);

  useEffect(() => {
    AsyncStorage.getItem("downloads").then(downloads => {
      if (downloads !== null) {
        JSON.parse(downloads).forEach(element => {
          if (element.title.toLowerCase() === sermon.title.toLowerCase()) {
            setIsDownloaded(true);
          }
        });
      }
    });
  }, []);

  const openPlayer = () => {
    navigation.navigate("Player", { sermon: sermon });
  };

  const onSave = () => {
    initDownload();
  };

  const initDownload = () => {
    const dirs = RNFetchBlob.fs.dirs;
    const fileUrl = sermon.audio.split("/").pop();
    const desUrl = `${dirs.DocumentDir}/${fileUrl}`;
    let task = RNBackgroundDownloader.download({
      id: sermon._id,
      url: sermon.audio,
      destination: desUrl
    })
      .begin(expectedBytes => {
        console.log(`Going to download ${formatBytes(expectedBytes)} bytes!`);
      })
      .progress(percent => {
        console.log(`Downloaded: ${percent * 100}%`);
      })
      .done(() => {
        console.log(`Download is done!, file should be in ${desUrl}`);
        saveDownloaded(desUrl);
        setIsDownloaded(true);
        toast.current.show("Sermon successfully downloaded.");
      })
      .error(error => {
        console.log("Download canceled due to error: ", error);
      });
  };

  const saveDownloaded = async entry => {
    const savedSermon = {
      title: sermon.title,
      image: sermon.image,
      preacher: sermon.preacher,
      audio: entry
    };
    AsyncStorage.getItem("downloads").then(async downloads => {
      console.log("downloads", downloads);
      if (downloads === null || downloads.length === 0) {
        let down = [];
        down.push(savedSermon);
        await AsyncStorage.setItem("downloads", JSON.stringify(down));
      } else {
        let newDown = JSON.parse(downloads);
        newDown.push(savedSermon);
        await AsyncStorage.setItem("downloads", JSON.stringify(newDown));
      }
    });
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  return (
    <Container>
      <Header onTap={() => navigation.goBack()} title="Sermon" />
      <ImageWrapper>
        <Image source={{ uri: sermon.image }} />
      </ImageWrapper>
      <Content>
        <Label>Sermon</Label>
        <Title>{sermon.title}</Title>
        <Preacher>{sermon.preacher}</Preacher>
        <TimeAgo>{sermon.date}</TimeAgo>
      </Content>
      <Btns>
        <Btn activeOpacity={0.8} onPress={openPlayer}>
          <Icon name="play" size={20} color="#fff" />
          <BtnText>Play</BtnText>
        </Btn>

        <Btn activeOpacity={0.8} onPress={isDownloaded ? null : onSave}>
          <Icon name="download" size={20} color="#fff" />
          <BtnText>{isDownloaded ? "Downloaded" : "Save"}</BtnText>
        </Btn>
        <Btn activeOpacity={0.8}>
          <Icon name="share" size={20} color="#fff" />
          <BtnText>Share</BtnText>
        </Btn>
      </Btns>
      <Toast ref={toast} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: #181818;
`;
const ImageWrapper = styled.View`
  width: 100%;
  height: 200px;
`;
const Image = styled(FastImage)`
  width: 100%;
  height: 100%;
`;
const Content = styled.View`
  padding: 20px 10px;
`;
const Label = styled.Text`
  text-transform: uppercase;
  font-family: "BrandonGrotesque-Medium";
  font-size: 13px;
  color: #b5b5b5;
  letter-spacing: 1px;
`;
const Title = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-family: "BrandonGrotesque-Regular";
  font-size: 15px;
  margin: 6px 0px 0px;
`;
const Preacher = styled(Title)`
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  color: #999999;
`;
const TimeAgo = styled.Text`
  font-family: "BrandonGrotesque-Light";
  font-weight: 400;
  text-transform: capitalize;
  color: #999999;
  opacity: 0.5;
  font-size: 12px;
  margin-top: 3px;
`;
const Btns = styled.View`
  background: #414141;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
`;
const Btn = styled.TouchableOpacity`
  /* padding: 10px 25px; */
  width: 85px;
  padding: 10px 0px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;
const BtnText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-family: "BrandonGrotesque-Medium";
  font-weight: 400;
  font-size: 11px;
  margin-top: 5px;
`;

export default SermonDetails;
