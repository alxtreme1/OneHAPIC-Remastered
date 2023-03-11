import React from 'react';
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, AppRegistry, View, Text } from "react-native";
// import { slider } from "../styles/styles";

const styles = StyleSheet.create({
    sliderContainer: {
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
                />
                {/* <Text>Value: {this.state.value}</Text> */}
            </View>
        );
    }
}

// AppRegistry.registerComponent('SliderExample', () => SliderExample); 