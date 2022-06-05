import React from "react";
import ScnHeader from "../../common/ScnHeader/Header";
import Header from "../../common/Header/Navbar";
import Table from "./Table";

function Show() {
    return (
        <div>
            <ScnHeader />
            <Header />
            <Table />
            {/* <DeleteModal /> */}
        </div>
    );
}

export default Show;
