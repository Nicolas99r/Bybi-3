import {StyleSheet} from 'react-native'
import { vw, vh, vminnpm , vmax } from 'react-native-expo-viewport-units';
const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
      height: vh(100),
    },
    inputcontainer: {
        marginTop: "5%",
        width: "80%",
    
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

inputsfoto: {
    height: 30,
    margin: 12,
    marginTop: "0.4%",
    fontSize: 15,
    
},

camaraimg: {
width: "50%",
height: vh(12),
backgroundColor: "lightgray",
left: "25%",
},

button: {
    backgroundColor: "#3FA9F5",
    marginTop: "8%",
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


    inferior: {
        width: "100%",
        height: vh(17),
        alignItems: "flex-end",
        },



})

export default styles