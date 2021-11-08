import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

import {} from 'react-native/Libraries/NewAppScreen';
import Balance from './src/components/Balance';
import Movements from './src/components/Movements';

const App = () => {
  const [dataBalance, setDataBalance] = useState();

  const getMyBalance = async () => {
    try {
      const response = await axios.get(
        'https://run.mocky.io/v3/d3586928-f1a4-48d2-9a0e-1140bab1e562',
      );
      /*  console.log(response.data.result.activity.result[1]); */
      setDataBalance(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMyBalance();
  }, []);
  return (
    <View style={styles.containerAll}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Mi cuenta</Text>
      </View>
      <View>
        <Balance dataBalance={dataBalance} />
      </View>
      <View>
        <Movements dataBalance={dataBalance} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerAll: {
    background: '#cccccc',
    height: '100%',
  },
  containerTitle: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#2A1846',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
});

export default App;
