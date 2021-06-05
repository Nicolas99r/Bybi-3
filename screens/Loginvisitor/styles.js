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
    marginTop: "15%",
  },

  superior: {
    width: "100%",
    height: vh(23),
  },
  camaraimg: {
    width: "50%",
    height: vh(12),
    backgroundColor: "lightgray",
    left: "25%",
  },
  inputs: {
    height: 30,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#2CDCCC",
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
  gotit: {
    marginTop: "7%",
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
  already: {
    textDecorationLine: "none",
    color: "#A6A6A6",
  },
  inferior: {
    width: "100%",
    height: vh(17),
    justifyContent: "flex-end",
  },
});

export default styles;
