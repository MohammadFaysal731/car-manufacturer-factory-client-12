import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/protfolio'>PortFolio</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <div className="w-full navbar bg-primary text-white ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2  ">CAR PARTS MANUFACTURE FACTORY</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-3 ">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {menuItems}
                </ul>

            </div>
        </div>
    );
};

export default Header;