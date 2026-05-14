import { useState } from "react";
import "../styles/FormStyles.css";

const DiabetesForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
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
      <h2>Diabetes Predictor</h2>

      <label>Pregnancies:</label>
      <input type="number" name="Pregnancies" value={formData.Pregnancies} onChange={handleChange} required />

      <label>Glucose:</label>
      <input type="number" name="Glucose" value={formData.Glucose} onChange={handleChange} required />

      <label>Blood Pressure:</label>
      <input type="number" name="BloodPressure" value={formData.BloodPressure} onChange={handleChange} required />

      <label>Skin Thickness:</label>
      <input type="number" name="SkinThickness" value={formData.SkinThickness} onChange={handleChange} required />

      <label>Insulin:</label>
      <input type="number" name="Insulin" value={formData.Insulin} onChange={handleChange} required />

      <label>BMI:</label>
      <input type="number" step="0.1" name="BMI" value={formData.BMI} onChange={handleChange} required />

      <label>Diabetes Pedigree Function:</label>
      <input type="number" step="0.01" name="DiabetesPedigreeFunction" value={formData.DiabetesPedigreeFunction} onChange={handleChange} required />

      <label>Age:</label>
      <input type="number" name="Age" value={formData.Age} onChange={handleChange} required />

      <button type="submit">Predict Diabetes Risk</button>
    </form>
  );
};

export default DiabetesForm;