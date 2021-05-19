import React, { useState} from 'react';
import { View, Text, TextInput, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './styles'
import firebase from '../../database/firebase'

//Nota: no usé el TouchableHighlight porque se ve muy oscuro, por eso puse el opacity

function Createuserscreen(props) {

    const [state, setState] = useState({
        name: '',
        code: '',
        email: '',
        password: '',
        confpass: ''
    })

    const handleChangeText = (name, value) => {
        setState({
            ...state,
            [name]: value
        })
    }
    //No se como hacer que verifique todos los espacios de una manera corta así que despues busco
    const saveNewUser = async() => {
        if ((state.name || state.code || state.email || state.password || state.confpass) === '') {
            alert('Asegurate de llenar todos los campos 🙄')    
        } else if (state.password !== state.confpass) {
            alert('Las contraseñas no coinciden 🤨')
        } 
        else {
            await firebase.db.collection('Usuario').add({
                name: state.name,
                code: state.code,
                email: state.email,
                password: state.password,
                confpass: state.confpass
            })
            props.navigation.navigate('Createbikescreen')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputcontainer}>
                <View style={styles.titlecontainer}>
                    <Text style={styles.title}>Crea tu cuenta</Text>
                    <Text style={styles.subtitle}>¡Es muy fácil!</Text>
                </View>
                <TextInput style={styles.inputs} 
                    placeholder="Nombre"
                    onChangeText={(value) => handleChangeText('name', value)}
                />
                <TextInput style={styles.inputs} 
                    placeholder="Código institucional"
                    onChangeText={(value) => handleChangeText('code', value)}
                />
                <TextInput style={styles.inputs} 
                    placeholder="Correo institucional"
                    onChangeText={(value) => handleChangeText('email', value)}
                />
                <TextInput style={styles.inputs} 
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    onChangeText={(value) => handleChangeText('password', value)}
                />
                <TextInput style={styles.inputs} 
                    placeholder="Confirmar contraseña"
                    secureTextEntry={true}
                    onChangeText={(value) => handleChangeText('confpass', value)}
                />
            </View>
            <TouchableOpacity style={styles.button} 
                onPress={() => saveNewUser()}
                //onPress={() => props.navigation.navigate('Createbikescreen')}
            >
                <Text style={styles.textbutton}>Registrarte</Text>
            </TouchableOpacity>
            <Text style={styles.accept}>Al momento de registrarte, aceptas los términos y condiciones de uso de la aplicación</Text>
            <TouchableOpacity style={styles.gotit} onPress={() => props.navigation.navigate('Loginscreen')}>
                <Text style={styles.already}>¿Ya tienes una cuenta?</Text>
            </TouchableOpacity>
            <Image style={styles.inferior} source={require('../../assets/BannerInferior.png')}/>
        </View>
    );
}

export default Createuserscreen;