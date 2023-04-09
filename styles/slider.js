import { StyleSheet } from "react-native";

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
        height: 70,
        left: -2
    }
});