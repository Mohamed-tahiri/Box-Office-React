import React  , { useState }  from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchInput , SearchButtonWrapper } from './Home.styled';
import CustomRdio from '../components/CustomRdio';

function Home(){
    const [ input   , setInput   ] = useLastQuery();
    const [ results , setResults ] = useState(null);
    const [ searchOption , setSearchOption ] =  useState('shows');

    const isShowsSearch = searchOption === 'shows';

    const onSearch = () => {
        apiGet(`search/${searchOption}?q=${input}`)
            .then(result => { 
                setResults(result);
            })
    };

    const onInputChange = (ev) => {
        setInput(ev.target.value);  
    };
    
    const onKeyDown = (ev) => {
        if(ev.keyCode === 13 ){
            onSearch()
        }
    };

    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value);
    }


    const renderResults = () => {

        if( results && results.length === 0) {
            return( 
                <div>
                    No results
                </div>
            );
        }

        if(results && results.length >0) {
            return results[0].show ? (
                <ShowGrid data={results}/> 
            ) : (
                <ActorGrid data={results} />
            )
        }

        return null;

    } 

    return (
        <MainPageLayout>
            <SearchInput 
                type="text" 
                placeholder="Search ..."
                onChange={onInputChange} 
                onKeyDown={onKeyDown} 
                value={input} 
            />

            <RadioInputsWrapper>    
                
                <div>
                    <CustomRdio 
                        label="Shows"
                        id="shows-search" 
                        value="shows"
                        checked={isShowsSearch}
                        onChange={onRadioChange}
                    />

                </div>
                <div>
                    <CustomRdio 
                            label="Actors"
                            id="actors-search"
                            value="people"
                            checked={!isShowsSearch}
                            onChange={onRadioChange}
                    />
                </div>
            </RadioInputsWrapper>
            
            <SearchButtonWrapper>
                <button 
                    type="button" 
                    onClick={onSearch}
                >
                    Search
                </button>    
            </SearchButtonWrapper>
            
            {renderResults()}
        </MainPageLayout>    
    )
}

export default Home
