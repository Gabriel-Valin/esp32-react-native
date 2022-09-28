import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { Box, Text, VStack, Image } from "native-base";
import { useEffect, useMemo, useState } from "react";
import { getConfigFibrease } from "../utils/getConfigFirebase";

export default function Rain() {
  const app = initializeApp(getConfigFibrease());
  const database = getDatabase(app);
  
  const [levelText, setLevelText] = useState('')
  const [level, setLevel] = useState(0)
  
  const levelTexts = useMemo(() => [
    'Não está chovendo',
    'Cuidado! Chuva forte!!!!'
  ], [])

  useEffect(() => {
    onValue(ref(database, 'rain'), querySnapShot => {
      let data = querySnapShot.val();
      setLevel((parseInt(data)));
    })
    
    if (level == 1) {
      setLevelText(levelTexts[1])
    } else {
      setLevelText(levelTexts[0])
    }
    
  }, [level, levelText])

  return (
    <Box flex={1} alignItems='center' justifyContent='center'>
      <VStack justifyContent='center' alignItems='center' space={12}>
        <Text fontSize={20} textAlign='center'>{levelText}</Text>
        <Image source={{ uri: `${level == 0 ? 'https://cdn-icons-png.flaticon.com/512/831/831682.png' : 'https://cdn2.iconfinder.com/data/icons/weather-filled-outline-3/64/weather07-512.png'}` }} alt='LED ON OFF' size='lg' />
      </VStack>
    </Box>
  )
}