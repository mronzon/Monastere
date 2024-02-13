import { HStack, Image } from '@chakra-ui/react'
import { TbBooks } from "react-icons/tb";
import ThemeButton from './ThemeButton';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <TbBooks size={"40px"}/>
      <ThemeButton />
    </HStack>
  )
}

export default NavBar