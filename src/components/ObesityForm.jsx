import { useState } from "react";
import "../styles/FormStyles.css";

const ObesityForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    days: "",
    current_weight: "",
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
      <h2>Obesity Predictor</h2>

      <label>Age:</label>
      <input type="number" name="age" value={formData.age} onChange={handleChange} required />

      <label>Height (m):</label>
      <input type="number" step="0.01" name="height" value={formData.height} onChange={handleChange} required />

      <label>Days:</label>
      <input type="number" name="days" value={formData.days} onChange={handleChange} required />

      <label>Current Weight (kg):</label>
      <input type="number" step="0.1" name="current_weight" value={formData.current_weight} onChange={handleChange} required />

      <button type="submit">Predict Future Weight</button>
    </form>
  );
};

export default ObesityForm;