import { Box, Image, ScrollView, Text, VStack } from "native-base";
import React from "react";

export default function Esp32() {
  return (
    <Box flex={1} alignItems='center' justifyContent='center' p={8} overflow='scroll'>
      <Image source={{ uri: 'https://c.na207.content.force.com/servlet/servlet.ImageServer?id=0150h000004xFfKAAU&oid=00DE0000000c48tMAA' }} alt='Internet das coisas' size='xl' />
      <VStack space={2} mt={4}>
        <ScrollView>
          <Text py={2} textAlign='justify'>
            O módulo ESP32 é um módulo de alta performance para aplicações envolvendo wifi, contando com um baixíssimo consumo de energia. Com 4 MB de memória flash, o ESP32 permite criar variadas aplicações para projetos de IoT, acesso remoto, webservers e dataloggers, entre outros. (filipeflop.com)
          </Text>
          <Text py={2} textAlign='justify'>
            Uma vantagem extrema do ESP32 em relação a outros microcontroladores é sua CPU de 32bits, até um tempo atrás estavamos satisfeitos com 8bits, achando que estavamos potencializando o máximo dos microcontroladores. Com esse avanço tecnológico imenso, é difícil dizer o que é possível fazer com estes pequenos dispositivos, sendo imensas ideias e projetos.
          </Text>
        </ScrollView>
      </VStack>
    </Box>
  )
}