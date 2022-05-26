import React from 'react';

const Skill = ({ skill }) => {
    const { name, image } = skill;
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default Skill;