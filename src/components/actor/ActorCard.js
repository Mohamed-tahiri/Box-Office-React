import React from 'react'

function ActorCard({ image, name, gender, country, birthday, deadthday }) {
    return (
        <div> 
            <div>
                <img src={image} alt="actor" />
            </div>
            <h1>
                {name} {gender ? `(${gender})` : null }
            </h1>
            <p>{country ? `Comes from ${country}` : 'No country Known' }</p>
            {birthday ? <p>Born {birthday}</p> : null}
            <p>{deadthday ? `Died ${deadthday}` : 'A live'}</p>
        </div> 
);
}

export default ActorCard
