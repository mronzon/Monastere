import { Card, CardBody, Heading, Box, Circle, Image } from "@chakra-ui/react";
import { FaBookBookmark } from "react-icons/fa6";

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
        {manwha.liked && (
          <Circle
            top="2"
            right="2"
            position="absolute"
            float="right"
            bg="red"
            color="white"
            size={7}
          >
            <FaBookBookmark />
          </Circle>
        )}
        <CardBody>
          <Heading fontSize="md">{manwha.name}</Heading>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ManwhaCard;
