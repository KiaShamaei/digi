import React , {useContext} from 'react';

import productContext from '../../../context/product-context';
import './Builder.css';


const Builder = (props) => {
    const product = useContext(productContext)
    return ( 
      
         
            <div className="builder col-md-2">
                <div>{props.title}</div>
                <div>{props.type}</div>
                <button className="btn  btn-warning" onClick={()=>product.productAdd(props.title)}>Add</button>
                <button className="btn btn-success " onClick={()=>product.productRemove(props.title)} >remove</button>
            </div>
          
      
     );
}
 
export default Builder;