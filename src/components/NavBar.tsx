import { HStack } from "@chakra-ui/react";
import { TbBooks } from "react-icons/tb";
import ThemeButton from "./ThemeButton";
import SearchInput from "./SearchInput";

interface Props {
  setPage: (pageId: number) => void;
}

const NavBar = ({ setPage }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <TbBooks size={"40px"} onClick={() => setPage(1)} />
      <SearchInput onSearch={(onSearch: string) => console.log(onSearch)} />
      <ThemeButton />
    </HStack>
  );
};

export default NavBar;
