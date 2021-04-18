import React from 'react';
import './Wrapper.css'


const Wrapper = (props) => {
    return (
        <div className="container-fluid main body">
        
        {props.children}
        
        </div>
    )
    
}
 
export default Wrapper;