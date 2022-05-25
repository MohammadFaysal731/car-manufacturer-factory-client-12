import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
const Header = ({ children }) => {
    const [user] = useAuthState(auth);
    console.log(user)
    const handleSignOut = () => {
        signOut(auth)
    }
    const menuItems = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/blogs'>BLOGS</Link></li>
        <li><Link to='/protfolio'>PORTFOLIO</Link></li>
        {user && <li> <Link to='/dashboard'>DASHBOARD</Link></li>}
        {
            user
                ? <li>
                    <button onClick={handleSignOut}>SIGN OUT</button>
                    <div className="">
                        <img className='rounded-full w-8' src={user.photoURL} alt={user.displayName} />
                    </div>
                </li>
                : <li><Link to='/login'>LOGIN</Link></li>
        }
    </>
    return (
        <div className="drawer">
            <input id="header-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <div className="w-full navbar bg-primary text-white ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="header-drawer" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 ">CAR PARTS MANUFACTURE FACTORY</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-3 ">
                            {menuItems}
                        </ul>
                    </div>
                    {user && <div className="flex-none lg:hidden ">
                        <label for="dashboard-drawer" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>}
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="header-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;