import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { AsyncStorage, StatusBar } from "react-native";
import { Sermons } from "../components";
import { API_URL } from "../constants/Helper";

const Home = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("sermons");
  const [sermons, setSermons] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    StatusBar.setHidden(true);
    fetch(`${API_URL}sermons`)
      .then(data => data.json())
      .then(data => {
        setFeatured(data.data.shift());
        setSermons(data.data);
      });
  }, []);

  const openSermon = sermon => {
    navigation.navigate("Details", { sermon });
  };

  const watchLive = () => {};

  return (
    <Container showsVerticalScrollIndicator={false}>
      {activeTab === "sermons" && (
        <Header activeOpacity={0.9} onPress={() => openSermon(featured)}>
          <ImageBG
            source={{
              uri: featured.image
            }}
          >
            <PlayIcon source={require("../../assets/images/play.png")} />
            <Latest>Latest Sermon</Latest>
            <Title>{featured.title}</Title>
          </ImageBG>
        </Header>
      )}
      {activeTab === "videos" && (
        <Header activeOpacity={0.9}>
          <ImageBG source={require("../../assets/images/online-bg.jpg")}>
            <HeaderLatest>Realm of glory live</HeaderLatest>
            <HeaderTitle>Next Experience</HeaderTitle>
            <HeaderTitle>Sunday at 9:45 AM</HeaderTitle>
            <HeaderBtn activeOpacity={0.8} onPress={watchLive}>
              <HeaderBtnText>Watch live</HeaderBtnText>
            </HeaderBtn>
          </ImageBG>
        </Header>
      )}

      <Nav
        horizontal
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <NavBtn activeOpacity={0.8}>
          <NavBtnText active={activeTab === "blog" ? true : false}>
            Blog
          </NavBtnText>
        </NavBtn>
        <NavBtn activeOpacity={0.8} onPress={() => setActiveTab("sermons")}>
          <NavBtnText active={activeTab === "sermons" ? true : false}>
            Sermons
          </NavBtnText>
        </NavBtn>
        <NavBtn activeOpacity={0.8}>
          <NavBtnText active={activeTab === "videos" ? true : false}>
            Videos
          </NavBtnText>
        </NavBtn>
        <NavBtn activeOpacity={0.8}>
          <NavBtnText active={activeTab === "podcasts" ? true : false}>
            Podcasts
          </NavBtnText>
        </NavBtn>
      </Nav>

      <Content>
        {activeTab === "sermons" && (
          <Sermons sermons={sermons} onTap={sermon => openSermon(sermon)} />
        )}
      </Content>
    </Container>
  );
};

Home.navigationOptions = {
  headerShown: false
};

const Container = styled.ScrollView`
  flex: 1;
  background: #c8c8c8;
`;
const Header = styled.TouchableOpacity`
  width: 100%;
  height: 350px;
`;
const ImageBG = styled.ImageBackground`
  width: 100%;
  height: 100%;
  background: black;
  padding: 50px 20px 30px;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
const PlayIcon = styled.Image`
  flex: 1;
  width: 35%;
  resize-mode: contain;
`;
const Latest = styled.Text`
  color: #fff;
  font-family: "BrandonGrotesque-Medium";
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
`;
const Title = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-size: 18px;
  font-family: "BrandonGrotesque-Bold";
  margin-top: 5px;
  text-align: center;
`;
const HeaderLatest = styled.Text`
  color: #fff;
  font-family: "BrandonGrotesque-Medium";
  font-size: 23px;
  text-transform: uppercase;
  margin-top: 80px;
  text-align: center;
`;
const HeaderTitle = styled.Text`
  color: #fff;
  font-family: "BrandonGrotesque-Medium";
  font-size: 22px;
  margin-top: 10px;
  text-align: center;
`;
const HeaderBtn = styled.TouchableOpacity`
  padding: 9px 35px;
  border-radius: 5px;
  border-color: #fff;
  border-width: 1px;
  margin-top: 30px;
`;
const HeaderBtnText = styled.Text`
  color: #fff;
  font-family: "BrandonGrotesque-Medium";
  font-size: 17px;
  text-transform: capitalize;
`;
const Content = styled.View`
  padding: 0px 10px;
  padding-top: 10px;
`;
const Nav = styled.ScrollView`
  background: #25292b;
  height: 50px;
  flex: 1;
`;
const NavBtn = styled.TouchableOpacity`
  height: 100%;
  width: 130px;
  padding: 0px 10px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;
const NavBtnText = styled.Text`
  text-transform: uppercase;
  color: ${props => (props.active ? "#fff" : "#afafaf")};
  font-family: "BrandonGrotesque-Bold";
  font-size: 14px;
`;

export default Home;
