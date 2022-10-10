import axios from "axios";
import { isArray } from "lodash";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([]);

    const [deleteData, setDelete] = useState(false);

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await axios.get("/api/getproduct");
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getUserData();
    }, [deleteData]);

    const onDelete = (id) => {
        async function getUserData() {
            try {
                const response = await axios.get(`/api/deleteProduct/${id}`);
                setDelete(response);
            } catch (error) {
                console.log(error);
            }
        }

        getUserData();
    };

    return (
        <div className="container">
            <Table striped bordered hover>
                <thead className="text-center">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {data.map((item) => {
                        return (
                            <tr>
                                <td>
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="mx-auto"
                                        style={{ width: "100px" }}
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}$</td>
                                <td className="text-center">
                                    <button
                                        type="button"
                                        class="btn btn-danger mx-2"
                                        onClick={() => onDelete(item.id)}
                                    >
                                        Delete
                                    </button>
                                    <Link
                                        to={`/updateProduct/${item.id}`}
                                        class="btn btn-success mx-2"
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default Home;
