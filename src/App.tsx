import { Grid, GridItem, Show, useColorModeValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PageList from "./components/PageList";
import { useState } from "react";
import Browser from "./components/pages/Browser";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

export interface ManwhaQuery {
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [query, setQuery] = useState<ManwhaQuery>({} as ManwhaQuery);
  const [pageSelected, setPage] = useState("/");
  const [userID, setUserID] = useState(-1);
  const navigate = useNavigate();
  const color = useColorModeValue("white", "gray.800");

  const changePage = (page: string) => {
    setPage(page);
    navigate(page);
  };
  if (userID === -1) {
    return <Login setUserID={setUserID} />;
  }
  return (
    <Grid
      templateAreas={{
        base: `"nav" "aside" "main" `,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem
        area="nav"
        position="sticky"
        top={0}
        opacity={1}
        zIndex={1}
        backgroundColor={color}
      >
        <NavBar
          setPage={changePage}
          onSearch={(searchText: string) => setQuery({ ...query, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <PageList
            pageSelected={pageSelected}
            setPage={changePage}
            bottom={false}
          />
        </GridItem>
      </Show>
      <Show below="lg">
        <GridItem area="aside">
          <PageList
            pageSelected={pageSelected}
            setPage={changePage}
            bottom={true}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Browser searchText={query.searchText} />
      </GridItem>
    </Grid>
  );
};

export default App;
