import { Box, Flex, VStack, HStack, Button, Switch } from "native-base";
import React, { useState } from "react";
import BoxIcon from "../components/BoxIcon";

export default function Functions() {
  return (
    <Flex flex={1} justifyContent='center'>
      <VStack alignItems='center' space={12}>
        <HStack space='4'>
          <BoxIcon route='Led' icon='https://cdn0.iconfinder.com/data/icons/electronic-components/567/Led-01-512.png' title="Ligue/Desligue um LED" />
          <BoxIcon route='RGB' icon='https://media.istockphoto.com/vectors/rgb-led-bulb-rgb-led-lamp-vector-icon-vector-id820362222?k=20&m=820362222&s=170667a&w=0&h=rc83Mz1_QDa3kTz5X8593XTann_Q9I1HFvK7bPtMA9o=' title="Controle a cor RGB do LED" />
        </HStack >
        <HStack space='4'>
          <BoxIcon route='RAIN' icon='https://cdn-icons-png.flaticon.com/512/4006/4006133.png' title="Detecte a chuva" />
          <BoxIcon route='WATER_LEVEL' icon='https://cdn3.iconfinder.com/data/icons/weather-847/135/27-512.png' title="Nível de Água" />
        </HStack >
      </VStack>
    </Flex>
  )
}