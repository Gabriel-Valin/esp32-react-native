import { Box, Spinner, Text} from "native-base"

type ComponentProps = {
  message: string
}

export const Loading = ({ message }: ComponentProps) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Spinner size={40} /> 
      <Text fontSize={16}>{message}</Text>
    </Box>
  )
}
