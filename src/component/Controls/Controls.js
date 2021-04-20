import React from 'react';
import Builder from './Builder/Builder'
import './Controls.css';


const products =[
    {title : 'product1' , type : 'type1'},
    {title : 'product2' , type : 'type2'},
    {title : 'product3' , type : 'type3'},
    {title : 'product4' , type : 'type4'},
    {title : 'product5' , type : 'type5'},
    {title : 'product6' , type : 'type6'},
    {title : 'product7' , type : 'type7'},
    {title : 'product8' , type : 'type8'}
    
]
const Controls = () => {
    return ( 

        <div className="controls row">
            {
                products.map((item)=>{
                   return <Builder 
                    title={item.title} 
                    key={item.title} 
                    type={item.type} />
                })
            }

        </div>
     );
}
 
export default Controls;