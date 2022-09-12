import { Box, Text, Avatar, VStack, ScrollView } from "native-base";
import React, { ReactNode } from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";

type ProfileProps = {
  picture: string
  name: string
  children: ReactNode
}

export default function Profile({ picture, name, children }: ProfileProps) {
  return (
    <Box flex={1} alignItems='center' justifyContent='center' p={8}>
      <Avatar alignSelf='center' size='xl' bg="green.500" source={{
        uri: picture
      }}>
        {name}
      </Avatar>
      {children}
    </Box>
  )
}
