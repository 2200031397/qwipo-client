import React, { useState } from 'react';
import axios from 'axios';

const UpdateCustomer = () => {
  const [customerId, setCustomerId] = useState('');
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://qwipo.onrender.com/api/customers/${customerId}`, customerData);
      alert('Customer Updated Successfully');
    } catch (error) {
      console.error('Error updating customer', error);
    }
  };

  return (
    <div>
      <h1>Update Customer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerId"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          placeholder="Customer ID"
          required
        />
        <input
          type="text"
          name="firstName"
          value={customerData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={customerData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="phone"
          value={customerData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <input
          type="email"
          name="email"
          value={customerData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <button type="submit">Update Customer</button>
      </form>
    </div>
  );
};

export default UpdateCustomer;
