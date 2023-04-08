import { useEffect, useState } from "react";
import { Switch,  Text, Box, VStack, HStack} from 'native-base';
import { onValue, ref, update } from 'firebase/database';
import { db } from "../utils/getConfigFirebase";
import { FirebasePaths } from "../enums/FirebasePathTypes";
import { LightStatus } from "../enums/SensorTypes";
import { Loading } from "../components/Loading";

export default function Light() {
  const [loading, setLoading] = useState(true)
  const [room, setRoom] = useState(false)
  const [kitchen, setKitchen] = useState(false)

  useEffect(() => {
    onValue(ref(db, FirebasePaths.LIGHT_ROOM), 
      (snapshot) => {
        const status = snapshot.val() == LightStatus.LIGHT_ON ? true : false
        setRoom(status)
    })
    onValue(ref(db, FirebasePaths.LIGHT_KITCHEN), 
      (snapshot) => {
        const status = snapshot.val() == LightStatus.LIGHT_ON ? true : false
        setKitchen(status)
    })

    setLoading(false) 
  }, [])


  const handleRoomLightChange = (value: any) => {
    const status = value ? LightStatus.LIGHT_ON : LightStatus.LIGHT_OFF;
    update(ref(db), { 'light/room': status })
    setRoom(value);
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const handleKitchenLightChange = (value: any) => {
    const status = value ? LightStatus.LIGHT_ON : LightStatus.LIGHT_OFF;
    update(ref(db), { 'light/kitchen': status })
    setRoom(value);
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <>
      {!loading && <Box flex={1} alignItems="center" justifyContent="center" p={8}>
      <VStack space={4}>
        <Box alignItems="center" bgColor="yellow.100" p={8} shadow="8" borderRadius={10}>
          <Text fontSize={18} textAlign="center" fontWeight="bold">Luz da SALA</Text>
          <HStack alignItems="center">
            <Text>Desligada</Text>
            <Switch m={6} value={room} onValueChange={handleRoomLightChange} />
            <Text>Ligada</Text>
          </HStack>
        </Box>
        <Box alignItems="center" bgColor="yellow.200" p={8} shadow="8" borderRadius={10}>
          <Text fontSize={18} textAlign="center" fontWeight="bold">Luz da COZINHA</Text>
          <HStack alignItems="center">
            <Text>Desligada</Text>
            <Switch m={6} value={kitchen} colorScheme="green" onValueChange={handleKitchenLightChange} />
            <Text>Ligada</Text>
          </HStack>
        </Box>
      </VStack>
    </Box>}
      {loading && <Loading message="Carregando informacoes.." />}
    </>
  ) 
}
