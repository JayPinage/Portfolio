/**
 * Architecture & Interactive Simulator Data for Featured AI Projects
 * Provides realistic engineering flows and pipeline previews for each project.
 */

export const PROJECT_DEMOS = {
  "voice-assistant-saas": {
    title: "AI Voice Assistant SaaS — Pipeline & Embed Architecture",
    architectureSteps: [
      { step: "01", name: "User Customization", desc: "User configures voice style, rate, API key, and prompt persona in web dashboard." },
      { step: "02", name: "Client Embed", desc: "Lightweight JS bundle (<12kb) injected into target webpage with zero dependencies." },
      { step: "03", name: "Speech Recognition", desc: "Browser Web Speech API captures spoken audio directly on client device (0ms network audio latency)." },
      { step: "04", name: "LLM Streaming", desc: "Client sends text tokens to configured LLM endpoint via secure proxy with persona prompt." },
      { step: "05", name: "Speech Synthesis", desc: "Browser SpeechSynthesisUtterance streams real-time audio playback without server audio bandwidth." }
    ],
    mockSnippet: `<script 
  src="https://embed.jaypinage.ai/v1/voice-agent.js" 
  data-agent-id="ag_voice_jay_09" 
  data-persona="Technical AI Copilot" 
  data-accent="cyan" 
  async>
</script>`,
    interactiveSim: {
      personas: ["Technical AI Copilot", "SaaS Onboarding Guide", "Executive Assistant"],
      samplePrompts: [
        "How do I integrate this assistant into my React app?",
        "Can you summarize the pricing tiers?",
        "What speech recognition engines are supported?"
      ]
    }
  },

  "rag-document-assistant": {
    title: "RAG Document Assistant — Retrieval & Grounding Flow",
    architectureSteps: [
      { step: "01", name: "Document Ingestion", desc: "PDFs and Markdown files parsed into normalized text segments." },
      { step: "02", name: "Recursive Chunking", desc: "Documents split into 512-token chunks with 64-token sliding overlap to preserve context." },
      { step: "03", name: "Dense Embeddings", desc: "Vector representations generated using 1536-dimensional embeddings and indexed in Vector DB." },
      { step: "04", name: "Semantic Retrieval", desc: "User queries retrieve top-k (k=4) cosine similarity chunks with metadata filtering." },
      { step: "05", name: "Grounded Generation", desc: "LLM synthesizes response strictly constrained by retrieved passages with line citations." }
    ],
    sampleQuery: "What is the token limit and chunking strategy recommended for dense technical manuals?",
    sampleResponse: {
      text: "Based on the retrieved architecture docs [Source: sys_arch.pdf §3.2], dense technical manuals achieve optimal retrieval fidelity using 512-token semantic chunks with a 12.5% (64-token) sliding window overlap. This preserves cross-boundary code blocks while staying well within the vector index's optimal cosine similarity sweet spot.",
      citations: [
        { doc: "sys_arch.pdf", page: "Page 14", score: "0.94 cosine similarity" },
        { doc: "indexing_benchmarks.md", page: "Section 2.1", score: "0.89 cosine similarity" }
      ]
    }
  },

  "multi-agent-research": {
    title: "Multi-Agent Research System — LangGraph Swarm Architecture",
    architectureSteps: [
      { step: "01", name: "Supervisor / Planner", desc: "Decomposes complex inquiries into directed acyclic task graph of research sub-topics." },
      { step: "02", name: "Topic Researcher", desc: "Executes parallel web searches and arXiv retrievals; extracts salient data points." },
      { step: "03", name: "Fact Verifier", desc: "Cross-checks researcher findings against primary sources to eliminate hallucinations." },
      { step: "04", name: "Synthesis Editor", desc: "Aggregates verified findings into a cohesive, structured academic/executive report." },
      { step: "05", name: "Review Loop", desc: "LangGraph conditional routing evaluates completeness; triggers re-fetch if gaps exist." }
    ],
    agents: [
      { name: "Agent Alpha: Planner", status: "Task Graph Decomposed", icon: "Compass", color: "cyan" },
      { name: "Agent Beta: Researcher", status: "Scraping 12 arXiv preprints", icon: "Search", color: "violet" },
      { name: "Agent Gamma: Verifier", status: "Claim verification 98.4%", icon: "ShieldCheck", color: "cyan" },
      { name: "Agent Delta: Synthesizer", status: "Generating final report", icon: "FileText", color: "emerald" }
    ]
  },

  "ai-email-assistant": {
    title: "AI Email Assistant — Automated Triaging & Action Engine",
    architectureSteps: [
      { step: "01", name: "Webhook Ingestion", desc: "Incoming emails received asynchronously via webhook payload with headers and attachments." },
      { step: "02", name: "Intent Classification", desc: "LLM classifies email category (Partnership, Bug Report, Inquiry) and urgency (P1 to P4)." },
      { step: "03", name: "Entity & Action Extraction", desc: "Extracts deadlines, meeting slots, calendar events, and action items via Pydantic schema." },
      { step: "04", name: "Context Retrieval", desc: "Searches conversation history and personal knowledge base for previous thread context." },
      { step: "05", name: "Draft Generation", desc: "Formulates personalized, courteous draft awaiting one-click human verification." }
    ],
    sampleEmail: {
      from: "sarah.chen@ai-innovations.tech",
      subject: "Collaboration on Autonomous Agent Benchmarking",
      body: "Hi Jay, saw your work on LangGraph swarms. We are looking for an AI Engineer to collaborate on multi-agent evaluation frameworks. Would you be available for a 30-min technical sync this Thursday at 4 PM IST?",
      aiTriage: {
        category: "High-Priority Career / Collaboration",
        urgency: "Urgent (P1)",
        sentiment: "Highly Positive",
        extractedAction: "Schedule 30-min technical sync for Thursday at 4:00 PM IST"
      }
    }
  },

  "movie-recommendation-system": {
    title: "Movie Recommendation System — Vector Similarity Engine",
    architectureSteps: [
      { step: "01", name: "Data Ingestion & Cleaning", desc: "Dataset normalized via Pandas with handling for missing values, actors, and director tags." },
      { step: "02", name: "Feature Engineering", desc: "Bag-of-words & TF-IDF/embeddings generated on genre, cast, keywords, and plot overviews." },
      { step: "03", name: "Matrix Transformation", desc: "Constructed sparse feature matrix using NumPy and Scikit-Learn vectorizers." },
      { step: "04", name: "Cosine Similarity Scoring", desc: "Computes multidimensional angular distance between target movie and entire library." },
      { step: "05", name: "Interactive Ranking", desc: "Streamlit UI renders top 5 ranked films with similarity metrics and poster overviews." }
    ],
    sampleSeed: "Interstellar (2014)",
    recommendations: [
      { title: "Contact (1997)", score: "94.2% match", tags: ["Sci-Fi", "Space", "Astrophysics"] },
      { title: "Arrival (2016)", score: "92.8% match", tags: ["Sci-Fi", "Linguistics", "Deep Time"] },
      { title: "The Martian (2015)", score: "90.5% match", tags: ["Space Exploration", "Survival", "Engineering"] },
      { title: "Gravity (2013)", score: "88.1% match", tags: ["Orbital", "Thriller", "Cinema"] }
    ]
  }
};
