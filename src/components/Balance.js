import React, {useEffect, useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';

import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Balance = ({dataBalance}) => {
  const copyToClipboard = () => {
    Clipboard.setString(dataBalance?.result.bankInfo.result.cvu);
  };

  const showAlert = () => {
    Alert.alert('CVU Copiado con exito!');
  };
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
          <View style={styles.containerCvu}>
            <View style={styles.rowCvu}>
              <Text style={styles.titleCVU}>CVU: </Text>

              <Text style={styles.contentCvu}>
                {dataBalance?.result.bankInfo.result.cvu}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                copyToClipboard();
                showAlert();
              }}>
              <Text style={styles.divCopy}>Copiar</Text>
            </TouchableOpacity>
          </View>
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
    height: '25%',
    justifyContent: 'flex-end',
  },
  titleBalance: {
    color: '#2A1846',
    fontStyle: 'normal',
    fontWeight: '600',
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
  containerCvu: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rowCvu: {
    flexDirection: 'row',
  },
  titleCVU: {
    color: '#575372',
  },
  contentCvu: {
    color: '#2A1846',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
  },
  divCopy: {
    color: '#442E83',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Balance;
