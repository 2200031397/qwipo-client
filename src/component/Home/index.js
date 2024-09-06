import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Customer Management System</h1>
      <Link to="/create"><button>Create Customer</button></Link>
      <Link to="/view"><button>View Customer</button></Link>
      <Link to="/update"><button>Update Customer</button></Link>
      <Link to="/delete"><button>Delete Customer</button></Link>
    </div>
  );
}

export default Home;
