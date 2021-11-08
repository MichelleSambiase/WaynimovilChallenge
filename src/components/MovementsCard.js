import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {v4 as uuidv4} from 'uuid';

const MovementsCard = ({dataBalance}) => {
  return (
    <View>
      <FlatList
        data={dataBalance?.result.activity.result}
        renderItem={({item}) => (
          <>
            <View style={styles.containerMovements}>
              <View style={styles.contentFlex}>
                <Text style={styles.items}>
                  {new Date(item.date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                  })}
                </Text>

                <View style={{marginLeft: '8%'}}>
                  <Text style={styles.contentMovements}>{item.info}</Text>
                </View>
              </View>
              <View style={{alignSelf: 'center'}}>
                <Text>{item.balance}</Text>
              </View>
            </View>
            <View style={styles.containerDivisor}>
              <View style={styles.divisor} />
            </View>
          </>
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
    height: 60,
    flexDirection: 'row',
  },
  contentFlex: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  items: {
    marginLeft: '3%',
  },
  contentMovements: {
    flexDirection: 'column',
    width: '80%',
  },
  containerDivisor: {
    justifyContent: 'flex-end',
  },
  divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#dfdfdf',
  },
});
export default MovementsCard;
