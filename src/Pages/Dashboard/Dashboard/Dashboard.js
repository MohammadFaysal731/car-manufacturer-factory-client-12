import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import Loading from '../../../ShearedPages/Loading/Loading';


const Dashboard = () => {
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>
    }
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
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content uppercase">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                        {user ?
                            <>
                                <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                                <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                                <li><Link to='/dashboard/manageallorder'>Manage All Orders</Link></li>
                                <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                                <li><Link to='/dashboard/manageallproducts'>Manage All Products</Link></li>
                            </>

                            : navigate('/login')
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;