import { useEffect, useState } from "react"
import { onValue, ref, update } from 'firebase/database';
import { db } from "../utils/getConfigFirebase";
import { Switch,  Text, Box, VStack, HStack} from 'native-base';
import { Loading } from "../components/Loading"
import { PresenceStatus } from "../enums/SensorTypes";
import { FirebasePaths } from "../enums/FirebasePathTypes";

export default function Presence() {
  const [loading, setLoading] = useState(true)
  const [presence, setPresence] = useState(false)

  useEffect(() => {
    onValue(ref(db, FirebasePaths.PRESENCE_TURN), 
      (snapshot) => {
        const status = snapshot.val() == PresenceStatus.PRESENCE_ON ? true : false
        setPresence(status)
    })

    setLoading(false)
  }, [])

  const handlePresenceChange = (value: any) => {
    const status = value ? PresenceStatus.PRESENCE_ON : PresenceStatus.PRESENCE_OFF;
    update(ref(db), { 'presence/turn': status })
    setPresence(value);
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <>
      {loading && <Loading message="Carregando informacoes..."/>}
      {!loading && <Box flex={1} alignItems="center" justifyContent="center" p={8}>
        <VStack space={4}>
        <Box alignItems="center" bgColor="yellow.100" p={8} shadow="8" borderRadius={10}>
          <Text fontSize={18} textAlign="center" fontWeight="bold">Sensor de Presenca (STATUS)</Text>
          <HStack alignItems="center">
            <Text>Desligado</Text>
            <Switch m={6} value={presence} onValueChange={handlePresenceChange} />
            <Text>Ligado</Text>
          </HStack>
        </Box>
      </VStack> 
      </Box>}
    </>
  )
}
