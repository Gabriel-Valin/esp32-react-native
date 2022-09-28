import { Box, Text, VStack, ScrollView, Image } from "native-base";

export default function Firebase() {
  return (
    <Box flex={1} alignItems='center' justifyContent='center' p={8} overflow='scroll'>
      <Image source={{ uri: 'https://www.gstatic.com/devrel-devsite/prod/vab219352c525c8fb05bd0fd3ca06d9eb1d0a150a1bba4081d8880459dfe83504/firebase/images/touchicon-180.png' }} alt='Internet das coisas' size='xl' />
      <VStack space={2} mt={4}>
        <ScrollView>
          <Text py={2} textAlign='justify'>
            O Firebase é um conjunto de serviços de hospedagem para qualquer tipo de aplicativo. Oferece hospedagem NoSQL e em tempo real de bancos de dados, conteúdo, autenticação social e notificações, ou serviços, como um servidor de comunicação em tempo real.
          </Text>
          <Text py={2} textAlign='justify'>
            Também é uma plataforma de desenvolvimento de aplicativos que ajuda você a criar e desenvolver aplicativos e jogos que os usuários amam. Com o apoio do Google e a confiança de milhões de empresas no mundo todo. 
          </Text>
        </ScrollView>
      </VStack>
    </Box>
  )
}