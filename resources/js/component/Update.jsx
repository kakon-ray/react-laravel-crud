import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Update = () => {
    const [data, setData] = useState({});

    const imageRef = useRef("");
    const productNameRef = useRef("");
    const productPriceRef = useRef("");

    const params = useParams("id");
    const id = params.id;

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await axios.get(
                    `/api/getupateDatatoProduct/${params.id}`
                );
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getUserData();
    }, []);

    const onUpdate = (e) => {
        e.preventDefault();
        const image = imageRef.current.value;
        const productName = productNameRef.current.value;
        const price = productPriceRef.current.value;

        axios
            .post("/api/updateProduct", {
                image,
                productName,
                price,
                id,
            })
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
                        <Form.Control
                            ref={imageRef}
                            defaultValue={data.img}
                            type="text"
                            placeholder="Image url"
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={data.name}
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
                            defaultValue={data.price}
                            ref={productPriceRef}
                            placeholder="Product Price"
                        />
                    </Form.Group>

                    <button onClick={onUpdate} className="btn btn-success">
                        Update
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default Update;
