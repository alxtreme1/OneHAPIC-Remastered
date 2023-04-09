import React from 'react';
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, AppRegistry, View, Text, Dimensions } from "react-native";
// import { styles } from "../styles/slider";

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

export default class SliderExample extends React.Component {
    constructor(props) {
      super(props)
    }
    state = {
        loaderWidth: 0
    }
    state = {
        value: 0.2,
    };

    measureLoadingBar = ({nativeEvent}) => this.setState({ loaderWidth: nativeEvent.layout.width });

    render() {
        return(
            <View style={styles.sliderContainer}>
                <Slider 
                    onLayout={this.measureLoadingBar}
                    trackMarks={trackMarks}
                    renderTrackMarkComponent={CustomTrackMark}
                    style={styles.slider}
                    value={this.state.value}
                    onValueChange={value => this.setState({value})}
                    trackStyle={styles.track}
                    renderThumbComponent={CustomThumb}
                    maximumValue={maximumValue} minimumValue={0}
                    thumbTouchSize={touchThumbSize}
                />
                {/* <Text>Value: {this.state.value}</Text> */}
                {/* <Text>Value: {this.state.loaderWidth}</Text> */}
            </View>
        );
    }
}

// AppRegistry.registerComponent('SliderExample', () => SliderExample); 