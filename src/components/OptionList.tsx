import {
  HStack,
  Heading,
  ListItem,
  List,
  Button,
  Spinner,
} from "@chakra-ui/react";
import usePages from "../hooks/useOptions";

interface Props {
  pageSelected: number;
  setPage: (pageId: number) => void;
}

const OptionList = ({pageSelected, setPage}: Props) => {
  const { data, isLoading } = usePages();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2x1"} marginTop={9} marginBottom={2}>
        Pages
      </Heading>
      <List>
        {data.map((page) => (
          <ListItem key={page.id} paddingY="5px">
            <HStack>
              <Button
                size={"md"}
                width={"60%"}
                onClick={() => setPage(page.id)}
                fontSize="md"
                colorScheme={page.id === pageSelected ? "blue" : "gray"}
              >
                {page.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default OptionList;
