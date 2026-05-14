import { useState, useEffect } from "react";
import HeartForm from "../components/HeartForm";
import DiabetesForm from "../components/DiabetesForm";
import HypertensionForm from "../components/HypertensionForm";
import ObesityForm from "../components/ObesityForm";

import RiskSummaryDashboard from "../components/RiskSummaryCards";
import RiskBreakdownPanel from "../components/RiskBreakdownPanel";
import RecommendationPanel from "../components/RecommendationsPanel";

import "../styles/RiskAnalysis.css";

const AI_BASE_URL = "http://localhost:5000/api/ai";

const RiskAnalysis = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedRisk, setSelectedRisk] = useState(null);

  const [heartData, setHeartData] = useState(null);
  const [diabetesData, setDiabetesData] = useState(null);
  const [hyperData, setHyperData] = useState(null);
  const [obesityData, setObesityData] = useState(null);



  // Automatically select first risk when data loads
  useEffect(() => {
    if (data?.risks?.length > 0) {
      setSelectedRisk(data.risks[0]);
      // setLastRiskData(data.risks); // store for fitness plan
    }
  }, [data]);

  const handleSubmit = async (formData, endpoint) => {
    setLoading(true);
    setData(null);
    setSelectedRisk(null);
    try {
      const res = await fetch(`${AI_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!result.success) throw new Error(result.message || "Backend failed");

      let risksArray = [];
      let healthScore = null;

      if (result.data.risks) {
        // Full analysis
        healthScore = result.data.health_score;
        risksArray = result.data.risks;
      } else {
        // Single predictor
        risksArray = [result.data];
      }

      setData({ healthScore, risks: risksArray });
      localStorage.setItem("riskData", JSON.stringify(risksArray));
      // setLastRiskData(risksArray); // always store last output
    } catch (err) {
      alert(err.message);
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFullRiskAnalysis = () => {
    if (!heartData || !diabetesData || !hyperData || !obesityData) {
      alert("Please complete all individual forms first!");
      return;
    }
    const fullData = { ...heartData, ...diabetesData, ...hyperData, ...obesityData };
    handleSubmit(fullData, "/risk-analysis");
  };

  return (
    <div className="risk-page">
      <h1>AI Health Risk Dashboard</h1>

      {data && (
        <button className="back-button" onClick={() => setData(null)}>
          ← Back
        </button>
      )}

      {!data && (
        <div className="button-panel">
          <button onClick={() => setActiveForm("heart")}>Heart Predictor</button>
          <button onClick={() => setActiveForm("diabetes")}>Diabetes Predictor</button>
          <button onClick={() => setActiveForm("hypertension")}>Hypertension Predictor</button>
          <button onClick={() => setActiveForm("obesity")}>Obesity Predictor</button>
          <button onClick={handleFullRiskAnalysis}>Full Risk Analysis</button>
        </div>
      )}

      {!data && activeForm && (
        <div className="form-container">
          {activeForm === "heart" && (
            <HeartForm
              onSubmit={(f) => {
                setHeartData(f);
                handleSubmit(f, "/heart");
              }}
            />
          )}
          {activeForm === "diabetes" && (
            <DiabetesForm
              onSubmit={(f) => {
                setDiabetesData(f);
                handleSubmit(f, "/diabetes");
              }}
            />
          )}
          {activeForm === "hypertension" && (
            <HypertensionForm
              onSubmit={(f) => {
                setHyperData(f);
                handleSubmit(f, "/hypertension");
              }}
            />
          )}
          {activeForm === "obesity" && (
            <ObesityForm
              onSubmit={(f) => {
                setObesityData(f);
                handleSubmit(f, "/obesity");
              }}
            />
          )}
        </div>
      )}

      {loading && <p className="loading">Analyzing...</p>}

      {data && (
        <div className="results">
          {/* 1️⃣ Risk Summary Dashboard */}
          <RiskSummaryDashboard risks={data?.risks || []} onSelectRisk={setSelectedRisk} />

          {/* 2️⃣ Explainable AI Layer */}
          <RiskBreakdownPanel selectedRisk={selectedRisk} />

          {/* 3️⃣ AI Recommendations */}
          <RecommendationPanel selectedRisk={selectedRisk} />

          
        </div>
      )}
    </div>
  );
};

export default RiskAnalysis;