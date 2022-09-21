import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Creations = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    text-transform: uppercase;
    h2{
        font-size: 2.813rem;
        font-weight: 100;
    }

    button{
        width: 13vw;
        padding: .7rem;
        text-transform: uppercase;

        background-color: transparent;
        border: 1.5px solid #000;
        cursor: pointer;

        transition: 1s;
        &:hover{
            color: #fff;
            background-color: #000;
        }
    }

    @media (max-width: 650px) {
        display: flex;
        flex-direction: column;
        button{
            width: 25vw;
        }
    }
`


export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0.5rem;

    overflow: hidden;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`