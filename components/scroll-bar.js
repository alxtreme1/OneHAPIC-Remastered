import React, { useContext } from 'react';
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, AppRegistry, View, Text, Dimensions } from "react-native";
// import { styles } from "../styles/slider";
import { CameraTargetContext } from '../context/piano-track-context';
import { useState } from 'react';

const THUMB_WIDTH = 50;

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
        backgroundColor: 'red',
        height: 50,
        justifyContent: 'center',
        width: THUMB_WIDTH,
        borderRadius: 5,
    },
    trackMarkContainer: {
        backgroundColor: 'green',
        borderWidth: 4,
        borderColor: 'green',
        height: 40,
        left: -2
    }
});

const COLORS = {
    BLACK: 'black',
    WHITE: 'white',
};

const CustomThumb = () => (
    <View style={styles.thumbContainer}>
    </View>
);

const CustomTrackMark = () => (
    <View style={styles.trackMarkContainer}></View>
);

// const windowWidth = Dimensions.get('window').width;

// const marks = {"O1": 0, "O2": 2.5, "O3": 5, "O4": 7.5, "O5": 10};

const maximumValue = 10;

const trackMarks = [2, 4, 6, 8];

const touchThumbSize = {width: 25, height: 40};

export default function SliderExample() {
    // state = {
    //     cameraTarget: 0,
    //     value: 0.2
    // };
    const [slideValue, setSlideValue] = useState(0.5);
    const [sliderWidth, setSlideWidth] = useState(0);
    const {cameraTarget, setCameraTarget} = useContext(CameraTargetContext);

    measureLoadingBar = ({nativeEvent}) => setSlideWidth(nativeEvent.layout.width);

    return(
        <View 
            onLayout={measureLoadingBar}
            style={styles.sliderContainer}>
            <Slider 
                trackMarks={trackMarks}
                renderTrackMarkComponent={CustomTrackMark}
                style={styles.slider}
                // value={slideValue}
                value={cameraTarget}
                // onValueChange={value => setSlideValue(value)}
                onValueChange={value => setCameraTarget(value)}
                trackStyle={styles.track}
                renderThumbComponent={CustomThumb}
                maximumValue={maximumValue} minimumValue={0}
                thumbTouchSize={touchThumbSize}
            />
            {/* <Text>Value: {slideValue}</Text> */}
            {/* <Text>Value: {cameraTarget}</Text> */}
            {/* <Text>Value: {sliderWidth}</Text> */}
        </View>
    );
}