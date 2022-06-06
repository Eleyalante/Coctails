import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import EditModal from "../../common/EditModal/EditModal";
import DeleteModal from "../../common/DeleteModal/DeleteModal";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
const url = "http://localhost:8080/api";

function Table() {
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([]);

    const [ViewShow, SetViewShow] = useState(false);
    const handleViewShow = () => {
        SetViewShow(true);
    };
    const handleViewClose = () => {
        SetViewShow(false);
    };
    //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false);
    const handleEditShow = () => {
        SetEditShow(true);
    };
    const handleEditClose = () => {
        SetEditShow(false);
    };
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false);
    const handleDeleteShow = () => {
        SetDeleteShow(true);
    };
    const handleDeleteClose = () => {
        SetDeleteShow(false);
    };
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false);
    const handlePostShow = () => {
        SetPostShow(true);
    };
    const hanldePostClose = () => {
        SetPostShow(false);
    };
    //For delete modal

    //Define here local state that store the form Data
    const [name, setname] = useState("");
    const [unit, setUnit] = useState("");
    const [image, setImage] = useState("");
    const [id, setId] = useState("");
    const [Delete, setDelete] = useState(false);
    const [Update, setUpdate] = useState("");

    //For edit modal
    const [edit, setEdit] = useState({
        isLoading: false,
    });
    // --------------------------------------GET DATA FROM SERVER---------------------------

    const getIngredientData = () => {
        try {
            axios.get(`${url}/ingredients/all`).then((res) => {
                setData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    // --------------------------------------REMOVE---------------------------
    // --------------------------------------Delete Form---------------------------
    // --------------------------------------handle remove---------------------------

    // console.log(id)
    const handleRemove = () => {
        console.log(RowData);
        axios
            .delete(`${url}/ingredients/delete?id=${id}`)
            .then((res) => {
                //refresh the page
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getIngredientData();
    }, []);

    //handle edit
    const handleUpdate = () => {
        const Credentials = { id, name, unit, image };
        // console.log(Data.data.data);
        // console.log(data);
        console.log("id", id);

        axios
            .post(`${url}/ingredients/update?id=${id}`, Credentials)
            .then((res) => {
                console.log("Credentials", Credentials);
                const data = Data.data?.map((item) => {
                    if (item.id === id) {
                        return item;
                    } else {
                        return "";
                    }
                });
                console.log(data);

                // window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="home-show">
            <div className="row">
                <div className="table">
                    <table className="table-head">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Unit</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {Data.data?.map((item) => (
                                <tr key={item.id}>
                                    <th>{item.name}</th>
                                    <th>{item.unit}</th>
                                    <th>{item.image}</th>
                                    <th style={{ minWidth: 190 }}>
                                        {/* <Button
                                                onClick={() => {
                                                    handleViewShow(SetRowData(item));
                                                }}
                                            >
                                                View
                                            </Button>
                                            | */}
                                        <Button
                                            onClick={() => {
                                                handleEditShow(SetRowData(item), setId(item.id));
                                            }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                handleViewShow(SetRowData(item), setId(item.id), setDelete(true));
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* View Modal */}
                <div className="model-box-view">
                    <Modal show={ViewShow} onHide={handleViewClose} backdrop="static" keyboard={false}>
                        {/* ----------------------Delete Modal----------------------*/}
                        <DeleteModal Delete={Delete} handleRemove={handleRemove} RowData={RowData} handleViewClose={handleViewClose} />
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleViewClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                {/* Modal for Edit employee record */}
                <div className="model-box-view">
                    <Modal show={ViewEdit} onHide={handleEditClose} backdrop="static" keyboard={false}>
                        {/* ----------------------Edit Modal----------------------*/}

                        <EditModal
                            setname={setname}
                            setUnit={setUnit}
                            setImage={setImage}
                            handleEditClose={handleEditClose}
                            handleViewClose={handleViewClose}
                            RowData={RowData}
                            handleUpdate={handleUpdate}
                        />
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Table;
