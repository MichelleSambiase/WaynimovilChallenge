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
                <View style={styles.allContenMovements}>
                  <Text style={styles.contentMovements}>{item.info}</Text>
                  <View style={{}}>
                    {item.debit ? (
                      <Text style={styles.TextBalance}>- {item.debit},00</Text>
                    ) : (
                      <Text style={styles.TextBalanceCredit}>
                        + {item.credit},00
                      </Text>
                    )}
                  </View>
                </View>
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
  },
  contentFlex: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  items: {
    color: '#2A1846',
    fontSize: 14,
  },
  allContenMovements: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-between',
  },
  contentMovements: {
    color: '#2A1846',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 14,
    width: '50%',
  },

  TextBalance: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#F96440',
  },
  TextBalanceCredit: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#00A067',
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
