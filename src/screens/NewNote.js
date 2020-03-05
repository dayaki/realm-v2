import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

const NewNote = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [preacher, setPreacher] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    navigation.setParams({savenote: saveNote});
  }, []);

  const saveNote = async () => {
    console.log('content', content);
  };

  return (
    <Container>
      <Today>{moment().format('LL')}</Today>
      <Input
        placeholder="Title"
        placeholderTextColor="rgba(0,0,0,0.7)"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Input
        placeholder="Preacher"
        placeholderTextColor="rgba(0,0,0,0.7)"
        value={preacher}
        onChangeText={e => setPreacher(e)}
      />
      <TextArea
        placeholder="Content..."
        placeholderTextColor="rgba(0,0,0,0.7)"
        multiline
        numberOfLines={10}
        textAlignVertical="top"
        value={content}
        onChangeText={e => setContent(e)}
      />
    </Container>
  );
};

NewNote.navigationOptions = ({navigation}) => {
  const params = navigation.state.params || {};
  return {
    title: 'New Note',
    headerRight: () => (
      <RightHeader onPress={params.savenote}>
        <SaveText>Save note</SaveText>
      </RightHeader>
    ),
  };
};

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;
const RightHeader = styled.TouchableOpacity`
  padding: 15px;
`;
const SaveText = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  text-transform: uppercase;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`;
const Today = styled.Text`
  margin-bottom: 20px;
  font-family: 'BrandonGrotesque-Regular';
  font-size: 12px;
  opacity: 0.8;
  color: #888;
`;
const Input = styled.TextInput`
  font-family: 'BrandonGrotesque-Light';
  font-weight: 600;
  color: #0c0c0c;
  width: 100%;
  height: 45px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.4);
  /* border-bottom-color: rgba(0, 0, 0, 0.1); */
  /* border-bottom-width: 1px; */
`;
const TextArea = styled(Input)`
  height: 400px;
`;
export default NewNote;
