import React from "react";
import { Container, Button } from "./styles";
import { useGame } from "../../hooks/game";

const Footer: React.FC = () => {
  const {isStarted, setStarted} = useGame();
  const handleStart = () => {
    if (!isStarted)  
        setStarted(!isStarted);
  }

  const handleStop = () => {
    if(isStarted)
        setStarted(!isStarted);
  }
  return (
    <Container>
      <Button
        onClick={handleStart}
        design={"start"}
      >Iniciar</Button>
      <Button
        onClick={handleStop}
        design={"stop"}
      >
          Parar
      </Button>
      <Button
        design={"clean"}
      >
          Limpar Grid
      </Button>
    </Container>
  );
};

export default Footer;
