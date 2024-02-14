import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement
          onClick={() => {
            if (ref.current) onSearch(ref.current.value);
          }}
        >
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          variant={"filled"}
          placeholder="Rechercher"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
