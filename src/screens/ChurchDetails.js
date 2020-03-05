import React from 'react';
import styled from 'styled-components/native';

const ChurchDetails = ({navigation}) => {
  const location = navigation.getParam('location');
  console.log('po', location);

  return (
    <Container>
      <Header>
        <ImageBG source={{uri: location.poster}}>
          <ChurchName>{location.name}</ChurchName>
          <ChurchAddress>{location.address}</ChurchAddress>
        </ImageBG>
        <ServiceTimes>
          <ServiceTime>{`${location.services[0].type} ${
            location.services[0].time
          } & ${location.services[location.services.length - 1].type} ${
            location.services[location.services.length - 1].time
          }
      `}</ServiceTime>
        </ServiceTimes>
      </Header>
      <EventInfo>
        <Title>Location Info</Title>
        <About>
          <AboutText>
            Realm of Glory - {location.name} is located at
            {location.address}
          </AboutText>
        </About>
      </EventInfo>
      <EventInfo>
        <Title>Services</Title>
        <About>
          {location.services.map((service, i) => (
            <AboutText key={i}>
              {service.type} - {service.time}
            </AboutText>
          ))}
        </About>
      </EventInfo>
      <EventInfo>
        <Title>Resident Pastor</Title>
        <About>
          <PastorImage source={{uri: location.image}} />
          <AboutText>{location.pastor}</AboutText>
          {/* <AboutText>{location.email}</AboutText>
          <AboutText>{location.phone[0]}</AboutText> */}
        </About>
      </EventInfo>
    </Container>
  );
};

ChurchDetails.navigationOptions = ({navigation}) => {
  return {
    title: navigation.state.params.location.name,
  };
};

const Container = styled.ScrollView`
  flex: 1;
  background: #f0f0f0;
`;
const Header = styled.View``;
const ImageBG = styled.ImageBackground`
  width: 100%;
  height: 220px;
  resize-mode: cover;
  justify-content: center;
  align-items: center;
`;
const ChurchName = styled.Text`
  font-family: 'BrandonGrotesque-Black';
  font-size: 20px;
  color: #fff;
  text-align: center;
`;
const ChurchAddress = styled.Text`
  font-family: 'BrandonGrotesque-Black';
  font-size: 18px;
  width: 80%;
  margin: 0.5px auto;
  color: #fff;
  text-align: center;
`;
const ServiceTimes = styled.View`
  background: #fff;
  padding: 20px 10px 5px;
  justify-content: center;
  /* box-shadow: 0px 3px 5px 0px rgba(209, 209, 209, 0.6); */
`;
const ServiceTime = styled.Text`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 15px;
  color: #000;
  text-align: center;
`;
const EventInfo = styled.View``;
const Title = styled.Text`
  text-align: center;
  font-family: 'BrandonGrotesque-Bold';
  font-size: 17px;
  font-weight: 300;
  margin: 10px 0px;
  color: #6c6c6c;
`;
const About = styled.View`
  width: 95%;
  align-self: center;
  background: #fff;
  align-items: center;
  padding: 20px;
`;
const PastorImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin: 10px 0px;
`;
const AboutText = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 15px;
  font-weight: 400;
  color: #606060;
  text-align: center;
`;

export default ChurchDetails;
