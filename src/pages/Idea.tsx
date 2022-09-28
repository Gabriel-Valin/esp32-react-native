import { Box, Text } from "native-base";
import { Linking } from "react-native";
import Profile from "../components/ProfilePage";
import { rall } from "../utils/profiles";

export default function Idea() {
  return (
    <Profile name={rall.name} picture={rall.picture}>
      <Text paddingTop={8} textAlign='justify'>
        Ricardo Rall, tem 54 anos, trabalha atualmente como Professor da Fatec Botucatu, ministrando as disciplinas Toesi - Automação de Sistemas,  Redes de Computadores, Segurança de Dados,  Laboratório de Hardware e Gestão de Projetos,  além de ser o Diretor Financeiro e Administrativo do Parque Tecnológico de Botucatu.
      </Text>
      <Text paddingTop={8} textAlign='justify'>
        Atua desde 1990 na área de desenvolvimento de sistemas, infraestrutura de redes e grande entusiasta de automação de sistemas utilizando a plataforma Arduino.
      </Text>
    </Profile>
  )
}