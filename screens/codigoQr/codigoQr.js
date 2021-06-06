import QRCode from "react-qr-code";
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

function CreateQR() {
  //codigazo QR,  value = dato a encriptar, tqm
  return (
    <View styles={styles.container}>
      <TouchableOpacity style={styles.gotit}>
        <Text style={styles.already}>¡UTILIZA TU CODIGO QR!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.qr}>
        <QRCode
          value="Hola Mundo"
          size="150"
        level="H"
        />
      </TouchableOpacity>
    </View>
  );
}

export default CreateQR;
