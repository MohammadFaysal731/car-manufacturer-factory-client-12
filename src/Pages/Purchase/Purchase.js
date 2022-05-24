import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [purchase, setPurchase] = useState([]);
    const { images, name, description, minimumQuantity, availableQuantity, price } = purchase;

    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [id])

    return (
        <div className="flex justify-center items-center  mx-8">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src={images} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p title={description}>{description?.length > 100 ? description.slice(0, 100) + '.....' : description}</p>
                        <p>Price:${price}</p>
                        <p>Minimum Order Quantity :{minimumQuantity} Pcs</p>
                        <p>Available Quantity :{availableQuantity} Pcs</p>
                        <input type="text" placeholder="Minimum Quantity" className="input input-bordered  w-full max-w-xs" />
                        <button className="btn btn-outline btn-primary w-full max-w-xs">Add Products</button>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-2xl">
                    <div className=" flex justify-between items-center m-2">
                        <h1>name</h1>
                        <label className="btn btn-ghost btn-circle avatar ">
                            <div className="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                            </div>
                        </label>
                    </div>
                    <div className="card-body items-center text-center mt-20">
                        <input type="text" placeholder="Name" className="input input-bordered  w-full max-w-xs" />
                        <input type="text" placeholder="Email" className="input input-bordered  w-full max-w-xs" />
                        <input type="text" placeholder="Address" className="input input-bordered  w-full max-w-xs" />
                        <input type="text" placeholder="Phone" className="input input-bordered  w-full max-w-xs" />
                        <button className="btn btn-outline btn-primary w-full max-w-xs">purchase</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Purchase;