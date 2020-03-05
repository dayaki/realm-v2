import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import Moment from 'react-moment';
import Icon from 'react-native-vector-icons/Feather';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import Button from '../constants/Button';

const EventDetails = ({navigation}) => {
  const event = navigation.getParam('event');

  const addCalendar = () => {
    const eventConfig = {
      title: event.title,
      startDate: event.startDate,
      endDate: event.endDate,
      location: event.address,
      allDay: true,
      notes: event.desc,
    };
    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then(_ => {})
      .catch(error => {
        console.warn(error);
      });
  };

  const share = () => {};

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header>
        <ImageWrapper>
          <Image source={{uri: event.image}} />
        </ImageWrapper>
        <QuickLink>
          <QuickTitle>
            <QuickText>{event.title}</QuickText>
            <QuickTextDate>
              <Moment
                element={Text}
                date={event.startDate}
                format="MMMM DD, YYYY"
              />
            </QuickTextDate>
          </QuickTitle>
          <Calendar activeOpacity={0.8} onPress={addCalendar}>
            <CalendarText>Add to Calendar</CalendarText>
          </Calendar>
        </QuickLink>
      </Header>

      <EventInfo>
        <Title>Event Times</Title>
        <About>
          <AboutText>{event.time}</AboutText>
        </About>
      </EventInfo>

      <EventInfo>
        <Title>Location</Title>
        <About>
          <AboutText>{event.address}</AboutText>
        </About>
      </EventInfo>

      <EventInfo>
        <Title>Info</Title>
        <About>
          <AboutText>{event.desc}</AboutText>
        </About>
      </EventInfo>

      <EventInfo style={{marginBottom: 10}}>
        <Title>Share this event</Title>
        <About>
          <Button
            text="Share"
            style={{width: '50%', height: 40, marginTop: 0}}
            onTap={share}
          />
        </About>
      </EventInfo>
    </Container>
  );
};

EventDetails.navigationOptions = {
  title: 'Event Details',
  headerRight: () => (
    <NavBtn activeOpacity={0.8}>
      <Icon name="share" size={20} color="#000" />
    </NavBtn>
  ),
};

const NavBtn = styled.TouchableOpacity`
  padding: 10px;
`;
const Container = styled.ScrollView`
  flex: 1;
`;
const Header = styled.View`
  width: 100%;
  border-bottom-width: 0.3px;
  border-bottom-color: #c8c8c8;
`;
const ImageWrapper = styled.View`
  width: 100%;
  height: 250px;
  background: #c8c8c8;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;
const QuickLink = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
  background: #fff;
`;
const QuickTitle = styled.View`
  flex: 1.5;
`;
const QuickText = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 16px;
  color: #414141;
`;
const QuickTextDate = styled(QuickText)`
  color: #b6b6b6;
  font-size: 14px;
`;
const Calendar = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
`;
const CalendarText = styled.Text`
  font-family: 'BrandonGrotesque-Bold';
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  color: #414141;
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
const AboutText = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 15px;
  font-weight: 400;
  /* line-height: 2px; */
  color: #606060;
  text-align: center;
`;
export default EventDetails;
