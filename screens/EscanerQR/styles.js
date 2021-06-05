import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    height: vh(100),
  },

  buttoncontainer: {
    width: "80%",
    marginTop: "2%",
    alignItems: "center",
    height: vh(17),
    
    
  },
  superior: {
    width: "100%",
    height: vh(23),
  },
  
  titlecontainer: {
    height: vh(10),
    alignItems: "center",
    borderBottomWidth: 1,
   
    //hola
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",

  },

  escaner: {
    marginTop: "2%",
    width: "66%",
    height: vh(33),
    
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
    width: "50%",
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#4DFFCC",
    
    
  },

  button2: {
    backgroundColor: "#3FA9F5",
    marginTop: "5%",
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

  already: {
    marginTop: "5%",
    textDecorationLine: "none",
    color: "#A6A6A6",
    fontSize: 17,
   
  },
  inferior: {
    width: "100%",
    height: vh(13),
    marginTop: "1%",
    justifyContent: "flex-end",
    
    
  },
});

export default styles;
