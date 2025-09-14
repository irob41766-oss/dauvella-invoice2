import React from "react";
import jsPDF from "jspdf";

function InvoiceList({ invoices }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Dauvella Invoice Report", 20, 20);

    invoices.forEach((inv, i) => {
      doc.text(`${i + 1}. ${inv.customer} - ${inv.amount} BDT - ${inv.date}`, 20, 40 + i * 10);
    });

    doc.save("invoices.pdf");
  };

  return (
    <div className="invoice-list">
      <h2>All Invoices</h2>
      {invoices.length === 0 ? (
        <p>No invoices yet.</p>
      ) : (
        <ul>
          {invoices.map((inv, i) => (
            <li key={i}>
              {inv.customer} - {inv.amount} BDT - {inv.date}
            </li>
          ))}
        </ul>
      )}
      {invoices.length > 0 && <button onClick={generatePDF}>Download PDF</button>}
    </div>
  );
}

export default InvoiceList;