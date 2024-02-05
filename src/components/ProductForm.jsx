import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";
import { updateProduct } from "../redux/productsSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { updateInvoiceItem } from "../redux/invoicesSlice";

const ProductForm = ({ currentProduct, updateProductModalOpen }) => {
  const isEdit = Object.keys(currentProduct).length !== 0;
  const productId = (+new Date() + Math.floor(Math.random() * 999999)).toString(
    36
  );
  const [formData, setFormData] = useState({
    id: isEdit ? currentProduct.id : productId,
    name: isEdit ? currentProduct.name : "",
    description: isEdit ? currentProduct.description : "",
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
      const updatedItem = {
        itemName: formData.name,
        itemCategory: formData.category,
        itemDescription: formData.description,
        itemPrice: formData.sellingPrice,
      };
      dispatch(
        updateInvoiceItem({ productId: currentProduct.id, updatedItem })
      );
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
          <Form.Group as={Col} md="4">
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
          <Form.Group as={Col} md="4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Product description"
              value={formData.description}
              onChange={(e) => updateFormData("description", e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Product Description is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
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
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Quantity"
              value={formData.quantityAvailable}
              onChange={(e) => {
                const inputValue = parseInt(e.target.value, 10);
                if (isNaN(inputValue) || inputValue <= 0) {
                  updateFormData("quantityAvailable", "");
                } else {
                  updateFormData("quantityAvailable", inputValue);
                }
              }}
            />
            <Form.Control.Feedback type="invalid">
              Quantity is required and must be greater than 0!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Selling Price</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Selling Price"
                required
                value={formData.sellingPrice}
                onChange={(e) => {
                  const inputValue = parseInt(e.target.value, 10);
                  if (isNaN(inputValue) || inputValue <= 0) {
                    updateFormData("quantityAvailable", "");
                  } else {
                    updateFormData("sellingPrice", inputValue);
                  }
                }}
              />
              <Form.Control.Feedback type="invalid">
                Selling price is required and must be greater than 0!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Buying Price</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Buying Price"
                required
                value={formData.buyingPrice}
                onChange={(e) => {
                  const inputValue = parseInt(e.target.value, 10);
                  if (isNaN(inputValue) || inputValue <= 0) {
                    updateFormData("quantityAvailable", "");
                  } else {
                    updateFormData("buyingPrice", inputValue);
                  }
                }}
              />
              <Form.Control.Feedback type="invalid">
                Buying price is required and must be greater than 0!
              </Form.Control.Feedback>
            </InputGroup>
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
