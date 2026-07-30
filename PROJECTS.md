1. LogicLens:
LogicLens bridge the gap between ideation and implementation.
Traditional software development requires translating visual intent (whiteboards, wireframes, flowcharts) into code manually. LogicLens automates this by providing an integrated whiteboard where you can draw your UI wireframes or logic flowcharts. With a single click, it uses an advanced multi-modal AI pipeline to "see" your intent, understand the logical structure, and instantly synthesize a fully functional, multi-file React application.
Key Features
Integrated Excalidraw Canvas
Real-Time Code Streaming
Live Interactive Sandbox
Surgical Refinement Chat
Export to ZIP
Youtube: https://youtu.be/AGeLCxv_Vjs
Github: https://github.com/hmcommits/LogicLens
Deployment: https://logic-lens-mauve.vercel.app/
Tech Stack
Framework: Next.js 15 (App Router, Edge Functions)
Language: TypeScript
Styling & UI: Tailwind CSS v4, Framer Motion
AI Models: Google Gemini 2.5 Flash & 2.5 Pro
Canvas Engine: Excalidraw
Live Preview: Sandpack (CodeSandbox)
State Management: Zustand
Validation: Zod
File Export: JSZip

2. CodeSpotlight:
CodeSpotlight is a centralized showcase directory where developers can host their deployed projects, generate AI-powered technical deep-dives, and present their work to recruiters through a polished, read-only portfolio interface.
Paste a GitHub URL, and CodeSpotlight's integration with Gemini AI and the GitHub API instantly generates architecture diagrams, commit heatmaps, language visualizations, and a fully formatted Markdown README.
✨ Features
🤖 AI Technical Deep Dive
📄 Auto-Generated READMEs
🏗️ Architecture Diagrams
🔥 Commit Heatmap
🌍 Public Discoverability
🔐 Secure Portfolio Sharing
Youtube: https://youtu.be/BZO2LhEN5AU
Github: https://github.com/hmcommits/CodeSpotlight
Deployment: https://codespotlight-hm.web.app
Tech Stack
Frontend
Framework: Flutter Web (Canvas Kit)
Routing: go_router for shareable deep links
Markdown: flutter_markdown
Hosting: Firebase Hosting
Backend
Framework: Node.js + Express
Authentication: JWT (JSON Web Tokens)
Database: MongoDB Atlas (Mongoose)
AI Integration: @google/generative-ai (Gemini 2.5 Flash)
Hosting: Render.com

3. AttentionX:
The fully autonomous, AI-driven video repurposing engine. Transform hours of long-form video (podcasts, interviews, keynotes) into highly-viral, 60-second vertical Shorts using state-of-the-art Narrative Intelligence.
AttentionX operates on a completely different paradigm. Using Narrative Intelligence, it transcribes your entire video with faster-whisper and pipes the data into a high-context reasoning model (Gemini 2.5 Flash).
It ranks the top "Golden Nuggets" by Virality Score, tracks the speaker's face, renders karaoke captions, and exports a 9:16 vertical video right to your browser.
Key Features
🧠 Semantic Narrative AI
🎥 The Vision Engine
📝 Zero-Dependency Captions
⚡ Ultrafast Local Encoding
Tech Stack:
Backend API: FastAPI, Uvicorn, MoviePy (Video Processing)
AI Core: faster-whisper (16kHz Audio Transcription), google-genai (LLM Analysis)
Computer Vision: MediaPipe (Spatial Face-Tracking via median sampling)
Frontend UI: Streamlit with custom CSS (Outfit/Inter typography, animated @keyframes)
Deployment: Nixpacks, Railway.app ready.