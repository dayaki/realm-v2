import React, {useState} from 'react';
import styled from 'styled-components/native';
import {KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Select2 from 'react-native-select-two';
import NumericInput from '@wwdrew/react-native-numeric-textinput';
import Button from '../constants/Button';

const payType = [
  {id: 1, name: 'Tithe'},
  {id: 2, name: 'Covenant Commitment Seed'},
  {id: 3, name: 'First Fruit'},
  {id: 4, name: 'Pledge'},
  {id: 5, name: 'Seed Offering'},
  {id: 6, name: 'Others'},
];

const GiveModal = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState(0);
  const [paymentType, setPaymentType] = useState('');

  const makePayment = () => {
    // console.log('amount', amount);
    // console.log('type', paymentType);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} enabled behavior="height">
      <Container>
        <Header>
          <CloseBtn activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <Icon name="close" size={28} color="#000" />
          </CloseBtn>
        </Header>
        <Title>Give online</Title>
        <Form>
          <InputGroup>
            <Label>Name</Label>
            <Input
              returnKeyType="next"
              value={name}
              onChangeText={text => setName(text)}
            />
          </InputGroup>
          <InputGroup>
            <Label>Email</Label>
            <Input
              keyboardType="email-address"
              returnKeyType="next"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </InputGroup>
          <InputGroup>
            <Label>Phone</Label>
            <Input
              keyboardType="phone-pad"
              returnKeyType="next"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
          </InputGroup>
          <PaymentType>
            <Select2
              isSelectSingle={true}
              style={{
                outline: 'none',
                borderWidth: 0,
                borderBottomColor: '#dedede',
                borderBottomWidth: 1,
                marginTop: 30,
                paddingLeft: 0,
              }}
              colorTheme={'black'}
              showSearchBox={false}
              popupTitle="What Are You Giving"
              title="Type of Giving"
              data={payType}
              searchPlaceHolderText="Search"
              cancelButtonText="Cancel"
              selectButtonText="Select"
              defaultFontName="BrandonGrotesque-Regular"
              onSelect={data => {
                const selected = payType.filter(el => el.id === data[0]);
                setPaymentType(selected[0].name);
              }}
            />
          </PaymentType>
          <InputGroup>
            <Label>Amount</Label>
            <Currency>
              {/* <CurrencyText>₦</CurrencyText> */}
              <NumericInput
                style={{
                  borderBottomColor: '#dedede',
                  borderBottomWidth: 1,
                  paddingVertical: 5,
                  width: '100%',
                  fontFamily: 'BrandonGrotesque-Regular',
                  fontSize: 15,
                  height: 40,
                }}
                type="currency"
                currency="NGN"
                value={amount}
                onUpdate={text => setAmount(text)}
              />
            </Currency>
          </InputGroup>
          <Button text="Pay" onTap={makePayment} />
        </Form>
      </Container>
    </KeyboardAvoidingView>
  );
};

GiveModal.navigationOptions = {
  headerShown: false,
};

const Container = styled.ScrollView`
  flex: 1;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
const CloseBtn = styled.TouchableOpacity`
  padding: 15px;
`;
const Title = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 17px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 2px;
`;
const Form = styled.View`
  padding: 10px;
`;
const InputGroup = styled.View`
  margin-top: 30px;
  border-bottom-width: 1px;
  border-bottom-color: #dedede;
`;
const Label = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 12px;
  color: #000;
`;
const Input = styled.TextInput`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 15px;
  height: 40px;
  width: 100%;
`;
const PaymentType = styled.View``;
const Currency = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const CurrencyText = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 13px;
  color: #000;
  opacity: 0.6;
`;

export default GiveModal;
