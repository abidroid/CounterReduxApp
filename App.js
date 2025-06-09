/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './store/store';
import {increment, decrement} from './store/actions';

const CounterView = () => {

  const count = useSelector( state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.counterView}>
      <Pressable onPress={() => dispatch(decrement())}>
        <Text style={styles.txtStyle}>Decrement</Text>
      </Pressable>
      <Text style={styles.txtStyle}>{count}</Text>
      <Pressable onPress={() => dispatch(increment())}>
        <Text style={styles.txtStyle}>Increment</Text>
      </Pressable>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Redux Counter Example</Text>
      <Text style={styles.description}>
        Understanding Redux. An important state management technique in React
        Native apps.
      </Text>

      <Provider store={store}>
        <CounterView />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 48,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  counterView: {
    marginTop: 24,
    flexDirection: 'row',
    gap: 16,
  },
  txtStyle :{
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
