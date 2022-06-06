import React from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import "./DeleteModal.scss";

function DeleteModal({ Delete, handleRemove, RowData, handleViewClose }) {
    // console.log(handleDeleteClose);
    return (
        <>
            <div className="modal-delete">
                <div className="container">
                    <div className="modal-header">
                        <div className="modal-title">
                            <h5>Confirmation</h5>
                        </div>
                        <div className="modal-closeBtn">
                            <button type="button" class="close" onClick={handleViewClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="body-title">
                            <p>Are You Sure You Want to Continue?</p>
                        </div>
                        <div className="name">
                            <p>Name:</p> <input type="text" value={RowData.name} readOnly />
                        </div>
                        <div className="unit">
                            <p>Unit:</p>
                            <input type="text" value={RowData.unit} readOnly />
                        </div>
                        <div className="image">
                            <p>Image:</p>
                            <input type="text" value={RowData.image} readOnly />
                        </div>
                    </div>
                    <div onClick={(e) => e.stopPropagation()} className="modal-footer btns">
                        {Delete && (
                            <Button type="submit" className="btn-delete" onClick={handleRemove}>
                                Delete
                            </Button>
                        )}
                        <Button type="submit" className="btn-cancel" onClick={handleViewClose}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeleteModal;
