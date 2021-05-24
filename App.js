//Componentes de react y react navigation
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Importar pantallas
import Createuserscreen from "./screens/Createuserscreen/Createuserscreen";
import Createbikescreen from "./screens/Createbikescreen/Createbikescreen";
import Loginscreen from "./screens/Loginscreen/Loginscreen";
import LoginInst from "./screens/LoginInst/LoginInst";
//import EleccionUser from './screens/EleccionUser/EleccionUser';
const Stack = createStackNavigator();

//Funcion que almacena las pantallas
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ingresar Usuario" component={Loginscreen} />
      <Stack.Screen name="Ingresar Institucional" component={LoginInst} />
      <Stack.Screen name="Registrar Usuario" component={Createuserscreen} />
      <Stack.Screen name="Registrar Bicicleta" component={Createbikescreen} />
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
