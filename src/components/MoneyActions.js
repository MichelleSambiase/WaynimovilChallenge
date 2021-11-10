/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MoneyActions = ({children, source, style}) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={[styles.cardMoney, style]} elevation={5}>
          <Image
            source={source}
            style={{width: 26, height: 26, marginBottom: '4%'}}
          />
          <Text style={styles.stylesChildren}>{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardMoney: {
    width: 112,
    height: 96,
    backgroundColor: '#FFFF',
    borderWidth: 1,
    borderColor: '#D1D1D7',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  stylesChildren: {
    color: '#2A1846',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
export default MoneyActions;
