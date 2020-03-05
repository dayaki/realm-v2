import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/EvilIcons';

const MediaPlayer = ({navigation, sermon}) => {
  return (
    <Container>
      <Header>
        <CloseBtn activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Icon name="close" size={28} color="#fff" />
        </CloseBtn>
      </Header>
      <AlbumCover>
        <Image source={{uri: sermon.image}} />
        <Title>{sermon.title}</Title>
        <Preacher>{sermon.preacher}</Preacher>
      </AlbumCover>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: #1f2636;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
const CloseBtn = styled.TouchableOpacity`
  padding: 15px;
`;
const AlbumCover = styled.View``;
const Image = styled.Image``;
const Title = styled.Text`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 17px;
  text-transform: capitalize;
  margin: 0px;
  padding: 0px 15px;
`;
const Preacher = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 12px;
  margin-top: 2px;
  opacity: 0.8;
`;

export default MediaPlayer;
