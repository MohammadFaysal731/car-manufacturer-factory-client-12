import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Part = ({ part }) => {
    const { _id, images, name, description, minimumQuantity, availableQuantity, price } = part;
    const navigate = useNavigate();

    const handleBuyNow = id => {
        navigate(`/part/${id}`);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={images} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p title={description}>{description.length > 100 ? description.slice(0, 100) + '.....' : description}</p>
                <p>Price:${price}</p>
                <p>Minimum Order Quantity :{minimumQuantity} Pcs</p>
                <p>Available Quantity :{availableQuantity} Pcs</p>
                <div className="card-actions">
                    <button onClick={() => handleBuyNow(_id)} className="btn btn-primary">Buy Now<FaOpencart className='text-lg m-4'></FaOpencart></button>
                </div>
            </div>
        </div>
    );
};

export default Part;