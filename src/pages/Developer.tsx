import { Box, Text } from "native-base";
import { Linking } from "react-native";
import Profile from "../components/ProfilePage";
import { valin } from "../utils/profiles";

export default function Developer() {
  return (
    <Profile name={valin.name} picture={valin.picture}>
      <Text paddingTop={8} textAlign='justify'>
        Gabriel Valin, tem 23 anos, trabalha atualmente como Software Engineer na software house Nimbus House, uma das mais eficientes de todo o Brasil e estudante de Análise e Desenvolvimento na FATEC Botucatu.
      </Text>
      <Text paddingTop={8} textAlign='justify'>
        Tem um apreço maior por sistemas voltados para WEB, mas também é um grande entusiasta de Linux e IoT, suas tecnologias favoritas são: Javascript, Typescript, Ecossistema React, C++, MongoDB, Docker e AWS.
      </Text>
      <Text paddingTop={8} textAlign='justify'>
        Um dos criadores do blog 
      </Text>
      <Text underline={true} color='blue.400' onPress={() => Linking.openURL('https://engenhariadesoftware-fatec.vercel.app/')}>Engenharia de Software - Fatec Botucatu</Text> 
    </Profile>
  )
}