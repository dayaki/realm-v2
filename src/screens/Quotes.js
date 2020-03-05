import React from 'react';
import Share from 'react-native-share';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const quotes = [
  {
    _id: 1,
    url: require('../../assets/images/quote1.png'),
  },
  {
    _id: 2,
    url: require('../../assets/images/quote2.png'),
  },
  {
    _id: 3,
    url: require('../../assets/images/quote2.png'),
  },
  {
    _id: 4,
    url: require('../../assets/images/quote1.png'),
  },
  {
    _id: 5,
    url: require('../../assets/images/quote1.png'),
  },
  {
    _id: 6,
    url: require('../../assets/images/quote2.png'),
  },
  {
    _id: 7,
    url: require('../../assets/images/quote2.png'),
  },
  {
    _id: 8,
    url: require('../../assets/images/quote1.png'),
  },
  {
    _id: 9,
    url: require('../../assets/images/quote1.png'),
  },
];

const Quotes = () => {
  const share = image => {
    Share.open({url: image, type: 'image/jpeg', message: 'Awesome'})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <Container>
      <FlatList
        data={quotes}
        numColumns={3}
        initialNumToRender={10}
        horizontal={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          padding: 5,
        }}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <Button activeOpacity={0.8} onPress={() => share()}>
            <Poster source={item.url} />
          </Button>
        )}
      />
    </Container>
  );
};

Quotes.navigationOptions = {
  title: 'Quotes',
};

const Container = styled.View`
  flex: 1;
`;
const Button = styled.TouchableOpacity`
  width: 33%;
  height: 135px;
  margin-bottom: 0px;
  /* box-shaow: 0px 0px 5px rgba(233, 233, 233, 0.6); */
  elevation: 5;
`;
const Poster = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export default Quotes;
