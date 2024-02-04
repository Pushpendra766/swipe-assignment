import React, { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import ProductRow from "./ProductRow";
import ProductModal from "./ProductModal";
import { useSelector } from "react-redux";

const ProductList = () => {
  const productList = useSelector((store) => store.products.products);
  const isListEmpty = productList.length === 0;
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleAddProduct = () => {
    setCurrentProduct({});
    setIsProductModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setIsProductModalOpen(true);
  };

  return (
    <Card className="d-flex p-3 p-md-4 my-3 my-md-4 ">
      {isListEmpty ? (
        <div className="d-flex flex-column align-items-center">
          <h3 className="fw-bold pb-2 pb-md-4">No products present</h3>
          <Button variant="primary" onClick={handleAddProduct}>
            Add Product
          </Button>
        </div>
      ) : (
        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <h3 className="fw-bold pb-2 pb-md-4">Product List</h3>
            <Button variant="primary mb-2 mb-md-4" onClick={handleAddProduct}>
              Add Product
            </Button>
          </div>
          <Table responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Product</th>
                <th>Qty</th>
                <th>Selling Price</th>
                <th>Purchase Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  handleEditProduct={() => handleEditProduct(product)}
                />
              ))}
            </tbody>
          </Table>
        </div>
      )}
      <ProductModal
        isProductModalOpen={isProductModalOpen}
        updateProductModalOpen={(state) => setIsProductModalOpen(state)}
        currentProduct={currentProduct}
      />
    </Card>
  );
};

export default ProductList;
