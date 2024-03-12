import React from 'react';

const Watch = ({watch}) => {
    const {name, price} = watch;
    return (
        <div>
 
            <p>Name : {name}</p>
            <p><small>Price: {price}</small></p>
        </div>
    );
};

export default Watch;