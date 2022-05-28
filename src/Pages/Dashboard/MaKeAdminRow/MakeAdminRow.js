import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const handleMakeAdmin = () => {
        fetch(`https://arcane-wave-36382.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Success Fully Done');
                    refetch();
                }
            })
    }

    return (
        <tr className='hover  text-primary'>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{role !== 'admin' && <button onClick={handleMakeAdmin} className="btn btn-primary btn-outline  btn-xs">Make Admin</button>}</td>

        </tr >
    );
};

export default MakeAdminRow;