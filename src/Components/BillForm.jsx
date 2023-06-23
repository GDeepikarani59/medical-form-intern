import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBill } from '../Redux/actions';

const BillForm = () => {
  const [bill, setBill] = useState({
    patientName: '',
    patientAddress: '',
    hospitalName: '',
    dateOfService: '',
    billAmount: '',
    billImage: null,
  });
  let isFormValid = Object.values(bill).every((value) => value !== ('' || null));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBill(bill));
    navigate('/summary');
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name == 'billAmount') {
        if(!/^\d+(\.\d{1,2})?$/.test(value)) {
            alert('Invalid bill amount format');
        } else {
            setBill((prevBill) => ({ ...prevBill, [name]: value }));
        }
    } 
    else{
        setBill((prevBill) => ({ ...prevBill, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBill((prevData) => ({
      ...prevData,
      billImage: file,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBill((prevBill) => ({ ...prevBill, billImage: file }));
  };

  return (
    <div className='main-container'>
        <div className="container">
      <h2 className='heading'>Add Bill</h2>
      <form class="form-data" onSubmit={handleSubmit}>
        <label className="label">
          Patient Name:
          <input
            type="text"
            className="form-input"
            name="patientName"
            value={bill.patientName}
            onChange={handleChange}
          />
        </label>
        <br />
      <label className="label">
        Patient Address:
        <input
          type="text"
          className="form-input"
          name="patientAddress"
          value={bill.patientAddress}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="label" >
        Hospital Name:
        <input
          type="text"
          className="form-input"
          name="hospitalName"
          value={bill.hospitalName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="label">
        Date of Service:
        <input
          type="date"
          className="form-input"
          name="dateOfService"
          value={bill.dateOfService}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="label">
        Bill Amount:
        <input
          type="text"
          className="form-input"
          name="billAmount"
          value={bill.billAmount}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="label">
        Bill Image:
        <input type="file" className="form-input rmv" accept="image/*" onChange={handleImageChange} />
      </label>
      <br />
        <button type="submit" disabled={!isFormValid} className="button" onSubmit={handleFileChange}>Submit</button>
      </form>
    </div>
    </div> 
  );
};

export default BillForm;



