import React from 'react';

const Part = ({ part }) => {
    const { images, name, description, minimumQuantity, availableQuantity, price } = part;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={images} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p title={description}>{description.length > 100 ? description.slice(0, 100) + '.....' : description}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;