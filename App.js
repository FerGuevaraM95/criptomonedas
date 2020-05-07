import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Header} from './components/Header';
import {Form} from './components/Form';

const App = () => {
  return (
    <>
      {/* <StatusBar backgroundColor="#5E49E2" barStyle="dark-content" /> */}
      <Header />
      <Image style={styles.image} source={require('./assets/img/cryptomonedas.png')} />
      
      <View style={styles.content}>
        <Form />
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