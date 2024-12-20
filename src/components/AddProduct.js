import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/Productslice";
import { useNavigate } from "react-router-dom";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
    };
    dispatch(addProduct(newProduct));
    navigate("/products");
  };

  return (
    <div className="form-container">
      <h2>Thêm sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Giá sản phẩm"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Thêm sản phẩm</button>
      </form>
      <button className="back-btn" onClick={() => navigate("/products")}>
        Quay Lại
      </button>
    </div>
  );
};

export default AddProductForm;