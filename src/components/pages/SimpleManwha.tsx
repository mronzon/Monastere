import {
  HStack,
  Image,
  Text,
  Stack,
  StackDivider,
  Card,
  VStack,
  Heading,
  AbsoluteCenter,
  Spinner,
} from "@chakra-ui/react";
import { ManwhaState } from "../../data/redux/manwhaSoloSlice";
import ManwhaInfo from "../../data/manwhaInfo";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hookStore";
import { RootState } from "../../store";

const SimpleManwha = () => {
  const elt = useAppSelector((state: RootState) => state.manwha);
  const [manwhaInfo, setManwhaInfo] = useState<ManwhaInfo>();
  const [manwha, setManwha] = useState<ManwhaState>(elt);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const json = JSON.stringify({
      link: manwha.link,
      source: manwha.source,
    });
    axios
      .post<ManwhaInfo>("http://127.0.0.1:8000/api/search/chapters", json, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setManwhaInfo(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const viewChapter = (chapter: string, number: string) => {
    localStorage.setItem("chapterLink", JSON.stringify(chapter));
    localStorage.setItem("chapterNumber", JSON.stringify(number));
    navigate("/viewchapter");
  };

  if (loading)
    return (
      <AbsoluteCenter axis="both">
        <Spinner size="xl" />
      </AbsoluteCenter>
    );
  console.log(manwhaInfo);
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
          <Card key={index} onClick={() => viewChapter(item.link, item.number)}>
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
