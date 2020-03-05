import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {DropUpIcon} from '../constants/Icons';

const Landing = ({navigation}) => {
  const [loginType, setLoginType] = useState('signup');
  const [signupEmail, setSignupEmail] = useState('');
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPass, setSigninPass] = useState('');

  const handleSignupEmail = email => {
    setSignupEmail(email);
  };

  const handleSigninEmail = email => {
    setSigninEmail(email);
  };

  const handleSigninPass = pass => {
    setSigninPass(pass);
  };

  const handleFbLogin = async () => {
    navigation.navigate('Tabs');
  };

  const onSignUp = () => {
    navigation.navigate('Register', {email: signupEmail});
  };

  const onSignin = () => {
    navigation.navigate('Tabs');
  };

  return (
    <Container>
      <ImageWrapper source={require('../../assets/images/landing-bg.jpg')}>
        <Content
          behavior="position"
          enabled
          keyboardVerticalOffset={-120}
          contentContainerStyle={{width: '100%', alignItems: 'center'}}>
          <Skip acitveOpacity={0.8} onPress={() => navigation.navigate('Tabs')}>
            <SkipText>Skip</SkipText>
          </Skip>
          <Logo source={require('../../assets/images/logo.png')} />
          <Intro>
            Sign up to see all the latest sermons from Abraham Sam Aiyedogon
          </Intro>
          <FormWrapper>
            <FormHeader>
              <FormHeaderBtn
                acitveOpacity={0.9}
                onPress={() => setLoginType('signup')}>
                <FormTitle>Sign up</FormTitle>
              </FormHeaderBtn>
              <FormHeaderBtn
                acitveOpacity={0.9}
                onPress={() => setLoginType('signin')}>
                <FormTitle>Sign in</FormTitle>
              </FormHeaderBtn>
            </FormHeader>
            {loginType === 'signup' ? (
              <SignUp>
                <DropUpIcon style={{top: 8, left: 90}} />
                <Input
                  placeholder="Enter your email"
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  autoCapitalize="none"
                  autoCompleteType="off"
                  keyboardType="email-address"
                  returnKeyType="next"
                  value={signupEmail}
                  onChangeText={handleSignupEmail}
                />
                {signupEmail ? (
                  <ContinueBtn acitveOpacity={0.85} onPress={onSignUp}>
                    <BtnText>Continue</BtnText>
                  </ContinueBtn>
                ) : (
                  <FacebookBtn acitveOpacity={0.9} onPress={handleFbLogin}>
                    <Icon name="sc-facebook" color="#fff" size={30} />
                    <BtnText>Sign up with Facebook</BtnText>
                  </FacebookBtn>
                )}
              </SignUp>
            ) : (
              <SignUp>
                <DropUpIcon style={{top: 8, left: 260}} />
                <Input
                  placeholder="Enter your email"
                  placeholderTextColor="rgba(0,0,0,0.5)"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  value={signinEmail}
                  onChangeText={handleSigninEmail}
                />
                {signinEmail ? (
                  <>
                    <InputPass
                      placeholder="Password"
                      secureTextEntry
                      placeholderTextColor="rgba(0,0,0,0.5)"
                      returnKeyType="next"
                      value={signinPass}
                      onChangeText={handleSigninPass}
                    />
                    {signinPass !== '' && (
                      <GoBtn acitveOpacity={0.85} onPress={onSignin}>
                        <GoBtnText>GO</GoBtnText>
                      </GoBtn>
                    )}
                  </>
                ) : (
                  <FacebookBtn acitveOpacity={0.8} onPress={handleFbLogin}>
                    <Icon color="#fff" size={30} name="sc-facebook" />
                    <BtnText>Sign in with Facebook</BtnText>
                  </FacebookBtn>
                )}
              </SignUp>
            )}
          </FormWrapper>
        </Content>
      </ImageWrapper>
    </Container>
  );
};

Landing.navigationOptions = {
  headerShown: false,
};

const Container = styled.View`
  flex: 1;
`;
const ImageWrapper = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
const Content = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  padding-top: 8px;
`;
const Skip = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 10px 15px;
  margin-bottom: 30px;
`;
const SkipText = styled.Text`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 20px;
  color: #fff;
`;
const Logo = styled.Image`
  width: 50%;
  resize-mode: contain;
`;
const Intro = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 20px;
  text-align: center;
  color: #fff;
  padding: 10%;
  line-height: 27px;
`;
const FormWrapper = styled.View`
  width: 100%;
  margin-top: 20px;
`;
const FormHeader = styled.View`
  flex-direction: row;
  padding: 0px 50px;
  justify-content: space-between;
`;
const FormHeaderBtn = styled.TouchableOpacity``;
const FormTitle = styled.Text`
  color: #fff;
  font-family: 'BrandonGrotesque-Bold';
  font-size: 18px;
  text-transform: uppercase;
  padding: 0px 20px 5px;
`;
const SignUp = styled.View``;
const Input = styled.TextInput`
  width: 100%;
  height: 60px;
  text-align: center;
  background: #fff;
  font-family: 'BrandonGrotesque-Regular';
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
`;
const InputPass = styled(Input)`
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-width: 1px;
`;
const FacebookBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: #3b5998;
`;
const ContinueBtn = styled(FacebookBtn)`
  background: #ff6b6b;
`;
const BtnText = styled.Text`
  color: #fff;
  font-family: 'BrandonGrotesque-Bold';
  font-size: 14px;
  text-transform: uppercase;
`;
const GoBtn = styled.TouchableOpacity`
  width: 20%;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 5px;
`;
const GoBtnText = styled(BtnText)`
  color: #c8c88c;
`;

export default Landing;
