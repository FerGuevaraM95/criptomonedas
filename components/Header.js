import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

export const Header = () =>  ( 
  <Text style={styles.title}>Criptomonedas</Text>
);

const styles = StyleSheet.create({
  title: {
    marginBottom: 30,
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    paddingBottom: 10,
    fontFamily: 'Lato-Black',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    backgroundColor: '#5E49E2',
    color: '#FFFFFF',
  },
});
