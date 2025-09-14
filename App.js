import React, { useState } from "react";
import InvoiceForm from "./InvoiceForm";
import InvoiceList from "./InvoiceList";

function App() {
  const [invoices, setInvoices] = useState([]);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  return (
    <div className="container">
      <h1>Dauvella Invoice System</h1>
      <InvoiceForm onAddInvoice={addInvoice} />
      <InvoiceList invoices={invoices} />
    </div>
  );
}

export default App;