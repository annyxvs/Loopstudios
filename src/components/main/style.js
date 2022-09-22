import styled from 'styled-components'

export const Main = styled.main`
    overflow: hidden;
    height: 147vh;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        margin-top: 11rem;
    }

    aside{
        min-width: 65vw;

        position: relative;
        top: -210px;
        right: -340px;

        background-color: #fff;
        padding: 5rem;

        h2{
            width: 32vw;
            font-size:3.125rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-weight: 300;

            margin-bottom: 1rem;
        }

        p{
            width: 32vw;
            font-weight: 100;
            opacity: .6;
        }
    }

    @media (min-width: 1420px) {
        width: 110vw;
        height: 100vh;
    }

    @media (max-width: 1240px) {
        height: 120vh;
        aside{
            top: -100px;
            right:  20px;

            h2{
                font-size:1.8rem;
                width: 60vw;
            }

            p{
                width: 50vw;
            }
        }
    }

    @media (max-width: 580px) {
        height: 160vh;
    }
`   