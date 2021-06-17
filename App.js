import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import HeartWrapper from './HeartWrapper';
import ReanimatedHeartWrapper from './ReanimatedHeartWrapper';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View>
          <HeartWrapper />
          <ReanimatedHeartWrapper />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
