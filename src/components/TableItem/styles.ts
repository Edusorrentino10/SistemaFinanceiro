import styled from 'styled-components';

export const TableLine = styled.tr`
    &:nth-child(2n - 1){
        background-color: #f5f5f5;
    }
`

export const TableColumn = styled.td`
    padding: 0.8rem;
`

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 6px 9px;
    border-radius: 4px;
    color: #fff;
    width: 70%;
    text-align: center;
    background-color: ${props => props.color};
    @media(max-width: 780px) {
        padding: 6px 18px;
    };
`

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
    min-width: 4rem;
`