import axios from "axios";
import { useEffect, useState } from "react";
import Manwha from "../../data/manwha";
import ManwhaGrid from "../MainDisplay/ManwhaDisplay/ManwhaGrid";

const Explorer = () => {
  const [loading, setLoading] = useState(true);
  const [manwhas, setManwhas] = useState<Manwha[]>([]);

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

  return <ManwhaGrid loading={loading} data={manwhas} />;
};

export default Explorer;
