import React , { memo } from 'react';

function CustomRdio ({ label, ...restProps }){
    return (
        <label htmlFor={restProps.id}>
            {label} 
            <input {...restProps} type="radio" />
        </label>   
    );    
}

export default memo(CustomRdio) ; 
