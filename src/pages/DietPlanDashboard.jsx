import { useEffect, useState } from "react";
import "../styles/DietPlanDashboard.css";

const DietPlanDashboard = () => {

  const [risks,setRisks] = useState([]);

  useEffect(()=>{

    const stored = localStorage.getItem("riskData");

    if(stored){
      setRisks(JSON.parse(stored));
    }

  },[]);

  if(!risks.length){
    return(
      <div className="diet-empty">
        <h2>AI Nutrition Planner</h2>
        <p>Run risk analysis first to generate your personalized diet plan.</p>
      </div>
    )
  }

  const heart = risks.find(r => r.type === "Heart");
  const diabetes = risks.find(r => r.type === "Diabetes");
  const hyper = risks.find(r => r.type === "Hypertension");
  const obesity = risks.find(r => r.type === "Obesity");

  const explanations = risks.flatMap(r => r.explanations || []);

  /* AI DIET STRATEGY */

  const strategies = [];

  if(heart) strategies.push("Prioritize heart-healthy fats and omega-3 foods");
  if(diabetes) strategies.push("Focus on low glycemic index foods");
  if(hyper) strategies.push("Reduce sodium and processed foods");
  if(obesity) strategies.push("Maintain calorie-controlled high-fiber meals");

  /* SMART MEAL SUGGESTIONS */

  const meals = {

    breakfast:[
      "Oatmeal with chia seeds and berries",
      "Greek yogurt with almonds",
      "Whole grain toast with avocado"
    ],

    lunch:[
      "Grilled chicken quinoa bowl",
      "Lentil soup with mixed vegetables",
      "Chickpea spinach salad"
    ],

    snacks:[
      "Mixed nuts and seeds",
      "Apple slices with peanut butter",
      "Low fat yogurt with berries"
    ],

    dinner:[
      "Grilled salmon with broccoli",
      "Brown rice with sautéed vegetables",
      "Tofu stir fry with quinoa"
    ]

  };

  /* QUICK RULES */

  const dietRules = [
    "Drink at least 2.5L water daily",
    "Limit added sugar intake",
    "Avoid deep fried foods",
    "Eat vegetables in every meal",
    "Prefer whole grains over refined grains"
  ];

  return(

    <div className="diet-dashboard">

      <h1 className="diet-title">
        AI Personalized Nutrition Plan
      </h1>

      <p className="diet-subtitle">
        Generated using your health risk analysis
      </p>

      {/* HEALTH FACTORS */}

      <div className="diet-section">

        <h2>Health Insights</h2>

        <ul>
          {explanations.map((e,i)=>(
            <li key={i}>{e}</li>
          ))}
        </ul>

      </div>

      {/* DIET STRATEGY */}

      <div className="strategy-grid">

        {strategies.map((s,i)=>(
          <div key={i} className="strategy-card">
            {s}
          </div>
        ))}

      </div>

      {/* MEALS */}

      <div className="meal-grid">

        <div className="meal-card">
          <h3>Breakfast Ideas</h3>
          <ul>
            {meals.breakfast.map((m,i)=>(<li key={i}>{m}</li>))}
          </ul>
        </div>

        <div className="meal-card">
          <h3>Lunch Ideas</h3>
          <ul>
            {meals.lunch.map((m,i)=>(<li key={i}>{m}</li>))}
          </ul>
        </div>

        <div className="meal-card">
          <h3>Healthy Snacks</h3>
          <ul>
            {meals.snacks.map((m,i)=>(<li key={i}>{m}</li>))}
          </ul>
        </div>

        <div className="meal-card">
          <h3>Dinner Ideas</h3>
          <ul>
            {meals.dinner.map((m,i)=>(<li key={i}>{m}</li>))}
          </ul>
        </div>

      </div>

      {/* DIET RULES */}

      <div className="diet-rules">

        <h2>Smart Diet Habits</h2>

        <ul>
          {dietRules.map((r,i)=>(
            <li key={i}>{r}</li>
          ))}
        </ul>

      </div>

    </div>

  )

}

export default DietPlanDashboard