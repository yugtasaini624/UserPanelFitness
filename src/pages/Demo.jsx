import { useState } from "react";
import "../styles/Demo.css";

const API_URL = "http://localhost:5000/api/ai/demo/heart";

export default function Demo() {

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

  const [loading,setLoading] = useState(false);
  const [result,setResult] = useState(null);

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {

      const res = await fetch(API_URL,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      });

      const data = await res.json();

      if(!data.success) throw new Error(data.message);

      setResult(data.data);

    }
    catch(err){

      alert("Prediction failed");
      console.error(err);

    }

    setLoading(false);

  };

  return (

    <div className="demo-page">

      <h1>AI Heart Disease Predictor</h1>
      <p>Try our AI health analysis instantly</p>

      {/* FORM */}

      <form className="demo-form" onSubmit={handleSubmit}>

        <label>Age</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required/>

        <label>Gender</label>
        <select name="sex" value={formData.sex} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label>Chest Pain</label>
        <select name="cp" value={formData.cp} onChange={handleChange}>
          <option value="typical">Typical</option>
          <option value="atypical">Atypical</option>
          <option value="non-anginal">Non Anginal</option>
          <option value="asymptomatic">Asymptomatic</option>
        </select>

        <label>Blood Pressure</label>
        <input type="number" name="trestbps" value={formData.trestbps} onChange={handleChange} required/>

        <label>Cholesterol</label>
        <input type="number" name="chol" value={formData.chol} onChange={handleChange} required/>

        <label className="checkbox">
          <input type="checkbox" name="fbs" checked={formData.fbs} onChange={handleChange}/>
          Fasting Blood Sugar > 120
        </label>

        <label>Rest ECG</label>
        <select name="restecg" value={formData.restecg} onChange={handleChange}>
          <option value="normal">Normal</option>
          <option value="ST-T">ST-T Abnormal</option>
          <option value="left-ventricular">Left Ventricular</option>
        </select>

        <label>Max Heart Rate</label>
        <input type="number" name="thalach" value={formData.thalach} onChange={handleChange} required/>

        <label className="checkbox">
          <input type="checkbox" name="exang" checked={formData.exang} onChange={handleChange}/>
          Exercise Induced Angina
        </label>

        <label>ST Depression</label>
        <input type="number" step="0.1" name="oldpeak" value={formData.oldpeak} onChange={handleChange} required/>

        <label>Slope</label>
        <select name="slope" value={formData.slope} onChange={handleChange}>
          <option value="upsloping">Upsloping</option>
          <option value="flat">Flat</option>
          <option value="downsloping">Downsloping</option>
        </select>

        <label>Major Vessels</label>
        <input type="number" name="ca" min="0" max="3" value={formData.ca} onChange={handleChange} required/>

        <label>Thalassemia</label>
        <select name="thal" value={formData.thal} onChange={handleChange}>
          <option value="normal">Normal</option>
          <option value="fixed-defect">Fixed Defect</option>
          <option value="reversible-defect">Reversible Defect</option>
        </select>

        <button type="submit">Analyze Health</button>

      </form>


      {loading && <p className="loading">AI analyzing health data...</p>}


      {/* RESULT CARD */}

      {result && (

        <div className="result-card">

          <h2>AI Prediction Result</h2>

          <div className="risk-score">

            <span>{result.riskScore.toFixed(1)}%</span>
            <p>{result.riskLevel} Risk</p>

          </div>


          <div className="result-section">

            <h3>Key Risk Factors</h3>

            <ul>
              {result.explanations.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>


          <div className="result-section">

            <h3>AI Recommendations</h3>

            <ul>
              {result.recommendations.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

        </div>

      )}

    </div>

  );

}