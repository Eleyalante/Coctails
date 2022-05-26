import React from "react";

function DeleteModal() {
  return (
    <>
      <div className='delete'>
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
          <p>Are your sure deleting this cocktail?</p>
        </div>
        <div class='modal-footer'>
          <button id='btn-delete-course' type='button' class='btn btn-danger'>
            Delete
          </button>
          <button type='button' class='btn btn-primary' data-dismiss='modal'>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
