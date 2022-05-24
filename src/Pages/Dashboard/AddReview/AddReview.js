import React, { useRef } from 'react';
import { toast } from 'react-toastify';


const AddReview = () => {
    const ratingsRef = useRef();
    const descriptionRef = useRef();

    const handleAddReview = () => {
        const rating = ratingsRef.current.value;
        const description = descriptionRef.current.value;
        const data = {
            rating: rating,
            description: description
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json(data))
            .then(data => {
                if (data.insertedId) {
                    toast.success('You Review Will Be Add Success Fully Go To Home Page And See Your Review.')
                };
            })

    }

    return (
        <div>
            <div className="flex justify-center items-center m-5">
                <div className="grid grid-cols-1 gap-5 border-2 p-9">
                    <input ref={ratingsRef} type="number" min={1} max={5} placeholder="Ratings" class="input input-bordered input-accent w-full max-w-xs" />
                    <textarea ref={descriptionRef} class="textarea textarea-accent" placeholder="Description"></textarea>
                    <input onClick={handleAddReview} className='btn btn-outline btn-primary w-full max-w-xs' type="submit" value="submit" />
                </div>
            </div>
        </div>
    );
};

export default AddReview;