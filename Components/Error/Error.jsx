import React from 'react';
import Style from './Error.modile.css';
const Error = () => {
    return(
        <div className={Style.Error}>
            <div className={Style.Error_box}>
                <h1>Please fix this error & reload browser :p </h1>
                {error}
            </div>
        </div>
    )
}

export default Error;