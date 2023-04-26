import React, { useContext, useEffect, useState } from 'react';
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, AppRegistry, View, Text, Dimensions } from "react-native";
import { CameraTargetContext } from '../context/piano-track-context';

export default function SliderExample() {
    const {thumbWidth} = useContext(CameraTargetContext);
    const {pianoWidth} = useContext(CameraTargetContext);
    const {sliderWidth, setSliderWidth} = useContext(CameraTargetContext);
    const {sliderValue, setSliderValue} = useContext(CameraTargetContext);
    const {maximumValue} = useContext(CameraTargetContext);

    const trackMarks = [maximumValue/4, 2*maximumValue/4, 3*maximumValue/4, 4* maximumValue/4];
    const touchThumbSize = {width: thumbWidth, height: 40};

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
            borderColor: '#023020',
            borderWidth: 2.2,
        },
        trackMarkContainer: {
            backgroundColor: '#FFBF00',
            borderWidth: 2.3,
            borderColor: '#FFBF00',
            height: 40,
            left: -2
        },
        thumbGrass: {
            opacity: 0.73,
            backgroundColor: '#228B22',
            width: '100%',
            height: '100%'
        }
    });

    const CustomThumb = () => (
        <View style={styles.thumbContainer}>
            <View style={styles.thumbGrass}/>
        </View>
    );

    
    const offsettingTrackMarks = (pos) => {
        trackOffset = (sliderWidth - thumbWidth) / 4 + thumbWidth / 5;

        if(sliderWidth / 5 >= trackOffset)
            return {left: -2 + (pos + 1) * (sliderWidth / 5 - thumbWidth) / 4};
        return {left: -2 + (4 - pos) * (sliderWidth / 5 - thumbWidth) / 4};
    };

    const CustomTrackMark = (pos) => (
        <View style={[styles.trackMarkContainer, offsettingTrackMarks(pos)]}/>
    );


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
                maximumTrackTintColor='#A9A9A9'
                minimumTrackTintColor='#A9A9A9'
            />
        </View>
    );
}   