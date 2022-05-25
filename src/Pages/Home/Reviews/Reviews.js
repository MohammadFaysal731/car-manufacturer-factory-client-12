import React from 'react';
import { useQuery } from 'react-query';

const Reviews = () => {
    const { data } = useQuery('review', () => fetch('http://localhost:5000/review', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()))
    return (
        <div className=''>
            <h1 className='text-4xl text-center text-primary font-bold' ><u>Reviews</u></h1>


        </div>
    );
};

export default Reviews;