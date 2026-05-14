import { useState } from "react";
import "../styles/FormStyles.css";

const HeartForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "male",
    cp: "typical",
    trestbps: "",
    chol: "",
    fbs: false,
    restecg: "normal",
    thalach: "",
    exang: false,
    oldpeak: "",
    slope: "flat",
    ca: "",
    thal: "normal",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      age: parseInt(formData.age),
      sex: formData.sex,
      cp: formData.cp,
      trestbps: parseFloat(formData.trestbps),
      chol: parseFloat(formData.chol),
      fbs: Boolean(formData.fbs),
      restecg: formData.restecg,
      thalach: parseFloat(formData.thalach),
      exang: Boolean(formData.exang),
      oldpeak: parseFloat(formData.oldpeak),
      slope: formData.slope,
      ca: parseFloat(formData.ca),
      thal: formData.thal,
    };

    console.log("Heart Payload:", payload);
    onSubmit(payload);
  };

  return (
    <form className="ai-form" onSubmit={handleSubmit}>
      <h2>Heart Disease Predictor</h2>

      <label>Age</label>
      <input type="number" name="age" value={formData.age} onChange={handleChange} required />

      <label>Gender</label>
      <select name="sex" value={formData.sex} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>Chest Pain Type</label>
      <select name="cp" value={formData.cp} onChange={handleChange}>
        <option value="typical">Typical</option>
        <option value="atypical">Atypical</option>
        <option value="non-anginal">Non-Anginal</option>
        <option value="asymptomatic">Asymptomatic</option>
      </select>

      <label>Resting Blood Pressure</label>
      <input type="number" name="trestbps" value={formData.trestbps} onChange={handleChange} required />

      <label>Cholesterol</label>
      <input type="number" name="chol" value={formData.chol} onChange={handleChange} required />

      <label>
        <input type="checkbox" name="fbs" checked={formData.fbs} onChange={handleChange} /> Fasting Blood Sugar > 120 mg/dl
      </label>

      <label>Resting ECG</label>
      <select name="restecg" value={formData.restecg} onChange={handleChange}>
        <option value="normal">Normal</option>
        <option value="ST-T">ST-T Abnormal</option>
        <option value="left-ventricular">Left Ventricular Hypertrophy</option>
      </select>

      <label>Max Heart Rate Achieved</label>
      <input type="number" name="thalach" value={formData.thalach} onChange={handleChange} required />

      <label>
        <input type="checkbox" name="exang" checked={formData.exang} onChange={handleChange} /> Exercise Induced Angina
      </label>

      <label>ST Depression</label>
      <input type="number" step="0.1" name="oldpeak" value={formData.oldpeak} onChange={handleChange} required />

      <label>Slope</label>
      <select name="slope" value={formData.slope} onChange={handleChange}>
        <option value="upsloping">Upsloping</option>
        <option value="flat">Flat</option>
        <option value="downsloping">Downsloping</option>
      </select>

      <label>Number of Major Vessels (0-3)</label>
      <input type="number" name="ca" value={formData.ca} onChange={handleChange} min="0" max="3" required />

      <label>Thalassemia</label>
      <select name="thal" value={formData.thal} onChange={handleChange}>
        <option value="normal">Normal</option>
        <option value="fixed-defect">Fixed Defect</option>
        <option value="reversible-defect">Reversible Defect</option>
      </select>

      <button type="submit">Predict Heart Risk</button>
    </form>
  );
};

export default HeartForm;