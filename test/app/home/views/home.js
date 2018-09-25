import React from 'react';
import {withRouter} from '../../../../lib/router';

export default withRouter(({location}) => {
    console.log(location);
    return (
        <div>
            Home
        </div>
    )
})