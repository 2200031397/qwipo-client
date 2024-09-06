import React, { useState } from 'react';
import axios from 'axios';

const DeleteCustomer = () => {
  const [customerId, setCustomerId] = useState('');

  const handleInputChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:3000/api/customers/${customerId}`);
      alert('Customer Deleted Successfully');
    } catch (error) {
      console.error('Error deleting customer', error);
    }
  };

  return (
    <div>
      <h1>Delete Customer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={customerId}
          onChange={handleInputChange}
          placeholder="Enter Customer ID"
          required
        />
        <button type="submit">Delete Customer</button>
      </form>
    </div>
  );
};

export default DeleteCustomer;
