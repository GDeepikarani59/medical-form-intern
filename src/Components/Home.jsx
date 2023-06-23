import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const bills = useSelector((state) => state.bills);

  return (
    <div className='main-container'>
     <div className="container">
      <h2 className='heading'>Home Page</h2>
      {bills.length === 0 ? (
        <p className='list'>No bills uploaded yet.</p>
      ) : (
        <ul className='list'>
          {bills.map((bill, index) => (
            <li key={index}>
              <p>Patient Name: {bill.patientName}</p>
              <p>Patient Address: {bill.patientAddress}</p>
              <p>Hospital Name: {bill.hospitalName}</p>
              <p>Date of Service: {bill.dateOfService}</p>
              <p>Bill Amount: {bill.billAmount}</p>
              {bill.billImage && (
                <div>
                  Bill Image:
                  <img src={URL.createObjectURL(bill.billImage)} alt="Bill" />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
       <div className='link'>
          <Link to="/form">Add New Bill</Link>
       </div>
    </div>
    </div>
  );
};

export default Home;
