import { Box, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import OptionList from "./components/OptionList";
import { useState } from "react";
import ManwhaGrid from "./components/ManwhaDisplay/ManwhaGrid";

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
          <OptionList
            pageSelected={pageSelected}
            setPage={setPage}
            bottom={false}
          />
        </GridItem>
      </Show>
      <Show below="lg">
        <GridItem area="aside">
          <OptionList
            pageSelected={pageSelected}
            setPage={setPage}
            bottom={true}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <ManwhaGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
