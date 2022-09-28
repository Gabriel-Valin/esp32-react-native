import {
  ref,
  onValue,
  update,
  Database,
} from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Switch, VStack, Box, Image, Text } from 'native-base';
import { getConfigFibrease } from '../utils/getConfigFirebase';


export default function Led() {
  const [led, setLed] = useState(false)
  const app = initializeApp(getConfigFibrease());
  const database = getDatabase(app);

  useEffect(() => {
    return onValue(ref(database, 'lampada'), querySnapShot => {
      let data = querySnapShot.val();
      setLed(data);
    });
  }, []);

  const toggleMode = async () => {
    update(ref(database), { 'lampada': !led })
    setLed(!led)
  }

  return (
    <Box flex={1} alignItems='center' justifyContent='center'>
      <VStack justifyContent='center' alignItems='center' space={12}>
        <Box alignSelf='center'>
          <Image source={{ uri: `${!led ? 'https://cdn-icons-png.flaticon.com/512/2338/2338838.png' : 'https://cdn-icons-png.flaticon.com/512/2338/2338764.png'}` }} alt='LED ON OFF' size='lg' />
        </Box>
        <Switch value={led} onValueChange={toggleMode}></Switch>
        <Text fontSize={22}>O LED está: {!!led ? <Text fontWeight='bold' color='green.500'>LIGADO!</Text> : <Text fontWeight='bold' color='red.500'>DESLIGADO!</Text>}</Text>
      </VStack>
    </Box>
  )
}