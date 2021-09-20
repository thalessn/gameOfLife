import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Board from "../../components/Board";
import { Container } from "./styles";


const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Board />
      <Footer />
    </Container>
  );
};

export default Home;
