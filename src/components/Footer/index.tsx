import React from "react";
import { Container, Button } from "./styles";
import { useGame } from "../../context/game";

const Footer: React.FC = () => {
  const {isStarted, setStarted, setClean, setFilled} = useGame();
  const handleStartOrStop = () => {
    if (isStarted)  
        setStarted(!isStarted);
    else
      setStarted(!isStarted);
  }

  const handleClean = () => {
    setClean(true);
    if (isStarted) {  
        setStarted(!isStarted);
    }
  }

  const handleFill = () => {
    setFilled(true);
  }

  return (
    <Container>
      <Button
        onClick={handleStartOrStop}
        design={isStarted ? "stop" : "start"}
      >{isStarted ? "Parar" : "Iniciar"}</Button>
      <Button
        design={"clean"}
        onClick={handleClean}
      >
        Limpar Grid
      </Button>
      <Button
        design={"random"}
        onClick={handleFill}
      >
        Aleatório
      </Button>
    </Container>
  );
};

export default Footer;
