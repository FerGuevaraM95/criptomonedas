import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import axios from 'axios';

import {Header} from './components/Header';
import {Form} from './components/Form';

const App = () => {
  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [getAPI, saveGetAPI] = useState(false);

  useEffect(() => {
    const quoteCryptoCurrency = async () => {
      if (getAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency},ETH&tsyms=${currency}`;
        const result = await axios.get(url);
        console.log(result.data.DISPLAY);

        saveGetAPI(false);
      }
    };
    quoteCryptoCurrency();
  }, [getAPI]);

  return (
    <>
      {/* <StatusBar backgroundColor="#5E49E2" barStyle="dark-content" /> */}
      <Header />
      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />

      <View style={styles.content}>
        <Form
          currency={currency}
          cryptoCurrency={cryptoCurrency}
          setCurrency={setCurrency}
          setCryptoCurrency={setCryptoCurrency}
          saveGetAPI={saveGetAPI}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  content: {
    marginHorizontal: '2.5%',
  },
});

export default App;
