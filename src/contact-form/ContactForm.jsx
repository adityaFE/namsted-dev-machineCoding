import React, { useState } from "react";
import "./styles.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const isValid = /^\S+@\S+\.\S+$/.test(email);
    if (!isValid) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    const isEmailValid = validateEmail(formData.email);

    if (formData.name && formData.email && formData.message && isEmailValid) {
      setShowSuccess(true);
    }
  };
  return (
    <>
      {!showSuccess ? (
        <form className="form-component" onSubmit={handleSubmit}>
          <div className="name-input">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              id="name"
            />
            {!formData.name && isSubmit && (
              <p className="error-message">Name is required.</p>
            )}
          </div>
          <div className="email-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              id="email"
            />
            {emailError && formData.email && (
              <p className="error-message">{emailError}</p>
            )}
            {!formData.email && isSubmit && (
              <p className="error-message">Email is required.</p>
            )}
          </div>
          <div className="message-input">
            <label htmlFor="message">Message:</label>
            <input
              type="text"
              name="message"
              onChange={handleChange}
              value={formData.message}
              id="message"
            />
            {!formData.message && isSubmit && (
              <p className="error-message">Message is required.</p>
            )}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      ) : (
        <div>Thank you, {formData.name}!</div>
      )}
    </>
  );
}

export default ContactForm;
