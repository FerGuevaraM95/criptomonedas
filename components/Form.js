import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-community/picker';

export const Form = () => {

  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');

  const getCurrency = (currency) => {
    setCurrency(currency);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={currency}
        onValueChange={(currency) => getCurrency(currency)}>
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar Estadounidense" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
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
});
