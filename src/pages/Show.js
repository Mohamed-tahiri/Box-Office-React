import React , { useEffect , useReducer } from 'react' ;
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';


const reducer = (prevState, action) => {
    switch(action.type){

        case 'FETCH_SUCCESS':{
            return {isLoading: false, error:null , show: action.show }
        }
        case 'FECTH_FAILED':{
            return {...prevState, isLoading:false , error: action.error}
        }

        default: return prevState
    }
}

const initialSatet = {
    show: null,
    isLoading: true,
    error: null
}

function Show(){

    const { id } = useParams();

    const [{show , isLoading, error}, dispatch] = useReducer(
        reducer, 
        initialSatet 
    )


    useEffect( ()=>{

        let isMounted = true ;
      
        apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`)
            .then(results => {
                setTimeout(()=>{
                    if(isMounted){
                        dispatch({ type : 'FETCH_SUCCESS' , show: results })
                    }
                }, 2000)
            })
            .catch( err => {
                if(isMounted){
                    dispatch({ type : 'FECTH_FAILED' , error: err.message })
                }
            });

        return () => {
            isMounted = false
        }

    }, [id]);

    console.log('show ', show);

    if(isLoading) {
        return <div>Data is being Loaded</div>    
    }

    if (error) {
        return <div>Error occured: {error} </div>
    }

    return <div>this is show page </div>

};

export default Show
 