import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";
import { useSelector } from "react-redux";
import { updateProduct } from "../redux/productsSlice";

const ProductForm = ({ currentProduct, updateProductModalOpen }) => {
  const isEdit = Object.keys(currentProduct).length !== 0;
  const products = useSelector((store) => store.products.products);
  const productId =
    products.length > 0 ? products[products.length - 1].id + 1 : 1;
  const [formData, setFormData] = useState({
    id: isEdit ? currentProduct.id : productId,
    name: isEdit ? currentProduct.name : "",
    sellingPrice: isEdit ? currentProduct.sellingPrice : "",
    buyingPrice: isEdit ? currentProduct.buyingPrice : "",
    quantityAvailable: isEdit ? currentProduct.quantityAvailable : "",
  });

  const updateFormData = (key, newValue) => {
    setFormData((oldObject) => ({ ...oldObject, [key]: newValue }));
  };
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    if (isEdit) {
      dispatch(
        updateProduct({ id: currentProduct.id, updatedObject: formData })
      );
    } else {
      dispatch(addProduct(formData));
    }
    updateProductModalOpen(false);
  };
  return (
    <div className="p-4">
      <h5>Add Product</h5>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Selling Price</th>
            <th>Buying Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "90%" }}>
              <input
                type="text"
                className="border-0 bg-light rounded p-2 "
                placeholder="Product name"
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
              />
            </td>
            <td style={{ minWidth: "50px" }}>
              <input
                type="text"
                className="border-0 bg-light rounded p-2 "
                placeholder="Quantity"
                value={formData.quantityAvailable}
                onChange={(e) =>
                  updateFormData("quantityAvailable", e.target.value)
                }
              />
            </td>
            <td style={{ minWidth: "50px" }}>
              <input
                type="text"
                className="border-0 bg-light rounded p-2 "
                placeholder="Selling Price"
                value={formData.sellingPrice}
                onChange={(e) => updateFormData("sellingPrice", e.target.value)}
              />
            </td>
            <td style={{ minWidth: "50px" }}>
              <input
                type="text"
                className="border-0 bg-light rounded p-2 "
                placeholder="Buying Price"
                value={formData.buyingPrice}
                onChange={(e) => updateFormData("buyingPrice", e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <Button className="fw-bold" onClick={handleAddProduct}>
        {isEdit ? "Update" : "Add"} Product
      </Button>
    </div>
  );
};

export default ProductForm;
