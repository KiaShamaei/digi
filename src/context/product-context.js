import React from 'react';


const productContex = React.createContext({
    productAdd :()=>{},
    productRemove :()=>{},
    products : {}, 
    
})

export default productContex;