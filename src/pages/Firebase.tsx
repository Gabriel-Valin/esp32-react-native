import { Box, Text, Input, TextArea, Button } from "native-base";
import { useEffect, useState } from "react";
import { getConfigFibrease, setConfigFirebase } from "../utils/getConfigFirebase";

export default function Firebase() {
  const [textAreavValue, setTextAreaValue] = useState<string|undefined>()

  useEffect(() => {
    const firebaseConfig = async () => {
      const result = await getConfigFibrease('@firebase_config')
      setTextAreaValue(result)
    }

    firebaseConfig()
  }, [])

  return (
    <Box flex={1} alignItems='center' justifyContent='center' p={8}>
      <Text fontWeight='bold' fontSize={22} textAlign='center'>
        Cole aqui a configuração do seu banco de dados:
      </Text>
      <TextArea onChangeText={text => setTextAreaValue(text)} value={textAreavValue} mt={8} h={80} placeholder="" maxW="300" />
      <Button onPress={() => setConfigFirebase(textAreavValue)} mt={8} bg='green.600'>Salvar Configuração</Button>
    </Box>
  )
}