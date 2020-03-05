import React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';
import LocationData from '../../assets/data/location.json';

const ChurchLocations = ({navigation}) => {
  const openLocation = location => {
    navigation.navigate('ChurchDetail', {location: location});
  };

  return (
    <Container>
      {LocationData.centers.map(location => (
        <Location
          key={location.id}
          activeOpacity={0.7}
          onPress={_ => openLocation(location)}>
          <Church>
            <Photo source={{uri: location.poster}} />
            <ChurchInfo>
              <Name>{location.name}</Name>
              <Info>{location.city}</Info>
              <Info>{location.state}</Info>
            </ChurchInfo>
          </Church>
          <MoreBtn>
            {/* <Distance>54Km</Distance> */}
            <Icon name="ios-arrow-forward" size={20} color="rgba(0,0,0,0.2)" />
          </MoreBtn>
        </Location>
      ))}
    </Container>
  );
};

ChurchLocations.navigationOptions = {
  title: 'Our Locations',
};

const Container = styled.ScrollView`
  flex: 1;
`;
const Location = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background: #fff;
  padding: 20px;
`;
const Church = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Photo = styled(FastImage)`
  width: 65px;
  height: 65px;
  resize-mode: cover;
`;
const ChurchInfo = styled.View`
  margin-left: 10px;
`;
const Name = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 14px;
  color: #000;
  margin: 0;
`;
const Info = styled.Text`
  font-family: 'BrandonGrotesque-Regular';
  color: #333333;
  font-size: 13px;
  margin-top: 1px;
  width: 100%;
`;
const MoreBtn = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  padding-right: 0px;
  padding-left: 10px;
`;
const Distance = styled.Text`
  color: #ccc;
  font-family: 'BrandonGrotesque-Regular';
  font-size: 11px;
  margin-right: 10px;
  margin-top: -4px;
`;

export default ChurchLocations;
