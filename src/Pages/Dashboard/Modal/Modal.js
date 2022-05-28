import React from 'react';
import { toast } from 'react-toastify';

const Modal = ({ deleteConfirm, refetch, setDeleteConfirm }) => {
    const { _id, productName } = deleteConfirm;

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Product Will Be Deleted Success Fully')
                    setDeleteConfirm(null);
                    refetch();
                }
            });
    }

    return (
        <div className="">
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-top sm:modal-middle p-5">
                <div className="modal-box text-primary uppercase">
                    <h3 className="font-bold text-lg">{productName}</h3>
                    <p className="py-4 text-red-500" ><small>do you Want to delete This item ? Then click delete</small></p>
                    <p className="py-4">once you delete this you can not get it </p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-primary btn-outline">Delete</button>
                        <label for="my-modal-6" className="btn btn-xs btn-primary btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;