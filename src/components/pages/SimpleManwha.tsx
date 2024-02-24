import {
  HStack,
  Image,
  Text,
  Stack,
  StackDivider,
  Card,
} from "@chakra-ui/react";
import Manwha from "../../data/manwha";
import ManwhaInfo from "../../data/manwhaInfo";

interface Props {
  manwhaInfo: ManwhaInfo;
  manwha: Manwha;
}

const SimpleManwha = ({ manwha, manwhaInfo }: Props) => {
  return (
    <>
      <HStack>
        <Image src={manwha.image} boxSize="sm" />
        <Text>{manwhaInfo.description}</Text>
      </HStack>
      <br />

      <Stack divider={<StackDivider />} spacing={3}>
        {manwhaInfo.chapters.map((item, index) => (
          <Card key={index}>
            <Text fontSize="xl" as="b">
              {item.number}
            </Text>
            <Text fontSize="sm">{item.date}</Text>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default SimpleManwha;
