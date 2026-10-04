/**
 * Jay Pinage — AI Engineer Portfolio Data
 * Centralized configuration for all personal information, projects, skills, and links.
 */

export const PERSONAL_INFO = {
  name: "Jay Pinage",
  role: "AI Engineer & Intelligent Systems Architect",
  degree: "B.Sc. Information Technology",
  graduationYear: 2026,
  college: "MVLU College",
  cgpa: "8.52 / 10",
  status: "Open to AI Engineer Opportunities",
  tagline: "Building Intelligence. Engineering the Future.",
  heroLabel: "AI ENGINEER | BUILDING INTELLIGENT SYSTEMS",
  summary:
    "I'm Jay Pinage, an AI Engineer focused on LLM applications, RAG systems, AI agents, and intelligent automation. I turn complex ideas into practical AI products.",
  aboutHeading: "Engineering Intelligence Into Reality",
  aboutBio:
    "I am a 2026 B.Sc. Information Technology graduate from MVLU College passionate about applied artificial intelligence. My work centers on architecting production-ready LLM pipelines, autonomous multi-agent frameworks, semantic search with vector databases, and robust backend integrations that bring intelligent capabilities to real-world applications.",
  
  // Contact & Socials
  // Change placeholder values below when live
  email: "pinagejay19@gmail.com", // Configurable email address
  isEmailPlaceholder: true, // Shows copy-email interaction and clear prompt
  github: "https://github.com/JayPinage",
  linkedin: "https://www.linkedin.com/in/jay-pinage", // Configurable LinkedIn profile
  location: "Mumbai, India",
};

export const FOCUS_AREAS = [
  {
    id: "llm",
    title: "Large Language Models",
    description: "Engineering tailored LLM applications, structured JSON outputs, prompt chains, and fine-tuned generation pipelines.",
    icon: "Brain",
    tags: ["OpenAI", "Anthropic", "Llama", "Prompt Architecture"]
  },
  {
    id: "rag",
    title: "Retrieval-Augmented Generation",
    description: "Architecting contextual search systems combining hybrid vector embeddings, chunking strategies, and re-ranking for verifiable truth.",
    icon: "Database",
    tags: ["Vector DBs", "Embeddings", "Semantic Search", "Context Windows"]
  },
  {
    id: "agents",
    title: "AI Agents & Multi-Agent Systems",
    description: "Designing autonomous, stateful agent swarms using LangGraph to plan, execute tool calls, critique results, and solve complex goals.",
    icon: "Bot",
    tags: ["LangGraph", "Tool Calling", "Autonomous Swarms", "State Machines"]
  },
  {
    id: "backend",
    title: "Backend APIs & AI Integration",
    description: "Constructing high-throughput, asynchronous FastAPI and Node.js microservices to serve LLM pipelines with low latency.",
    icon: "Server",
    tags: ["FastAPI", "Node.js", "Async WebSockets", "Streaming APIs"]
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    description: "Automating operational workflows, email syntheses, document processing, and browser interactions with intelligent self-healing scripts.",
    icon: "Cpu",
    tags: ["Workflow Ops", "Function Calling", "Scheduled Agents", "Automation"]
  }
];
export const SKILL_CATEGORIES = [
  {
    category: "AI & LLM",
    description:
      "LLM application development, agentic workflows, retrieval systems, and AI infrastructure.",
    icon: "Sparkles",
    accent: "cyan",
    skills: [
      {
        name: "LangChain",
        role: "LLM chains, tools, retrievers, structured output, and integrations",
      },
      {
        name: "LangGraph",
        role: "Stateful agents, cyclic workflows, multi-agent systems, and human-in-the-loop",
      },
      {
        name: "RAG",
        role: "Document ingestion, chunking, embeddings, retrieval, reranking, and synthesis",
      },
      {
        name: "AI Agents",
        role: "Tool-using agents, autonomous workflows, planning, memory, and orchestration",
      },
      {
        name: "MCP",
        role: "Model Context Protocol servers, tools, resources, and AI application integrations",
      },
      {
        name: "Vector Databases",
        role: "ChromaDB, FAISS, Pinecone, similarity search, and embedding retrieval",
      },
      {
        name: "Embeddings",
        role: "Semantic representations, similarity search, and retrieval pipelines",
      },
      {
        name: "LLM API Integration",
        role: "Streaming, tool calling, structured outputs, function calling, and API integration",
      },
      {
        name: "Prompt Engineering",
        role: "System prompts, few-shot prompting, structured prompting, and output control",
      },
      {
        name: "AI Evaluation",
        role: "RAG evaluation, response quality, hallucination detection, and pipeline testing",
      },
    ],
  },

  {
    category: "Programming & Backend",
    description:
      "Programming languages and backend technologies for building scalable AI services.",
    icon: "Terminal",
    accent: "violet",
    skills: [
      {
        name: "Python",
        role: "Primary language for AI, automation, backend services, and data pipelines",
      },
      {
        name: "JavaScript",
        role: "Modern ES6+, asynchronous programming, frontend, and backend development",
      },
      {
        name: "FastAPI",
        role: "Async APIs, Pydantic validation, dependency injection, and AI inference services",
      },
      {
        name: "Node.js",
        role: "Backend services, REST APIs, automation, and real-time applications",
      },
      {
        name: "REST APIs",
        role: "API design, authentication, validation, error handling, and integrations",
      },
      {
        name: "Pydantic",
        role: "Data validation, typed schemas, and structured AI outputs",
      },
      {
        name: "Authentication",
        role: "JWT, OAuth 2.0, API authentication, authorization, and secure sessions",
      },
    ],
  },

  {
    category: "Data & Databases",
    description:
      "Data processing, databases, analytics, and storage systems used in AI applications.",
    icon: "Database",
    accent: "cyan",
    skills: [
      {
        name: "SQL",
        role: "Queries, joins, aggregations, schema design, indexing, and optimization",
      },
      {
        name: "PostgreSQL",
        role: "Relational data modeling, queries, indexing, and backend persistence",
      },
      {
        name: "MongoDB",
        role: "Document-oriented storage and flexible application data modeling",
      },
      {
        name: "SQLite",
        role: "Embedded databases for lightweight applications and local persistence",
      },
      {
        name: "Pandas",
        role: "Data cleaning, transformation, analysis, and ETL workflows",
      },
      {
        name: "NumPy",
        role: "Numerical computing, vectorized operations, matrices, and embeddings",
      },
      {
        name: "Data Visualization",
        role: "Matplotlib, Seaborn, Power BI, dashboards, and analytical storytelling",
      },
    ],
  },

  {
    category: "DevOps & Cloud",
    description:
      "Containerization, deployment, CI/CD, and infrastructure for production applications.",
    icon: "Cloud",
    accent: "violet",
    skills: [
      {
        name: "Docker",
        role: "Containerized applications, reproducible environments, and service isolation",
      },
      {
        name: "Git",
        role: "Version control, branching strategies, merging, and collaborative workflows",
      },
      {
        name: "GitHub",
        role: "Repository management, collaboration, issues, and CI/CD workflows",
      },
      {
        name: "GitHub Actions",
        role: "Automated testing, builds, deployments, and CI/CD pipelines",
      },
      {
        name: "Render",
        role: "Cloud deployment for APIs, backend services, and web applications",
      },
      {
        name: "Vercel",
        role: "Frontend deployment, serverless functions, and production web hosting",
      },
      {
        name: "Environment Management",
        role: "Environment variables, secrets, configuration, and deployment environments",
      },
    ],
  },

  {
    category: "System Design & Computer Science",
    description:
      "Core computer science and engineering concepts behind reliable and scalable systems.",
    icon: "Network",
    accent: "cyan",
    skills: [
      {
        name: "System Design",
        role: "Scalable architectures, APIs, databases, caching, queues, and service boundaries",
      },
      {
        name: "Operating Systems",
        role: "Processes, threads, memory management, scheduling, synchronization, and file systems",
      },
      {
        name: "Computer Networks",
        role: "TCP/IP, HTTP, HTTPS, DNS, REST, sockets, and client-server communication",
      },
      {
        name: "DBMS",
        role: "Normalization, transactions, ACID, indexing, relationships, and query optimization",
      },
      {
        name: "Data Structures & Algorithms",
        role: "Arrays, strings, hashing, trees, graphs, recursion, and algorithmic problem solving",
      },
      {
        name: "OOP",
        role: "Abstraction, encapsulation, inheritance, polymorphism, and modular design",
      },
      {
        name: "Software Architecture",
        role: "Layered architecture, modular systems, service separation, and maintainability",
      },
    ],
  },

  {
    category: "Frontend & Applications",
    description:
      "Modern interfaces for AI-powered web and cross-platform applications.",
    icon: "Layout",
    accent: "violet",
    skills: [
      {
        name: "React",
        role: "Component architecture, hooks, state management, and interactive interfaces",
      },
      {
        name: "Flutter",
        role: "Cross-platform mobile and desktop application development",
      },
      {
        name: "HTML",
        role: "Semantic, accessible, and SEO-friendly document structure",
      },
      {
        name: "CSS",
        role: "Responsive layouts, animations, Tailwind CSS, and modern UI design",
      },
      {
        name: "Streamlit",
        role: "Rapid AI application prototyping and interactive data applications",
      },
    ],
  },

  {
    category: "AI Engineering & MLOps",
    description:
      "Engineering practices for deploying, monitoring, and maintaining AI systems.",
    icon: "Cpu",
    accent: "cyan",
    skills: [
      {
        name: "MLflow",
        role: "Experiment tracking, model versioning, evaluation, and ML lifecycle management",
      },
      {
        name: "Model Serving",
        role: "Deploying AI models behind APIs and production inference endpoints",
      },
      {
        name: "AI Pipelines",
        role: "Data ingestion, preprocessing, inference, evaluation, and automated workflows",
      },
      {
        name: "Model Optimization",
        role: "Quantization, batching, caching, and inference efficiency",
      },
      {
        name: "Monitoring",
        role: "Application logs, latency, failures, API usage, and AI system observability",
      },
      {
        name: "Testing",
        role: "Unit testing, API testing, integration testing, and AI pipeline validation",
      },
    ],
  },

  {
    category: "Tools & Engineering",
    description:
      "Developer tools and engineering practices used to build and ship reliable software.",
    icon: "Wrench",
    accent: "violet",
    skills: [
      {
        name: "VS Code",
        role: "Primary development environment for application and AI engineering",
      },
      {
        name: "Postman",
        role: "API development, testing, debugging, and endpoint validation",
      },
      {
        name: "Linux",
        role: "Command-line development, processes, permissions, networking, and deployment",
      },
      {
        name: "REST API Testing",
        role: "Endpoint validation, authentication testing, and API debugging",
      },
      {
        name: "WebSockets",
        role: "Real-time bidirectional communication for interactive applications",
      },
      {
        name: "Agile Development",
        role: "Iterative development, task planning, debugging, and continuous delivery",
      },
    ],
  },
];

export const FEATURED_PROJECTS = [
  {
    id: "voice-assistant-saas",
    title: "AI Voice Assistant SaaS",
    subtitle: "Embeddable Zero-Latency Voice Agent for Web Applications",
    category: "AI SaaS & Web Audio",
    problem: "Integrating conversational voice capabilities into external client websites usually requires convoluted SDKs, expensive third-party wrappers, and rigid telephony systems.",
    solution: "Engineered a web-based SaaS platform where creators configure custom voice personas, specify system instructions, provide API keys, and generate a 1-line lightweight embeddable JavaScript snippet. Leverages native browser SpeechRecognition and SpeechSynthesis APIs for ultra-low latency without backend audio streaming costs.",
    tags: ["JavaScript", "Web Speech API", "LLM API", "SaaS Architecture", "Embeddable Widget"],
    githubUrl: "https://github.com/JayPinage/Ai_Voice_Embedd",
    hasLiveDemo: true,
    liveUrl:"https://embeddai.onrender.com",
    previewType: "voice-saas",
    badge: "Voice AI & Embed SDK",
    metrics: [
      { label: "Audio Latency", value: "Native Client" },
      { label: "Integration", value: "1-Script Tag" },
      { label: "Voice Support", value: "SpeechSynthesis" }
    ],
    accent: "cyan"
  },
  {
    id: "rag-document-assistant",
    title: "RAG Document Assistant",
    subtitle: "High-Precision Retrieval-Augmented Generation Knowledge Base",
    category: "RAG & Vector Search",
    problem: "Standard LLMs suffer from hallucination and possess zero awareness of private organizational documents, technical manuals, or local PDF repositories.",
    solution: "Architected an end-to-end RAG system combining dynamic chunking heuristics, dense vector embeddings, vector similarity search, and context-injected prompt templates to generate verifiable, source-grounded answers with citations from uploaded documents.",
    tags: ["Python", "LangChain", "Vector DB", "Embeddings", "FastAPI", "Semantic Search"],
    githubUrl: "https://github.com/JayPinage/Ai_Doc_Assistent",
    hasLiveDemo: true,
    liveUrl:"https://smartdocsai.streamlit.app",
    previewType: "rag-assistant",
    badge: "Vector Retrieval & Citations",
    metrics: [
      { label: "Retrieval", value: "Vector Similarity" },
      { label: "Grounding", value: "Source Citations" },
      { label: "Parsing", value: "Multi-Format" }
    ],
    accent: "violet"
  },
  {
    id: "multi-agent-research",
    title: "Multi-Agent Research System",
    subtitle: "Collaborative Swarm for Autonomous Research & Synthesis",
    category: "Agentic Systems",
    problem: "Single-prompt LLM generation produces shallow, unverified summaries when handling complex, multi-faceted research inquiries that demand deep cross-checking.",
    solution: "Designed a multi-agent orchestration framework utilizing specialized autonomous roles (Lead Planner, Topic Researcher, Fact Verifier, and Synthesis Editor) that collaboratively decompose topics, browse sources, organize structured findings, and compile publication-ready reports.",
    tags: ["Python", "LangGraph", "Multi-Agent Systems", "Autonomous Workflows", "Prompt Chains"],
    githubUrl: "https://github.com/JayPinage/Multi_Agent_Research_System",
    hasLiveDemo: true,
    liveUrl:"https://researchflowai.streamlit.app",
    previewType: "multi-agent",
    badge: "LangGraph Multi-Agent Swarm",
    metrics: [
      { label: "Orchestration", value: "StateGraph" },
      { label: "Agents", value: "4 Specialized Roles" },
      { label: "Output", value: "Structured Synthesis" }
    ],
    accent: "cyan"
  },
  {
    id: "ai-email-assistant",
    title: "AI Email Assistant",
    subtitle: "Automated Contextual Email Triaging & Drafting Workflow",
    category: "Intelligent Automation",
    problem: "High inbox volume overwhelms professionals with repetitive scheduling requests, query categorization, and drafting context-specific responses.",
    solution: "Built an intelligent email workflow engine that classifies incoming messages by urgency and topic, extracts actionable tasks, and drafts personalized context-aware replies via LLM function calling and API integration.",
    tags: ["Python", "FastAPI", "Email APIs", "Workflow Automation", "LLM Function Calling"],
    githubUrl: "https://github.com/JayPinage/AI_Email_Assistent",
    hasLiveDemo: false,
    previewType: "email-assistant",
    badge: "Workflow Automation & Triage",
    metrics: [
      { label: "Triage", value: "Automated Tagging" },
      { label: "Actions", value: "Task Extraction" },
      { label: "Drafting", value: "Context-Aware" }
    ],
    accent: "violet"
  },
  {
    id: "movie-recommendation-system",
    title: "Movie Recommendation System",
    subtitle: "Data-Driven Content & Collaborative Filtering Engine",
    category: "Data Science & Recommenders",
    problem: "Users experience choice paralysis across large cinematic catalogs without accurate, nuanced preference mapping.",
    solution: "Developed an algorithmic recommendation engine combining feature vectorization, cosine similarity on metadata attributes (genres, directors, keywords), and collaborative user preference patterns to deliver tailored movie suggestions.",
    tags: ["Python", "Pandas", "NumPy", "Cosine Similarity", "Streamlit", "Scikit-Learn"],
    githubUrl: "https://github.com/JayPinage/Movie_Recommendation_Project",
    hasLiveDemo: false,
    previewType: "movie-recommender",
    badge: "Similarity Scoring & Filtering",
    metrics: [
      { label: "Algorithm", value: "Cosine Similarity" },
      { label: "Feature Matrix", value: "Multi-Attribute" },
      { label: "Interface", value: "Interactive UI" }
    ],
    accent: "cyan"
  }
];

export const EDUCATION_DATA = [
  {
    degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
    institution: "MVLU College",
    duration: "2023 - 2026",
    status: "Graduated in 2026",
    grade: "CGPA: 8.52 / 10",
    description: "Comprehensive computer science and IT curriculum encompassing software engineering, database systems, data structures & algorithms, web development, and foundational artificial intelligence.",
    highlights: [
      "Graduated with Distinction (CGPA: 8.52/10)",
      "Strong foundation in Algorithmic Problem Solving & Object-Oriented Design",
      "Specialized academic projects in Applied Artificial Intelligence and Machine Learning",
      "Active participant in technical symposiums and developer initiatives"
    ]
  }
];

export const EXPERIENCE_DATA = [
  {
    title: "AI Engineer & Independent Builder",
    organization: "Applied AI Projects & Open Source",
    period: "2024 - Present",
    status: "Active",
    description: "Architecting autonomous agents, retrieval-augmented generation pipelines, and embeddable AI voice interfaces. Exploring state-of-the-art open source models and multi-agent coordination.",
    highlights: [
      "Built LangGraph agent architectures with cyclic execution and tool-calling capabilities",
      "Developed client-side embeddable voice AI integrations leveraging browser audio APIs",
      "Engineered end-to-end RAG knowledge systems with vector databases and citation verification"
    ]
  },
  {
    title: "Open to AI Engineer Opportunities",
    organization: "Full-Time & Internship Roles",
    period: "Available Immediately (2026)",
    status: "Actively Interviewing",
    description: "Eager to bring strong technical fundamentals, hands-on LLM engineering experience, and rapid prototyping capabilities to forward-thinking AI teams and research labs.",
    highlights: [
      "Ready to deploy production RAG, AI agents, and backend microservices",
      "Fast learner with strong communication and collaborative engineering practices",
      "Verified B.Sc. IT degree (8.52 CGPA) with practical project portfolio"
    ]
  }
];
