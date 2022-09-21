import styled from 'styled-components'

export const Card = styled.div`
    margin: 1rem;
    overflow: hidden;

    .title{
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        top: -5.625rem;

        color: #fff;
        font-size: 1.875rem;

        h3{
            background-color: rgba(0,0,0,0.4);
            width: 13vw;
            padding: 0.15rem;
            text-transform: uppercase;
            font-weight: 200;
        }
    }

    transition: 1s;
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
    }

    @media (max-width: 1300px) {
        .title{
            font-size: 1.4rem;
        }
    }

    @media (max-width: 1000px) {
        .title{
            font-size: 1rem;
        }
    }

    @media (max-width: 700px) {
        .title h3{
            width: 35vw;
        }
    }

`