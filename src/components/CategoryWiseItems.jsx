import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";
import { categories } from "../utils/categoryData";

const CategoryWiseItems = (props) => {
  const { items, onItemizedItemEdit, onRowDel } = props;
  return (
    <>
      {categories.map((category) => {
        if (
          items.filter((item) => item.itemCategory === category).length === 0
        ) {
          return null;
        }
        return (
          <div key={category}>
            <p className="fs-6 fw-semibold text-center">{category}</p>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {items
                  .filter((item) => item.itemCategory === category)
                  .map((item) => {
                    return (
                      <tr key={item.itemId}>
                        <td style={{ width: "50%" }}>
                          <EditableField
                            onItemizedItemEdit={(evt) =>
                              onItemizedItemEdit(evt, item.itemId)
                            }
                            cellData={{
                              type: "text",
                              name: "itemName",
                              placeholder: "Item name",
                              value: item.itemName,
                              id: item.itemId,
                            }}
                          />
                        </td>
                        <td style={{ width: "50%" }}>
                          <EditableField
                            onItemizedItemEdit={(evt) =>
                              onItemizedItemEdit(evt, item.itemId)
                            }
                            cellData={{
                              type: "text",
                              name: "itemDescription",
                              placeholder: "Item description",
                              value: item.itemDescription,
                              id: item.itemId,
                            }}
                          />
                        </td>
                        <td style={{ minWidth: "70px" }}>
                          <EditableField
                            onItemizedItemEdit={(evt) =>
                              onItemizedItemEdit(evt, item.itemId)
                            }
                            cellData={{
                              type: "number",
                              name: "itemQuantity",
                              min: 1,
                              step: "1",
                              value: item.itemQuantity,
                              id: item.itemId,
                            }}
                          />
                        </td>
                        <td style={{ minWidth: "130px" }}>
                          <EditableField
                            onItemizedItemEdit={(evt) =>
                              onItemizedItemEdit(evt, item.itemId)
                            }
                            cellData={{
                              type: "number",
                              name: "itemPrice",
                              min: 1,
                              step: "0.01",
                              presicion: 2,
                              textAlign: "text-end",
                              value: item.itemPrice,
                              id: item.itemId,
                            }}
                          />
                        </td>
                        <td
                          className="text-center"
                          style={{ minWidth: "50px" }}
                        >
                          <BiTrash
                            onClick={() => onRowDel(item)}
                            style={{
                              height: "33px",
                              width: "33px",
                              padding: "7.5px",
                            }}
                            className="text-white mt-1 btn btn-danger"
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default CategoryWiseItems;
