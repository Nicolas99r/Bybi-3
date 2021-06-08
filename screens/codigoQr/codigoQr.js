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
import QRCode from "react-native-qrcode-svg";
import LeerQr from "../../database/LeerQr";
import styles from "./styles";

function EscanerQR(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onPressLogin = () => {};

  const onCodeScanned = (type, data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.superior}
        source={require("../../assets/cabeza.png")}
      />

      <TouchableOpacity style={styles.gotit}>
        <Text style={styles.already}>¡Escanea el código QR! </Text>
      </TouchableOpacity>

      <LeerQr />

      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("Loginvisitor")}
        >
          <Text style={styles.textbutton}>Visitante</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => props.navigation.navigate("LoginCelacho")}

          //  onPress={() => props.navigation.navigate("Createuserscreen")}
        >
          <Text style={styles.textbutton}>Institucional</Text>
        </TouchableOpacity>
      </View>

      <Image
        style={styles.inferior}
        source={require("../../assets/BannerInferior.png")}
      />
    </View>
  );
}

export default EscanerQR;
