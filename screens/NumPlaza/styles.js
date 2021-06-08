import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    height: vh(100),
  },
  inputcontainer: {
    width: "80%",
    height: vh(30),
    marginTop: "5%",
    backgroundColor: "#CCDFDE", 
    borderRadius: 20,
    alignItems: "center"
  },

  contenedorcito: {
    width: "85%",
    height: vh(25),
    marginTop: "5%",
    backgroundColor: "#FFFFFF", 
    borderRadius: 20,
    alignItems:"center",
    
  },
  already1: {
    textDecorationLine: "none",
    color: "black",
    fontSize: 22,
    width: "80%",
    height: vh(8),
    marginTop: "1%",
 
    alignItems:"center",
    
  },

  already3: {
    textDecorationLine: "none",
    color: "black",
    fontSize: 40,
    width: "25%",
    height: vh(20),
    marginTop: "1%",
    alignItems:"center",
    justifyContent: "center",
  
   
  },
    superior: {
    width: "100%",
    height: vh(28),
  },
  

  
  
  
  button: {
    backgroundColor: "transparent",
    marginTop: "6%",
    height: 55,
    width: "40%",
   
    
  },
  textbutton: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFFFFF",
  },
  already: {
    textDecorationLine: "none",
    color: "#A6A6A6",
    fontSize: 20,
  },


  inferior: {
    width: "100%",
    height: vh(17),
    justifyContent: "flex-end",
  },
});

export default styles;
