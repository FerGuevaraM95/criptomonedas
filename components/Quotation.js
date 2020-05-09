import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Quotation = ({result, result: {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE}}) => {
  if (!Object.keys(result).length) return null;
  return (
    <View style={styles.result}>
      <Text style={[styles.text, styles.price]}>
        <Text style={styles.span}>{PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        Precio más alto del día:
        <Text style={styles.span}> {HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Precio más bajo del día:
        <Text style={styles.span}> {LOWDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Variación últimas 24 horas:
        <Text style={styles.span}> {CHANGEPCT24HOUR} %</Text>
      </Text>
      <Text style={styles.text}>
        Última actualización
        <Text style={styles.span}> {LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    padding: 20,
    backgroundColor: '#5E49E2',
  },
  text: {
    marginBottom: 10,
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    color: '#FFFFFF',
  },
  price: {
    fontSize: 38,
  },
  span: {
    fontFamily: 'Lato-Black',
  },
});
