import { StyleSheet } from "react-native";

export const BLACK_TILE_WIDTH = 30;

export default StyleSheet.create({
    whitePianoTile: {
        backgroundColor: '#fff',
        borderWidth: 0.4,
        height: 208,
        width: 50,
        // borderBottomLeftRadius: 5,
        // borderBottomRightRadius: 5,
        zIndex: 1
    },
    blackPianoTile: {
        backgroundColor: '#000',
        height: 128,
        width: BLACK_TILE_WIDTH,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        zIndex: 2
    },
    padTrack: {
        backgroundColor: '#63353F',
        flexDirection: "row"
    }
})