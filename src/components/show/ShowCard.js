import React from 'react'
import { Link } from 'react-router-dom';
import { Star } from '../styled';

import { StyledShowCard } from './ShowCard.styled';


function ShowCard({id , name, image, summary, onStarClick , isStrarred }) {
    const summaryAsText = summary
        ? `${summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, '')}...`
        : 'No description'
    return (
        <StyledShowCard> 
            <div className="img-wrapper">
                <img src={image} alt="show" />
            </div>
            <h1>{name}</h1>

            <p>{summaryAsText}</p>
            <div className="btns">
                <Link to={`/show/${id}`} >Read More</Link>
                <button type="button" onClick={onStarClick}>
                    <Star active={isStrarred} />
                </button>
            </div>
        </StyledShowCard> 
    );
};

export default ShowCard
