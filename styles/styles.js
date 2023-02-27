import { StyleSheet } from "react-native";

const resize = 1.4;
export const BLACK_TILE_WIDTH = 30 * resize;

export default StyleSheet.create({
    whitePianoTile: {
        backgroundColor: '#fff',
        borderWidth: 0.4,
        height: '100%',
        width: 50 * resize,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        zIndex: 1
    },
    blackPianoTile: {
        backgroundColor: '#000',
        height: '61.54%',
        width: BLACK_TILE_WIDTH,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        zIndex: 2
    },
    padTrack: {
        backgroundColor: '#63353F',
        flexDirection: "row",
        height: 208 * resize,
        maxHeight: '92%'
    }
})