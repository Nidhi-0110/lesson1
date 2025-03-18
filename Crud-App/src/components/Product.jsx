import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getData, deleteData } from "../server";
import { toast } from "react-toastify";

function Product() {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [pageRefresh, setPagerefresh] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await getData();
      setData(response);
    }
    fetchData();
    setPagerefresh(false);
  }, [pageRefresh]);

  async function handleDelete(id) {
    toast.dismiss();
    await deleteData(id);
    toast.success(`${id} User delete successfully`);
    setPagerefresh(true);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 m-auto mt-5">
            <button
              className="btn btn-outline-info mt-4"
              onClick={() => Navigate("/")}>
              Add Product
            </button>
            <table className="table fs-4 mt-4">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((element, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{element.title}</td>
                        <td>{element.description}</td>
                        <td>{element.price}</td>
                        <td>
                          <button className="btn">
                            <i className="bi bi-pencil-square text-primary fs-5"></i>
                          </button>
                          <button className="btn">
                            <i
                              className="bi bi-trash3 text-danger fs-5"
                              onClick={() => handleDelete(element.id)}></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
