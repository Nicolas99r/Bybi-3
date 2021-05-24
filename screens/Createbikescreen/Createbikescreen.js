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
      await firebase.firestore().collection("Bicicleta").add({
        name: state.name,
        model: state.model,
        color: state.color,
        accesories: state.accesories,
      });
      //console.log("Estamos melos")
      //console.log(firestore.firebase.collection('Bicicleta').value)
      var user = firebase.auth().currentUser;

      if (user) {
        alert("Logeado, con UDI:" + user.uid);
      } else {
        alert("Logeadon't");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Es turno de tu bicicleta</Text>
          <Text style={styles.subtitle}>Recuerda cuidar bien de ella 😉</Text>
        </View>
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
