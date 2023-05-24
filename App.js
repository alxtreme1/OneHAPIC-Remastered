import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import PianoRoll from './components/piano-roll';
import Slider from './components/scroll-bar';
import { CameraTargetContextProvider } from './context/piano-track-context';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flexGrow: 1
  }
});

export default function OneHAPIC(){

  return(
    <CameraTargetContextProvider>
      <View style={styles.container}>
        <Slider/>
        <PianoRoll/>
      </View>
    </CameraTargetContextProvider>
  );
}