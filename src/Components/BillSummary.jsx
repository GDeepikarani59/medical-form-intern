import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';

const BillSummary = () => {
  const bill = useSelector((state) => state.bills[state.bills.length - 1]);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/form');
  };

  return (
    <div className='main-container'>
        <div className="container">
            <h2 className='heading'>Bill Summary</h2>
            <div class="form-data">
                <p className="label">Patient Name: {bill.patientName}</p>
                <p className="label">Patient Address: {bill.patientAddress}</p>
                <p className="label">Hospital Name: {bill.hospitalName}</p>
                <p className="label">Date of Service: {bill.dateOfService}</p>
                <p className="label">Bill Amount: {bill.billAmount}</p>
                {bill.billImage && (
                    <div> Bill Image:
                        <img src={URL.createObjectURL(bill.billImage)} alt="Bill" />
                    </div>
                )}
            
            <button className="button" onClick={handleEdit}>Edit</button>
            <Link to="/">Home</Link>
            </div>
        </div>
    </div>
  );
};

export default BillSummary;
