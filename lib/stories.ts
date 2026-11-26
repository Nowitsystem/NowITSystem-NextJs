export type SuccessStory = {
  slug: string;
  badge: string;
  bannerTitle: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  client: string;
  location: string;
  image: string;
  featured: boolean;
  challenge: string[];
  solution: string[];
  quote: string;
  conclusion: string[];
  similarSlugs: string[];
};

export type StoryFaq = {
  question: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const successStories: SuccessStory[] = [
  {
    slug: "itsm",
    badge: "ITSM",
    bannerTitle: "ITSM Success Story",
    title: "A Sustainable IT Environment",
    subtitle: "Creating a Sustainable IT Environment for LinkSquare LLC",
    date: "Nov 18, 2026",
    readTime: "5 Min Read",
    client: "LinkSquare LLC",
    location: "Boston, MA",
    image: "/images/stories/itsm.svg",
    featured: true,
    challenge: [
      "LinkSquare LLC, a forward-thinking company committed to a carbon-neutral strategy, faced the challenge of streamlining their IT environment to support their sustainability goals. They needed a comprehensive understanding and visibility into their IT assets, services, and suppliers to optimize their operations."
    ],
    solution: [
      "Now IT Systems, with their expertise in IT management solutions, partnered with LinkSquare LLC to implement ServiceNow. They successfully replaced legacy software and systems with a new global IT service desk, customized IT processes, and integrated tools for a more efficient and sustainable IT infrastructure."
    ],
    quote:
      "Building a sustainable IT environment isn't just about reducing energy consumption; it's about creating a brighter future where technology and nature coexist in harmony.",
    conclusion: [
      "The collaboration between LinkSquare LLC and Now IT Systems resulted in significant benefits. The company achieved a common understanding of their IT environment, gaining visibility into assets, services, and suppliers. The streamlined IT processes enabled greater operational efficiency, leading to cost savings and improved productivity.",
      "LinkSquare LLC successfully aligned their IT operations with their carbon-neutral strategy, contributing to their sustainability goals. The implementation of ServiceNow empowered their employees, enhancing their motivation, commitment, and pride in their performance and accomplishments."
    ],
    similarSlugs: ["csm", "vr", "hrsd", "spm"]
  },
  {
    slug: "csm",
    badge: "CSM",
    bannerTitle: "CSM Success Story",
    title: "Aligning Customer Service with Global Growth",
    subtitle: "Aligning Customer Service with Global Growth for PreMD Solutions LLC",
    date: "Nov 10, 2026",
    readTime: "5 Min Read",
    client: "PreMD Solutions LLC",
    location: "Providence, RI",
    image: "/images/stories/csm.svg",
    featured: true,
    challenge: [
      "As PreMD Solutions LLC experienced rapid expansion on a global scale, their existing customer service structure struggled to keep pace. Manual processes and disjointed service delivery teams hindered efficiency, leading to delayed responses and dissatisfied customers. The need for optimized service operations capable of meeting the demands of their growing customer base became evident."
    ],
    solution: [
      "Recognizing the needs of PreMD Solutions LLC, Now IT Systems implemented ServiceNow's CSM and ITSM solutions to revolutionize their customer service operations. This integration provided PreMD Solutions LLC with enhanced control and responsiveness, allowing them to efficiently track and manage customer requests, resulting in faster response times and increased customer satisfaction.",
      "The automation capabilities of ServiceNow CSM and ITSM played a crucial role in improving productivity and facilitating seamless scalability for PreMD Solutions LLC. Repetitive and time-consuming tasks were effortlessly handled, empowering service teams to focus on more strategic initiatives and creating a solid foundation for global growth.",
      "The seamless connection between service delivery teams ensured consistent service levels across different regions, enhancing customer satisfaction, driving business growth, and helping acquire new customers while retaining existing ones."
    ],
    quote:
      "Delivering exceptional customer service is not just about meeting customer needs; it's about aligning your service strategy with your global growth ambitions.",
    conclusion: [
      "The successful partnership between Now IT Systems and PreMD Solutions LLC exemplifies the transformative impact of ServiceNow's CSM and ITSM solutions. By optimizing their customer service operations, PreMD Solutions LLC gained greater control, responsiveness, and efficiency.",
      "As a result, they were able to support their global growth ambitions and deliver exceptional service experiences to customers worldwide. Now IT Systems remains committed to empowering organizations with innovative solutions, assisting them in achieving operational excellence, customer satisfaction, and sustained success."
    ],
    similarSlugs: ["itsm", "vr", "hrsd", "app-engine"]
  },
  {
    slug: "vr",
    badge: "VR",
    bannerTitle: "VR Success Story",
    title: "Enhancing Visibility and Response Time",
    subtitle: "Enhancing Visibility and Response Time for PreMD Solutions LLC",
    date: "Oct 28, 2026",
    readTime: "5 Min Read",
    client: "Prowebic",
    location: "Bangalore, IND",
    image: "/images/stories/vr.svg",
    featured: true,
    challenge: [
      "The client faced challenges in managing a large volume of incidents and lacked a centralized source of truth for vulnerabilities. This led to a lack of visibility and impacted response time to threats. The need for faster, more efficient service delivery and streamlined vulnerability response was evident."
    ],
    solution: [
      "In the ever-evolving landscape of technology, organizations face the constant challenge of delivering efficient services while ensuring robust security measures. Now IT Systems collaborated with the client to modernize their service delivery and enhance vulnerability response. Through the implementation of ServiceNow ITSM and ServiceNow Vulnerability Response, Now IT Systems enabled the client to triple the speed of service delivery, improve threat detection, and achieve higher employee satisfaction.",
      "By automating workflows and leveraging the power of ServiceNow Vulnerability Response, the client gained enhanced visibility and rapid identification of threats. This streamlined approach empowered the organization to quickly prioritize and address vulnerabilities, leading to improved security measures and reduced response time."
    ],
    quote:
      "Enhanced visibility and swift response are imperative in the digital realm. By leveraging advanced solutions, organizations fortify security measures and mitigate risks, fostering a resilient environment for uninterrupted growth.",
    conclusion: [
      "The collaboration between Now IT Systems and the client exemplifies the transformative power of modern service delivery and vulnerability response. By leveraging ServiceNow ITSM and ServiceNow Vulnerability Response, the client achieved remarkable outcomes, including tripled service delivery speed, heightened threat detection, and improved employee satisfaction.",
      "Now IT Systems continues to drive innovation and empower organizations to navigate the ever-changing landscape of technology, enabling them to achieve operational excellence, enhanced security, and overall success."
    ],
    similarSlugs: ["itsm", "app-engine", "hrsd-magnetar", "csm"]
  },
  {
    slug: "hrsd",
    badge: "HRSD",
    bannerTitle: "HRSD Success Story",
    title: "A Unified and Digital-First HR Experience",
    subtitle: "Creating a Unified and Digital-First HR Experience for Magnetar",
    date: "Oct 15, 2026",
    readTime: "5 Min Read",
    client: "Magnetar",
    location: "Bangalore, IND",
    image: "/images/stories/hrsd.svg",
    featured: true,
    challenge: [
      "With a vast and diverse workforce, the organization recognized the need for a unified and digital-first HR service experience. They aimed to simplify the associate experience, provide greater self-service capabilities, and ensure that employees could access HR services seamlessly across different devices and platforms."
    ],
    solution: [
      "Now IT Systems partnered with the client to develop a customized HR services portal using Employee Center Pro. This innovative solution transformed the employee experience, providing a unified platform accessible on mobile and desktop devices. Employees gained self-service capabilities, finding answers through comprehensive search functionalities and knowledge articles, while complex cases were intelligently routed to the appropriate HR teams for swift resolution.",
      "The collaboration produced remarkable results: the personalized HR services portal delivered a tailored and user-friendly experience, enhancing work-life satisfaction. Cost savings were achieved through increased self-service usage, and operational efficiency improved with streamlined processes and reduced HR reporting time, allowing HR teams to focus on strategic initiatives."
    ],
    quote:
      "Embracing a digital-first approach, organizations can create a unified HR experience that empowers employees, fosters collaboration, and propels success in the digital era.",
    conclusion: [
      "The collaboration showcases the transformative power of personalized HR solutions. By implementing the HR services portal built on Employee Center Pro, the organization succeeded in delivering a unified and digital-first HR experience for their 120,000 employees worldwide.",
      "The personalized approach, self-service capabilities, and streamlined processes resulted in increased employee satisfaction, cost savings, higher case deflection rates, and improved operational efficiency."
    ],
    similarSlugs: ["itsm", "csm", "vr", "spm"]
  },
  {
    slug: "spm",
    badge: "SPM",
    bannerTitle: "SPM Success Story",
    title: "Streamlining Project Portfolio Management",
    subtitle: "Streamlining Project Portfolio Management for Prowebic",
    date: "Oct 4, 2026",
    readTime: "10 Min Read",
    client: "Prowebic",
    location: "Bangalore, IND",
    image: "/images/stories/spm.svg",
    featured: false,
    challenge: [
      "Prowebic, a leading software development company, was facing challenges in effectively managing their portfolio of projects and aligning them with their strategic objectives. They needed a robust solution that could provide visibility into project status, resource allocation, and overall portfolio performance. Prowebic partnered with Now IT Systems to implement the SPM module within their existing ServiceNow platform."
    ],
    solution: [
      "With ServiceNow SPM, Prowebic centralized their project information, gaining a holistic view of their portfolio. Project managers and executives could make informed decisions by assessing project goals, timelines, and resource allocation in a single centralized platform, improving visibility and prioritization across the organization.",
      "The implementation brought clear alignment between projects and Prowebic's strategic objectives. By mapping each project to the company's overall strategy, Prowebic ensured resources were allocated to initiatives supporting their long-term vision. Real-time resource allocation decisions considering requirements, availability, and skillsets helped minimize bottlenecks and maximize productivity."
    ],
    quote:
      "Implementing a robust project management solution enables companies to enhance collaboration, streamline processes, and achieve successful project outcomes.",
    conclusion: [
      "By implementing ServiceNow's SPM module, Prowebic experienced significant improvements in their portfolio management practices. They gained better visibility into their projects, aligned them with strategic objectives, optimized resource allocation, and enhanced project governance.",
      "Prowebic was able to make data-driven decisions, improve project delivery, and achieve higher levels of success across their portfolio of initiatives."
    ],
    similarSlugs: ["vr", "itsm", "hrsd-magnetar", "app-engine"]
  },
  {
    slug: "hrsd-magnetar",
    badge: "HRSD",
    bannerTitle: "HRSD Success Story",
    title: "Optimizing HR Operations and Employee Engagement",
    subtitle: "Optimizing HR Operations and Employee Engagement for Magnetar",
    date: "Sep 22, 2026",
    readTime: "5 Min Read",
    client: "Magnetar",
    location: "Bangalore, IND",
    image: "/images/stories/hrsd-magnetar.svg",
    featured: false,
    challenge: [
      "Magnetar, a global technology company with thousands of employees, was facing challenges in managing their HR services effectively. Their HR processes were manual, time-consuming, and often resulted in delays and errors. They recognized the need for a comprehensive HRSD solution that could automate and simplify their HR operations while enhancing employee satisfaction."
    ],
    solution: [
      "Magnetar implemented the HRSD module within the ServiceNow platform, configuring key HR processes including employee onboarding, offboarding, time-off requests, benefits administration, and employee data management. A user-friendly self-service portal allowed employees to easily access HR services, submit requests, and track status, promoting transparency and reducing follow-ups.",
      "Automation eliminated errors associated with manual data entry, routing tasks and approvals directly to the appropriate stakeholders. HR teams shifted focus from administrative tasks to strategic initiatives using dashboards and analytics, while ensuring adherence to regulatory requirements, data privacy standards, and secure access controls."
    ],
    quote:
      "Embracing advanced HR service delivery solutions revolutionizes company operations, elevating employee experiences and fostering organizational prosperity.",
    conclusion: [
      "The implementation of ServiceNow's HRSD module proved to be a resounding success for Magnetar. It transformed their HR operations, improved employee experiences, increased productivity, and ensured compliance with regulations.",
      "By leveraging the power of automation and self-service, Magnetar created a more efficient and employee-centric HR environment, setting the stage for continued growth and success."
    ],
    similarSlugs: ["itsm", "vr", "hrsd", "app-engine"]
  },
  {
    slug: "app-engine",
    badge: "App Engine",
    bannerTitle: "App Engine Success Story",
    title: "Unleashing Operational Efficiency through Automation",
    subtitle: "Unleashing Operational Efficiency through Automation for Prowebic",
    date: "Sep 10, 2026",
    readTime: "5 Min Read",
    client: "Prowebic",
    location: "Bangalore, IND",
    image: "/images/stories/app-engine.svg",
    featured: false,
    challenge: [
      "Prowebic, a growing software development company, was facing challenges in managing and automating their business processes effectively. They had numerous manual and repetitive tasks across various departments, resulting in inefficiencies and delays. Prowebic recognized the need for a comprehensive solution to automate their workflows and turned to ServiceNow App Engine."
    ],
    solution: [
      "Prowebic revolutionized their business processes and workflows by implementing ServiceNow's App Engine module. Through workflow automation, they streamlined operations, eliminated manual tasks, and reduced human errors while tailoring workflows to ensure consistent, standardized processes across the organization.",
      "ServiceNow App Engine seamlessly integrated with Prowebic's existing systems and applications, connecting databases and third-party tools to eliminate data silos and enhance accuracy. Real-time visibility enabled teams to track task statuses, identify bottlenecks, make data-driven decisions, and scale smoothly by adding new workflows as the business expanded."
    ],
    quote:
      "Embrace automation to propel your business towards exponential growth, empowering your organization to achieve peak productivity, efficiency, and success in today's digital landscape.",
    conclusion: [
      "By implementing ServiceNow's App Engine module, Prowebic successfully automated their business processes, improved operational efficiency, and enhanced overall productivity.",
      "They eliminated manual tasks, streamlined workflows, gained better visibility into their operations, optimized resources, and focused on innovation—driving continued growth in the software development industry."
    ],
    similarSlugs: ["itsm", "vr", "hrsd", "spm"]
  }
];

export const storyFaqs: StoryFaq[] = [
  {
    question: "What is ServiceNow and how is it useful?",
    paragraphs: [
      "ServiceNow is a cloud platform that turns manual, email-driven work into automated workflows. It gives IT, HR, customer service, and other teams one unified system to request, track, and resolve work."
    ]
  },
  {
    question: "What are the benefits of using ServiceNow?",
    bullets: [
      "One platform connecting IT, HR, customer service, and operations",
      "Workflow automation that cuts repetitive manual work and reduces errors",
      "Clear real-time visibility through dashboards, analytics, and SLA tracking"
    ]
  },
  {
    question: "What are the different modules in ServiceNow?",
    bullets: [
      "ITSM, ITOM, and ITAM for IT service, operations, and asset lifecycles",
      "IRM and SecOps for integrated risk, compliance, and security response",
      "HRSD, CSM, and FSM for employee, customer, and field service teams",
      "Performance Analytics, SPM, App Engine, and NOW Mobile for insights, planning, low-code apps, and mobile access"
    ]
  },
  {
    question: "How do third-party integrations work?",
    paragraphs: [
      "ServiceNow connects to external enterprise tools through REST/SOAP APIs, Integration Hub spokes, and ready-made connectors so data moves reliably across your systems without manual re-entry."
    ]
  },
  {
    question: "How is availability and reliability for business?",
    paragraphs: [
      "The Now Platform is engineered for enterprise-grade high availability, backed by Now IT Systems' 24x7 support team to monitor health and keep critical workflows moving."
    ]
  },
  {
    question: "What security measures does it offer?",
    paragraphs: [
      "ServiceNow provides role-based access control (RBAC), encryption in transit and at rest, comprehensive audit trails, and compliance alignment configured to match your organization's security policies."
    ]
  }
];

export const getSuccessStory = (slug: string) =>
  successStories.find((story) => story.slug === slug);
