import React from 'react';
import {
  Text,
  View
} from 'react-native';
import PianoRoll from './components/piano-roll';
import MIDISounds from 'midi-sounds-react';

export default function OneHAPIC(){
  return(
    <PianoRoll/>
  );
}