import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../ShearedPages/Loading/Loading';
import MakeAdminRow from '../MaKeAdminRow/MakeAdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/user`).then(res => res.json()));
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
                            users?.map((user, index) => <MakeAdminRow
                                user={user}
                                key={user._id}
                                index={index}
                                refetch={refetch}
                            ></MakeAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;