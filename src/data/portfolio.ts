export const portfolio = {
  name: "Samson Nyandika Orina",
  role: "AI quality assurance & workflow automation",
  email: "snyandikasamson@gmail.com",
  summary:
    "I work at the intersection of AI evaluation, careful data verification and practical automation—building repeatable processes, then checking that the results are fit to use.",
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Automation", href: "#automation" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  skills: [
    {
      title: "AI quality & evaluation",
      description: "Prompt testing, model-output review, consistency checks, dataset QA and structured error notes.",
      items: ["AI output evaluation", "Prompt testing", "Data quality assurance"],
    },
    {
      title: "Workflow automation",
      description: "Agent-assisted workflows, browser-based task execution and automation concepts.",
      items: ["BrowserOS", "VS Code AI tools", "Workflow design"],
    },
    {
      title: "Scripting & integrations",
      description: "Practical scripting and data exchange used in automation workflows.",
      items: ["Python", "JavaScript", "REST APIs", "Webhooks", "JSON"],
    },
    {
      title: "Data & operations",
      description: "Organising, reviewing and documenting structured operational information.",
      items: ["Google Sheets", "Microsoft Excel", "Airtable", "Process documentation"],
    },
  ],
  projects: [
    {
      number: "01",
      title: "AI quality review practice",
      status: "Professional experience",
      description:
        "A structured review approach for AI-generated answers and conversational outputs: check accuracy and instruction-following, record issues clearly, and keep human review in the loop.",
      tags: ["AI evaluation", "Quality assurance", "Human review"],
      details: [
        "Starts with the task criteria and the source material available to the reviewer.",
        "Checks the result for accuracy, consistency and adherence to the instructions.",
        "Records actionable findings so another person can understand and reproduce the review.",
      ],
    },
    {
      number: "02",
      title: "Portfolio website",
      status: "Built here · in progress",
      description:
        "This responsive portfolio is a working software project: a small React and TypeScript application that presents verified experience without treating concepts as shipped client work.",
      tags: ["React", "TypeScript", "Vite"],
      details: [
        "Uses a data-driven content module, semantic sections and responsive, keyboard-accessible navigation.",
        "Keeps the contact path direct with a verified email link rather than a pretend submission form.",
        "Uses no remote fonts, third-party tracking or private source documents.",
      ],
    },
    {
      number: "03",
      title: "AI-assisted content workflow",
      status: "Concept · not deployed",
      description:
        "A workflow concept from a creative challenge submission: prepare a draft for a defined audience, then verify its claims and tone before a person approves publication.",
      tags: ["Content operations", "Review gates", "Concept"],
      details: [
        "The source submission contains content ideas and a proposed review mindset, not an implemented automation product.",
        "No publishing integration, scheduled campaign or measured outcome is claimed.",
        "A reviewer remains responsible for checking facts, context and final approval.",
      ],
    },
  ],
  experience: [
    {
      period: "Jan 2024 — present",
      title: "Lead AI Quality Assurance & Model Evaluation Specialist",
      context: "Remote · freelance",
      description:
        "CV-described work evaluating AI outputs and conversational flows, checking datasets against guidelines, and documenting quality findings.",
    },
    {
      period: "Mar 2023 — Dec 2023",
      title: "Data Quality Operations & Verification Specialist",
      context: "Remote",
      description:
        "Systematic data checks, cross-referencing and process documentation for structured information.",
    },
    {
      period: "Ongoing studies",
      title: "Medical laboratory sciences",
      context: "Moi University",
      description:
        "An academic background in the life sciences. The source documents describe study status inconsistently, so a completion date is not stated.",
    },
  ],
  education: [
    {
      title: "BSc Medical Laboratory Sciences",
      institution: "Moi University · studies listed in CV",
    },
    {
      title: "Introduction to Data Science",
      institution: "IBM / Coursera · listed in CV",
    },
    {
      title: "Google IT Support Professional Certificate",
      institution: "Google / Coursera · listed in CV",
    },
  ],
};

export type PortfolioProject = (typeof portfolio.projects)[number];
