import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import styles from "./styles";

function EleccionEntrada(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onPressLogin = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.buttoncontainer}>
        <Image
          style={styles.superior1}
          source={require("../../assets/letras.png")}
        />
        <Image
          style={styles.superior}
          source={require("../../assets/LogoSolo.png")}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("LoginInst")}
        >
          <Text style={styles.textbutton}>Iniciar Sesion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => props.navigation.navigate("EleccionUser")}
        >
          <Text style={styles.textbutton}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default EleccionEntrada;
