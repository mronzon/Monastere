import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "aside"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" backgroundColor="orange">
          Aside
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
