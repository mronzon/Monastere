import axios from "axios";
import { useEffect, useState } from "react";
import Manwha from "../../data/manwha";
import ManwhaGrid from "../MainDisplay/ManwhaDisplay/ManwhaGrid";
import { useNavigate } from "react-router-dom";
import { AbsoluteCenter, Box, Heading, Spinner } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { AppDispatch } from "../../store";
import {
  updateImage,
  updateLink,
  updateName,
  updateSource,
} from "../../data/redux/manwhaSoloSlice";
import { useAppDispatch } from "../../hooks/hookStore";

interface DataManwha {
  source: string;
  data: Manwha[];
}

interface Props {
  searchText: string;
}

const Explorer = ({ searchText }: Props) => {
  const [loading, setLoading] = useState(false);
  const [manwhas, setManwhas] = useState<DataManwha[]>([]);
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const json = JSON.stringify({ querry: searchText });
    setLoading(true);
    if (searchText === "" || searchText === undefined) {
      axios
        .post("http://127.0.0.1:8000/api/search/sources", {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          setLoading(false);
          setManwhas(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://127.0.0.1:8000/api/search/manwhas", json, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          setLoading(false);
          setManwhas(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchText]);

  const viewManwha = (manwha: Manwha, source: string) => {
    dispatch(updateName(manwha.name));
    dispatch(updateImage(manwha.image));
    dispatch(updateLink(manwha.link));
    dispatch(updateSource(source));
    navigate("/simpleManwha");
  };
  console.log(searchText);
  if (loading)
    return (
      <AbsoluteCenter axis="both">
        <Spinner size="xl" />
      </AbsoluteCenter>
    );
  return (
    <Accordion allowMultiple>
      {manwhas.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Heading>
                {item.source} ({item.data.length})
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <ManwhaGrid
              loading={loading}
              data={item.data}
              showManwha={viewManwha}
              source={item.source}
            />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Explorer;
