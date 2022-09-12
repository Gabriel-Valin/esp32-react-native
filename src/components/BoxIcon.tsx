import { useNavigation } from "@react-navigation/native";
import { Box, Text, Image, Pressable } from "native-base";
import { ReactNode } from "react";
import { Navigate } from "../utils/navigate";

type BoxIconProps = {
  icon: string
  title: string
  route: string
}

export default function BoxIcon({ icon, title, route }: BoxIconProps) {
  const navigation = useNavigation<Navigate>()

  return (
    <Box>
      <Pressable onPress={() => {
        navigation.navigate(route)
      }} maxW="96">
        {({
          isPressed
        }) => {
          return (
            <Box style={{
              transform: [{
                scale: isPressed ? 0.96 : 1
              }]
            }} alignSelf="center" shadow={9} p={4} width={160} rounded='lg' bg="muted.100" _text={{
              fontWeight: "medium",
              color: "warmGray.50",
              letterSpacing: "lg"
            }}>
              <Box alignSelf='center'>
                <Image source={{ uri: icon }} alt={title} size="md" />
              </Box>
              <Text pt='2' fontWeight='bold' textAlign='center'>{title}</Text>
            </Box>
          )
        }}
      </Pressable>
    </Box>
  )
}