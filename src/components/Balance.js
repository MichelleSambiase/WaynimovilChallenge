import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Balance = ({dataBalance}) => {
  return (
    <View style={styles.cardBalance} elevation={5}>
      <View style={styles.contentBalance}>
        <View style={styles.containerBalance}>
          <Text style={styles.titleBalance}>Saldo Disponible</Text>
        </View>
        <View style={styles.containerDetail}>
          <Text style={styles.contentDetail}>
            $ {dataBalance?.result.balance.result.total}
          </Text>
        </View>
        <View style={styles.divisor} />
        <View>
          <Text>CVU: </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBalance: {
    width: 350,
    height: 155,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    border: '1px solid #D1D1D7',
    borderRadius: 8,
  },
  contentBalance: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerBalance: {
    height: 50,
  },
  titleBalance: {
    color: '#2A1846',
    fontStyle: 'normal',
    fontSize: 17,
  },
  contentDetail: {
    color: '#2A1846',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
  },
  divisor: {
    width: 288,
    height: 1,
    backgroundColor: '#D1D1D7',
    order: 1,
    flexGrow: 0,
    marginTop: '3%',
  },
});

export default Balance;
