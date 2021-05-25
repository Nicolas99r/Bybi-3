import QRCode from "react-qr-code";
import React, {useState} from 'react';
import { View, Text, TextInput,Image, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import styles from './styles'





function CreateQR() {
//codigazo QR,  value = dato a encriptar, tqm
  return (
<View styles={styles.container}>

<View styles={styles.qr}>
        <QRCode value="Hola Mundo" size={256} bgColor="#282c34" fgColor="#fff" level="H" />
    </View>
</View>
   
    
  );
}

export default CreateQR;
