import { useState } from "react";
import "../styles/FormStyles.css";

const HypertensionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    systolic: "",
    diastolic: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="ai-form" onSubmit={handleSubmit}>
      <h2>Hypertension Predictor</h2>

      <label>Systolic Pressure:</label>
      <input type="number" name="systolic" value={formData.systolic} onChange={handleChange} required />

      <label>Diastolic Pressure:</label>
      <input type="number" name="diastolic" value={formData.diastolic} onChange={handleChange} required />

      <button type="submit">Predict Hypertension Risk</button>
    </form>
  );
};

export default HypertensionForm;