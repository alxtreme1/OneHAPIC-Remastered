import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import PadTrack from './pad-track';

const styles = StyleSheet.create({
    pianoRoll: {
        flexDirection:'row',
    },
    container: {
        flexGrow: 1,
        // height: '88%'
    }
});

export default function() {
    return(
        <ScrollView contentContainerStyle={styles.container} horizontal={true}> 
            <View style={styles.pianoRoll}>
                <PadTrack/>
                <PadTrack/>
                <PadTrack/>
                <PadTrack/>
                <PadTrack/>
            </View>
        </ScrollView>
    );
}