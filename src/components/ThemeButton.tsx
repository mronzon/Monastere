import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ThemeButton = () => {
  const {toggleColorMode, colorMode} = useColorMode()

  return (
    <HStack>
      <Switch colorScheme={"green"} isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Mode Sombre</Text>
    </HStack>
  )
}

export default ThemeButton