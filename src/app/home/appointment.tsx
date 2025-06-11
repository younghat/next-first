'use client';

import { useState, useEffect } from 'react';
import $ from 'jquery';
import Loader from '../components/loader';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    departmentName: '',
    phone: '',
    department: '',
    date: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    import('jquery-ui/ui/widgets/datepicker').then(() => {
      $('#datepicker').datepicker({
        onSelect: function (dateText) {
          setFormData((prev) => ({ ...prev, date: dateText }));
        },
      });
    });
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
     setLoading(true);
    const res = await fetch('/api/appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
        setLoading(false);
      alert('Appointment submitted successfully!');
      setFormData({
        patientName: '',
        doctorName: '',
        departmentName: '',
        phone: '',
        department: '',
        date: '',
      });

       $('#datepicker').val('');
    } else {
      alert('Failed to submit.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="appointment_section">
        <div className="container">
          <div className="appointment_box">
            <div className="row">
              <div className="col-md-12">
                <h1 className="appointment_taital">
                  Book <span style={{ color: '#0cb7d6' }}>Appointment</span>
                </h1>
              </div>
            </div>
            <div className="appointment_section_2">
              <div className="row">
                <div className="col-md-4">
                  <p className="doctorname_text">Patient Name</p>
                  <input type="text" className="email_text" name="patientName" value={formData.patientName} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <p className="doctorname_text">Doctor's Name</p>
                  <select className="form-control" name="doctorName" value={formData.doctorName} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <p className="doctorname_text">Department's Name</p>
                  <select className="form-control" name="departmentName" value={formData.departmentName} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <p className="doctorname_text">Phone Number</p>
                  <input type="text" className="email_text" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <p className="doctorname_text">Department</p>
                  <select className="form-control" name="department" value={formData.department} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <p className="doctorname_text">Choose Date</p>
                  <input type="text" className="email_text" id="datepicker" name="date" placeholder="Pick a date" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-primary">Submit Appointment</button>
                  {loading && <Loader />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
