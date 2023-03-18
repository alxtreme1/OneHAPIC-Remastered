import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import PianoRoll from './components/piano-roll';
import MIDISounds from 'midi-sounds-react';
import Slider from './components/scroll-bar';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    flexGrow: 1
  }
});

export default function OneHAPIC(){
  
  return(
    <View style={styles.container}>
      <Slider/>
      <PianoRoll/>
    </View>
  );
}