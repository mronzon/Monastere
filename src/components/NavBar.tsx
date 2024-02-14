import { HStack } from "@chakra-ui/react";
import { TbBooks } from "react-icons/tb";
import ThemeButton from "./ThemeButton";
import SearchInput from "./SearchInput";

interface Props {
  setPage: (pageId: number) => void;
  onSearch: (searchText: string) => void;
}

const NavBar = ({ setPage, onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <TbBooks size={"40px"} onClick={() => setPage(1)} />
      <SearchInput onSearch={onSearch} />
      <ThemeButton />
    </HStack>
  );
};

export default NavBar;
