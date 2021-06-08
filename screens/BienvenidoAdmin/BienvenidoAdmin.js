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

function BienvenidoAdmin(props) {
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

<TouchableOpacity style={styles.gotit}>
        <Text style={styles.already}>Sección de administrador </Text>
      </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("LoginAdmin")}
        >
          <Text style={styles.textbutton}>Iniciar Sesion</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  );
}
export default BienvenidoAdmin;
