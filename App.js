import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import axios from 'axios';

import {Header} from './components/Header';
import {Form} from './components/Form';
import {Quotation} from './components/Quotation';

const App = () => {
  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [getAPI, saveGetAPI] = useState(false);
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const quoteCryptoCurrency = async () => {
      if (getAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency},ETH&tsyms=${currency}`;
        const result = await axios.get(url);

        setLoading(true);

        setTimeout(() => {
          setResult(result.data.DISPLAY[cryptoCurrency][currency]);
          saveGetAPI(false);
          setLoading(false);
        }, 3000);

      }
    };
    quoteCryptoCurrency();
  }, [getAPI]);

  const component = loading ? (
    <ActivityIndicator size="large" color="#5E49E2" />
  ) : (
    <Quotation result={result} />
  );

  return (
    <>
      {/* <StatusBar backgroundColor="#5E49E2" barStyle="dark-content" /> */}
      <ScrollView>
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
        <View style={styles.resultContainer}>{component}</View>
      </ScrollView>
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
  resultContainer: {
    marginTop: 40,
  },
});

export default App;
