import React from "react";
import { Container } from "./styles";

interface IItemBoardProps {
  handleOnClick: () => void;
  isPaint: number;
}

const ItemBoard: React.FC<IItemBoardProps> = ({ handleOnClick, isPaint }) => {
  return <Container onClick={() => handleOnClick()} isPaint={isPaint} />;
};

export default ItemBoard;
