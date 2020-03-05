import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {SwipeListView} from 'react-native-swipe-list-view';
import {SimpleLineIcons, MaterialIcons} from '../constants/vector-icons';
import {NoContent} from '../components';
import Button from '../constants/Button';
import {API_URL} from '../constants/Helper';
import AsyncStorage from '@react-native-community/async-storage';

const Notes = ({navigation}) => {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('userData').then(status => {
      setUser(status);
      navigation.setParams({newnote: newNote, user: status});
    });
  }, []);

  const login = () => {
    navigation.navigate('Landing');
  };

  const openNote = note => {
    console.log('open');
    navigation.navigate('ViewNote', {note});
  };

  const newNote = () => {
    navigation.navigate('NewNote');
  };

  const handleDeleteNote = note => {
    Alert.alert(
      'Delete Confirmation',
      'You really want to delete this note?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes, please',
          onPress: () => {
            deleteNote(note);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const deleteNote = note => {
    console.log('delete', note);
    fetch(`${API_URL}note/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({note: note._id, user: user._id}),
    })
      .then(temp => temp.json())
      .then(status => {
        console.log('deleted', status);
        setNotes(status.data);
        // this.storage.set("notes", status["data"]);
      });
  };

  return (
    <Container>
      {user ? (
        notes.length > 0 ? (
          <>
            <Header>
              <HeaderTitle>Your Save Notes</HeaderTitle>
            </Header>
            <NoteWrapper>
              <SwipeListView
                data={notes}
                keyExtractor={item => item._id}
                renderItem={data => (
                  <Note activeOpacity={0.9} onPress={_ => openNote(data.item)}>
                    <NoteTitle>{data.item.title}</NoteTitle>
                    <NoteDate>June 30, 2019</NoteDate>
                  </Note>
                )}
                renderHiddenItem={data => (
                  <Actions
                    activeOpacity={0.9}
                    onPress={_ => handleDeleteNote(data.item)}>
                    <MaterialIcons
                      name="delete-forever"
                      size={24}
                      color="#fff"
                    />
                    <Action>Delete</Action>
                  </Actions>
                )}
                disableRightSwipe={true}
                rightOpenValue={-80}
                previewOpenDelay={3000}
              />
            </NoteWrapper>
            <Footer>Swipe left on a note to delete it.</Footer>
          </>
        ) : (
          <NoContent text="Sorry, you have no notes." />
        )
      ) : (
        <NotSignIn>
          <Label>Sign in to use Notes.</Label>
          <Button text="sign in" onTap={login} style={{marginTop: 0}} />
        </NotSignIn>
      )}
    </Container>
  );
};

Notes.navigationOptions = ({navigation}) => {
  const params = navigation.state.params || {};
  console.log(params);
  return {
    headerRight: () => (
      <RightHeader onPress={params.newnote}>
        <SimpleLineIcons name="note" size={20} color="rgba(0,0,0,0.7)" />
      </RightHeader>
    ),
  };
};

const RightHeader = styled.TouchableOpacity`
  padding: 15px;
`;
const Container = styled.View`
  flex: 1;
  background: #fff;
  /* padding: 10px 0px; */
`;
const Header = styled.View`
  background: #e0e0e0;
  padding: 15px;
`;
const HeaderTitle = styled.Text`
  font-family: 'BrandonGrotesque-Bold';
  text-transform: uppercase;
  font-size: 13px;
  color: #888;
`;
const NoteWrapper = styled.View``;
const Note = styled.TouchableOpacity`
  border-bottom-color: #dedede;
  border-bottom-width: 1px;
  padding: 12px 15px;
  background: #fff;
`;
const NoteTitle = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  text-transform: uppercase;
  font-size: 14px;
`;
const NoteDate = styled.Text`
  font-family: 'BrandonGrotesque-Light';
  opacity: 0.5;
`;
const Actions = styled.TouchableOpacity`
  width: 80px;
  height: 100%;
  background: red;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
`;
const Action = styled.Text`
  font-family: 'BrandonGrotesque-Bold';
  font-size: 13px;
  color: #fff;
`;
const Footer = styled.Text`
  text-align: center;
  font-family: 'BrandonGrotesque-Medium';
  font-size: 14px;
  padding: 20px 0px;
  opacity: 0.6;
`;
const NotSignIn = styled.View`
  width: 60%;
  align-self: center;
  margin-top: 60px;
`;
const Label = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 16px;
  text-align: center;
  margin-bottom: 8px;
`;

export default Notes;
