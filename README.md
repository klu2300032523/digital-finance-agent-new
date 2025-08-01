# Digital Finance Literacy Agent

A multilingual AI assistant built using React and optionally integrated with IBM Watsonx.ai (Granite model) to help users understand key financial concepts such as UPI, budgeting, loan interest rates, and online scam prevention.

This project was developed as part of the *IBM SkillsBuild – Edunet Internship Program 2025, under **Problem Statement #7 – AI Agent for Digital Financial Literacy*.

---

## Project Overview

The Digital Finance Literacy Agent enables users to interact in *English, Telugu, or Hindi* and ask questions related to personal finance. The agent provides informative responses using either mock data (offline mode) or IBM Granite (online AI mode). This system aims to improve financial literacy across diverse user groups in India.

---

## Features

- Multilingual support: English, Telugu, Hindi
- Common financial questions and guidance:
  - How to use UPI for transactions
  - How to avoid online scams
  - Understanding good interest rates
  - Personal budgeting
- Built using React.js (Vite) and styled with CSS
- Optional integration with IBM Watsonx.ai Granite model
- Responsive design
- GitHub-hosted frontend (Vite build)

---

## Sample Questions (per Language)

*English*
- What is UPI?
- How to avoid online scams?
- What is a safe interest rate for loans?

*Telugu*
- UPI అంటే ఏమిటి?
- ఆన్‌లైన్ మోసాల నుండి ఎలా తప్పించుకోవాలి?

*Hindi*
- UPI क्या है?
- ऑनलाइन धोखाधड़ी से कैसे बचें?

---

## Tech Stack

| Layer      | Technology                  |
|------------|------------------------------|
| Frontend   | React.js (Vite)              |
| Styling    | CSS                          |
| AI Agent   | IBM Watsonx.ai (Granite)     |
| Hosting    | GitHub Pages                 |
| Languages  | English, Telugu, Hindi       |

---

## Installation and Local Setup

```bash
git clone https://github.com/klu2300033213/digital-finance-agent.git
cd digital-finance-agent
npm install
npm run dev