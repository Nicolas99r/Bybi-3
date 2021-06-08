import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9E2F3",
    height: vh(100),
  },

  buttoncontainer: {
    width: "90%",
    margin: "5%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: vh(85),
  },

  superior1: {
    marginTop: "2%",
    width: "53%",
    height: vh(14),
    justifyContent: "center",
  },
  superior: {
    marginTop: "5%",
    width: "59%",
    height: vh(29),
  },

  button: {
    backgroundColor: "#3FA9F5",
    marginTop: "20%",
    height: 60,
    width: "60%",
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#4DFFCC",
  },

  

  already: {
    marginTop: "5%",
    textDecorationLine: "none",
    color: "#A6A6A6",
    fontSize: 20,
   
  },

  
  textbutton: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFFFFF",
  },
});

export default styles;
