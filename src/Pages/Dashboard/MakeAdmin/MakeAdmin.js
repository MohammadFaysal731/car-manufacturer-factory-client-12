import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../ShearedPages/Loading/Loading';

const MakeAdmin = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch(`http://localhost:5000/user`).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-primary text-2xl m-5 uppercase'>Make Admin</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr className='uppercase text-primary'>
                            <th>SL</th>
                            <th>User</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr className='hover  text-primary'
                                user={user}
                                key={user._id}
                                index={index}
                            >
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td><button class="btn btn-primary btn-outline  btn-xs">Make Admin</button></td>
                                <td><button class="btn btn-primary btn-outline  btn-xs">Remove</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;