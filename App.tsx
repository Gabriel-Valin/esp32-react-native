import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/pages/Home";
import IoTDetails from "./src/pages/IoTDetails";
import Esp32 from "./src/pages/Esp32";
import Developer from "./src/pages/Developer";
import Firebase from "./src/pages/Firebase";
import Functions from "./src/pages/Functions";
import Window from "./src/pages/Window";
import Idea from "./src/pages/Idea";
import Luminosity from "./src/pages/Luminosity";
import Light from "./src/pages/Light";
import Presence from "./src/pages/Presence";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator defaultScreenOptions={{ headerShown: false }} initialRouteName='Home'>
          <Stack.Screen name="Home" options={{ title: 'Bem vindo(a)!' }} component={Home} />
          <Stack.Screen name="IotDetails" options={{ title: 'O que é IoT ?' }} component={IoTDetails} />
          <Stack.Screen name="ESP32" options={{ title: 'ESP32 - O melhor' }} component={Esp32} />
          <Stack.Screen name="Dev" options={{ title: 'Gabriel Valin - Software Eng.' }} component={Developer} />
          <Stack.Screen name="Idea" options={{ title: 'Ricardo Rall - Professor.' }} component={Idea} />
          <Stack.Screen name="Firebase" options={{ title: 'Config. Firebase' }} component={Firebase} />
          <Stack.Screen name="Functions" options={{ title: 'Funcionalidades' }} component={Functions} />
          <Stack.Screen name="WINDOW" options={{ title: 'Controle da Janela' }} component={Window} />
          <Stack.Screen name="LUMINOSITY" options={{ title: 'Sensor de Luminosidade' }} component={Luminosity} />
          <Stack.Screen name="LIGHT" options={{ title: 'Luzes dos Comodos' }} component={Light} />
          <Stack.Screen name="PRESENCE" options={{ title: 'Sensor de Presenca' }} component={Presence} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
