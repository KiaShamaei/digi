import React from 'react'
import Shopping from '../Shopping/Shopping'
import Wrapper from '../Warpper/Wrapper'
import './Layout.css';



const Layout =(props)=>{
    return (
        <Wrapper>
            <main className="content">
                <Shopping />

            </main>
        </Wrapper>
    )
}
export default Layout ; 