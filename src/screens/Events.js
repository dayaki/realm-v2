import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import Moment from 'react-moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {API_URL} from '../constants/Helper';

const Events = ({navigation}) => {
  const [events, setEvents] = useState(null);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetch(`${API_URL}events`)
      .then(temp => temp.json())
      .then(async data => {
        setLatest(data.data.shift());
        setEvents(data.data);
      });
  };

  const addCalendar = () => {
    const eventConfig = {
      title: latest.title,
      startDate: latest.startDate,
      endDate: latest.endDate,
      location: latest.address,
      allDay: true,
      notes: latest.desc,
    };

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then(_ => {})
      .catch(error => {
        console.warn(error);
      });
  };

  const openEvent = event => {
    navigation.navigate('Details', {event});
  };

  return (
    <Container>
      {events ? (
        <>
          <Header>
            <ImageWrapper activeOpacity={0.8} onPress={() => openEvent(latest)}>
              <Image
                source={{uri: latest.image}}
                style={{resizeMode: 'cover'}}
              />
            </ImageWrapper>
            <QuickLink>
              <QuickTitle>
                <QuickText>{latest.title}</QuickText>
                <QuickTextDate>
                  <Moment
                    element={Text}
                    date={latest.startDate}
                    format="MMMM DD, YYYY"
                  />
                </QuickTextDate>
              </QuickTitle>
              <Calendar activeOpacity={0.8} onPress={addCalendar}>
                <CalendarText>Add to Calendar</CalendarText>
              </Calendar>
            </QuickLink>
          </Header>

          <Content>
            {events.map(event => (
              <EventList
                key={event._id}
                activeOpacity={0.8}
                onPress={() => openEvent(event)}>
                <EventDate>
                  <EventDay>
                    <Moment element={Text} date={event.startDate} format="DD" />
                  </EventDay>
                  <EventMonth>
                    <Moment
                      element={Text}
                      date={event.startDate}
                      format="MMM"
                    />
                  </EventMonth>
                </EventDate>
                <EventDetail>
                  <EventTitle>{event.title}</EventTitle>
                  <EventAddress>{event.address}</EventAddress>
                </EventDetail>
                <Icon name="ios-arrow-forward" size={18} color="#c8c88c" />
              </EventList>
            ))}
          </Content>
        </>
      ) : (
        <Loading size="large" />
      )}
    </Container>
  );
};

Events.navigationOptions = {
  title: 'Events',
};

const Loading = styled.ActivityIndicator`
  align-self: center;
  margin-top: 100px;
`;
const Content = styled.View`
  padding: 20px;
`;
const EventList = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
  margin-bottom: 20px;
  /* background: pink; */
`;
const EventDate = styled.View`
  background: #000;
  padding: 15px 15px;
  justify-content: center;
  align-items: center;
`;
const EventDay = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-family: 'BrandonGrotesque-Medium';
  font-size: 18px;
`;
const EventMonth = styled(EventDay)`
  font-family: 'BrandonGrotesque-Bold';
  color: #bebebe;
  font-size: 14px;
`;
const EventDetail = styled.View`
  flex: 5;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 15px;
`;
const EventTitle = styled.Text`
  font-family: 'BrandonGrotesque-Bold';
  margin-bottom: 5px;
`;
const EventAddress = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  color: #818181;
  font-size: 14px;
  width: 80%;
  line-height: 15px;
`;
const Container = styled.ScrollView``;
const Header = styled.View`
  width: 100%;
  border-bottom-width: 0.3px;
  border-bottom-color: #c8c8c8;
`;
const ImageWrapper = styled.TouchableOpacity`
  width: 100%;
  height: 250px;
  background: #c8c8c8;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const QuickLink = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 20px;
  justify-content: space-between;
`;
const QuickTitle = styled.View`
  flex: 1.5;
`;
const QuickText = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 14px;
  color: #414141;
`;
const QuickTextDate = styled(QuickText)`
  color: #b6b6b6;
  font-size: 14px;
`;
const Calendar = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  padding: 10px;
`;
const CalendarText = styled.Text`
  font-family: 'BrandonGrotesque-Bold';
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #414141;
`;

export default Events;
