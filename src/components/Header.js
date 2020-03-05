import React from 'react';
import styled from 'styled-components/native';
import BackButton from './BackButton';

const Header = ({onTap, title}) => (
  <Container>
    <BackButton onTap={onTap} />
    <HeaderTitle>{title}</HeaderTitle>
  </Container>
);

const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #000;
  height: 50px;
`;
const HeaderTitle = styled.Text`
  color: #fff;
  font-family: 'BrandonGrotesque-Medium';
  font-size: 17px;
  margin-left: 5px;
`;

export default Header;
