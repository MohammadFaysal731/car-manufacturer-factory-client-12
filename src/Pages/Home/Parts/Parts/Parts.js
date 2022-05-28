import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';


const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])


    return (
        <div className=''>
            <h1 className='text-4xl text-center text-primary font-bold'><u>OUR PARTS</u></h1>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        parts?.map(part => <Part
                            part={part}
                            key={part._id}
                        ></Part>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Parts;