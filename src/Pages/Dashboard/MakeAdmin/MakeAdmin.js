import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../ShearedPages/Loading/Loading';
import MakeAdminRow from '../MaKeAdminRow/MakeAdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://arcane-wave-36382.herokuapp.com/user`).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-center text-primary text-2xl m-5 uppercase'>Make Admin</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr className='uppercase text-primary'>
                            <th>SL</th>
                            <th>User</th>
                            <th>Make Admin</th>
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