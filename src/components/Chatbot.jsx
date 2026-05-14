import { useState, useEffect } from "react";
import { getHealthLogs } from "../services/healthService";
import "../styles/Chatbot.css";

export default function Chatbot() {

    const [open, setOpen] = useState(false);
    const [logs, setLogs] = useState([]);
    const [input, setInput] = useState("");

    const token = localStorage.getItem("token");
    const isLoggedIn = !!token;

    const botName = "VitaMind AI";

    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: `Hi 👋 I'm ${botName}.

You can ask me about this platform, its features, or health insights.`
        }
    ]);

    /* FETCH HEALTH DATA ONLY IF LOGGED IN */

    useEffect(() => {

        if (!isLoggedIn) return;

        const fetchLogs = async () => {
            try {
                const data = await getHealthLogs();
                setLogs(data || []);
            } catch {
                setLogs([]);
            }
        };

        fetchLogs();

    }, [isLoggedIn]);

    const latest = logs.length ? logs[logs.length - 1] : null;

    const contains = (text, words) =>
        words.some(w => text.includes(w));

    /* BOT LOGIC */

    const generateReply = (msg) => {

        const text = msg.toLowerCase();

        /* ---------- APP QUESTIONS (NO LOGIN NEEDED) ---------- */

        if (contains(text, ["what is this", "what does this app", "project", "system"])) {

            return `This is an AI Health Monitoring System.

It allows users to:

• Track health metrics
• Monitor BMI and heart rate
• Analyze sleep and stress
• View analytics dashboards
• Generate health reports
• Receive AI insights`;
        }

        if (contains(text, ["features"])) {

            return `Key features of this platform:

• Health Dashboard
• Daily Health Metrics Logging
• BMI Calculation
• Health Score Analysis
• Lifestyle Charts
• AI Chat Assistant
• Downloadable Health Reports`;
        }

        if (contains(text, ["benefits", "why use"])) {

            return `Benefits of using this system:

• Track your health regularly
• Identify unhealthy patterns
• Improve lifestyle habits
• Monitor progress over time
• Receive AI-based insights`;
        }

        if (contains(text, ["dashboard"])) {

            return `The dashboard shows a summary of your health including:

• Health status indicator
• Lifestyle charts
• Quick metrics
• AI insights`;
        }

        if (contains(text, ["metrics"])) {

            return `The Health Metrics panel lets you log:

• Height
• Weight
• BMI
• Heart Rate
• Sleep Hours
• Steps
• Stress Level
• Water Intake`;
        }

        if (contains(text, ["report", "pdf"])) {

            return `You can generate a downloadable health report.

The report includes:

• BMI
• Heart rate
• Sleep analysis
• Stress level
• Hydration
• Health score
• AI recommendations`;
        }

        if (contains(text, ["help", "what can i ask"])) {

            return `You can ask questions like:

• What does this app do?
• What features are available?
• What is BMI?
• How does health score work?
• How can I improve sleep?`;
        }

        /* ---------- HEALTH QUESTIONS (LOGIN REQUIRED) ---------- */

        if (!isLoggedIn) {

            return `To view personal health data, please login first.

You can still ask me about platform features or health concepts.`;
        }

        if (!latest) {

            return `I couldn't find any health data yet.

Please add a health log in the Health Metrics section.`;
        }

        /* BMI */

        if (contains(text, ["bmi"])) {

            if (latest.bmi > 25)
                return `Your BMI is ${latest.bmi.toFixed(1)}.

This suggests you may be overweight. Regular exercise and balanced diet may help.`;

            if (latest.bmi < 18.5)
                return `Your BMI is ${latest.bmi.toFixed(1)}.

This indicates underweight. A nutritious diet may help improve it.`;

            return `Your BMI is ${latest.bmi.toFixed(1)} which is within the healthy range.`;
        }

        /* SLEEP */

        if (contains(text, ["sleep"])) {

            if (latest.sleepHours < 6)
                return `You currently sleep ${latest.sleepHours} hours.

Experts recommend 7–8 hours for optimal health.`;

            return `Your sleep duration is ${latest.sleepHours} hours which is good.`;
        }

        /* STEPS */

        if (contains(text, ["steps", "walk"])) {

            if (latest.steps < 5000)
                return `You walked ${latest.steps} steps.

Try increasing daily activity to improve health.`;

            return `Great! You walked ${latest.steps} steps which shows good activity levels.`;
        }

        /* HEART RATE */

        if (contains(text, ["heart", "pulse"])) {

            if (latest.heartRate > 100)
                return `Your heart rate is ${latest.heartRate} bpm which is slightly high.`;

            return `Your heart rate is ${latest.heartRate} bpm which is within a normal range.`;
        }

        /* STRESS */

        if (contains(text, ["stress"])) {

            if (latest.stressLevel > 6)
                return `Your stress level is ${latest.stressLevel}/10.

Relaxation techniques like meditation or exercise can help.`;

            return `Your stress level is ${latest.stressLevel}/10 which is manageable.`;
        }

        /* WATER */

        if (contains(text, ["water", "hydration"])) {

            if (latest.waterIntake < 2)
                return `You drink ${latest.waterIntake}L water daily.

Try increasing it to around 2–3L.`;

            return `Your hydration level (${latest.waterIntake}L) looks good.`;
        }

        /* HEALTH SCORE */

        if (contains(text, ["health score"])) {

            return `Your health score is ${latest.healthScore}/100.

It is calculated using sleep, activity, heart rate, hydration, and stress levels.`;
        }

        /* SHOW DATA */

        if (contains(text, ["my data", "show data"])) {

            return `Your latest health summary:

BMI: ${latest.bmi.toFixed(1)}
Sleep: ${latest.sleepHours} hours
Steps: ${latest.steps}
Heart Rate: ${latest.heartRate}
Stress Level: ${latest.stressLevel}/10
Water Intake: ${latest.waterIntake}L
Health Score: ${latest.healthScore}/100`;
        }

        return `I'm not sure about that.

You can ask about:

• BMI
• Sleep
• Stress
• Hydration
• Health Score
• Platform features`;
    };

    const sendMessage = () => {

        if (!input.trim()) return;

        const userMsg = { sender: "user", text: input };

        const botMsg = {
            sender: "bot",
            text: generateReply(input)
        };

        setMessages(prev => [...prev, userMsg, botMsg]);

        setInput("");
    };

    return (

        <div className="chatbot-container">

            {!open && (
                <div
                    className="chatbot-toggle"
                    onClick={() => setOpen(true)}
                >
                    Ask AI
                </div>
            )}

            {open && (

                <div className="chatbot-box">

                    <div className="chatbot-header">

                        <h3>{botName}</h3>

                        <span onClick={() => setOpen(false)}>✕</span>

                    </div>

                    <div className="chatbot-messages">

                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`message ${msg.sender}`}
                            >
                                {msg.text}
                            </div>
                        ))}

                    </div>

                    <div className="chatbot-input">

                        <input
                            type="text"
                            placeholder="Ask something..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") sendMessage()
                            }}
                        />

                        <button onClick={sendMessage}>
                            Send
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
}