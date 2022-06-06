import React from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import "./EditModal.scss";

function EditModal({ setname, setUnit, setImage, handleEditClose, Update, RowData, handleUpdate }) {
    // console.log(handleDeleteClose);
    return (
        <>
            <div className="modal-delete">
                <div className="container">
                    <div className="modal-header">
                        <div className="modal-title">
                            <h5>Edit</h5>
                        </div>
                        <div className="modal-closeBtn">
                            <button type="button" class="close" onClick={handleEditClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="body-title">
                            <p>Are You Sure You Want to Edit?</p>
                        </div>
                        <div className="name">
                            <p>Name:</p>
                            <input type="text" className="form-control" onChange={(e) => setname(e.target.value)} placeholder="Please enter Name" defaultValue={RowData.name} />
                        </div>
                        <div className="unit">
                            <p>Unit:</p>
                            <input type="text" className="form-control" onChange={(e) => setUnit(e.target.value)} placeholder="Please enter Unit" defaultValue={RowData.unit} />
                        </div>
                        <div className="image">
                            <p>Image:</p>
                            <input type="text" className="form-control" onChange={(e) => setImage(e.target.value)} placeholder="Please enter Image" defaultValue={RowData.image} />
                        </div>
                    </div>
                    <div onClick={(e) => e.stopPropagation()} className="modal-footer">
                        {/* {Update && ( */}
                        <Button type="submit" className="btn-update" onClick={handleUpdate}>
                            Update
                        </Button>
                        {/* )} */}
                        <Button className="btn-cancel" variant="secondary" onClick={handleEditClose}>
                            Close
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditModal;
