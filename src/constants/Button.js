import React from 'react';
import styled from 'styled-components/native';

const Button = ({onTap, text, style}) => (
  <ButtonWrapper activeOpacity={0.8} onPress={onTap} style={style}>
    <ButtonText>{text}</ButtonText>
  </ButtonWrapper>
);
const ButtonWrapper = styled.TouchableOpacity`
  width: 70%;
  height: 50px;
  background: #000;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
const ButtonText = styled.Text`
  font-family: 'BrandonGrotesque-Regular';
  text-transform: uppercase;
  color: #fff;
`;

export default Button;
