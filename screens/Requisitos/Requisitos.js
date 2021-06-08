import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

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

function Requisitos(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [isSelected, setSelected] = useState(false);
  const onPressLogin = () => {};

  return (
    <View style={styles.container}>
      <Image
        style={styles.superior}
        source={require("../../assets/cabeza.png")}
      />
      <TouchableOpacity style={styles.gotit}>
        <Text style={styles.already}>Requisitos de seguridad </Text>
      </TouchableOpacity>

      <View style={styles.contenedor}>
        <Image
          style={styles.casco}
          source={require("../../assets/casco.png")}
        />
        <View style={styles.checkboxcontainer}>
          <View>
            <CheckBox
              style={styles.checkbox}
              title="Casco"
              checkedIcon="check"
              uncheckedIcon="square-o"
              checkedColor="green"
              checked={isSelected}
              onPress={() => setSelected(!isSelected)}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button2}
        // onPress={() => props.navigation.navigate("Requisitos1")}
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

export default Requisitos;
