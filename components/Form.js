import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';

export const Form = ({currency, cryptoCurrency, setCurrency, setCryptoCurrency, saveGetAPI}) => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const result = await axios.get(url);
      setCryptoCurrencies(result.data.Data);
    };
    getAPI();
  }, []);

  const getCurrency = (currency) => {
    setCurrency(currency);
  };

  const getCryptoCurrency = (cryptoCurrency) => {
    setCryptoCurrency(cryptoCurrency);
  };

  const quotePrice = () => {
    if (!currency.trim() || !cryptoCurrency.trim()) {
      showAlert();
      return;
    }
    saveGetAPI(true);
  };

  const showAlert = () => {
    Alert.alert('Error...', 'Ambos campos son obligatorios', [{text: 'OK'}]);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        itemStyle={{height: 120}}
        selectedValue={currency}
        onValueChange={(currency) => getCurrency(currency)}>
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar Estadounidense" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        itemStyle={{height: 120}}
        selectedValue={cryptoCurrency}
        onValueChange={(currency) => getCryptoCurrency(currency)}>
        <Picker.Item label="- Seleccione -" value="" />
        {cryptoCurrencies.map((crypto) => (
          <Picker.Item
            key={crypto.CoinInfo.Id}
            label={crypto.CoinInfo.FullName}
            value={crypto.CoinInfo.Name}
          />
        ))}
      </Picker>

      <TouchableHighlight style={styles.quoteBtn} onPress={() => quotePrice()}>
        <Text style={styles.quoteText}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 20,
    fontFamily: 'Lato-Black',
    fontSize: 22,
    textTransform: 'uppercase',
  },
  quoteBtn: {
    margin: 20,
    padding: 10,
    backgroundColor: '#5E49E2',
  },
  quoteText: {
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
