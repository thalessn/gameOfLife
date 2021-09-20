import styled from "styled-components";

interface IBoardProps {
    width: number;
    height: number;
    numberOfRows: number;
    numberOfColumns: number;
    sizeItemBoard: number;
}

export const Grid = styled.div<IBoardProps>`
    display: grid;
    background-color: coral;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    grid-template-columns: repeat(${props => props.numberOfColumns}, ${props => props.sizeItemBoard}px);
    grid-template-rows: repeat(${props => props.numberOfRows}, ${props => props.sizeItemBoard}px);
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
`; 