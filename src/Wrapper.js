import React from 'react';


const Wrapper = (props) => {
    return <div className="container-fluid">{props.children}</div>;
}
 
export default Wrapper;