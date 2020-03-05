import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = ({onTap}) => (
  <Button activeOpacity={0.85} onPress={onTap}>
    <Icon name="ios-arrow-back" size={26} color="#fff" />
  </Button>
);

const Button = styled.TouchableOpacity`
  padding: 10px 20px;
`;

export default BackButton;
