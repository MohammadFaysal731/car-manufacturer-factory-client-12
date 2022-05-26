import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div>

            <div className="drawer  drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard/myprofile'>My PROFILE</Link></li>
                        <li><Link to='/dashboard/myorders'>My ORDERS</Link></li>
                        <li><Link to='/dashboard/addreview'>Add REVIEW</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;