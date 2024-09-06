import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import CreateCustomer from './component/CreateCustomer';
import ViewCustomer from './component/ViewCustomer';
import UpdateCustomer from './component/UpdateCustomer';
import DeleteCustomer from './component/DeleteCustomer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCustomer />} />
          <Route path="/view" element={<ViewCustomer />} />
          <Route path="/update" element={<UpdateCustomer />} />
          <Route path="/delete" element={<DeleteCustomer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
