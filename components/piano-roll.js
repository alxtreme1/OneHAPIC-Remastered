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
        // height: '85%'
        flex: 1
    }
});

export default function() {
    return(
        <ScrollView
            style={styles.container} 
            horizontal={true}
            // scrollEnabled={false}
            > 
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