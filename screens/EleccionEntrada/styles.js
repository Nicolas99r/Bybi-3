import {StyleSheet} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#A9E2F3',
      
    },

    buttoncontainer: {
        width: "90%",
        margin: "5%",
        alignItems: "center",
        backgroundColor: 'white',
      height: vh(87),
    },

    
    LogoSolo: {
        width: "100%",
        height: vh(23),
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
        marginTop: "15%",
        height: 55,
        width: "50%",
        borderRadius: 20,
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#4DFFCC",
        
    },

    button2: {
        backgroundColor: "#3FA9F5",
        marginTop: "15%",
        height: 55,
        width: "50%",
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