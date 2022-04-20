import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 1.3rem;
    margin-top: 1.3rem;
`

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    @media(max-width: 610px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Input = styled.input<{ type?: string }>`
    padding: ${props => props.type === 'date' ? `4px` : `5px`};
    border-radius: 5px;
    border: 2px solid #ccc;
    width: 10rem;
    cursor: ${props => props.type === 'date' ? 'pointer': 'text'};
    @media(max-width: 610px) {
        width: 59vw;
        padding: ${props => props.type === 'date' ? `6px` : `7px`};
        text-align: center;
    }
`

export const InputSelect = styled.select`
    padding: 5px;
    border-radius: 5px;
    border: 2px solid #ccc;
    width: 10.8rem;
    cursor: pointer;
    @media(max-width: 610px) {
        width: 63vw;
    }
`

export const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    @media(max-width: 610px) {
        text-align: center;
        padding: 0.7rem;
    }
`

export const ButtonAdd = styled.button`
    height: 29px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 1.3rem;
    border: 0;
    background-color: #00a6ed;
    color: #fff;
    cursor: pointer;
    transition: filter 0.5s;
    
    &:hover {
        filter: brightness(0.95);
    }
    @media(max-width: 610px) {
        width: 63.5vw;
    }
`