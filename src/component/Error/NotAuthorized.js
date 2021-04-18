import React from 'react';
import { Link } from 'react-router-dom';


const NotAutorized = (props) => {
    return (

        <main role="main" className="container">
            <div className="jumbotron">
                <h1>توضیحات</h1>
                <p className="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
                <Link className="btn btn-lg btn-primary" to={props.address} role="button">وارد شوید  &raquo;</Link>
            </div>
        </main>
    );
}

export default NotAutorized;