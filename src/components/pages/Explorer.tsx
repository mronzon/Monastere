import axios from "axios";
import { useEffect, useState } from "react";
import Manwha from "../../data/manwha";
import ManwhaGrid from "../MainDisplay/ManwhaDisplay/ManwhaGrid";
import { useNavigate } from "react-router-dom";

const Explorer = () => {
  const [loading, setLoading] = useState(true);
  const [manwhas, setManwhas] = useState<Manwha[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:9000/api/get-manwha", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setLoading(false);
        setManwhas(res.data["Asura"]);
      })
      .catch((err) => {
        console.log(err);
      });
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

  return (
    <ManwhaGrid loading={loading} data={manwhas} showManwha={viewManwha} />
  );
};

export default Explorer;
