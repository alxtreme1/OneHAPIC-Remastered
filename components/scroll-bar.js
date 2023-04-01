import React from 'react';
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, AppRegistry, View, Text } from "react-native";
// import { slider } from "../styles/styles";

const COLORS = {
    BLACK: 'black',
    WHITE: 'white',
};

const CustomThumb = () => (
    <View style={styles.thumbContainer}>
        <Text>Move</Text>
    </View>
);

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
        width: 100,
        borderRadius: 5,
    }
});

export default class SliderExample extends React.Component {
    state = {
        value: 0.2,
    };
    render() {
        return(
            <View 
                style={styles.sliderContainer}>
                <Slider 
                    // trackMarks={[0.2]}
                    style={styles.slider}
                    value={this.state.value}
                    onValueChange={value => this.setState({value})}
                    trackStyle={styles.track}
                    renderThumbComponent={CustomThumb}
                />
                {/* <Text>Value: {this.state.value}</Text> */}
            </View>
        );
    }
}

// AppRegistry.registerComponent('SliderExample', () => SliderExample); 