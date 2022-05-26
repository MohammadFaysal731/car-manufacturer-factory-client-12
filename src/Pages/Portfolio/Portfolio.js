import React from 'react';
import { useQuery } from 'react-query';
import myself from '../../images/faysal .png'
import Loading from '../../ShearedPages/Loading/Loading';
import Skill from './Skill/Skill';
import project1 from '../../images/storng-gym .png';
import project2 from '../../images/laptop-review .png';
import project3 from '../../images/car-manufactur.jpg';
import { FaHandPointDown } from 'react-icons/fa';
const Portfolio = () => {
    const { data: skills, isLoading } = useQuery('skills', () => fetch('skills.json').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse m-12 px-12">
                    <img src={myself} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome To My ProtFolio!</h1>
                        <p className="py-6"> name, email address, educational background, list of technologies or skills you have as a web developer</p>
                        <h2 className='text-xl'>Hello,I am <span className='text-primary'>Mohammad Faysal</span></h2>
                        <p><small><span className='text-primary'>www.faysal731@gmail.com</span></small></p>
                        <div className="text-primary ">
                            <h4 className='text-xl text-black'>My Educational Background</h4>
                            <p>I am a student.</p>
                            <p>I am Study at Govt Tolaram College. </p>
                            <p>I am studying for a degree pass course.</p>
                            <p>Now I am Currently In The 3rd Year Of My degree.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className='text-primary text-center text-4xl'>My Skills For Web Developer</h1>
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
                        {
                            skills.map(skill => <Skill
                                skill={skill}
                                key={skill.id}
                            ></Skill>)
                        }
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className='text-primary text-center text-4xl'>See My Projects</h1>
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
                        <div className="card w-72 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={project1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">independent Service Provider</h2>
                                <p><small><a href="https://independent-service-prov-f1a49.web.app" target="_blank"><FaHandPointDown className='text-xl text-primary'></FaHandPointDown>https://independent-service-prov-f1a49.web.app</a></small></p>
                            </div>
                        </div>
                        <div className="card w-72 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={project2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Laptop Review</h2>
                                <p><small><a href="https://hp-probook-laptop-reviews.netlify.app" target="_blank"><FaHandPointDown className='text-xl text-primary'></FaHandPointDown>https://hp-probook-laptop-reviews.netlify.app</a></small></p>
                            </div>
                        </div>
                        <div className="card w-72 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={project3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Car Manufacture</h2>
                                <p><small><a href="https://hp-probook-laptop-reviews.netlify.app" target="_blank"><FaHandPointDown className='text-xl text-primary'></FaHandPointDown>https://hp-probook-laptop-reviews.netlify.app</a></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;