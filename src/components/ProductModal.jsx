import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import ProductForm from "./ProductForm";

const ProductModal = ({
  isProductModalOpen,
  updateProductModalOpen,
  currentProduct,
}) => {
  return (
    <div>
      <Modal
        show={isProductModalOpen}
        onHide={() => updateProductModalOpen(false)}
        size="lg"
        centered
        className="p-5"
      >
        <ProductForm
          currentProduct={currentProduct}
          updateProductModalOpen={updateProductModalOpen}
        />
      </Modal>
    </div>
  );
};

export default ProductModal;
