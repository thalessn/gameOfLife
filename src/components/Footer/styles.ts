import styled, { css } from "styled-components";

interface IButtonProps {
  design?: "start" | "stop" | "clean" | "random"
}

export const Container = styled.footer`
  margin: 15px 15px;
  height: 56px;
  display: flex;
  justify-content: center;
`;


const buttonTypeVariations = {
  start: css`
    background-color: #2ea44f;
  `,
  stop: css`
    background-color: #ee4035;
  `,
  clean: css`
    background-color:  #708090;
  `,
  random: css`
  background-color:  #0077b6;
`,
}

export const Button = styled.button<IButtonProps>`
  align-items: center;
  background-clip: padding-box;
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: 180px;

  ${props => buttonTypeVariations[props.design || "start"]}

  &:hover {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }
`;
