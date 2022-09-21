import styled from 'styled-components'

export const Button = styled.a`
    box-sizing: border-box;
    text-decoration: none;
    width: 8vw;
    color: #fff;

    margin: 1rem;
    font-size: 1.2rem;
    padding: 0.6rem;
    position: relative;

    &::before{
        content: '';

        position: absolute;
        background-color: #fff;
        width: 0vw;
        top: 1.9rem;
        left: 0.5rem;

        border-radius: .5rem;
        transition: .5s;
    }

    &:hover{
        ::before{
            width: 45px;
            height: 0.1vh;
            transition: .5s;
        }
    }

    
   @media (max-width: 590px) {
        width: auto;
        display: block;
        margin: 1rem;
    }
`