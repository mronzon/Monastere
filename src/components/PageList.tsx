import { HStack, Heading, ListItem, List, Button } from "@chakra-ui/react";
import pageData from "../data/pages";
interface Props {
  pageSelected: number;
  setPage: (pageId: number) => void;
  bottom: boolean;
}

const PageList = ({ pageSelected, setPage, bottom }: Props) => {
  return (
    <>
      {!bottom && (
        <>
          <Heading fontSize={"2x1"} marginTop={9} marginBottom={2}>
            Pages
          </Heading>
          <List>
            {pageData.map((page) => (
              <ListItem key={page.id} paddingY="5px">
                <HStack>
                  <Button
                    width={"100%"}
                    onClick={() => setPage(page.id)}
                    fontSize="md"
                    colorScheme={page.id === pageSelected ? "blue" : "gray"}
                    leftIcon={page.icon}
                    variant={"ghost"}
                    justifyContent="left"
                  >
                    {page.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </List>
        </>
      )}
      {bottom && (
        <HStack padding={"10px"} justifyContent={"space-between"}>
          {pageData.map((page) => (
            <Button
              size={"md"}
              onClick={() => setPage(page.id)}
              fontSize="md"
              colorScheme={page.id === pageSelected ? "blue" : "gray"}
              leftIcon={page.icon}
              key={page.id}
            >
              {page.name}
            </Button>
          ))}
        </HStack>
      )}
    </>
  );
};

export default PageList;
