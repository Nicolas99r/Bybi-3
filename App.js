//Componentes de react y react navigation
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Importar pantallas
import EleccionEntrada from "./screens/EleccionEntrada/EleccionEntrada";
import Createuserscreen from "./screens/Createuserscreen/Createuserscreen";
import Createbikescreen from "./screens/Createbikescreen/Createbikescreen";
import Loginscreen from "./screens/Loginscreen/Loginscreen";
import EntradaInst from "./screens/EntradaInst/EntradaInst";
import LoginInst from "./screens/LoginInst/LoginInst";
import EleccionUser from "./screens/EleccionUser/EleccionUser";

//Pantallas iteración II
import BienvenidoAdmin from "./screens/BienvenidoAdmin/BienvenidoAdmin";
import LoginAdmin from "./screens/LoginAdmin/LoginAdmin";
import InicioAdmin from "./screens/InicioAdmin/InicioAdmin";
import EscanerQR from "./screens/EscanerQR/EscanerQR";
import Requisitos from "./screens/Requisitos/Requisitos";
import Loginvisitor from "./screens/Loginvisitor/Loginvisitor";
import NumPlaza from "./screens/NumPlaza/NumPlaza";
const Stack = createStackNavigator();

//Funcion que almacena las pantallas     
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Requisitos" component={Requisitos} />
      <Stack.Screen name="BienvenidoAdmin" component={BienvenidoAdmin} />
     
      <Stack.Screen name="LoginAdmin" component={LoginAdmin} />
      <Stack.Screen name="InicioAdmin" component={InicioAdmin} />
      <Stack.Screen name="EscanerQR" component={EscanerQR} />
      <Stack.Screen name="NumPlaza" component={NumPlaza} />
      <Stack.Screen name="EntradaInst" component={EntradaInst} />
      <Stack.Screen name="Loginvisitor" component={Loginvisitor} />
      <Stack.Screen name="Loginscreen" component={Loginscreen} />
      <Stack.Screen name="EleccionEntrada" component={EleccionEntrada} />
      <Stack.Screen name="EleccionUser" component={EleccionUser} />
      <Stack.Screen name="LoginInst" component={LoginInst} />
      <Stack.Screen name="Createuserscreen" component={Createuserscreen} />
      <Stack.Screen name="Createbikescreen" component={Createbikescreen} />
    </Stack.Navigator>
  );
}

//App principal
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
