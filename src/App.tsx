import { Box, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PageList from "./components/PageList";
import { useState } from "react";
import ManwhaGrid from "./components/MainDisplay/ManwhaDisplay/ManwhaGrid";
import MainItem from "./components/MainDisplay/MainItem";

export interface ManwhaQuery {
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [query, setQuery] = useState<ManwhaQuery>({} as ManwhaQuery);
  const [pageSelected, setPage] = useState(1);

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
      <GridItem area="nav">
        <NavBar
          setPage={setPage}
          onSearch={(searchText: string) => setQuery({ ...query, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <PageList
            pageSelected={pageSelected}
            setPage={setPage}
            bottom={false}
          />
        </GridItem>
      </Show>
      <Show below="lg">
        <GridItem area="aside">
          <PageList
            pageSelected={pageSelected}
            setPage={setPage}
            bottom={true}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <MainItem pageSelected={pageSelected} />
      </GridItem>
    </Grid>
  );
};

export default App;
