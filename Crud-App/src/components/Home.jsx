import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../server";
import { toast } from "react-toastify";

function Home() {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  function handleChange(e) {
    setFormData((preval) => ({ ...preval, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    toast.dismiss();
    await postData(formData);
    toast.success("User add Successfully");
    setFormData({ title: "", description: "", price: "" });
    Navigate("/");
  }
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-5 m-auto mt-5">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  aria-label="Title"
                  aria-describedby="basic-addon1"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  aria-label="description"
                  aria-describedby="basic-addon1"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Price"
                  aria-label="price"
                  aria-describedby="basic-addon1"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="btn btn-outline-success me-2 px-3 py-2">
                Add product
              </button>
              <button
                className="btn btn-outline-danger ms-2 px-3 py-2"
                onClick={() => Navigate("/product")}>
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
