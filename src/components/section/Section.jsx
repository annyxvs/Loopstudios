import { Card } from "../card/Card"

import DeepEarth from '../../assets/images/image-deep-earth.jpg'
import NightArcade from '../../assets/images/image-night-arcade.jpg'
import SoccerTeamVR from '../../assets/images/image-soccer-team.jpg'
import TheGrid from '../../assets/images/image-grid.jpg'
import FromUpAboveVR from '../../assets/images/image-from-above.jpg'
import PocketBorealis from '../../assets/images/image-pocket-borealis.jpg'
import TheCuriosity from '../../assets/images/image-curiosity.jpg'
import MakeItFisheye from '../../assets/images/image-fisheye.jpg'

import * as S from './style'

export const Section = () =>{
    return(
        <>
        <S.Creations>
            <h2>Our Creations</h2>
            <button>See all</button>
        </S.Creations>
        <S.Section>
            <S.Cards>
                <Card title='Deep Earth' image={DeepEarth}/>
                <Card title='Night arcade' image={NightArcade}/>
                <Card title='Soccer team VR' image={SoccerTeamVR}/>
                <Card title='The grid' image={TheGrid}/>
                <Card title='From up above VR' image={FromUpAboveVR}/>
                <Card title='Pocket borealis' image={PocketBorealis}/>
                <Card title='The curiosity' image={TheCuriosity}/>
                <Card title='Make it fisheye' image={MakeItFisheye}/>
            </S.Cards>
        </S.Section>
        </>
    )
}