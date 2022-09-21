import styled from 'styled-components'

export const Footer = styled.footer`
    background-color: #000;
    color: #fff;

    height: 26vh;
    display: grid;
    grid-template-columns: 1fr 1fr;

    align-items: center;
    justify-content: center;
    padding: 2rem;

    nav ul{
        margin: 0.3rem;
        display: flex;
        width: 20vw;
        justify-content: space-around;
    }

    p{
        opacity: 0.5;
        font-size: 0.8rem;
    }

    a{
        text-decoration: none;
        color: #fff;
        transition: 0.3s;

        &:hover{
            opacity: 0.5;
        }
    }

    @media (max-width: 1100px) {
        nav ul{
        display: block;
        width: 20vw;
        justify-content: space-around;
        }

        .icons{
            width: 50vw;
            display: flex;
            li{
                padding: 0.5rem;
            }
        }
    }

    @media (max-width: 490px) {
        height: auto;
       display: block;
    }
`
