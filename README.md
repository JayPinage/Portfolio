# Jay Pinage — Premium AI Engineer Portfolio

A futuristic AI laboratory and personal portfolio website engineered for **Jay Pinage, AI Engineer and B.Sc. Information Technology graduate (2026)**.

Built with React, Vite, Tailwind CSS, Framer Motion, and Three.js (React Three Fiber & Drei).

---

## 🌟 Signature Features

### 1. Realistic 3D AI Robot (Hero Section)
* **Procedural Three.js Humanoid Robot Bust**: High-fidelity mechanical head, neck hydraulic pistons, cranial crest, matte-black carbon armor plates, titanium servos, and glowing cyan ocular visor.
* **Interactive Kinematics**: Robot smoothly follows the user's cursor across the viewport with dampened interpolation.
* **Pulsing Arc Reactor**: Animated chest core with dynamic emissive pulsation and breathing-like expansion.
* **Holographic HUD & Atmospheric Particles**: Rotating telemetry rings, floating cyber particles, and real-time status diagnostics.
* **Graceful WebGL Fallback**: Automatically renders a high-definition cybernetic vector telemetry card if WebGL is unavailable or if `prefers-reduced-motion` is enabled.
* **Performance Code-Splitting**: 3D bundle is lazily loaded via `React.lazy` and `Suspense`.

### 2. Tailored AI Engineering Content
* **5 Core Focus Areas**: Large Language Models, Retrieval-Augmented Generation (RAG), AI Agents & Multi-Agent Systems, Backend APIs & AI Integration, Intelligent Automation.
* **5 Featured AI Projects**:
  1. **AI Voice Assistant SaaS**: Web-based SaaS for embeddable voice assistants via Web Speech APIs and 1-line client snippet.
  2. **RAG Document Assistant**: End-to-end vector retrieval knowledge base with source grounding and citation tags.
  3. **Multi-Agent Research System**: LangGraph cyclic multi-agent swarm decomposing and cross-verifying complex topics.
  4. **AI Email Assistant**: Asynchronous email triage and drafting engine with Pydantic action extraction.
  5. **Movie Recommendation System**: Cosine similarity engine on multi-attribute feature vectors.
* **Interactive Architecture Inspector**: Recruiter/engineer modal allowing users to inspect the multi-step execution pipeline, schemas, and live dataflows for each project.
* **Academic Credentials**: B.Sc. Information Technology, MVLU College (Class of 2026, CGPA: 8.52 / 10).
* **Functional Contact Protocol**: Configurable email placeholder, one-click email copying, prefilled client mailto dispatch, and direct links to GitHub and LinkedIn.

---

## 🚀 Getting Started

### Prerequisites
* Node.js (v18 or higher recommended)
* npm (v9 or higher)

### Installation
Clone or navigate to the project root directory:
```bash
cd C:\Projects\Portfolio
npm install
```

### Running Locally (Development Mode)
Start the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build & Preview
To compile the optimized production bundle with manual vendor chunking:
```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Component architecture, state management, and virtual DOM |
| **Vite 6** | Ultra-fast build tool and dev server |
| **Tailwind CSS 3** | Responsive styling, cyber dark theme, glassmorphism, and neon glows |
| **Three.js & React Three Fiber** | 3D procedural humanoid AI robot scene |
| **React Three Drei** | 3D utilities and camera helpers |
| **Framer Motion** | Scroll reveals, line-by-line text reveals, and UI transitions |
| **Lucide React** | Modern futuristic icons |
| **Canvas Confetti** | Contact dispatch feedback celebration |

---

## ⚙️ Customization Guide

All personal info, projects, skills, and links are centralized in:
[`src/data/portfolioData.js`](file:///C:/Projects/Portfolio/src/data/portfolioData.js)

### Updating Contact Links:
```javascript
export const PERSONAL_INFO = {
  name: "Jay Pinage",
  email: "your-actual-email@example.com", // <-- Update your email here
  github: "https://github.com/JayPinage",
  linkedin: "https://www.linkedin.com/in/your-profile", // <-- Update LinkedIn URL here
  ...
};
```

---

## 📜 License
Developed for Jay Pinage. All rights reserved.
