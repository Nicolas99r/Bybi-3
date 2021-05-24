import {StyleSheet} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
    },
    inputcontainer: {
        width: "50%",
    },
    superior: {
        width: "100%",
        height: vh(30),

    },
    imagencita: {
        height: vh(15),
        width: vh(40),
    },
    titlecontainer: {
        height: vh(10),
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "black",
        
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    inputs: {
        height: 30,
        margin: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#2CDCCC",
       
    },

    button: {
        backgroundColor: "#3FA9F5",
        marginTop: "5%",
        height: 55,
        width: "40%",
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
    gotit: {
        marginTop: "7%",
    },

    gotit2: {
        marginTop: "1.5%",
    },
    already: {
        textDecorationLine: "none",
        color: "#A6A6A6",
    },
    inferior: {
        width: "100%",
        height: vh(17),
        justifyContent: "flex-end",
    }
})

export default styles