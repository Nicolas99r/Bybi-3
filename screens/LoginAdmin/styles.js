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
    height: vh(14),
    width: "80%",
    marginTop: "13%",
    
  },
  superior: {
    width: "100%",
    height: vh(28),
  },

  inputs: {
    height: 30,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#2CDCCC",
    fontSize: 20,
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
    fontSize: 18,
  },

  inferior: {
    width: "100%",
    height: vh(17),
    justifyContent: "flex-end",
  },
});

export default styles;
