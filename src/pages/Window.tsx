import { useEffect, useState } from 'react';
import { db } from "../utils/getConfigFirebase";
import { onValue, ref, update } from 'firebase/database';
import { Switch,  Text, Box, VStack, HStack} from 'native-base';
import { Loading } from '../components/Loading';
import { WindowSensor } from '../enums/SensorTypes';
import { FirebasePaths } from '../enums/FirebasePathTypes';

export default function Window() {
  const [windowAutomatic, setWindowAutomatic] = useState(false)
  const [command, setCommand] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onValue(ref(db, FirebasePaths.WINDOW_AUTOMATIC), 
      (snapshot) => {
        const status = snapshot.val() == WindowSensor.AUTOMATIC_ON ? true : false
        setWindowAutomatic(status)
    })
    onValue(ref(db, FirebasePaths.WINDOW_COMMAND), 
      (snapshot) => {
        const status = snapshot.val() == WindowSensor.COMMAND_OPEN ? true : false
        setCommand(status)
    })

    setLoading(false)
  }, [])

  const handleWindowAutomaticChange = async (value: any) => {
    const status = value ? WindowSensor.AUTOMATIC_ON : WindowSensor.AUTOMATIC_OFF;
    update(ref(db), { 'window/automatic': status })
    setWindowAutomatic(value);
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  };

  const handleCommandChange = (value: any) => {
    const status = value ? WindowSensor.COMMAND_OPEN : WindowSensor.COMMAND_CLOSE;
    update(ref(db), { 'window/command': status })
    setCommand(value);
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  };

  return (
    <>
    {!loading && <Box flex={1} alignItems="center" justifyContent="center" p={8}>
      <VStack space={4}>
        <Box alignItems="center" bgColor="yellow.100" p={8} shadow="8" borderRadius={10}>
          <Text fontSize={18} textAlign="center" fontWeight="bold">Desligue ou Ligue o modo automatico da janela</Text>
          <HStack alignItems="center">
            <Text>Desligado</Text>
            <Switch m={6} value={windowAutomatic} onValueChange={handleWindowAutomaticChange} />
            <Text>Ligado</Text>
          </HStack>
        </Box>
        {!windowAutomatic && <Box alignItems="center" bgColor="yellow.200" p={8} shadow="8" borderRadius={10}>
          <Text fontSize={18} textAlign="center" fontWeight="bold">Abra e feche a janela manualmente</Text>
          <HStack alignItems="center">
            <Text>Fechada</Text>
            <Switch m={6} value={command} colorScheme="green" onValueChange={handleCommandChange} />
            <Text>Aberta</Text>
          </HStack>
        </Box>}
      </VStack>
    </Box>}
      {loading && <Loading message="Carregando informações..." />}
    </>
  )
}
