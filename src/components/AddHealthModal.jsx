import { useState } from "react";
import { createHealthLog } from "../services/healthService";
import "../styles/AddHealthModal.css";

export default function AddHealthModal({ close, refresh }) {
  const [form, setForm] = useState({
    height: "",
    weight: "",
    systolic: "",
    diastolic: "",
    heartRate: "",
    spo2: "",
    sleepHours: "",
    steps: "",
    waterIntake: "",
    stressLevel: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createHealthLog({
      height: Number(form.height),
      weight: Number(form.weight),
      bloodPressure: {
        systolic: Number(form.systolic),
        diastolic: Number(form.diastolic),
      },
      heartRate: Number(form.heartRate),
      spo2: Number(form.spo2),
      sleepHours: Number(form.sleepHours),
      steps: Number(form.steps),
      waterIntake: Number(form.waterIntake),
      stressLevel: Number(form.stressLevel),
    });

    refresh();
    close();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Daily Health Log</h3>

        <form onSubmit={handleSubmit} className="health-form">
          <input name="height" placeholder="Height (cm)" onChange={handleChange} required />
          <input name="weight" placeholder="Weight (kg)" onChange={handleChange} required />
          <input name="systolic" placeholder="Systolic BP" onChange={handleChange} required />
          <input name="diastolic" placeholder="Diastolic BP" onChange={handleChange} required />
          <input name="heartRate" placeholder="Heart Rate" onChange={handleChange} required />
          <input name="spo2" placeholder="SpO2" onChange={handleChange} />
          <input name="sleepHours" placeholder="Sleep Hours" onChange={handleChange} />
          <input name="steps" placeholder="Steps" onChange={handleChange} />
          <input name="waterIntake" placeholder="Water Intake (L)" onChange={handleChange} />
          <input name="stressLevel" placeholder="Stress Level (1-10)" onChange={handleChange} />

          <div className="modal-actions">
            <button type="button" onClick={close} className="cancel-btn">Cancel</button>
            <button type="submit" className="save-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}