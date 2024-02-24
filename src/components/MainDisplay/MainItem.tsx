import Library from "../pages/Library";
import MajDisplay from "../pages/MajDisplay";
import Explorer from "../pages/Explorer";
import { useEffect, useState } from "react";
import axios from "axios";
import Manwha from "../../data/manwha";
import SimpleManwha from "../pages/SimpleManwha";
import ManwhaInfo from "../../data/manwhaInfo";

interface Prop {
  pageSelected: number;
}

const MainItem = ({ pageSelected }: Prop) => {
  const [manwhaSelected, setManwha] = useState<Manwha>();
  const [manwhaInfo, setManwhaInfo] = useState<ManwhaInfo>();

  useEffect(() => {
    if (manwhaSelected !== undefined) {
      const json = JSON.stringify({
        url: manwhaSelected?.link,
        source: "Asura",
      });
      axios
        .post<ManwhaInfo>("http://127.0.0.1:9000/api/get-chapters", json, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          setManwhaInfo(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [manwhaSelected]);

  useEffect(() => {
    setManwha(undefined);
    setManwhaInfo(undefined);
  }, [pageSelected]);

  if (manwhaSelected !== undefined && manwhaInfo !== undefined) {
    return <SimpleManwha manwha={manwhaSelected} manwhaInfo={manwhaInfo} />;
  }

  switch (pageSelected) {
    case 1:
      return <Library />;
    case 2:
      return <MajDisplay />;
    case 3:
      return <Explorer />;
    default:
      return <div>Erreur dans le choix de la page</div>;
  }
};

export default MainItem;
