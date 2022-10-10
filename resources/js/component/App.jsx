import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./AddProduct";
import HeaderNavbar from "./HeaderNavbar";
import Update from "./Update";

const App = () => {
    return (
        <div>
            <HeaderNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/updateProduct/:id" element={<Update />} />
            </Routes>
        </div>
    );
};

export default App;
