import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import { productData } from "../../dummyData/userData";
import Chart from "../../components/chart/Chart";
import { Publish } from "@material-ui/icons";
export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>

        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSR-viluGFOYoNTXw86OHSsbSSFwT5RpE6XJn6woqBw0Sl9wHYrzkBCZpZnN8qI&usqp=CAc"
              alt="productInfoImg"
              className="productInfoImg"
            />
            <span className="productName">AriPods Pro</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">1230</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">1230</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">1230</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">1230</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="AirPods Pro" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
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
            <button className="productUpdateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
