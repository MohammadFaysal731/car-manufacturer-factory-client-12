import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl text-center m-5'><span className='text-primary'> Welcome </span> To <span className='text-primary'>Blogs</span></h1>
            <div className="flex justify-center items-center m-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div class="card  bg-base-100 shadow-xl p-7">
                        <h4> How will you improve the performance of a React Application ?</h4>
                        <br />
                        <p>&bull;I can improve react application using Context Api and stop props drilling.</p>
                        <p>&bull;When we know the same data load in our application many components we create custom hooks and use it every ware.</p>
                        <p>&bull;Using import and export method.</p>
                        <p>&bull;When we see the components ar similar look different in data we can create one special components and pass the data it will be improve our performance.</p>
                    </div>
                    <div class="card  bg-base-100 shadow-xl p-7">
                        <h4> What are the different ways to manage a state in a React application? ?</h4>
                        <br />
                        <p>&bull;We can manage state using react query.</p>
                        <p>&bull;When we use react query we can mange our state</p>
                        <p>&bull;We can mange it by using hooks</p>

                    </div>
                    <div class="card  bg-base-100 shadow-xl p-7">
                        <h4> How does prototypical inheritance work ?</h4>
                        <br />
                        <p>&bull;Prototypical inheritance is a feature in JavaScript.</p>
                        <p>&bull;Prototypical inheritance pass one objects property ot another object property.</p>
                        <p>&bull;Prototypical is share able.</p>
                        <p>&bull;It work like ching hooks.</p>
                    </div>
                    <div class="card  bg-base-100 shadow-xl p-7">
                        <h4> How will you improve the performance of a React Application ?</h4>
                        <br />
                        <p>&bull;I can improve react application using Context Api and stop props drilling.</p>
                        <p>&bull;When we know the same data load in our application many components we create custom hooks and use it every ware.</p>
                        <p>&bull;Using import and export method.</p>
                        <p>&bull;When we see the components ar similar look different in data we can create one special components and pass the data it will be improve our performance.</p>
                    </div>
                    <div class="card  bg-base-100 shadow-xl p-7">
                        <h4> How will you improve the performance of a React Application ?</h4>
                        <br />
                        <p>&bull;I can improve react application using Context Api and stop props drilling.</p>
                        <p>&bull;When we know the same data load in our application many components we create custom hooks and use it every ware.</p>
                        <p>&bull;Using import and export method.</p>
                        <p>&bull;When we see the components ar similar look different in data we can create one special components and pass the data it will be improve our performance.</p>
                    </div>
                    <div class="card  bg-base-100 shadow-xl p-7">
                        <h4> How will you improve the performance of a React Application ?</h4>
                        <br />
                        <p>&bull;I can improve react application using Context Api and stop props drilling.</p>
                        <p>&bull;When we know the same data load in our application many components we create custom hooks and use it every ware.</p>
                        <p>&bull;Using import and export method.</p>
                        <p>&bull;When we see the components ar similar look different in data we can create one special components and pass the data it will be improve our performance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;