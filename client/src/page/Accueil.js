import ShowAllBillet from "../components/billet/ShowAllBillet";
import Page from "../template/Page";

const Accueil = () => {
    return (
        <Page main={<ShowAllBillet />} />
       );
}
export default Accueil;