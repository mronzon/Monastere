import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ManwhaCardSkeleton from "./ManwhaCardSkeleton";

const ManwhaGrid = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <SimpleGrid
      columns={{ sm: 2, md: 3, lg: 4, xl: 6 }}
      padding={"10px"}
      spacing={6}
    >
      {skeletons.map((skeleton) => (
        <Box borderRadius={10} key={skeleton} overflow="hidden">
          <ManwhaCardSkeleton />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ManwhaGrid;
