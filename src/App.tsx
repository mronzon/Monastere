import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import OptionList from "./components/OptionList";
import { useState } from "react";

export interface ManwhaQuery {
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [pageSelected, setPage] = useState(1);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "aside"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar setPage={setPage} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <OptionList pageSelected={pageSelected} setPage={setPage} />
        </GridItem>
      </Show>
      <Show below="lg">
        <GridItem area="aside" backgroundColor="blue">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" backgroundColor="red">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
