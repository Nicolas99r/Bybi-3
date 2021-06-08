import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
// import QRCode from "react-native-qrcode-svg";
import LeerQr from "../../database/LeerQr";
import styles from "./styles";

function EscanerQR(props) {
  const [type, setType] = useState("");
  const [data, setData] = useState("");

  const onPressLogin = () => {};

  const onCodeScanned = (type, data) => {
    setType(type);
    setData(data);
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

      <LeerQr onCodeScanned={onCodeScanned}/>
      <Text>Type: {type}</Text>
      <Text>Data: {data}</Text>

      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("Loginvisitor")}
        >
          <Text style={styles.textbutton}>Visitante</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => props.navigation.navigate("EntradaInst")}
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
