import React, {useState} from 'react';
import styled from 'styled-components/native';
import {API_URL} from '../constants/Helper';

const Register = ({navigation}) => {
  const [email, setEmail] = useState(navigation.getParam('email') || '');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');

  const signup = async () => {
    if (pass !== pass2) {
      // password doesnt match
    } else {
      fetch(`${API_URL}auth/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          onesignal: 'onesignal',
          password: pass,
        }),
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
        });
    }
  };

  return (
    <Container>
      <Input
        placeholder="Your Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        value={name}
        onChangeText={e => setName(e)}
      />
      <Input
        placeholder="Email"
        placeholderTextColor="gray"
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={e => setEmail(e)}
      />
      <Input
        placeholder="Phone Number"
        placeholderTextColor="gray"
        returnKeyType="next"
        keyboardType="number-pad"
        value={phone}
        onChangeText={e => setPhone(e)}
      />
      <Input
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        autoCapitalize="none"
        returnKeyType="next"
        value={pass}
        onChangeText={e => setPass(e)}
      />
      <Input
        placeholder="Confirm Password"
        placeholderTextColor="gray"
        secureTextEntry
        autoCapitalize="none"
        returnKeyType="next"
        value={pass2}
        onChangeText={e => setPass2(e)}
      />
      <Button
        activeOpacity={0.8}
        onPress={signup}
        disabled={!phone && !name && !pass2}>
        <ButtonText>Create Account</ButtonText>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 0px 20px;
`;
const Content = styled.ScrollView``;
const Input = styled.TextInput`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 14px;
  border-bottom-color: #dedede;
  border-bottom-width: 0.8px;
  padding: 0px 5px 5px;
  margin-top: 50px;
`;
const Button = styled.TouchableOpacity`
  width: 70%;
  height: 50px;
  border-radius: 3px;
  background: #222;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
const ButtonText = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 15px;
  color: #fff;
`;

Register.navigationOptions = {
  title: 'Create an Account',
};
export default Register;
