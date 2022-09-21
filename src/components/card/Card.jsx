import * as S from './style'

export const Card = ({title,image}) =>{
    return(
        <>
            <S.Card>
                <img src={image} alt={title} />
                <div className="title"><h3>{title}</h3></div>
            </S.Card>
        </>
    )
}