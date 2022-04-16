import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapTest from './Components/MapTest';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <MapTest />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
