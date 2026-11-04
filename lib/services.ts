export type Service = { slug: string; title: string; description: string; capabilities: string[] };

export const services: Service[] = [
  {
    "slug": "itsm",
    "title": "IT Service Management",
    "description": "Make IT support simpler, faster and more measurable. Connect incidents, requests, changes and knowledge in one service experience.",
    "capabilities": [
      "Incident, problem and change management",
      "Service catalog and request fulfilment",
      "Knowledge management and service portal",
      "Service level management and reporting"
    ]
  },
  {
    "slug": "itom",
    "title": "IT Operations Management",
    "description": "Improve service reliability with visibility across infrastructure, events and service health.",
    "capabilities": [
      "Event management and alert correlation",
      "Service mapping and discovery",
      "Operational visibility and automation",
      "Reduce noise and accelerate resolution"
    ]
  },
  {
    "slug": "itam",
    "title": "IT Asset Management",
    "description": "Manage technology assets across their lifecycle while improving utilization, compliance and cost control.",
    "capabilities": [
      "Hardware and software asset lifecycle",
      "Asset inventory and normalization",
      "License compliance and optimization",
      "Procurement and asset workflows"
    ]
  },
  {
    "slug": "grc",
    "title": "Governance, Risk and Compliance",
    "description": "Bring risk, controls, audits and compliance activities into a connected, actionable workspace.",
    "capabilities": [
      "Risk and compliance management",
      "Policy and control workflows",
      "Audit planning and evidence",
      "Continuous monitoring and reporting"
    ]
  },
  {
    "slug": "secops",
    "title": "Security Operations",
    "description": "Connect security tools and IT workflows so teams can prioritize threats and respond with context.",
    "capabilities": [
      "Security incident response",
      "Threat intelligence and prioritization",
      "Vulnerability response workflows",
      "Integration with existing security tools"
    ]
  },
  {
    "slug": "hrsd",
    "title": "HR Service Delivery",
    "description": "Give employees a consistent place to get answers and complete HR tasks across the employee lifecycle.",
    "capabilities": [
      "Employee Center and HR services",
      "Case and knowledge management",
      "Onboarding and lifecycle workflows",
      "HR service analytics"
    ]
  },
  {
    "slug": "csm",
    "title": "Customer Service Management",
    "description": "Resolve customer issues with connected case management, self-service and cross-team workflows.",
    "capabilities": [
      "Customer case management",
      "Customer self-service and knowledge",
      "Intelligent routing and escalation",
      "Customer service analytics"
    ]
  },
  {
    "slug": "fsm",
    "title": "Field Service Management",
    "description": "Coordinate field work from dispatch through completion with better scheduling and visibility.",
    "capabilities": [
      "Work order management",
      "Scheduling and dispatch",
      "Mobile technician workflows",
      "Parts, assets and service reporting"
    ]
  },
  {
    "slug": "pa",
    "title": "Performance Analytics",
    "description": "Turn operational data into actionable indicators, dashboards and improvement opportunities.",
    "capabilities": [
      "Role-based dashboards",
      "KPI and indicator design",
      "Trend and target tracking",
      "Automated reporting"
    ]
  },
  {
    "slug": "spm",
    "title": "Strategic Portfolio Management",
    "description": "Align investments, delivery capacity and roadmaps with the outcomes that matter most.",
    "capabilities": [
      "Demand and portfolio planning",
      "Project and resource management",
      "Strategic roadmaps",
      "Value and delivery reporting"
    ]
  },
  {
    "slug": "app-engine",
    "title": "App Engine",
    "description": "Build governed low-code applications that digitize business processes and reduce manual work.",
    "capabilities": [
      "Low-code application development",
      "Reusable data models and workflows",
      "Approvals and automation",
      "Governance and lifecycle practices"
    ]
  },
  {
    "slug": "now-mobile",
    "title": "NOW Mobile",
    "description": "Extend employee and service workflows to mobile experiences with secure, convenient access.",
    "capabilities": [
      "Mobile-first service experiences",
      "Approvals and task completion",
      "Employee self-service",
      "Connected notifications and actions"
    ]
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
