import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import resize from './consts';

const styles = StyleSheet.create({
  whitePianoTile: {
    backgroundColor: '#fff',
    borderWidth: 0.4,
    height: '100%',
    width: 50 * resize,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    zIndex: 1
  }
});

export default function() {
    return(
        <View style={styles.whitePianoTile}></View>
    );
}