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
    alignItems: "center",
    height: vh(30),
    marginTop: "0.5%",
    
  },
  superior: {
    width: "100%",
    height: vh(28),
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
    
    //hola
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
    marginTop: "10%",
    height: 55,
    width: "50%",
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#4DFFCC",
    
  },

  button2: {
    backgroundColor: "#3FA9F5",
    marginTop: "10%",
    height: 55,
    width: "50%",
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#4DFFCC",
    
  },

    button: {
        backgroundColor: "#3FA9F5",
        marginTop: "18%",
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
    marginTop: "8%",
    textDecorationLine: "none",
    color: "#A6A6A6",
    fontSize: 20,
    
  },
  inferior: {
    width: "100%",
    height: vh(17),
    marginTop: "20%",
    justifyContent: "flex-end",
  },
});

export default styles;
