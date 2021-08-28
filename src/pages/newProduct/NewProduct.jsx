import React from "react";
import "./newProduct.css";
import { Publish } from "@material-ui/icons";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="productUpload">
          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSR-viluGFOYoNTXw86OHSsbSSFwT5RpE6XJn6woqBw0Sl9wHYrzkBCZpZnN8qI&usqp=CAc"
            alt="productUploadImg"
            className="productUploadImg"
          />
          <label for="file">
            <Publish />
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="Stock" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addNewProductButton">Create</button>
      </form>
    </div>
  );
}
