import React from 'react'

function CustomRdio ({ label, ...restProps }){
    return (
        <label htmlFor={restProps.id}>
            {label} 
            <input {...restProps} type="radio" />
        </label>   
    );    
}
export default CustomRdio
