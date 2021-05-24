import React, {useState} from 'react';
import { View, Text, TextInput,Image, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import styles from './styles'

function LoginInst(props) {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const onPressLogin = () => {

    }

    return (
        <View style={styles.container}>
            <Image style={styles.superior} source={require('../../assets/cabeza.png')}/>
            
            <View style={styles.inputcontainer}>
                
                <TextInput style={styles.inputs} 
                placeholder="Código"
                value={user}
                onChange={(e) => setUser(e.nativeEvent.text)}
                />
                <TextInput style={styles.inputs} 
                placeholder="Contraseña"
                value={pass}
                onChange={(e) => setPass(e.nativeEvent.text)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Createbikescreen')} >
                <Text style={styles.textbutton}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gotit}>
                <Text style={styles.already}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.gotit2} onPress={() => props.navigation.navigate('Createuserscreen')}>
                <Text style={styles.already}>¿Aún no tienes una cuenta?</Text>
            </TouchableOpacity>
         
            <Image style={styles.inferior} source={require('../../assets/BannerInferior.png')}/>
        </View>
    );
}

export default LoginInst;