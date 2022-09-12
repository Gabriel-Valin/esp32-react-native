import {
  ref,
  onValue,
  update,
} from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Switch, VStack, Box, Image, Text } from 'native-base';


export default function Led() {
  const configFirebase = {

    apiKey: "AIzaSyDWforVXPxPfd2cxKh78HV04eQjgrKKT9I",

    authDomain: "iot-fatec.firebaseapp.com",

    databaseURL: "https://iot-fatec-default-rtdb.firebaseio.com",

    projectId: "iot-fatec",

    storageBucket: "iot-fatec.appspot.com",

    messagingSenderId: "1027999750764",

    appId: "1:1027999750764:web:7f491be9adcd14420e5649"

  }

  const app = initializeApp(configFirebase);
  const database = getDatabase(app);

  const [led, setLed] = useState(false)

  const toggleMode = async () => {
    update(ref(database), { 'lampada': !led })
    setLed(!led)
  }

  useEffect(() => {
    return onValue(ref(database, 'lampada'), querySnapShot => {
      let data = querySnapShot.val();
      setLed(data);
    });
  }, []);

  return (
    <Box flex={1} alignItems='center' justifyContent='center'>
      <VStack justifyContent='center' alignItems='center' space={12}>
        <Box alignSelf='center'>
          <Image source={{ uri: `${!led ? 'https://cdn-icons-png.flaticon.com/512/2338/2338838.png' : 'https://cdn-icons-png.flaticon.com/512/2338/2338764.png'}` }} alt='LED ON OFF' size='lg' />
        </Box>
        <Switch onValueChange={toggleMode}></Switch>
        <Text fontSize={22}>O LED está: {!!led ? <Text fontWeight='bold' color='green.500'>LIGADO!</Text> : <Text fontWeight='bold' color='red.500'>DESLIGADO!</Text>}</Text>
      </VStack>
    </Box>
  )
}