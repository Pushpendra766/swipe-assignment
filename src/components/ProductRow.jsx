import React from "react";
import { Button } from "react-bootstrap";
import { BiSolidPencil, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productsSlice";

const ProductRow = ({ product, handleEditProduct }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <tr>
      <td>{product.id}</td>
      <td className="fw-normal">{product.name}</td>
      <td className="fw-normal">{product.quantityAvailable}</td>
      <td className="fw-normal">{product.sellingPrice}</td>
      <td className="fw-normal">{product.buyingPrice}</td>
      <td style={{ width: "5%" }}>
        <Button variant="outline-primary" onClick={handleEditProduct}>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <BiSolidPencil />
          </div>
        </Button>
      </td>
      <td style={{ width: "5%" }}>
        <Button
          variant="danger"
          onClick={() => handleDeleteProduct(product.id)}
        >
          <div className="d-flex align-items-center justify-content-center gap-2">
            <BiTrash />
          </div>
        </Button>
      </td>
    </tr>
  );
};

export default ProductRow;
