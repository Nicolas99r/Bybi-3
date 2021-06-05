import {StyleSheet} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        height: vh(100),
      },
    qr: {
        height: vh(18),
        width: vw(40),
        alignItems: "center",
        backgroundColor:'#fff',
    },
    already: {
        textDecorationLine: "none",
        color: "#000000",
    },
    gotit: {
        marginTop: "7%",
    },
    
})

export default styles  

