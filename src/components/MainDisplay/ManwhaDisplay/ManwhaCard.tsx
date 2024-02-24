import { Card, CardBody, Heading, Image, Box, Circle } from "@chakra-ui/react";
import Manwha from "../../../data/manwha";

interface Props {
  manwha: Manwha;
  onClick: () => void;
}

const ManwhaCard = ({ manwha, onClick }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" onClick={onClick}>
      <Card>
        <Image src={manwha.image} boxSize="sm" />
        <Circle
          bg="red"
          color="white"
          position="absolute"
          float="left"
          top="2"
          left="2"
          fontWeight="bold"
        >
          {"‎ " + manwha.chapter + " ‎"}
        </Circle>
        <CardBody>
          <Heading fontSize="md">{manwha.name}</Heading>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ManwhaCard;
