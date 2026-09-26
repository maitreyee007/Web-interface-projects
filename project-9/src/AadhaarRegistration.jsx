import React, { useRef, useState } from "react";
import "./aadhaar-registration.css";

const DEMO_NAME = "MAITREYEE J";

const initialFormState = {
  fullName: "",
  age: "",
  gender: "",
  phone: "",
  email: "",
  aadhaar: "",
  pan: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  dob: "",
  occupation: "",
  nationality: "Indian",
  password: "",
  photo: null,
};

function TextField({ label, name, type = "text", value, onChange, placeholder, required, error, min, max, accept }) {
  return (
    <div className="field-group">
      <label htmlFor={name}>
        {label}
        {required && <span className="required-mark"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        accept={accept}
        className={error ? "input-error" : ""}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

function AadhaarRegistration() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });
  const photoInputRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validatePhotoFile = (file) => {
    return new Promise((resolve) => {
      if (!file) {
        resolve("Profile photo is required.");
        return;
      }

      if (!file.type.startsWith("image/")) {
        resolve("Please upload a valid image file.");
        return;
      }

      if (file.size > 200 * 1024) {
        resolve("Profile photo must be 200 KB or less.");
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      const image = new Image();

      image.onload = () => {
        URL.revokeObjectURL(imageUrl);

        if (image.width !== 300 || image.height !== 300) {
          resolve("Image dimensions must be exactly 300 x 300 pixels.");
          return;
        }

        resolve("");
      };

      image.onerror = () => {
        URL.revokeObjectURL(imageUrl);
        resolve("Unable to read the selected image.");
      };

      image.src = imageUrl;
    });
  };

  const handlePhotoChange = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      setFormData((prevState) => ({ ...prevState, photo: null }));
      setErrors((prevErrors) => ({ ...prevErrors, photo: "Profile photo is required." }));
      return;
    }

    const photoError = await validatePhotoFile(file);

    if (photoError) {
      setErrors((prevErrors) => ({ ...prevErrors, photo: photoError }));
      setFormData((prevState) => ({ ...prevState, photo: null }));
      event.target.value = "";
      return;
    }

    setFormData((prevState) => ({ ...prevState, photo: file }));
    setErrors((prevErrors) => ({ ...prevErrors, photo: "" }));
  };

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    } else if (data.fullName.trim().toUpperCase() !== DEMO_NAME) {
      newErrors.fullName = "Full Name must match MAITREYEE J.";
    }

    if (!data.age) {
      newErrors.age = "Age is required.";
    } else {
      const ageValue = Number(data.age);
      if (!Number.isInteger(ageValue) || ageValue < 18 || ageValue > 100) {
        newErrors.age = "Age must be between 18 and 100.";
      }
    }

    if (!data.gender) {
      newErrors.gender = "Please select a gender.";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(data.phone.trim())) {
      newErrors.phone = "Phone number must contain exactly 10 digits.";
    }

    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!data.aadhaar.trim()) {
      newErrors.aadhaar = "Aadhaar number is required.";
    } else if (!/^\d{12}$/.test(data.aadhaar.trim())) {
      newErrors.aadhaar = "Aadhaar number must contain exactly 12 digits.";
    }

    if (data.pan.trim() && !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(data.pan.trim().toUpperCase())) {
      newErrors.pan = "PAN format should be ABCDE1234F.";
    }

    if (!data.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!data.state.trim()) {
      newErrors.state = "State is required.";
    }

    if (!data.pincode.trim()) {
      newErrors.pincode = "Pincode is required.";
    } else if (!/^\d{6}$/.test(data.pincode.trim())) {
      newErrors.pincode = "Pincode must contain exactly 6 digits.";
    }

    if (data.password.trim() && data.password.trim().length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    }

    if (!data.photo) {
      newErrors.photo = "Profile photo is required.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setFormMessage({ type: "error", text: "Please correct the errors below." });
      return;
    }

    setFormMessage({ type: "success", text: "Registration submitted successfully." });
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setFormMessage({ type: "", text: "" });

    if (photoInputRef.current) {
      photoInputRef.current.value = "";
    }
  };

  return (
    <main className="aadhaar-page">
      <section className="form-wrapper">
        <div className="form-header">
          <h1>Aadhaar User Registration</h1>
          <p>Form Validation System</p>
          <div className="demo-note">
            Demo Aadhaar name: <strong>{DEMO_NAME}</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name"
              required
              error={errors.fullName}
            />

            <TextField
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
              min="18"
              max="100"
              required
              error={errors.age}
            />

            <div className="field-group">
              <label htmlFor="gender">
                Gender<span className="required-mark"> *</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className={errors.gender ? "input-error" : ""}
              >
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <span className="error-message">{errors.gender}</span>}
            </div>

            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="10-digit phone number"
              required
              error={errors.phone}
            />

            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              error={errors.email}
            />

            <TextField
              label="Aadhaar Number"
              name="aadhaar"
              type="text"
              value={formData.aadhaar}
              onChange={handleInputChange}
              placeholder="12-digit Aadhaar number"
              required
              error={errors.aadhaar}
            />

            <TextField
              label="PAN Number"
              name="pan"
              type="text"
              value={formData.pan}
              onChange={handleInputChange}
              placeholder="ABCDE1234F"
              error={errors.pan}
            />

            <div className="field-group full-width">
              <label htmlFor="address">
                Address<span className="required-mark"> *</span>
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter permanent address"
                className={errors.address ? "input-error" : ""}
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>

            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter city"
            />

            <TextField
              label="State"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="Enter state"
              required
              error={errors.state}
            />

            <TextField
              label="Pincode"
              name="pincode"
              type="text"
              value={formData.pincode}
              onChange={handleInputChange}
              placeholder="6-digit pincode"
              required
              error={errors.pincode}
            />

            <TextField
              label="Date of Birth"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleInputChange}
            />

            <TextField
              label="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              placeholder="Enter occupation"
            />

            <TextField
              label="Nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              placeholder="Nationality"
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Minimum 8 characters"
              error={errors.password}
            />

            <div className="field-group">
              <label htmlFor="photo">
                Profile Photo<span className="required-mark"> *</span>
              </label>
              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                ref={photoInputRef}
                onChange={handlePhotoChange}
                className={errors.photo ? "input-error" : ""}
              />
              <small className="helper-text">Allowed: JPG/PNG only, size ≤ 200 KB, exact 300 × 300 px</small>
              {errors.photo && <span className="error-message">{errors.photo}</span>}
            </div>
          </div>

          {formMessage.text && (
            <div className={`message-box ${formMessage.type}`}>
              {formMessage.text}
            </div>
          )}

          <div className="button-row">
            <button type="submit" className="submit-btn">
              Register User
            </button>
            <button type="button" className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default AadhaarRegistration;
