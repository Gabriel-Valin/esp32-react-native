import { Switch, Text, Box, VStack, HStack} from 'native-base';
import { db } from "../utils/getConfigFirebase";
import { onValue, ref, update } from 'firebase/database';
import { LDRSensor } from '../enums/SensorTypes';
import { useEffect, useState } from 'react';
import { FirebasePaths } from '../enums/FirebasePathTypes';
import { Loading } from '../components/Loading';

export default function Luminosity() {
  const [ldr, setLdr] = useState(false)
  const [command, setCommand] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onValue(ref(db, FirebasePaths.LDR_ON), 
      (snapshot) => {
        const status = snapshot.val() == LDRSensor.LDR_STATUS_ON ? true : false
        setLdr(status)
    })
    onValue(ref(db, FirebasePaths.LDR_COMMAND), 
      (snapshot) => {
        const status = snapshot.val() == LDRSensor.LDR_COMMAND_ON ? true : false
        setCommand(status)
    })

    setLoading(false)
  }, [])

  const handleLDRSensorChange = async (value: any) => {
    const status = value ? LDRSensor.LDR_STATUS_ON : LDRSensor.LDR_STATUS_OFF;
    update(ref(db), { 'ldr/turn': status })
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  };

  const handleLDRCommandChange = async (value: any) => {
    const command = value ? LDRSensor.LDR_COMMAND_ON : LDRSensor.LDR_COMMAND_OFF;
    update(ref(db), { 'ldr/command': command })
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  };
  
  return (
    <>
      {!loading && <Box flex={1} alignItems="center" justifyContent="center" p={8}>
    <VStack space={4}>
      <Box alignItems="center" bgColor="yellow.100" p={8} shadow="8" borderRadius={10}>
        <Text fontSize={18} textAlign="center" fontWeight="bold">Ative o sensor de luminosidade</Text>
        <HStack alignItems="center">
          <Text>Desligado</Text>
          <Switch m={6} value={ldr} onValueChange={handleLDRSensorChange} />
          <Text>Ligado</Text>
        </HStack>
      </Box>
      {!ldr && <Box alignItems="center" bgColor="yellow.100" p={8} shadow="8" borderRadius={10}>
        <Text fontSize={18} textAlign="center" fontWeight="bold">Ligue e desligue a lampada da varanda</Text>
        <HStack alignItems="center">
          <Text>Desligada</Text>
          <Switch m={6} value={command} onValueChange={handleLDRCommandChange} />
          <Text>Ligada</Text>
        </HStack>
      </Box> }
    </VStack>
    </Box> }
      {loading && <Loading message="Carregando informações..." />}

    </>
  )
}
