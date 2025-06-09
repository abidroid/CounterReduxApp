/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const CounterView = () => {
  return (
    <View style={styles.counterView}>
      <Pressable>
        <Text>Decrement</Text>
      </Pressable>
      <Text>0</Text>
      <Pressable>
        <Text>Increment</Text>
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

      <CounterView />
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
});

export default App;
