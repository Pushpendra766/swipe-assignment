import { useState } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import InvoiceList from "../components/InvoiceList";
import ProductList from "../components/ProductList";

function NavTabsExample() {
  const [currentTab, setCurrentTab] = useState("invoices");
  return (
    <>
      <h3 className="fw-bold pb-2 pb-md-4 text-center">Swipe Assignment</h3>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="invoices">
            <Nav.Item>
              <Nav.Link
                eventKey="invoices"
                onClick={() => setCurrentTab("invoices")}
              >
                Invoices
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="products"
                onClick={() => setCurrentTab("products")}
              >
                Products
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          {currentTab === "invoices" ? <InvoiceList /> : <ProductList />}
        </Card.Body>
      </Card>
    </>
  );
}

export default NavTabsExample;
