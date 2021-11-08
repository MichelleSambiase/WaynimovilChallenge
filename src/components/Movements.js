import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import MovementsCard from './MovementsCard';

const Movements = ({dataBalance}) => {
  return (
    <View>
      <View style={styles.titleMovements}>
        <Text style={styles.title}>Movimientos</Text>
      </View>
      <View>
        <MovementsCard dataBalance={dataBalance} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleMovements: {
    height: 36,
    backgroundColor: '#2A1846',
    marginTop: '5%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: '3%',
    textTransform: 'uppercase',
  },
});
export default Movements;
