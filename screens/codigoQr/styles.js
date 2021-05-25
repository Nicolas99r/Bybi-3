import {StyleSheet} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: "center",
      
    },
    qr: {
        height: vh(5),
        width: vh(5),
    }
})

export default styles