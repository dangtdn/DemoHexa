import React from 'react'
import { Route } from 'react-router-dom';

function MainTemplate(props) {
    let {Component,...restRoute} = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <div>
            <Component {...propsRoute} />
        </div>
    }}/>
}

export default MainTemplate