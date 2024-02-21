import Library from "./ManwhaDisplay/Library";
import MajDisplay from "./MajDisplay";
import Explorer from "./ManwhaDisplay/Explorer";
import { useEffect, useState } from "react";
import axios from "axios";
import Manwha from "../../data/manwha";

interface Prop {
  pageSelected: number;
}

const MainItem = ({ pageSelected }: Prop) => {
  const [manwhaSelected, setManwha] = useState<Manwha>();

  useEffect(() => {
    if (manwhaSelected !== undefined) {
      const json = JSON.stringify({
        url: manwhaSelected?.link,
        source: "Asura",
      });
      axios
        .post("http://127.0.0.1:9000/api/get-chapters", json, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [manwhaSelected]);

  switch (pageSelected) {
    case 1:
      return <Library />;
    case 2:
      return <MajDisplay />;
    case 3:
      return <Explorer selectManwha={setManwha} />;
    default:
      return <div>Erreur dans le choix de la page</div>;
  }
};

export default MainItem;
