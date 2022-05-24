import React, { useRef } from 'react';

const AddReview = () => {
    const ratingsRef = useRef();
    const descriptionRef = useRef();

    const handleAddReview = () => {
        const ratings = ratingsRef.current.value;
        const description = descriptionRef.current.value;
        console.log(ratings, description)
    }

    return (
        <div>
            <div className="flex justify-center items-center m-5">
                <div className="grid grid-cols-1 gap-5 border-2 p-9">
                    <input ref={ratingsRef} type="text" placeholder="Ratings" class="input input-bordered input-accent w-full max-w-xs" />
                    <textarea ref={descriptionRef} class="textarea textarea-accent" placeholder="Description"></textarea>
                    <input onClick={handleAddReview} className='btn btn-outline btn-primary w-full max-w-xs' type="submit" value="submit" />
                </div>
            </div>
        </div>
    );
};

export default AddReview;