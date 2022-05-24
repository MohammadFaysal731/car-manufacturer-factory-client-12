import React from 'react';
import notFound from '../../images/notFount404.png'
const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" className='h-screen w-full' />
        </div>
    );
};

export default NotFound;