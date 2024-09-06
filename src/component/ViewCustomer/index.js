import React, { useState } from 'react';
import axios from 'axios';

const ViewCustomer = () => {
  const [customerId, setCustomerId] = useState('');
  const [customer, setCustomer] = useState(null);

  const handleInputChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://qwipo.onrender.com/api/customers/${customerId}`);
      setCustomer(response.data);
    } catch (error) {
      console.error('Error fetching customer', error);
    }
  };

  return (
    <div>
      <h1>View Customer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={customerId}
          onChange={handleInputChange}
          placeholder="Enter Customer ID"
          required
        />
        <button type="submit">View Customer</button>
      </form>

      {customer && (
        <div>
          <h3>Customer Details:</h3>
          <p><strong>Name:</strong> {customer.firstName} {customer.lastName}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          
          {/* Show addresses if available */}
          {customer.addresses && customer.addresses.length > 0 && (
            <div>
              <h4>Addresses:</h4>
              {customer.addresses.map((address, index) => (
                <div key={index}>
                  <p><strong>Street:</strong> {address.street}</p>
                  <p><strong>City:</strong> {address.city}</p>
                  <p><strong>State:</strong> {address.state}</p>
                  <p><strong>Pincode:</strong> {address.pincode}</p>
                  <p>{address.isPrimary ? 'Primary Address' : ''}</p>
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewCustomer;
