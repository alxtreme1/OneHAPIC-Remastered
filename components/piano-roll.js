import React, { useRef, useContext, useEffect } from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import PadTrack from './pad-track';
import { CameraTargetContext } from '../context/piano-track-context';

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
    const {sliderValue} = useContext(CameraTargetContext);
    const {cameraTarget, setCameraTarget} = useContext(CameraTargetContext);
    const {pianoWidth, setPianoWidth} = useContext(CameraTargetContext);
    const scrollRef = useRef();

    const moveCameraTo = () => {
        useEffect(() => {
            scrollRef.current.scrollTo({x: cameraTarget});
            setCameraTarget(cameraTarget+1);
        }, [sliderValue])
    }

    const pianoWidthSetter = ({nativeEvent}) => {
        setPianoWidth(nativeEvent.layout.width);
        // useEffect(() => {
        //     scrollRef.current.scrollTo({x: cameraTarget});
        //     setCameraTarget(cameraTarget+1);
        // }, [sliderValue])
    };

    return(
        <ScrollView
            ref={scrollRef}
            style={styles.container} 
            horizontal={true}
            scrollEnabled={false}
            // scrollTo={{x: sliderValue}}
            // set piano width, and update real time the camera position
            // onLayout={pianoWidthSetter}
            onLayout={
                useEffect(() => {
                    setCameraTarget(sliderValue*pianoWidth);
                    scrollRef.current.scrollTo({x: sliderValue*pianoWidth, animated: false});
                    // setCameraTarget(cameraTarget+1);
                }, [sliderValue])
            }> 
            <View style={styles.pianoRoll}
                onLayout={pianoWidthSetter}>
                <PadTrack/>
                <PadTrack/>
                <PadTrack/>
                <PadTrack/>
                <PadTrack/>
            </View>
        </ScrollView>
    );
}