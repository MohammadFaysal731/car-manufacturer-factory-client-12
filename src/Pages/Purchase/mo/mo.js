import React from 'react';

const mo = () => {
    return (
        <div className="flex justify-end items-end">
            {/* <!-- The button to open modal --> */}
            <label for="my-modal-3" class="btn-outline btn-primary btn modal-button">User Information</label>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</label>
                </div>
            </div>
        </div>
    );
};

export default mo;