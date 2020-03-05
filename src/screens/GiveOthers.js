import React from 'react';
import styled from 'styled-components/native';

const GiveOthers = () => {
  return (
    <Container>
      <Title>Other ways to give to the ministry.</Title>
      <Option>
        <SubTitle>Kilogram of Kindness</SubTitle>
        <Info>
          As believers we know how important it is for us to have compassion for
          the less Privileged, the poor and those needing support. Kilogram of
          Kindness offer you an opportunity to give food items, clothings,
          money, electronics and other household items to those in need.{' '}
        </Info>
        <Info>
          To give, simply send us a mail{' '}
          <Strong>pastor@realmofglory.org</Strong> and our ministers will get in
          touch with you.
        </Info>
      </Option>
      <Option>
        <SubTitle>His Grace Orphanage.</SubTitle>
        <Info>
          His Grace Orphanage is an arm of the ministry that caters for
          children, teens and young adults who have no relational support to
          give them a healthy childhood, many are orphans and in need of your
          support.
        </Info>
        <Info>
          Your support will help feed, shelter and educate a child today. We
          welcome your one time financial donation, or you want to commit to a
          consistent monthly to quarterly funding, we also welcome your gifts,
          food and Household items.
        </Info>
      </Option>
    </Container>
  );
};

GiveOthers.navigationOptions = {
  title: 'Other Ways to Give',
};

const Container = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;
const Title = styled.Text`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 17px;
  padding: 10px 10px 0px;
  color: rgb(49, 46, 43);
  text-align: center;
  text-transform: uppercase;
`;
const Option = styled.View`
  margin-top: 30px;
`;
const SubTitle = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 18px;
  color: rgb(20, 26, 36);
`;
const Info = styled.Text`
  font-family: 'BrandonGrotesque-Regular';
  font-size: 15px;
  color: #000;
  margin-top: 10px;
`;
const Strong = styled.Text`
  font-weight: bold;
`;

export default GiveOthers;
