import React from 'react';
import {
  View
} from 'react-native';
import styles from '../styles/styles';
import { StyleSheet } from 'react-native';
import { BLACK_TILE_WIDTH } from '../styles/styles';

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