import React from 'react';
import './Builder.css';


const Builder = (props) => {
    return ( 
        <div className="builder col-md-2">
            <div>{props.title}</div>
            <div>{props.type}</div>
            <button className="btn  btn-warning">Add</button>
            <button className="btn btn-success ">remove</button>
        </div>
     );
}
 
export default Builder;