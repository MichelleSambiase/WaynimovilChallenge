import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {v4 as uuidv4} from 'uuid';

const MovementsCard = ({dataBalance}) => {
  return (
    <View>
      <FlatList
        data={dataBalance?.result.activity.result}
        renderItem={({item}) => (
          <View style={styles.containerMovements}>
            <Text style={styles.items}>
              {new Date(item.date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
              })}
            </Text>
            <Text>{item.info}</Text>
            <View style={styles.containerDivisor}>
              <View style={styles.divisor} />
            </View>
          </View>
        )}
        keyExtractor={_item => uuidv4()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMovements: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 50,
  },
  containerDivisor: {
    justifyContent: 'flex-end',
  },
  divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#D1D1D7',
  },
});
export default MovementsCard;
