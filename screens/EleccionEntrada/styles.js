import {StyleSheet} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A9E2F3',
      height: vh(100),
    },

    buttoncontainer: {
        width: "90%",
        margin: "5%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        height: vh(87),

    },
   

    superior1: {
        marginTop: "2%",
     right: "2%",
        width: "80%",
        height: vh(14),
        
        justifyContent: "center",
 },
    superior: {
        
        width: "64%",
        height: vh(26),
        
        
 },

    button: {
        backgroundColor: "#3FA9F5",
        marginTop: "28%",
        height: 60,
        width: "60%",
        borderRadius: 20,
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#4DFFCC",
        
    },

    button2: {
        backgroundColor: "#3FA9F5",
        marginTop: "15%",
        height: 60,
        width: "60%",
        borderRadius: 20,
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#4DFFCC",
        
    },

    textbutton: {
        textAlign: "center",
        fontSize: 20,
        color: "#FFFFFF",
    },
})

export default styles