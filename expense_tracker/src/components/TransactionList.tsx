import React from "react";

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul  className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <span className="delete-btn">X</span>
        </li>
      </ul>
    </>
  );
};

export default TransactionList;
