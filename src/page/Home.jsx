import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { Main } from "../components/main/Main"
import { Section } from "../components/section/Section"
import * as S from './style'

export const Home = () =>{
    return(
        <S.Home>
            <Header/>
            <Main/>
            <Section/>
            <Footer/>
        </S.Home>
    )
}