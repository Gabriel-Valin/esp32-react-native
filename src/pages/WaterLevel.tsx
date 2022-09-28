import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { Box, Text, VStack, Image, Switch } from "native-base";
import React, { useEffect, useMemo, useState } from "react";
import * as Progress from 'react-native-progress';
import { getConfigFibrease } from "../utils/getConfigFirebase";

export default function WaterLevel() {
  const app = initializeApp(getConfigFibrease());
  const database = getDatabase(app);
  
  const [levelText, setLevelText] = useState('')
  const [level, setLevel] = useState(0)
  const [colorLevel, setColorLevel] = useState('')

  const levelTexts = useMemo(() => [
    'O nível de água está abaixo do padrão',
    'O nível de água está em um nível estável',
    'O nível de água está maior que o normal, confira seu recipiente'
  ], [])

  useEffect(() => {
    onValue(ref(database, 'waterLevel'), querySnapShot => {
      let data = querySnapShot.val();
      setLevel((parseInt(data) / 40.95) / 100);
    })
    
    if (level <= 0.49) {
      setLevelText(levelTexts[0])
      setColorLevel('blue')
    } 
    if (level >= 0.5) {
      setLevelText(levelTexts[1])
      setColorLevel('green')
    }
    if (level >= 0.8) {
      setLevelText(levelTexts[2])
      setColorLevel('red')
    } 
  }, [level, colorLevel, levelText])


  return (
    <Box flex={1} alignItems='center' justifyContent='center'>
      <VStack justifyContent='center' alignItems='center' space={12}>
        <Text textAlign='center'>{levelText}</Text>
        <Progress.Circle color={colorLevel} showsText={true} progress={level} thickness={10} size={200} indeterminate={false} />
      </VStack>
    </Box>
  )
}