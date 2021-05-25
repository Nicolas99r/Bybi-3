import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import styles from "./styles";
import firebase from "../../database/firebase";

function Createbikescreen(props) {
  // COSAS DE BACK
  const [state, setState] = useState({
    name: "",
    model: "",
    color: "",
    accesories: "",
  });

  const handleChangeText = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const saveNewBike = async () => {
    if ((state.name || state.model || state.color || state.accesories) === "") {
      alert("Asegurate de llenar todos los campos 🙄");
    } else {
      try {
        await firebase.saveNewBike(
          state.name,
          state.model,
          state.color,
          state.accesories,
        );
      } catch (error) {}
    }
  };
  // COSAS DE BACK

  return (
    <View style={styles.container}>
    <Image
      style={styles.superior}
      source={require("../../assets/cabeza.png")}
    />
    <View style={styles.inputcontainer}>
       
        <TextInput
          style={styles.inputs}
          placeholder="Nombre"
          onChangeText={(value) => handleChangeText("name", value)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Modelo"
          onChangeText={(value) => handleChangeText("model", value)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Color"
          onChangeText={(value) => handleChangeText("color", value)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Accesorios"
          onChangeText={(value) => handleChangeText("accesories", value)}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          saveNewBike();
        }}
      >
        <Text style={styles.textbutton}>¡Listo!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Createbikescreen;
