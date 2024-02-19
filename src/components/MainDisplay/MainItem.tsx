import Library from "./ManwhaDisplay/Library";
import MajDisplay from "./MajDisplay";
import Explorer from "./ManwhaDisplay/Explorer";

interface Prop {
  pageSelected: number;
}

const MainItem = ({ pageSelected }: Prop) => {
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
