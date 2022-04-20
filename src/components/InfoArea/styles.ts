import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
    @media(max-width: 512px) {
        flex-direction: column;
        gap:2rem;
    }
`

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    @media(max-width: 512px) {
        width: 17rem;
        font-size: 1.5rem;
        padding: 1.7rem;
        border-bottom: 1px solid #e5e5e5;
    }
`

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
    &:hover {
        filter: brightness(0.95);
    }
    @media(max-width: 512px) {
        font-size: 2.2rem;
        margin-right: 0.3rem;
    }
`

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
    @media(max-width: 512px) {
        gap: 3.2rem;
        font-size: 1rem;
    }
`