import React from 'react';

const Skill = ({ skill }) => {
    const { name, image } = skill;
    return (
        <div class="card w-72 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt={name} class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default Skill;