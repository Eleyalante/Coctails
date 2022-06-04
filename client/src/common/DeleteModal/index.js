import React from "react";
import "./index.scss";

function DeleteModal({ onConfirm }) {
  return (
    <>
      <div onClick={() => onConfirm(false)} className='modal-delete'>
        <div className='container'>
          <div className='modal-header'>
            <div className='modal-title'>
              <h5>Confirmation</h5>
            </div>
            <div className='modal-closeBtn'>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
          </div>
          <div className='modal-body'>
            <p>Are You Sure You Want to Continue?</p>
          </div>
          <div onClick={(e) => e.stopPropagation()} className='modal-footer'>
            <button className='btn-yes' onClick={() => onConfirm(true)}>
              Delete
            </button>
            <button className='btn-no' onClick={() => onConfirm(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
