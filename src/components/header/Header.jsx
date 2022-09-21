import Logo from '../../assets/icons/logo.svg'
import { Button } from '../button/Button'

import * as S from './style'

export const Header = () =>{
    return(
        <S.H>
            <S.Header>
                <h1 id="logo"><img src={Logo} alt="logo loopstudios" /></h1>

                <nav>
                    <ul>
                        <Button text='About'/>
                        <Button text='Careers'/>
                        <Button text='Events'/>
                        <Button text='Products'/>
                        <Button text='Support'/>
                    </ul>
                </nav>
            </S.Header>
            <S.Main>
                <div className="content">
                    <h2>Immersive experiences that deliver</h2>
                </div>
            </S.Main>
        </S.H>
    )
}