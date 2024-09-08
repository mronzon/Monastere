import axios from "axios";
import { useEffect, useState } from "react";
import Manwha from "../../data/manwha";
import ManwhaGrid from "../MainDisplay/ManwhaDisplay/ManwhaGrid";
import { useNavigate } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

interface DataManwha {
  source: string;
  data: Manwha[];
}

interface Props {
  searchText: string;
}

const Explorer = ({ searchText }: Props) => {
  const [loading, setLoading] = useState(true);
  const [manwhas, setManwhas] = useState<DataManwha[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (manwhas.length !== 0) {
      return;
    }
    const elt = localStorage.getItem("manwhas");
    if (elt !== null) {
      setManwhas(JSON.parse(elt));
      console.log(JSON.parse(elt));
      setLoading(false);
    } else {
      setLoading(true);
      axios
        .get("http://127.0.0.1:8000/api/get-manwha", {
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
  }, []);

  useEffect(() => {
    if (manwhas.length !== 0) {
      localStorage.setItem("manwhas", JSON.stringify(manwhas));
    }
  }, [manwhas]);

  const viewManwha = (manwha: Manwha) => {
    localStorage.setItem("showManwha", JSON.stringify(manwha));
    navigate("/simpleManwha");
  };
  console.log(searchText);
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
            />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Explorer;
