import React from 'react';
import {
  View
} from 'react-native';
import styles from '../styles/styles';
import WhiteTile from './white-tile';
import BlackTile from './black-tile';

export default function() {
    return(
        <View style={styles.padTrack}>
            <WhiteTile/>
            <BlackTile marginOffset = {-15}/>
            <WhiteTile/>
            <BlackTile marginOffset = {15}/>
            <WhiteTile/>
            <WhiteTile/>
            <BlackTile marginOffset = {-30}/>
            <WhiteTile/>
            <BlackTile marginOffset = {0}/>
            <WhiteTile/>
            <BlackTile marginOffset = {30}/>
            <WhiteTile/>
        </View>
    );
}