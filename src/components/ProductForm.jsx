import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";
import { useSelector } from "react-redux";
import { updateProduct } from "../redux/productsSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

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
    category: isEdit ? currentProduct.category : "",
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

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
    } else {
      handleAddProduct();
    }
    setValidated(true);
  };

  return (
    <div className="p-4">
      <h5>Add Product</h5>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Product name"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Product Name is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Quantity"
              value={formData.quantityAvailable}
              onChange={(e) =>
                updateFormData("quantityAvailable", e.target.value)
              }
            />
            <Form.Control.Feedback type="invalid">
              Quantity is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Selling Price</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Selling Price"
                required
                value={formData.sellingPrice}
                onChange={(e) => updateFormData("sellingPrice", e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Selling price is required!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Buying Price</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Buying Price"
                required
                value={formData.buyingPrice}
                onChange={(e) => updateFormData("buyingPrice", e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Buying price is required!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              required
              value={formData.category}
              onChange={(e) => updateFormData("category", e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="Grocery">Grocery</option>
              <option value="Stationery">Stationery</option>
              <option value="Electronics">Electronics</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a category!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button className="fw-bold" type="submit">
          {isEdit ? "Update" : "Add"} Product
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
