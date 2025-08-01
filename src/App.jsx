import { useState } from 'react';
import './App.css';

const mockResponses = {
  en: {
    "upi": "UPI stands for Unified Payments Interface. It allows instant bank-to-bank money transfer via mobile apps like Google Pay, PhonePe, etc.",
    "online scams": "Always verify sources, avoid clicking unknown links, never share OTPs, and use strong passwords.",
    "interest rate": "Savings: 3–7%. Loans: Under 12% is safe. Check RBI guidelines and bank offers.",
    "budget": "Track monthly income and expenses. Prioritize essentials. Save at least 20% and review your spending regularly.",
    "send money": "Use UPI apps → Select Send Money → Enter UPI ID or scan QR → Confirm with UPI PIN."
  },
  te: {
    "upi": "UPI అనేది యునిఫైడ్ పేమెంట్స్ ఇంటర్‌ఫేస్. ఇది Google Pay, PhonePe వంటి యాప్‌ల ద్వారా బ్యాంక్ నుండి బ్యాంక్‌కు డబ్బు తక్షణంగా పంపేందుకు సహాయపడుతుంది.",
    "online scams": "గమనించండి: తెలియని లింక్‌లను క్లిక్ చేయవద్దు, OTPలను ఎవరికీ చెప్పవద్దు, శక్తివంతమైన పాస్‌వర్డ్‌లను ఉపయోగించండి.",
    "interest rate": "ధన సేకరణపై వడ్డీ రేట్లు సాధారణంగా 3–7%. అప్పులపై 12% కంటే తక్కువ అయితే బాగుంటుంది.",
    "budget": "మీ ఆదాయం మరియు ఖర్చులను గమనించండి. అవసరమైన వాటికి ప్రాధాన్యత ఇవ్వండి. కనీసం 20% పొదుపు చేయండి.",
    "send money": "UPI యాప్‌ను ఓపెన్ చేయండి → 'Send Money' ఎంచుకోండి → UPI ID ఇవ్వండి లేదా QR కోడ్ స్కాన్ చేయండి → PIN తో ధృవీకరించండి."
  },
  hi: {
    "upi": "UPI का मतलब यूनिफाइड पेमेंट्स इंटरफेस है। यह ऐप्स जैसे Google Pay, PhonePe के जरिए तुरंत पैसे भेजने की सुविधा देता है।",
    "online scams": "अनजान लिंक पर क्लिक न करें, OTP किसी से साझा न करें, और मजबूत पासवर्ड का उपयोग करें।",
    "interest rate": "बचत: 3–7%। लोन: 12% से कम बेहतर होता है। बैंक ऑफर्स और RBI गाइडलाइन देखें।",
    "budget": "अपनी आय और खर्च का हिसाब रखें। ज़रूरी चीजों को प्राथमिकता दें। हर महीने कम से कम 20% बचत करें।",
    "send money": "UPI ऐप खोलें → 'Send Money' चुनें → UPI ID डालें या QR स्कैन करें → UPI PIN से कन्फर्म करें।"
  }
};

function App() {
  const [question, setQuestion] = useState('');
  const [language, setLanguage] = useState('en');
  const [answer, setAnswer] = useState('');

  const handleAsk = () => {
    const cleaned = question.trim().toLowerCase();
    let reply = "❌ Sorry, I don’t have an answer to that yet. Please try a different question.";

    const langResponses = mockResponses[language];

    for (const key in langResponses) {
      if (cleaned.includes(key)) {
        reply = langResponses[key];
        break;
      }
    }

    setAnswer(reply);
  };

  return (
    <div className="container">
      <h1 className="fade-in">💰 Digital Finance Literacy Agent</h1>

      <div className="card">
        <label htmlFor="language">🌐 Select Language:</label>
        <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="te">Telugu</option>
          <option value="hi">Hindi</option>
        </select>

        <label htmlFor="question">❓ Ask your financial question:</label>
        <input
          type="text"
          id="question"
          placeholder="e.g., How to send money using UPI?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button onClick={handleAsk}>🔍 Ask AI Agent</button>

        {answer && (
          <div className="response-box slide-in">
            <strong>💬 Answer:</strong>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
