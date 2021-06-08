import { StyleSheet } from "react-native";
import { vh } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    height: vh(100),
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
    //CHAO
  },
  c1: {
    marginTop: "5%",
    height: vh(10),
    width: vh(40),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  c2: {
    marginTop: "5%",
    height: vh(11),
    width: vh(40),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  contenedorcasco: {
    height: vh(10),
    width: vh(10.5),
  },

  contenedorcandado: {
    height: vh(11),
    width: vh(10.5),
    backgroundColor: "white",
  },

  contedenorcheck: {
    height: vh(10),
    width: vh(8),
    justifyContent: "center",
  },

  contedenorcheck2: {
    height: vh(10),
    width: vh(8),
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  casco: {
    height: vh(10.5),
  },
  candado: {
    height: vh(11),
  },
  textbutton: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFFFFF",
  },

  button2: {
    backgroundColor: "#3FA9F5",
    marginTop: "5%",
    height: 55,
    width: "40%",
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#4DFFCC",
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

  textbutton: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFFFFF",
  },

  already: {
    marginTop: "5%",
    textDecorationLine: "none",
    color: "#090909",
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
