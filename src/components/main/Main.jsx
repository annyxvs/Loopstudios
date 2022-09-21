import imgVR from  '../../assets/images/image-interactive.jpg'

import * as S from './style'

export const Main = () =>{
    return(
        <S.Main>
            <div className='content'>
                <img src={imgVR} alt="" />
                <aside>
                    <h2>The leader in interactive VR</h2>
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                </aside>
            </div>            
        </S.Main>
    )
}