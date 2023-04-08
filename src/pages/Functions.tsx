import { Flex, VStack, HStack } from "native-base";
import BoxIcon from "../components/BoxIcon";

export default function Functions() {
  return (
    <Flex flex={1} justifyContent='center'>
      <VStack alignItems='center' space={12}>
        <HStack space='4'>
          <BoxIcon route='WINDOW' icon='https://cdn-icons-png.flaticon.com/512/2197/2197506.png' title="Controle da janela" />
          <BoxIcon route="LUMINOSITY" icon='https://cdn3.iconfinder.com/data/icons/colorful-electronic-parts/108/electronicparts-11-1024.png' title='Luminosidade' />
        </HStack >
        <HStack space='4'>
          <BoxIcon route='LIGHT' icon='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Light_Bulb_or_Idea_Flat_Icon_Vector.svg/1714px-Light_Bulb_or_Idea_Flat_Icon_Vector.svg.png' title="Luzes dos Comodos" />
          <BoxIcon route='PRESENCE' icon='https://cdn-icons-png.flaticon.com/512/2849/2849031.png' title="Sensor de Presenca" />
        </HStack >
      </VStack>
    </Flex>
  )
}
