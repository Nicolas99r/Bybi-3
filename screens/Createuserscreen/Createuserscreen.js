import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import firebase from "../../database/firebase";

//Nota: no usé el TouchableHighlight porque se ve muy oscuro, por eso puse el opacity

function Createuserscreen(props) {
  const [nombre, setNombre] = useState("");
  const [correoInstitucional, setCorreoInstitucional] = useState("");
  const [codigoInstitucional, setCodigoInstitucional] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  //No se como hacer que verifique todos los espacios de una manera corta así que despues busco
  const createUser = async () => {
    if (
      (nombre ||
        correoInstitucional ||
        codigoInstitucional ||
        password ||
        confPassword) === ""
    ) {
      alert("Asegurate de llenar todos los campos 🙄");
    } else if (password !== confPassword) {
      alert("Las contraseñas no coinciden 🤨");
    } else {
      try {
        await firebase.createUser(
          nombre,
          correoInstitucional,
          codigoInstitucional,
          password
        );
        props.navigation.navigate("Createbikescreen");
      } catch (error) {
        alert(error);
      }
    }
  };

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
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Código institucional"
          value={codigoInstitucional}
          onChangeText={setCodigoInstitucional}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Correo institucional"
          value={correoInstitucional}
          onChangeText={setCorreoInstitucional}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Confirmar contraseña"
          secureTextEntry={true}
          value={confPassword}
          onChangeText={setConfPassword}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={createUser}
        //onPress={() => props.navigation.navigate('Createbikescreen')}
      >
        <Text style={styles.textbutton}>Continuar</Text>
      </TouchableOpacity>
      <Text style={styles.accept}>
        Al momento de registrarte, aceptas los términos y condiciones de uso de
        la aplicación
      </Text>
      <TouchableOpacity
        style={styles.gotit}
        onPress={() => props.navigation.navigate("Loginscreen")}
      >
        <Text style={styles.already}>¿Ya tienes una cuenta?</Text>
      </TouchableOpacity>
      <Image
        style={styles.inferior}
        source={require("../../assets/BannerInferior.png")}
      />
    </View>
  );
}

export default Createuserscreen;
