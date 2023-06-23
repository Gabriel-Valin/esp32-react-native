import {  HStack, Flex, VStack, ScrollView } from "native-base";
import BoxIcon from "../components/BoxIcon";

export default function Home() {
  return (
    <ScrollView flex={1}>
      <Flex flex={1} alignItems='center' py={20}>
        <VStack space={12}>
          <HStack space='4'>
            <BoxIcon route='IotDetails' icon='https://cdn-icons-png.flaticon.com/512/6119/6119533.png' title="IoT"/>
            <BoxIcon route='ESP32' icon='http://domoticx.com/wp-content/uploads/2016/12/ESP32-chip-icon.png' title="ESP32 WROOM"/>
          </HStack>
          <HStack space='4'>
            <BoxIcon route='Idea' icon='https://www.iconpacks.net/icons/1/free-idea-bulb-icon-1202-thumb.png' title="Ideia" />
            <BoxIcon route='Dev' icon='https://images-na.ssl-images-amazon.com/images/I/411Mxd+TwPL.png' title="Desenvolvedor" />
          </HStack>
          <HStack space='4'>
            <BoxIcon route='Functions' icon='https://cdn-icons-png.flaticon.com/512/6213/6213787.png' title="Funcionalidades" />
            <BoxIcon route='Firebase' icon="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-dsc/events/iconfinder_google_firebase_1175544.png" title="Firebase" />
          </HStack >
        </VStack>
      </Flex>
    </ScrollView>
  )
}
