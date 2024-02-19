import { Box, SimpleGrid } from "@chakra-ui/react";
import ManwhaCardSkeleton from "./ManwhaCardSkeleton";
import Manwha from "../../../data/manwha";
import ManwhaCard from "./ManwhaCard";

interface Props {
  loading: boolean;
  data: Manwha[];
}

const ManwhaGrid = ({ loading, data }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <SimpleGrid
      columns={{ sm: 2, md: 3, lg: 4, xl: 6 }}
      padding={"10px"}
      spacing={6}
    >
      {loading &&
        skeletons.map((skeleton) => (
          <Box borderRadius={10} key={skeleton} overflow="hidden">
            <ManwhaCardSkeleton />
          </Box>
        ))}
      {!loading &&
        data.map((item, indice) => (
          <Box borderRadius={10} key={indice} overflow="hidden">
            <ManwhaCard manwha={item} />
          </Box>
        ))}
    </SimpleGrid>
  );
};

export default ManwhaGrid;
