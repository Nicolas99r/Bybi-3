import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import styles from "./styles";
import firebase from "../../database/firebase";

function Createbikescreen(props) {
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

  /*

   ====  ESTA ES LA FUNCIÓN CON LA ====
   ==== QUE NOS COMUNICAMOS A BACK ====

   const saveNewBike = (...), realiza la verificación
   de que los datos estén guardados y luego se hace
   el llamado a la siguiente ventana. 

   */

  const saveNewBike = async () => {
    if ((state.name || state.model || state.color || state.accesories) === "") {
      alert("Asegurate de llenar todos los campos 🙄");
    } else {
      try {
        await firebase.saveNewBike(
          state.name,
          state.model,
          state.color,
          state.accesories
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

        <TextInput
          style={styles.inputsfoto}
          placeholder="Foto:"
          onChangeText={(value) => handleChangeText("foto", value)}
        />
        <Image
          style={styles.camaraimg}
          source={require("../../assets/camara.png")}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          saveNewBike();
        }}
      >
        <Text style={styles.textbutton}>Continuar</Text>
      </TouchableOpacity>

      <Image
        style={styles.inferior}
        source={require("../../assets/BannerInferior.png")}
      />
    </View>
  );
}

export default Createbikescreen;
