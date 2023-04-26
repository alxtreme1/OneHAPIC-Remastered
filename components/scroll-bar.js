import React, { useContext, useState } from 'react';
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, AppRegistry, View, Text, Dimensions } from "react-native";
// import { styles } from "../styles/slider";
import { CameraTargetContext } from '../context/piano-track-context';

thumbWidth = 150;

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 0.2,
        justifyContent: 'center'
    },
    slider: {
        height: '100%',
    },
    track: {
        borderRadius: 2,
        height: '100%',
    },
    thumbContainer: {
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        width: thumbWidth,
        borderRadius: 3.7,
        borderColor: 'black',
        borderWidth: 3.2,
    },
    trackMarkContainer: {
        backgroundColor: 'green',
        borderWidth: 2.3,
        borderColor: 'green',
        height: 40,
        left: -2
    },
    thumbGrass: {
        opacity: 0.73,
        backgroundColor: 'red',
        width: '100%',
        height: '100%'
    }
});

const COLORS = {
    BLACK: 'black',
    WHITE: 'white',
};

const CustomThumb = () => (
    <View style={styles.thumbContainer}>
        <View style={styles.thumbGrass}/>
    </View>
);

const CustomTrackMark = () => (
    <View style={styles.trackMarkContainer}/>
);

// const windowWidth = Dimensions.get('window').width;

// const marks = {"O1": 0, "O2": 2.5, "O3": 5, "O4": 7.5, "O5": 10};



const touchThumbSize = {width: thumbWidth, height: 40};

export default function SliderExample() {
    const {sliderWidth, setSliderWidth} = useContext(CameraTargetContext);
    const {sliderValue, setSliderValue} = useContext(CameraTargetContext);
    const {cameraTarget, setCameraTarget} = useContext(CameraTargetContext);
    const {maximumValue, setMaximumValue} = useContext(CameraTargetContext);
    const {pianoWidth} = useContext(CameraTargetContext);
    const trackMarks = [maximumValue/4, 2*maximumValue/4, 3*maximumValue/4, 4* maximumValue/4];

    startingWidthValue = ({nativeEvent}) => {
        setSliderWidth(nativeEvent.layout.width);
    };

    return(
        <View 
            onLayout={ ({nativeEvent}) => {setSliderWidth(nativeEvent.layout.width)} }
            style={styles.sliderContainer}>
            <Slider 
                trackMarks={trackMarks}
                renderTrackMarkComponent={CustomTrackMark}
                style={styles.slider}
                value={sliderValue}
                onValueChange={value => setSliderValue(value)}
                trackStyle={styles.track}
                renderThumbComponent={CustomThumb}
                maximumValue={maximumValue} minimumValue={0}
                thumbTouchSize={touchThumbSize}
            />
            {/* <Text>Value: {cameraTarget}</Text> */}
            {/* <Text>Value: {pianoWidth}</Text> */}
            {/* <Text>Value: {sliderValue}</Text> */}
        </View>
    );
}