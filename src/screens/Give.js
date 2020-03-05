import React from 'react';
import styled from 'styled-components/native';
import Button from '../constants/Button';

const Give = ({navigation}) => {
  const onGive = () => {
    navigation.navigate('Modal');
  };
  const giveOther = () => {
    navigation.navigate('Others');
  };
  return (
    <Container>
      <Title>See God's promises fulfilled through your generosity.</Title>
      <SubTitle>
        Take ownership in what God is doing through this ministry.
      </SubTitle>
      <Button text="give now" onTap={onGive} />
      <LinkBtn activeOpacity={0.3} onPress={giveOther}>
        <LinkBtnText>Other means of giving</LinkBtnText>
      </LinkBtn>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 30px 30px;
`;
const Title = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 20px;
  color: #000;
  line-height: 25px;
  margin-bottom: 1px;
  margin-top: 50px;
  text-align: center;
`;
const SubTitle = styled.Text`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 17px;
  padding: 25px 25px 10px;
  margin-bottom: 2px;
  text-align: center;
`;

const LinkBtn = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 1px 0.5px;
  margin-top: 20px;
`;
const LinkBtnText = styled.Text`
  text-transform: uppercase;
  font-family: 'BrandonGrotesque-Regular';
  font-size: 13px;
  opacity: 0.4;
  color: #000;
  text-align: center;
`;

export default Give;
