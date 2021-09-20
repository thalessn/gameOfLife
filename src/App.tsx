import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./styles/global";
import { GameProvider } from "./hooks/game"

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <GameProvider>
      <Home />
    </GameProvider>
  </>
);

export default App;
