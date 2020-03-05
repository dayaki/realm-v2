import React from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import SermonItem from './SermonItem';

const Sermons = ({sermons, onTap, header}) =>
  sermons && (
    <FlatList
      numColumns={2}
      initialNumToRender={10}
      horizontal={false}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      keyExtractor={item => item._id}
      data={sermons}
      renderItem={({item}) => (
        <SermonItem sermon={item} onTap={() => onTap(item)} />
      )}
    />
  );

export default Sermons;
