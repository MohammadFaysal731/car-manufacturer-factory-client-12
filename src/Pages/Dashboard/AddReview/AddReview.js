import React, { useRef } from 'react';
import { toast } from 'react-toastify';



const AddReview = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const ratingRef = useRef();
    const descriptionRef = useRef();


    const handleAddReview = () => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const rating = ratingRef.current.value;
        const description = descriptionRef.current.value;
        const data = {
            name: name,
            email: email,
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
                console.log(data)
                if (data.success === true) {
                    toast.success('You Review Will Be Add Success Fully');
                }
                else if (data.success === false) {
                    toast.error('Your Review is All ready exists')
                }

            })

    }

    return (
        <div>
            <div className="flex justify-center items-center m-5">

                <div className="grid grid-cols-1 gap-5 border-2 p-9">
                    <h1 className='text-xl text-primary'>ADD YOUR REVIEW</h1>
                    <input ref={nameRef} type="text" placeholder="Your Name" class="input input-bordered input-accent w-full max-w-xs" />
                    <input ref={emailRef} type="email" placeholder='Your Email' class="input input-bordered input-accent w-full max-w-xs " />
                    <input ref={ratingRef} type="number" min={1} placeholder="Your Ratings" class="input input-bordered input-accent w-full max-w-xs" />
                    <textarea ref={descriptionRef} class="textarea textarea-accent" placeholder="Description"></textarea>
                    <input onClick={handleAddReview} className='btn btn-outline btn-primary w-full max-w-xs' type="submit" value="Add Review" />
                </div>
            </div>
        </div>
    );
};

export default AddReview;