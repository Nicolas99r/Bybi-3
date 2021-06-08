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
  const [isSelected2, setSelected2] = useState(false);
  const onPressLogin = () => {
    if (
      (isSelected == true || isSelected2== true)) {
        alert("¡La seguridad es lo primordial!");
      } else if(
      (isSelected == false || isSelected2 !== false)) {
      alert("Estas aceptando continuar sin casco");
    } else if ( (isSelected !== false || isSelected2 == false) ) {
      alert("Estas aceptando continuar sin guaya");
    }  else if ( (isSelected == false || isSelected2 == false) ) {
      alert("¡No puedes ingresar sin ningún requisito de seguridad!");
    }
  };


  
  return (
    <View style={styles.container}>
      <Image
        style={styles.superior}
        source={require("../../assets/cabeza.png")}
      />
      <TouchableOpacity style={styles.gotit}>
        <Text style={styles.already}>Requisitos de seguridad </Text>
      </TouchableOpacity>

<<<<<<< Updated upstream
      <View style={styles.c1}>
        <View style={styles.contenedorcasco}>
          <Image
            style={styles.casco}
            source={require("../../assets/casco.png")}
          />
        </View>

          <View style={styles.contedenorcheck}>
              <CheckBox
                style={styles.checkbox}
                title="Casco"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="green"
                checked={isSelected}
                onPress={() => setSelected(!isSelected)}
              />
=======
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
>>>>>>> Stashed changes
            
          </View>
      </View>
      <View style={styles.c2}>
        <View style={styles.contenedorcandado}>
          <Image
            style={styles.candado}
            source={require("../../assets/candado.png")}
          />
        </View>

          <View style={styles.contedenorcheck2}>
              <CheckBox
                title="candado y guaya"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="green"
                checked={isSelected2}
                onPress={() => setSelected2(!isSelected2)}
              />
            
          </View>
      </View>

      <TouchableOpacity
        style={styles.button2}
        // onPress={() => props.navigation.navigate("Requisitos1")}
      >
        <Text style={styles.textbutton} onPress={onPressLogin}>Continuar</Text>
      </TouchableOpacity>

      <Image
        style={styles.inferior}
        source={require("../../assets/BannerInferior.png")}
      />
    </View>
  );
}

export default Requisitos;
