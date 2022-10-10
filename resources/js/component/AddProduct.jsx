import axios from "axios";
import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";

const AddProduct = () => {
    const [selectedFile, setSelectedFile] = useState();

    const productNameRef = useRef("");
    const productPriceRef = useRef("");

    const onButtonClick = async (e) => {
        e.preventDefault();
        const productName = productNameRef.current.value;
        const price = productPriceRef.current.value;

        var formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("productName", productName);
        formData.append("price", price);

        await axios
            .post("/api/sendproduct", formData)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Add Your Product</h1>
            <div className="card p-5">
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Image</Form.Label>
                        <input
                            type="file"
                            name="file"
                            className="mb-4"
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            ref={productNameRef}
                            placeholder="Product Name"
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            ref={productPriceRef}
                            placeholder="Product Price"
                        />
                    </Form.Group>

                    <button onClick={onButtonClick} className="btn btn-success">
                        submit
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default AddProduct;
