export const CONFIG = {
  brand: {
    name: "ARI-TO",
    tagline: "Automate the Ordinary. Elevate the Extraordinary.",
  },
  colors: {
    primaryBg: "#050505",
    secondaryBg: "#0B0B0F",
    accentBlue: "#526BFF",
    accentViolet: "#9B5CFF",
    accentCyan: "#00D4FF",
  },
  navigation: {
    items: [
      { label: "Home", href: "#hero" },
      { label: "Services", href: "#services" },
      { label: "Solutions", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  services: [
    {
      id: "whatsapp",
      title: "WhatsApp Automation",
      description:
        "Transform WhatsApp into an intelligent communication and business management channel.",
      icon: "message-circle",
      gradient: "from-green-500/20 to-emerald-500/5",
      features: [
        "WhatsApp Business Platform integrations",
        "Automated customer responses",
        "Lead capture & follow-ups",
        "Appointment reminders",
        "Order notifications",
        "CRM integration",
      ],
    },
    {
      id: "call",
      title: "Call Automation",
      description:
        "Build intelligent voice workflows that make customer communication more efficient.",
      icon: "phone",
      gradient: "from-blue-500/20 to-cyan-500/5",
      features: [
        "AI voice assistants",
        "Automated incoming call handling",
        "Smart call routing",
        "Appointment scheduling",
        "Voice-based lead qualification",
        "CRM integration",
      ],
    },
    {
      id: "application",
      title: "Application Automation",
      description:
        "Connect applications, eliminate repetitive processes, and make your software work together.",
      icon: "cpu",
      gradient: "from-violet-500/20 to-purple-500/5",
      features: [
        "API integrations & webhooks",
        "Workflow automation",
        "Cross-platform synchronization",
        "Form & data automation",
        "Notification systems",
        "Custom application integrations",
      ],
    },
    {
      id: "business",
      title: "Business Automation",
      description:
        "Make everyday business operations faster, more organized, and more efficient.",
      icon: "settings",
      gradient: "from-orange-500/20 to-amber-500/5",
      features: [
        "CRM & sales pipeline automation",
        "Invoice & billing workflows",
        "Customer onboarding flows",
        "Inventory management",
        "Automated reporting",
        "AI-powered business assistants",
      ],
    },
    {
      id: "website",
      title: "Website Development",
      description:
        "Build premium digital experiences that make businesses stand out.",
      icon: "globe",
      gradient: "from-pink-500/20 to-rose-500/5",
      features: [
        "Business & portfolio websites",
        "High-converting landing pages",
        "E-commerce solutions",
        "Responsive web applications",
        "Modern UI/UX design",
        "SEO optimization",
      ],
    },
    {
      id: "custom",
      title: "Custom Digital Solutions",
      description:
        "Have an idea? We turn complex requirements into working digital products.",
      icon: "lightbulb",
      gradient: "from-cyan-500/20 to-teal-500/5",
      features: [
        "Custom dashboards & tools",
        "Internal business applications",
        "AI & ML integrations",
        "Custom API development",
        "Digital product strategy",
        "End-to-end development",
      ],
    },
  ],
  workflow: [
    {
      step: "01",
      title: "Discover",
      description:
        "Understand your business, identify pain points, and discover automation opportunities that deliver real impact.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Plan the solution architecture, map workflows, select integrations, and design the optimal user experience.",
    },
    {
      step: "03",
      title: "Develop",
      description:
        "Build, connect, test, and optimize every piece of your automation solution with precision and care.",
    },
    {
      step: "04",
      title: "Deploy",
      description:
        "Launch your solution, monitor performance, and provide ongoing support to ensure continued success.",
    },
  ],
  whyArito: [
    {
      title: "Less Manual Work",
      description: "Eliminate repetitive tasks and free your team to focus on what matters.",
      icon: "zap",
    },
    {
      title: "Faster Operations",
      description: "Streamline workflows and reduce turnaround times across your business.",
      icon: "clock",
    },
    {
      title: "Connected Systems",
      description: "Bridge the gap between your tools and create seamless data flow.",
      icon: "link",
    },
    {
      title: "Better CX",
      description: "Deliver faster, smarter responses that keep customers engaged.",
      icon: "heart",
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your business, not against it.",
      icon: "trending-up",
    },
    {
      title: "Custom-Built Tech",
      description: "Tailored solutions designed for your unique business needs.",
      icon: "code",
    },
  ],
  technologies: [
    "n8n", "Make", "Zapier", "WhatsApp Business",
    "Twilio", "REST APIs", "Webhooks",
    "TypeScript", "React", "Next.js",
    "Node.js", "Python", "Supabase",
    "PostgreSQL", "AI APIs",
  ],
  projects: [
    {
      title: "Smart WhatsApp Support Bot",
      category: "WhatsApp Automation",
      description: "An AI-powered WhatsApp bot that handles customer inquiries, routes tickets, and resolves common issues automatically.",
      tags: ["WhatsApp API", "AI", "Node.js"],
      color: "#25D366",
    },
    {
      title: "AI Voice Receptionist",
      category: "Call Automation",
      description: "Intelligent voice system that answers calls, schedules appointments, and qualifies leads around the clock.",
      tags: ["Twilio", "AI Voice", "CRM"],
      color: "#526BFF",
    },
    {
      title: "Operations Dashboard",
      category: "Business Automation",
      description: "Centralized command center aggregating data from multiple sources into actionable insights and automated reports.",
      tags: ["n8n", "Dashboard", "Analytics"],
      color: "#9B5CFF",
    },
    {
      title: "Lead Management System",
      category: "Application Automation",
      description: "End-to-end lead capture, scoring, nurturing, and handoff pipeline connecting marketing to sales seamlessly.",
      tags: ["Zapier", "CRM", "Automation"],
      color: "#00D4FF",
    },
    {
      title: "Premium Brand Website",
      category: "Website Development",
      description: "A stunning, conversion-focused website with immersive animations and a seamless user experience.",
      tags: ["Next.js", "GSAP", "Tailwind"],
      color: "#FF6B6B",
    },
  ],
  contact: {
    whatsappMessage:
      "Hi ARI-TO! I'm interested in learning more about your automation solutions.",
  },
};
