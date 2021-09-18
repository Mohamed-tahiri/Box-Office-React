import React from 'react'
import ShowCard from './ShowCard';
import { FlexGrid } from '../styled';
import IMAGE_NOT_FOUND from '../../images/not-found-image-15383864787lu.jpg'
import { useShows } from '../../misc/custom-hooks' ; 


function ShowGrid({data}) {

    const [starredShows, dispatchStarred] = useShows()

    return(
        <FlexGrid> 
            {data.map(({ show }) =>{
                
                const isStrarred = starredShows.includes(show.id);
                
                const onStarClick = () => {
                    if(isStrarred) {
                        dispatchStarred({type: 'REMOVE', showId: show.id})
                    } else {
                        dispatchStarred({type: 'ADD', showId: show.id})
                    }
                }

                return(
                    <ShowCard 
                        key={show.id} 
                        id={show.id}
                        name={show.name}
                        image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
                        summary={show.summary}
                        onStarClick = {onStarClick}
                        isStrarred={isStrarred}
                    />
                );
            })}
        </FlexGrid> 
    );
}

export default ShowGrid
