import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
// import styles from '../styles/styles';
import { BLACK_TILE_WIDTH } from './consts';
import SoundPlayer from './audio-player';

const styles = StyleSheet.create({
  blackPianoTile: {
    backgroundColor: '#000',
    height: '61.54%',
    width: BLACK_TILE_WIDTH,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    zIndex: 2
  }
});

export default function(props) {
  let marginOffset = BLACK_TILE_WIDTH * (props.marginOffset / 100);

  const personalizedMarge = StyleSheet.create({
    blackPianoTile: {
      marginLeft: - (BLACK_TILE_WIDTH/2) + marginOffset,
      marginRight: - (BLACK_TILE_WIDTH/2) - marginOffset
    }
  });

  const personalizedTile = StyleSheet.compose(styles.blackPianoTile, personalizedMarge.blackPianoTile);
  
  const soundFile = props.keyNote + props.fileExtension;

  const soundPlayer = new SoundPlayer({ audioPath: soundFile });

  const handlePlay = () => {
    soundPlayer.playAudio();
  };

  const handleStop = () => {  
    soundPlayer.stopAudio();
  };

  return(
    <View style={personalizedTile} onTouchStart={ handlePlay } onTouchEnd={ handleStop } />
  );
}