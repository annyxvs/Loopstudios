import Logo from '../../assets/icons/logo.svg'
import facebook from '../../assets/icons/icon-facebook.svg'
import twitter from '../../assets/icons/icon-twitter.svg'
import pinterest from '../../assets/icons/icon-pinterest.svg'
import instagram from '../../assets/icons/icon-instagram.svg'

import * as S from './style'

export const Footer = () =>{
    return(
        <S.Footer>
            <div className="log"><img src={Logo} alt="Logo loopstudios" /></div>
            <nav>
                <ul className='icons'>
                    <li><a href="#"><img src={facebook} alt="icon facebook" /></a></li>
                    <li><a href="#"><img src={twitter} alt="icon twitter" /></a></li>
                    <li><a href="#"><img src={pinterest} alt="icon pinterest" /></a></li>
                    <li><a href="#"><img src={instagram} alt="icon instagram" /></a></li>
                </ul>
            </nav>

            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav>

            <p>© 2021 Loopstudios. All rights reserved.</p>
        </S.Footer>
    )
}