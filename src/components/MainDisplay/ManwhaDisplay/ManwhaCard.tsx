import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import Manwha from "../../../data/manwha";

interface Props {
  manwha: Manwha;
}

const ManwhaCard = ({ manwha }: Props) => {
  return (
    <Card>
      <Image src={manwha.image} />
      <CardBody>
        <Heading fontSize="md">{manwha.name}</Heading>
        <Text fontSize="md">Chapter {manwha.chapter}</Text>
      </CardBody>
    </Card>
  );
};

export default ManwhaCard;
