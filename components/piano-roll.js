import React, { useRef, useContext, useEffect } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions
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
    const {sliderWidth} = useContext(CameraTargetContext);
    const {thumbWidth, setThumbWidth} = useContext(CameraTargetContext);
    const scrollRef = useRef();

    const moveCameraTo = () => {
        useEffect(() => {
            scrollRef.current.scrollTo({x: cameraTarget});
            setCameraTarget(cameraTarget+1);
        }, [sliderValue])
    }

    const pianoWidthSetter = ({nativeEvent}) => {
        let windowWidth = Dimensions.get('window').width;
        let screenPianoProportion = windowWidth / nativeEvent.layout.width;

        setPianoWidth(nativeEvent.layout.width);
        setThumbWidth(screenPianoProportion * sliderWidth);
    };

    return(
        <ScrollView
            ref={scrollRef}
            style={styles.container} 
            horizontal={true}
            scrollEnabled={false}
            // set piano width, and update real time the camera position
            onLayout={
                useEffect(() => {
                    setCameraTarget(sliderValue*pianoWidth);
                    scrollRef.current.scrollTo({x: sliderValue*pianoWidth, animated: false});
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