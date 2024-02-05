import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import ProductSearch from "./ProductSearch";
import CategoryWiseItems from "./CategoryWiseItems";

const InvoiceItem = (props) => {
  const { onItemizedItemEdit, onRowDel, items, onRowAdd } = props;
  const products = useSelector((store) => store.products.products);

  return (
    <div>
      <ProductSearch
        products={products}
        onItemClick={(item) => onRowAdd(item)}
      />
      <hr />
      <CategoryWiseItems
        items={items}
        onItemizedItemEdit={onItemizedItemEdit}
        onRowDel={(itemToDelete) => onRowDel(itemToDelete)}
      />
    </div>
  );
};

export default InvoiceItem;
