import React from 'react';
import styled from 'styled-components/native';

const NoContent = ({text}) => <Text>{text}</Text>;

const Text = styled.Text`
  text-align: center;
  font-family: 'BrandonGrotesque-Regular';
  font-size: 17px;
  color: #000;
  margin-top: 20px;
`;

export default NoContent;
