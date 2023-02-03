import { StyleSheet } from "react-native";

export const BLACK_TILE_WIDTH = 30;

export default StyleSheet.create({
    whitePianoTile: {
        backgroundColor: '#fff',
        borderWidth: 1,
        height: 208,
        width: 50,
        flexDirection: "column",
        display: "flex",
        borderRadius: 5
    },
    blackPianoTile: {
        backgroundColor: '#000',
        height: 128,
        width: BLACK_TILE_WIDTH,
        elevation: 1,
        borderRadius: 3
    },
    padTrack: {
        flexDirection: "row"
    }
})