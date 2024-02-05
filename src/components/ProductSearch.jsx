import React, { useState } from "react";
import { Form, ListGroup, FormControl } from "react-bootstrap";

const ProductSearch = ({ products, onItemClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === "") {
      setSuggestedProducts([]);
    } else {
      const filteredProducts = products.filter((item) =>
        item.name.toLowerCase().includes(term)
      );
      setSuggestedProducts(filteredProducts);
    }
  };

  const handleItemClick = (item) => {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const newItem = {
      itemId: id,
      itemName: item.name,
      itemCategory: item.category,
      itemDescription: item.description,
      itemPrice: item.sellingPrice,
      itemQuantity: 1,
    };
    onItemClick(newItem);
    setSearchTerm("");
    setSuggestedProducts([]);
  };

  return (
    <div className="mb-2">
      <Form.Group controlId="searchBar">
        <FormControl
          type="text"
          placeholder="Search for an item to add"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ListGroup
          style={{ zIndex: 1 }}
          className="position-absolute w-50 mt-1"
        >
          {suggestedProducts.map((item) => (
            <ListGroup.Item
              key={item.id}
              action
              className="suggested-item"
              onClick={() => handleItemClick(item)}
            >
              <span className="text-primary">{item.name}</span>{" "}
              <span className="text-secondary">({item.category})</span> -{" "}
              <span className="text-success">$ {item.sellingPrice}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Form.Group>
    </div>
  );
};

export default ProductSearch;
