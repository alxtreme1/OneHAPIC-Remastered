import React, { useContext, useState } from 'react';
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, AppRegistry, View, Text, Dimensions } from "react-native";
// import { styles } from "../styles/slider";
import { CameraTargetContext } from '../context/piano-track-context';

export default function SliderExample() {
    const {thumbWidth} = useContext(CameraTargetContext);

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

    const CustomThumb = () => (
        <View style={styles.thumbContainer}>
            <View style={styles.thumbGrass}/>
        </View>
    );

    const CustomTrackMark = () => (
        <View style={styles.trackMarkContainer}/>
    );


    const touchThumbSize = {width: thumbWidth, height: 40};

    const {setSliderWidth} = useContext(CameraTargetContext);
    const {sliderValue, setSliderValue} = useContext(CameraTargetContext);
    const {maximumValue} = useContext(CameraTargetContext);
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
            {/* <Text>Value: {thumbWidth}</Text> */}
        </View>
    );
}