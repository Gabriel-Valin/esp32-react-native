import { Box, Flex, VStack, HStack, Button, Switch } from "native-base";
import React, { useState } from "react";
import BoxIcon from "../components/BoxIcon";

export default function Functions() {
  return (
    <Flex flex={1} alignItems='center' py={20}>
      <VStack space={12}>
        <HStack space='4'>
          <BoxIcon route='Led' icon='https://cdn0.iconfinder.com/data/icons/electronic-components/567/Led-01-512.png' title="Ligue/Desligue um LED" />
          <BoxIcon route='RGB' icon='https://cdn0.iconfinder.com/data/icons/electronic-components/567/Led-01-512.png' title="Controle a cor RGB do LED" />
        </HStack >
      </VStack>
    </Flex>
  )
}