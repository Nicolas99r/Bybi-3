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


function NumPlaza(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

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


      <View style={styles.inputcontainer}>
      <View style={styles.contenedorcito}>
      
        <Text style={styles.already1}>El número de plaza para
        este biciusuario es:   </Text>
        <Text style={styles.already3}> 52 </Text>

        </View>
        </View>
    
        

      <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("NumPlaza")}
        >      
        </TouchableOpacity>
      <Image
        style={styles.inferior}
        source={require("../../assets/BannerInferior.png")}
      />
    </View>
  );
}

export default NumPlaza;