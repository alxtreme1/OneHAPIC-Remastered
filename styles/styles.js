import { StyleSheet } from "react-native";

export const BLACK_TILE_WIDTH = 30;

export default StyleSheet.create({
    whitePianoTile: {
        backgroundColor: '#fff',
        borderWidth: 1,
        height: 208,
        width: 50,
        flexDirection: "column",
        display: "flex"
    },
    blackPianoTile: {
        backgroundColor: '#000',
        height: 128,
        elevation: 1
    },
    padTrack: {
        flexDirection: "row"
    }
})