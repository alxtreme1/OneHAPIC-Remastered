import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import WhiteTile from './white-tile';
import BlackTile from './black-tile';

const styles = StyleSheet.create({
    padTrack: {
        flexDirection: "row",
        height: '100%'
    }
});

const notes = ['c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab', 'a', 'bb', 'b'];

const fileExtension = ".mp3"

export default function(props) {
    return(
        <View style={styles.padTrack}>
            <WhiteTile fileExtension={fileExtension} keyNote={notes[0] + props.pad}/>
            <BlackTile fileExtension={fileExtension} keyNote={notes[1] + props.pad} marginOffset = {-15} />
            <WhiteTile fileExtension={fileExtension} keyNote={notes[2] + props.pad} />
            <BlackTile fileExtension={fileExtension} keyNote={notes[3] + props.pad} marginOffset = {15} />
            <WhiteTile fileExtension={fileExtension} keyNote={notes[4] + props.pad} />
            <WhiteTile fileExtension={fileExtension} keyNote={notes[5] + props.pad} />
            <BlackTile fileExtension={fileExtension} keyNote={notes[6] + props.pad} marginOffset = {-30} />
            <WhiteTile fileExtension={fileExtension} keyNote={notes[7] + props.pad} />
            <BlackTile fileExtension={fileExtension} keyNote={notes[8] + props.pad} marginOffset = {0} />
            <WhiteTile fileExtension={fileExtension} keyNote={notes[9] + props.pad} />
            <BlackTile fileExtension={fileExtension} keyNote={notes[10] + props.pad} marginOffset = {30} />
            <WhiteTile fileExtension={fileExtension} keyNote={notes[11] + props.pad} />
        </View>
    );
}