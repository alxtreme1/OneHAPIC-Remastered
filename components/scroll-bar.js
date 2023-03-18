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
        paddingVertical: 16,
        // alignItems: 'stretch',
        // justifyContent: 'flex-start',
        // flex: 1,
        // height: '10%',
        // backgroundColor: 'yellow'
        // flexGrow: 1,
    },
    slider: {
        // backgroundColor: 'yellow',
        // justifyContent: 'flex-start',
    },
    track: {
        borderRadius: 2,
        height: 40,
    },
    thumbContainer: {
        alignItems: 'center',
        backgroundColor: 'red',
        height: 50,
        justifyContent: 'center',
        width: 100,
    }
});

export default class SliderExample extends React.Component {
    state = {
        value: 0.2,
    };
    render() {
        return(
            <View contentCountainerStyle={styles.sliderContainer}>
                <Slider 
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