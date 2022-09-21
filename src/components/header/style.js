import styled from "styled-components";

import BackgroundImg from '../../assets/images/image-hero.jpg'

export const H = styled.header`
    overflow: hidden;
    width: 100vw;
    height: 83vh;

    background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
`

export const Header = styled.header`
   display: flex;
   flex-direction: row;
   align-items: center;

   justify-content: space-around;

   padding: 2.5rem;
`

export const Main = styled.main`
    width: 94vw;
    height: 75vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .content{
        width: 50vw;
        padding: 1.3rem;  
        border: .1rem solid #fff;
    }

    h2{
        width: 40vw;
        text-transform: uppercase;

        font-size: 3rem;
        color: #fff;
    }
`