import React from 'react';

const mo = () => {
    return (
        <div className="flex justify-end items-end">
            {/* <!-- The button to open modal --> */}
            <label htmlFor="my-modal-3" className="btn-outline btn-primary btn modal-button">User Information</label>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</label>
                </div>
            </div>
        </div>
    );
};

export default mo;