import { useState } from "react";
import "../../styles/FooterPages/FAQS.css";

const faqs = [
  {
    q: "What is this AI Health Platform?",
    a: "Our platform uses machine learning models to analyze health data and estimate potential risks such as heart disease, diabetes, hypertension, and obesity."
  },
  {
    q: "Is this a medical diagnosis?",
    a: "No. The predictions are informational only and should not replace professional medical advice."
  },
  {
    q: "How accurate are the predictions?",
    a: "Our models are trained on medical datasets and provide risk estimates, but real medical diagnosis should always be done by healthcare professionals."
  },
  {
    q: "What health conditions can the AI analyze?",
    a: "Currently the platform predicts risks for heart disease, diabetes, hypertension, and obesity."
  },
  {
    q: "Do I need an account to use the platform?",
    a: "You can try the demo without an account, but creating an account allows you to save predictions and track health history."
  },
  {
    q: "Is my health data safe?",
    a: "Yes. We use secure systems to protect your data and never share personal health information."
  },
  {
    q: "Can I track my health history?",
    a: "Yes. Registered users can view previous risk predictions and health insights from the dashboard."
  },
  {
    q: "How does the AI generate recommendations?",
    a: "Recommendations are based on risk factors detected in your health data combined with medical guidelines."
  },
  {
    q: "What information do I need to enter?",
    a: "Depending on the predictor, you may need to enter metrics like age, blood pressure, cholesterol, BMI, glucose levels, and lifestyle indicators."
  },
  {
    q: "How often should I use the AI predictor?",
    a: "You can use it whenever you want to analyze new health data or monitor changes in your health metrics."
  },
  {
    q: "Can the AI help prevent diseases?",
    a: "The AI helps identify potential risks early so users can make healthier lifestyle choices."
  },
  {
    q: "Is the platform free to use?",
    a: "The demo features are free, and additional dashboard features may require account registration."
  },
  {
    q: "Can I access this platform on mobile?",
    a: "Yes, the platform is designed to work on both desktop and mobile devices."
  },
  {
    q: "Will more health predictors be added?",
    a: "Yes. Future updates may include additional AI health analysis tools."
  },
  {
    q: "How can I contact support?",
    a: "You can reach out through the contact page or support email listed on the platform."
  }
];

export default function FAQS() {

  const [active,setActive] = useState(null);

  const toggle = (index)=>{
    setActive(active === index ? null : index);
  };

  return (

    <div className="faq-page">

      <h1>Frequently Asked Questions</h1>
      <p className="faq-sub">Everything you need to know about our AI Health Platform</p>

      <div className="faq-container">

        {faqs.map((item,index)=>(
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
          >

            <div
              className="faq-question"
              onClick={()=>toggle(index)}
            >
              {item.q}
              <span>{active === index ? "-" : "+"}</span>
            </div>

            {active === index && (
              <div className="faq-answer">
                {item.a}
              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}