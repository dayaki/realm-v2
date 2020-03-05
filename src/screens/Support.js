import React, {useState, useRef} from 'react';
import styled from 'styled-components/native';
import {Alert, KeyboardAvoidingView, Platform} from 'react-native';
import Toast from 'react-native-easy-toast';
import {LabelInput, LoadingModal} from '../components';
import Button from '../constants/Button';
import {API_URL} from '../constants/Helper';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');
  const [modal, setModal] = useState(false);
  const toast = useRef(null);

  const onSubmit = () => {
    if (name === '' || email === '' || phone === '' || desc === '') {
      toast.current.show('Sorry, all fields are required. Thanks', 800);
    } else {
      setModal(true);
      fetch(`${API_URL}support`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          phone,
          message: desc,
        }),
      })
        .then(temp => temp.json())
        .then(result => {
          setModal(false);
          Alert.alert(
            'Message sent!',
            'A member of the team would be in touch to help out, thanks.',
            [{text: 'OK'}],
            {cancelable: false},
          );
        })
        .catch(err => {
          setModal(false);
          console.log(err);
        });
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <LoadingModal
          visible={modal}
          onClose={_ => setModal(false)}
          loadingText="Please wait..."
        />
        <Intro>
          If you are having technical problems using the app, please provide as
          much details as you can in the form below.
        </Intro>
        <Form>
          <LabelInput label="Name" value={name} setLabel={e => setName(e)} />
          <LabelInput label="Email" value={email} setLabel={e => setEmail(e)} />
          <LabelInput
            label="Phone"
            phone
            value={phone}
            setLabel={e => setPhone(e)}
          />
          <LabelInput
            type="textarea"
            label="Description"
            value={desc}
            setLabel={e => setDesc(e)}
          />
        </Form>
        <Button text="Submit" onTap={onSubmit} style={{marginVertical: 30}} />
        <Toast ref={toast} position="top" />
      </KeyboardAvoidingView>
    </Container>
  );
};

Support.navigationOptions = {
  title: 'Technical Support',
};

const Container = styled.ScrollView`
  padding: 25px 15px;
`;
const Intro = styled.Text`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 15px;
  color: #000;
`;
const Form = styled.View`
  width: 95%;
  align-self: center;
`;

export default Support;
