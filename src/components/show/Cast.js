import React from 'react'
import { CastList } from './Cast.styled';
import IMAGE_NOT_FOUND from '../../images/not-found-image-15383864787lu.jpg'

function Cast ({ cast }){
    return (
        <CastList>
            {cast.map(({person , character, voice}, key) =>(
                <div key={key} className="cast-item">
                    <div className="pic-wrapper">
                        <img 
                            src={person.image ? person.image.medium : IMAGE_NOT_FOUND }
                            alt="cast-person"
                        />
                    </div>
                    <div className="actor" >
                        <span>
                            <span className="bold">{person.name}</span> | {character.name} { voice ? `| Voice` : ''}
                        </span>
                    </div>
                </div>
            ))}
        </CastList>
    );
}

export default Cast