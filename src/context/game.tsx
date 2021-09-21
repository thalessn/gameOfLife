import React, { createContext, useContext, useState } from "react";

interface IGameContext {
    isStarted: boolean;
    setStarted(play: boolean): void;
    isClean: boolean;
    setClean(clean: boolean): void;
    isFilled: boolean;
    setFilled(filled: boolean): void;
}

const GameContext = createContext<IGameContext>({} as IGameContext);

export const GameProvider: React.FC = ({ children }) => {
    const [isStarted, setStarted] = useState(false);
    const [isClean, setClean] = useState(false);
    const [isFilled, setFilled] = useState(false);

    return (
        <GameContext.Provider value={{ isStarted, setStarted, isClean, setClean, isFilled, setFilled }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame(): IGameContext {
    const context = useContext(GameContext);

    if (!context) {
        throw new Error("useAuth ust be used within an GameProvider");
    }

    return context;
}



