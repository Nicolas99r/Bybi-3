import {StyleSheet} from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
//Toca cambiar los porcentajes por "vh" porque pone rara por momentos la ubicación de los elementos

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
      height: vh(100),
    },
    inputcontainer: {
        marginTop: "5%",
        width: "78%",
        
    },

    superior: {
        width: "100%",
        height: vh(23),
 },
  
  
    inputs: {
        height: 30,
        margin: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#2CDCCC",
        marginTop: "0.4%",
        fontSize: 15, 
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
    accept: {
        width:"80%",
        textAlign: 'center',
        marginTop: 10,
        color: "#A6A6A6",
    },
    gotit: {
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