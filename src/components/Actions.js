import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MoneyActions from './MoneyActions';

const Actions = () => {
  return (
    <View style={{marginTop: '5%'}}>
      <View style={styles.containerMoneyActions}>
        <MoneyActions
          source={require('../assets/introduceMoney.png')}
          style={styles.firstCardRadius}>
          Cargar Dinero
        </MoneyActions>
        <MoneyActions source={require('../assets/extractMoney.png')}>
          Extraer Dinero
        </MoneyActions>
        <MoneyActions
          style={styles.lastCardRadius}
          source={require('../assets/transfer.png')}>
          Transferir Dinero
        </MoneyActions>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerMoneyActions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstCardRadius: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  lastCardRadius: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default Actions;
