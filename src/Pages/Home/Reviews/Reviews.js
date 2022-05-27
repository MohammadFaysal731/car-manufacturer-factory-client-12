import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../ShearedPages/Loading/Loading';
import { GiCursedStar } from 'react-icons/gi';


const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/review', {
        method: 'GET'
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>;
    }

    console.log(reviews)
    return (
        <div className=''>
            <h1 className='text-4xl text-center text-primary font-bold' ><u>Reviews</u></h1>

            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        reviews?.map(reviews => <div className="card w-72 bg-base-100 shadow-xl">
                            <div className="card-body items-center text-center">
                                <GiCursedStar className='text-4xl text-primary'></GiCursedStar>
                                <h2 className="card-title">{reviews?.name}</h2>
                                <p>Email:{reviews?.email}</p>
                                <p>Rating:{reviews?.rating}</p>
                                <p>Description:{reviews?.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>





        </div>
    );
};

export default Reviews;