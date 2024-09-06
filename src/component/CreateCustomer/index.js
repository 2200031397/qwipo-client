import React, { useState } from 'react';
import axios from 'axios';

const CreateCustomer = () => {
  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    addresses: [{ street: '', city: '', state: '', pincode: '', isPrimary: false }]
  });

  // Handle input changes for customer fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  // Handle address field changes
  const handleAddressChange = (index, e) => {
    const { name, value } = e.target;
    const newAddresses = customer.addresses.map((address, i) =>
      i === index ? { ...address, [name]: value } : address
    );
    setCustomer({ ...customer, addresses: newAddresses });
  };

  // Add new address input fields
  const addAddress = () => {
    setCustomer({
      ...customer,
      addresses: [...customer.addresses, { street: '', city: '', state: '', pincode: '', isPrimary: false }]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://qwipo.onrender.com/api/customers', customer);
      alert('Customer Created Successfully');
    } catch (error) {
      console.error('Error creating customer', error);
    }
  };

  return (
    <div>
      <h1>Create Customer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={customer.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={customer.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          name="phone"
          value={customer.phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        
        {/* Addresses Fields */}
        <h3>Addresses</h3>
        {customer.addresses.map((address, index) => (
          <div key={index}>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={(e) => handleAddressChange(index, e)}
              placeholder="Street"
              required
            />
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={(e) => handleAddressChange(index, e)}
              placeholder="City"
              required
            />
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={(e) => handleAddressChange(index, e)}
              placeholder="State"
              required
            />
            <input
              type="text"
              name="pincode"
              value={address.pincode}
              onChange={(e) => handleAddressChange(index, e)}
              placeholder="Pincode"
              required
            />
          </div>
        ))}
        <button type="button" onClick={addAddress}>
          Add Another Address
        </button>
        
        <button type="submit">Create Customer</button>
      </form>
    </div>
  );
};

export default CreateCustomer;
