import React, {useState, useRef} from 'react';
import styled from 'styled-components/native';
import Toast from 'react-native-easy-toast';
import {Alert} from 'react-native';
import {LabelInput, LoadingModal} from '../components';
import Button from '../constants/Button';
import {API_URL} from '../constants/Helper';

const PrayerRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [request, setRequest] = useState('');
  const [counseling, setCounseling] = useState(false);
  const [modal, setModal] = useState(false);
  const toast = useRef(null);

  const onSubmit = () => {
    if (name === '' || email === '' || phone === '' || request === '') {
      toast.current.show('Sorry, all fields are required. Thanks', 800);
    } else {
      setModal(true);
      fetch(`${API_URL}prayers`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          phone,
          message: request,
          counseling,
        }),
      })
        .then(temp => temp.json())
        .then(result => {
          setModal(false);
          Alert.alert(
            '',
            'We will be praying for you, also a member of staff would reach out to you.',
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
    <Container showsVerticalScrollIndicator={false}>
      <LoadingModal
        visible={modal}
        onClose={_ => setModal(false)}
        loadingText="Please wait..."
      />
      <Intro>
        As we join our faith with yours and intercede for you concerning
        anything, We know that God will answer you speedily. There is nothing
        Impossible with God. Luke 18:27. God Bless You.
      </Intro>
      <Form>
        <LabelInput label="Name" value={name} setLabel={e => setName(e)} />
        <LabelInput label="Email" value={email} setLabel={e => setEmail(e)} />
        <LabelInput label="Name" value={phone} setLabel={e => setPhone(e)} />
        <LabelInput
          type="textarea"
          label="Request"
          value={request}
          setLabel={e => setRequest(e)}
        />
        <Switcher>
          <Label>Want Counseling?</Label>
          <Switch onValueChange={e => setCounseling(e)} value={counseling} />
        </Switcher>
      </Form>
      <Button
        text="Submit Request"
        onTap={onSubmit}
        style={{marginTop: 30, marginBottom: 50}}
      />
      <Toast ref={toast} position="top" />
    </Container>
  );
};

PrayerRequest.navigationOptions = {
  title: 'Prayer Request',
};

const Container = styled.ScrollView`
  flex: 1;
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
const Switcher = styled.View`
  flex-direction: row;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
`;
const Label = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 14px;
  color: #000;
`;
const Switch = styled.Switch`
  margin: 30px 0px 0px;
`;

export default PrayerRequest;
