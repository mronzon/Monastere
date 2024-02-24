import {
  HStack,
  Image,
  Text,
  Stack,
  StackDivider,
  Card,
  VStack,
  Heading,
} from "@chakra-ui/react";
import Manwha from "../../data/manwha";
import ManwhaInfo from "../../data/manwhaInfo";
import { useState, useEffect } from "react";
import axios from "axios";

const SimpleManwha = () => {
  const [manwhaInfo, setManwhaInfo] = useState<ManwhaInfo>();
  const [manwha, setManwha] = useState<Manwha>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const elt = localStorage.getItem("showManwha");
    if (elt !== null) {
      setManwha(JSON.parse(elt));
      const m = JSON.parse(elt);
      const json = JSON.stringify({
        url: m?.link,
        source: "Asura",
      });
      axios
        .post<ManwhaInfo>("http://127.0.0.1:9000/api/get-chapters", json, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          setManwhaInfo(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  if (loading) return <div>Loading</div>;

  return (
    <>
      <HStack>
        <Image src={manwha?.image} boxSize="sm" />
        <VStack>
          <Heading>{manwha?.name}</Heading>
          <Text>{manwhaInfo?.description}</Text>
        </VStack>
      </HStack>
      <br />

      <Stack divider={<StackDivider />} spacing={3}>
        {manwhaInfo?.chapters.map((item, index) => (
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
