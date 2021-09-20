import styled, { css } from "styled-components";

interface IContainerProps {
  isPaint: number;
}

export const Container = styled.div<IContainerProps>`
  width: 25px;
  height: 25px;
  border: solid 1px black;
  margin: 0.5;

  ${(props) =>
    props.isPaint &&
    css`
      background-color: #ffd942;
    `}
`;
