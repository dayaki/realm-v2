import React, {useState} from 'react';
import styled from 'styled-components/native';
import {NoContent} from '../components';

const Notifications = () => {
  const [items, setItems] = useState([]);
  return (
    <Container>
      {items.length < 1 ? (
        <NoContent text="Sorry, no notifications yet." />
      ) : (
        <Item>
          <ItemText>Hello</ItemText>
        </Item>
      )}
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  padding: 30px 10px;
`;
const Item = styled.View`
  width: 100%;
  border-bottom-color: #dedede;
  border-bottom-width: 1px;
  padding-bottom: 1px;
`;
const ItemText = styled.Text`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 16px;
  color: #000;
`;

export default Notifications;
