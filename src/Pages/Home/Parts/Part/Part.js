import React from 'react';

const Part = ({ part }) => {
    const { images, name, description, minimumQuantity, availableQuantity, price } = part;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={images} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p title={description}>{description.length > 100 ? description.slice(0, 100) + '.....' : description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;