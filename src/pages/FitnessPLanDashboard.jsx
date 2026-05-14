import { useEffect, useState } from "react";
import "../styles/FitnessPlanDashboard.css";

const FitnessPlanDashboard = () => {

  const [risks,setRisks] = useState([]);

  useEffect(()=>{

    const stored = localStorage.getItem("riskData");

    if(stored){
      setRisks(JSON.parse(stored));
    }

  },[]);

  if(!risks.length){
    return(
      <div className="fitness-empty">
        <h2>Your AI Fitness Plan</h2>
        <p>Run risk analysis first to generate your personalized plan.</p>
      </div>
    )
  }

  /* Extract health factors from AI output */

  const explanations = risks.flatMap(r => r.explanations || []);

  const heart = risks.find(r => r.type === "Heart");
  const diabetes = risks.find(r => r.type === "Diabetes");
  const hyper = risks.find(r => r.type === "Hypertension");
  const obesity = risks.find(r => r.type === "Obesity");

  /* Decide workout intensity */

  const intensity =
    heart?.riskLevel === "High" || hyper?.riskLevel === "High"
      ? "low"
      : obesity?.riskLevel === "High"
      ? "high"
      : "moderate";

  const cardio =
    intensity === "low"
      ? "20 min light walking"
      : intensity === "moderate"
      ? "30 min brisk walking"
      : "35 min fat-burn cardio";

  const strength =
    intensity === "low"
      ? "Light bodyweight training"
      : intensity === "moderate"
      ? "Moderate strength training"
      : "High-intensity strength workout";

  /* Weekly plan */

  const weeklyPlan = [

    {
      day:"Monday",
      workouts:[
        cardio,
        "Dynamic stretching routine",
        diabetes ? "Post-meal glucose stabilizing walk" : "Core activation exercises",
        "Breathing relaxation training"
      ]
    },

    {
      day:"Tuesday",
      workouts:[
        strength,
        obesity ? "Fat burn interval training" : "Bodyweight conditioning",
        "3×12 squats",
        "Mobility stretching"
      ]
    },

    {
      day:"Wednesday",
      workouts:[
        "Cycling or swimming 30 min",
        hyper ? "Low-impact cardio pacing" : "Moderate cardio interval",
        "Balance exercises",
        "Cooldown stretch"
      ]
    },

    {
      day:"Thursday",
      workouts:[
        "Yoga flexibility routine",
        "Hip mobility exercises",
        diabetes ? "Glucose control movement drills" : "Pilates core training",
        "Deep breathing meditation"
      ]
    },

    {
      day:"Friday",
      workouts:[
        cardio,
        "Upper body strength workout",
        heart ? "Heart-rate controlled treadmill walk" : "Jump rope session",
        "Stretch recovery"
      ]
    },

    {
      day:"Saturday",
      workouts:[
        "Full body strength training",
        "Resistance band exercises",
        obesity ? "Metabolic fat burn workout" : "Functional training",
        "Mobility recovery"
      ]
    },

    {
      day:"Sunday",
      workouts:[
        "Recovery walk 20 min",
        "Light yoga relaxation",
        "Meditation breathing",
        "Gentle stretching"
      ]
    }

  ];

  return(

    <div className="fitness-dashboard">

      <h1 className="fitness-title">
        AI Personalized Fitness Plan
      </h1>

      <p className="fitness-subtitle">
        Generated from your latest health risk analysis
      </p>

      {/* Health Factors */}

      <div className="health-factors">

        <h2>Health Factors Identified</h2>

        <ul>
          {explanations.map((e,i)=>(
            <li key={i}>{e}</li>
          ))}
        </ul>

      </div>

      {/* Weekly Plan */}

      <div className="plan-grid">

        {weeklyPlan.map((d,i)=>(
          <div key={i} className="plan-card">

            <h3>{d.day}</h3>

            <ul className="workout-list">
              {d.workouts.map((w,index)=>(
                <li key={index}>{w}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>

    </div>

  )

}

export default FitnessPlanDashboard