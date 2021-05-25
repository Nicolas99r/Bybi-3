//Componentes de react y react navigation
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Importar pantallas
import codigoQr from "./screens/codigoQr/codigoQr";
import EleccionEntrada from "./screens/EleccionEntrada/EleccionEntrada";
import Createuserscreen from "./screens/Createuserscreen/Createuserscreen";
import Createbikescreen from "./screens/Createbikescreen/Createbikescreen";
import Loginscreen from "./screens/Loginscreen/Loginscreen";
import LoginInst from "./screens/LoginInst/LoginInst";
import EleccionUser from './screens/EleccionUser/EleccionUser';


const Stack = createStackNavigator();

//Funcion que almacena las pantallas
function MyStack() {
  return (
    <Stack.Navigator>
      
     <Stack.Screen name="EleccionEntrada" component={EleccionEntrada} /> 
      <Stack.Screen name="EleccionUser" component={EleccionUser} />
      <Stack.Screen name="Loginscreen" component={Loginscreen} />
      <Stack.Screen name="LoginInst" component={LoginInst} />
      <Stack.Screen name="Createuserscreen" component={Createuserscreen} />
      <Stack.Screen name="Createbikescreen" component={Createbikescreen} />
      <Stack.Screen name="CodigoQr" component={codigoQr} />
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
