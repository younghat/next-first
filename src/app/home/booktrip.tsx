'use client';

import { useState } from 'react';
import Loader from '../components/loader';

export default function BookTripForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    country: '',
    adults: '',
    children: '',
    email: '',
    contact: '',
    dynamictrip: '',
  });
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationErrors([]); // clear errors on change
    setSuccessMessage('');
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setValidationErrors([]);
  setSuccessMessage('');

  const payload = new FormData();

  // Required hidden identifier
  payload.append('_wpcf7_unit_tag', 'wpcf7-f206-p197-o1');

  // Append all fields — use default values if needed
  payload.append('fullname', formData.fullname || '');
  payload.append('country', formData.country || '');
  payload.append('adults', formData.adults || '0');
  payload.append('children', formData.children || '0');
  payload.append('email', formData.email || '');
  payload.append('contact', formData.contact || '');
  payload.append('dynamictrip', formData.dynamictrip || '');

  try {
    const response = await fetch('https://staging.excellenttrek.com/wp-json/contact-form-7/v1/contact-forms/206/feedback', {
      method: 'POST',
      body: payload,
    });

    const result = await response.json();

    if (result.status === 'validation_failed') {
      const errors = result.invalid_fields.map((field: any) => field.message);
      setValidationErrors(errors);
    } else {
      setSuccessMessage(result.message || 'Form submitted successfully.');
      setFormData({
        fullname: '',
        country: '',
        adults: '',
        children: '',
        email: '',
        contact: '',
        dynamictrip: '',
      });
    }

  } catch (error) {
    setValidationErrors(['Something went wrong. Please try again.']);
  } finally {
    setLoading(false);
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
                  Book <span style={{ color: '#0cb7d6' }}>Trips</span>
                </h1>

                {/* ✅ Show validation errors */}
                {validationErrors.length > 0 && (
                  <div className="alert alert-danger mt-3">
                    <ul className="mb-0">
                      {validationErrors.map((msg, i) => (
                        <li key={i}>{msg}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ✅ Show success message */}
                {successMessage && (
                  <div className="alert alert-success mt-3">
                    {successMessage}
                  </div>
                )}
              </div>
            </div>

            <div className="appointment_section_2">
              <div className="row">
                <div className="col-md-4">
                  <p className="doctorname_text">Full Name</p>
                  <input
                    type="text"
                    className="email_text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="col-md-4">
                  <p className="doctorname_text">Country</p>
                  <input
                    type="text"
                    className="email_text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <p className="doctorname_text">Trip Name</p>
                  <input
                    type="text"
                    className="email_text"
                    name="dynamictrip"
                    value={formData.dynamictrip}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p className="doctorname_text">Adults</p>
                  <input
                    type="number"
                    className="email_text"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <p className="doctorname_text">Children</p>
                  <input
                    type="number"
                    className="email_text"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <p className="doctorname_text">Email</p>
                  <input
                    type="email"
                    className="email_text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p className="doctorname_text">Contact</p>
                  <input
                    type="text"
                    className="email_text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </button>
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
