import React from 'react'
import { StyledActorCard } from './ActorCard.style';

function ActorCard({ image, name, gender, country, birthday, deadthday }) {
    return (
        <StyledActorCard> 
            <div className="img-wrapper">
                <img src={image} alt="actor" />
            </div>
            <h1>
                {name} {gender ? `(${gender})` : null }
            </h1>
            <p>{country ? `Comes from ${country}` : 'No country Known' }</p>
            {birthday ? <p>Born {birthday}</p> : null}
            <p className="deathday">{deadthday ? `Died ${deadthday}` : 'A live'}</p>
        </StyledActorCard> 
);
}

export default ActorCard
