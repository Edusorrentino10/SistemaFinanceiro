import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
`

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
`

export const Input = styled.input<{ type?: string }>`
    padding: ${props => props.type === 'date' ? `4px` : `5px`};
    border-radius: 5px;
    border: 2px solid #ccc;
    width: 10rem;
    cursor: ${props => props.type === 'date' ? 'pointer': 'text'};
`

export const InputSelect = styled.select`
    padding: 5px;
    border-radius: 5px;
    border: 2px solid #ccc;
    width: 10rem;
    cursor: pointer;
`

export const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-weight: bold;
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
    background-color: #b5d6e3;
    color: #212127;
    cursor: pointer;
    transition: filter 0.5s;

    &:hover {
        filter: brightness(0.95);
    }
`