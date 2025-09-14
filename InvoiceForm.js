import React, { useState } from "react";

function InvoiceForm({ onAddInvoice }) {
  const [customer, setCustomer] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer || !amount) return;
    onAddInvoice({ customer, amount, date: new Date().toLocaleDateString() });
    setCustomer("");
    setAmount("");
  };

  return (
    <form className="invoice-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Customer Name"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Invoice</button>
    </form>
  );
}

export default InvoiceForm;