import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
// import styles from '../styles/styles';
import { BLACK_TILE_WIDTH } from './consts';

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

export default function(prop) {
  let marginOffset = BLACK_TILE_WIDTH * (prop.marginOffset / 100);

  const personalizedMarge = StyleSheet.create({
    blackPianoTile: {
      marginLeft: - (BLACK_TILE_WIDTH/2) + marginOffset,
      marginRight: - (BLACK_TILE_WIDTH/2) - marginOffset
    }
  });
  
  const personalizedTile = StyleSheet.compose(styles.blackPianoTile, personalizedMarge.blackPianoTile);

    return(
        <View style={personalizedTile}></View>
    );
}