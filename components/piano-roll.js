import React from 'react';
import {
  View
} from 'react-native';
import styles from '../styles/styles';
import PadTrack from './pad-track';

export default function() {
    return(
        <View style={{display: 'flex', flexDirection:'row', alignItems: 'flex-end'}}>
            <PadTrack/>
            <PadTrack/>
            <PadTrack/>
            <PadTrack/>
            <PadTrack/>
        </View>
    );
}