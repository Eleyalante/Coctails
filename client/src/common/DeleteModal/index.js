import React from "react";
import "./index.scss";

function DeleteModal({ onConfirm }) {
  return (
    <>
      <div onClick={() => onConfirm(false)} className='modal-delete'>
        <div className='container'>
          <div className='modal-header'>
            <div className='modal-title'>
              <h5>Delete the course</h5>
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
          <div class='modal-body'>
            <p>Are You Sure You Want to Continue?</p>
          </div>
          <div onClick={(e) => e.stopPropagation()} class='modal-footer'>
            <button onClick={() => onConfirm(true)}>yes</button>
            <button onClick={() => onConfirm(false)}>no</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
