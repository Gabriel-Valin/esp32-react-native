import { Box, Image, ScrollView, Text, VStack } from "native-base";
import React from "react";

export default function IoTDetails() {
  return (
    <Box flex={1} alignItems='center' justifyContent='center' p={8} overflow='scroll'>
      <Image source={{ uri: 'https://geekonomics.com.br/wp-content/uploads/2017/10/Internet-of-Things-01.png' }} alt='Internet das coisas' size='xl' />
      <VStack space={2} mt={4}>
        <ScrollView>
          <Text py={2} textAlign='justify'>
            Internet das coisas é um conceito que se refere à interconexão digital de objetos cotidianos com a internet, conexão dos objetos mais do que das pessoas. Em outras palavras, a internet das coisas nada mais é que uma rede de objetos físicos capaz de reunir e de transmitir dados. (Wikipedia)
          </Text>
          <Text fontWeight='bold' py={2} fontSize={20} textAlign='left'>
            Exemplos do dia a dia:
          </Text>
          <Text py={2} textAlign='justify'>
            Casa: existem inúmeros aparelhos baseados em IoT, por exemplo, a Smart TV, termostatos, geladeiras e fechaduras inteligentes.
          </Text>
          <Text py={2} textAlign='justify'>
            Wearable: são equipamentos “vestíveis”, ou seja, acessórios que utilizamos no corpo, como os smartwatches e fones de ouvido.
          </Text>
          <Text py={2} textAlign='justify'>
            Saúde: a tecnologia ajuda na integração com o prontuário do paciente. Com isso, alterações no estado clínico, como alteração na pressão sanguínea e frequência cardíaca, são rapidamente atualizadas no registro, otimizando o atendimento médico.
          </Text>
          <Text py={2} textAlign='justify'>
            Agricultura: os sensores IoT ajudam no monitoramento da temperatura, umidade do solo e do ar, ativando automaticamente os sistemas de irrigação, quando necessário.
          </Text>
        </ScrollView>
      </VStack> 
    </Box>
  )
}