import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div>

            <div class="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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