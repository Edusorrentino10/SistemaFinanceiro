import styled from 'styled-components';

export const ResponsiveTable = styled.div`
    @media(max-width: 780px) {
        overflow: hidden;
        overflow-x: auto;
    };
`

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;
    
    @media(max-width: 780px) {
        border-collapse: collapse;
    };
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
    &:nth-child(n+1):nth-child(-n+3){
        padding-left: 25px;
    }
    
`;