import React, { useRef, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import resize from './consts';
import SoundPlayer from './audio-player';

const styles = StyleSheet.create({
  whitePianoTile: {
    backgroundColor: '#fff',
    borderWidth: 0.4,
    height: '100%',
    width: 60 * resize,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    zIndex: 1
  }
});



export default function(props) {
  const soundFile = props.keyNote + props.fileExtension;

  const soundPlayer = new SoundPlayer({ audioPath: soundFile });

  const handlePlay = () => {
    soundPlayer.playAudio();
  };

  const handleStop = () => {
    soundPlayer.stopAudio();
  };

  return(
    <View style={styles.whitePianoTile} onTouchStart={ handlePlay } onTouchEnd={ handleStop } />
  );
}