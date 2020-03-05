import React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

const SermonItem = ({onTap, sermon}) => (
  <Container activeOpacity={0.9} onPress={onTap}>
    <ImgWrapper>
      <SermonImage
        source={{
          uri: sermon.image,
        }}
      />
    </ImgWrapper>
    <Details>
      <DetailsTitle>{sermon.title}</DetailsTitle>
      <Timeago>{sermon.date}</Timeago>
    </Details>
  </Container>
);

const Container = styled.TouchableOpacity`
  width: 49%;
  margin-bottom: 10px;
`;
const ImgWrapper = styled.View`
  width: 100%;
  height: 100px;
`;
const SermonImage = styled(FastImage)`
  width: 100%;
  height: 100px;
`;
const Details = styled.View`
  background: #fff;
  width: 100%;
  height: 100px;
`;
const DetailsTitle = styled.Text`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 13px;
  text-transform: uppercase;
  color: #000;
  padding: 5px 10px;
`;
const Timeago = styled.Text`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 13px;
  color: #c8c8c8;
  padding-left: 10px;
  position: absolute;
  bottom: 5px;
  margin: 0px;
`;

export default SermonItem;
