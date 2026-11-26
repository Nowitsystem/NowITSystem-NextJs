export type ServiceBenefit = {
  title?: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  image: string;
  description: string;
  shortSummary: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  benefits: ServiceBenefit[];
  capabilities: string[];
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "itsm",
    title: "IT Service Management",
    image: "/images/services/itsm.jpg",
    description:
      "ITSM is a strategic approach to IT management that focuses on delivering value to customers. ServiceNow IT Service Management revolutionizes traditional service management by offering a modern, cloud-based solution that eliminates silos.",
    shortSummary:
      "ITSM is a strategic approach to IT management that focuses on delivering value to customers. It defines the roles and responsibilities of each individual in terms of IT services.",
    overviewTitle: "Explore how your business can improve through ITSM",
    overviewParagraphs: [
      "By migrating legacy on-premises tools to a unified cloud platform, ITSM allows you to leverage shared data, analytics, and automated workflows on the Now Platform. With integrated AI, machine learning capabilities, and virtual agent chatbots, your IT staff can experience a 30% increase in productivity.",
      "The scope of ITSM has grown to incorporate business goals in addition to traditional IT objectives. As a result, IT service management boosts productivity all around. ITSM comprises Incident management, Problem management, Change and release management, Service-level management, Request management, Configuration management, Continual improvement management, and Workflow and talent management. With chatbots driven by machine learning and AI, ServiceNow IT Service Management accelerates digital transformation and improves the user experience. With organised machine learning that automates repetitive operations, productivity is also increased."
    ],
    benefits: [
      {
        title: "24/7 Employee Self-Service",
        description:
          "Empowering employees to independently resolve issues, seek information, and receive consistent and accurate responses 24/7, resulting in improved employee satisfaction."
      },
      {
        title: "Role-Based Workspaces",
        description:
          "Enabling smarter decision-making, automated services, and continual service improvement through role-based workspaces."
      },
      {
        title: "30% Productivity Boost",
        description:
          "Streamlining incident triage, facilitating collaboration, and empowering agents to efficiently resolve incidents, find solutions, and remain connected from any location, leading to a 30% boost in agent productivity."
      }
    ],
    capabilities: [
      "Incident, problem and change management",
      "Service catalog and request fulfilment",
      "Knowledge management and service portal",
      "Service level management and reporting"
    ],
    relatedSlugs: ["itom", "itam", "csm"]
  },
  {
    slug: "itom",
    title: "IT Operations Management",
    image: "/images/services/itom.jpg",
    description:
      "IT Operations Management encompasses the processes and services handled by an IT department, including administrative tasks, hardware and software support, and services for both internal and external clients. An effective ITOM ensures the availability, performance, and efficiency of an organization's services and processes.",
    shortSummary:
      "ITOM encompasses the processes and services handled by an IT department. An effective ITOM ensures the performance and efficiency of an organization's services.",
    overviewTitle: "Explore how your business can improve through ITOM",
    overviewParagraphs: [
      "IT Operations Management are typically management departments within an IT team that develop policies on how services and support are managed and resolved, incorporating policies and procedures that revolve around how organizations intend to meet the needs and SLAs of the client and the organization.",
      "ServiceNow ITOM solutions enable the use of pre-built capabilities to accelerate time to value, supply the data platform for digital services across all IT, and ensure continuous availability of digital services. It enables an organization to implement proactive operations by predicting issues before they affect users or the company, preventing problems, automating procedures, and redefining how IT teams cooperate. ITOM teams are also in charge of IT assets such as desktops, tablets, mobile devices, phones, and laptops."
    ],
    benefits: [
      {
        title: "Issue Prediction",
        description:
          "ITOM systems collect and analyze data from various IT resources, including cloud services, infrastructure, logs, metrics, events, and containers. Leveraging artificial intelligence and machine learning, ITOM reduces noise, identifies anomalies, and helps predict and mitigate issues proactively."
      },
      {
        title: "Minimize User Impact",
        description:
          "ITOM enables the prevention of issues before they occur, reducing the impact on end users. By correlating changes and incidents, ITOM helps identify root causes faster and more accurately, facilitating collaboration across teams and triggering actions based on guided recommendations to prevent outages and service disruptions."
      },
      {
        title: "Workflow Automation",
        description:
          "ITOM offers opportunities to automate workflows across teams, eliminating manual processes and empowering staff with actionable insights. With a knowledge base and pre-built playbooks, recovery times are shortened, simplifying repetitive tasks through low-code/no-code workflows."
      },
      {
        title: "DevOps Enablement",
        description:
          "ITOM collaborates with centralized and decentralized teams, providing DevOps and Site Reliability Engineering (SRE) teams with greater visibility into microservices, improving observability and incident response."
      },
      {
        title: "Data Connectivity",
        description:
          "ITOM goes beyond traditional IT operations by managing the entire digital lifecycle. It extends the Configuration Management Database (CMDB) to create a robust data foundation, enabling better data management and decision-making."
      }
    ],
    capabilities: [
      "Event management and alert correlation",
      "Service mapping and discovery",
      "Operational visibility and automation",
      "Reduce noise and accelerate resolution"
    ],
    relatedSlugs: ["itsm", "itam", "csm"]
  },
  {
    slug: "itam",
    title: "IT Asset Management",
    image: "/images/services/itam.jpg",
    description:
      "IT asset management is essential for maximizing the value of assets within an organization by ensuring proactive management throughout their limited lifespan. The typical lifecycle phases of assets include planning, procurement, deployment, maintenance, retirement, and disposal.",
    shortSummary:
      "ITAM is essential for maximizing the value of assets within an organization by ensuring proactive management throughout their limited lifespan.",
    overviewTitle: "Explore how your business can improve through ITAM",
    overviewParagraphs: [
      "IT assets can be categorized into physical, software, hardware, mobile, and cloud assets, and ITAM is designed to facilitate successful deployment and ongoing support for each asset type. There are three primary types of IT asset management: Software, Hardware, and Cloud. Managing software assets involves complexities such as compliance requirements, licensing, shadow IT, and IoT. Continuous monitoring and review are necessary, and software assets should be adaptable to meet changing market demands and requirements. Meanwhile, Hardware plays a significant role in an organization's IT ecosystem, including PCs, printers, copiers, laptops, mobile devices, servers, and any other hardware used for data management purposes. Lastly, Cloud ITAM tracks the cost and usage of cloud resources, including software as a service (SaaS), infrastructure as a service (IaaS), and platform as a service (PaaS).",
      "Managing cloud assets ensures cost optimization and compliance within ITAM. Hardware asset management and software asset management are both encompassed within ITAM but differ conceptually: hardware management focuses on physical assets, while software asset management involves software installations, licenses, and cloud services."
    ],
    benefits: [
      {
        title: "Providing a single source of truth",
        description:
          "ITAM consolidates asset information, eliminating the need for manual tracking and interpretation of asset data. This streamlines processes and ensures accurate and up-to-date information."
      },
      {
        title: "Improving utilization, reducing risks, and minimizing waste",
        description:
          "ITAM enables teams to optimize asset utilization, eliminate waste, and enforce security and compliance policies to mitigate risks associated with regulatory penalties."
      },
      {
        title: "Increasing productivity while maintaining reliability",
        description:
          "Asset management tools are invaluable in supporting DevOps and Site Reliability Engineering (SRE) principles. Effective asset management allows for efficient management of infrastructure and platform services, improving overall productivity."
      },
      {
        title: "Supporting IT and business practices",
        description:
          "ITAM aligns with IT Service Management (ITSM) and IT Infrastructure Library (ITIL) processes such as change, incident, and problem management. It also supports HR activities (onboarding and offboarding), finance for asset tracking, security for vulnerability remediation, and operations management by identifying critical assets and their dependencies."
      },
      {
        title: "Reducing costs through continuous review",
        description:
          "Regular asset review helps identify unnecessary licenses, instances, or resources that may be causing unnecessary expenditures. By consolidating and reviewing assets, organizations can reduce costs and optimize resource allocation."
      }
    ],
    capabilities: [
      "Hardware and software asset lifecycle",
      "Asset inventory and normalization",
      "License compliance and optimization",
      "Procurement and asset workflows"
    ],
    relatedSlugs: ["itom", "itsm", "csm"]
  },
  {
    slug: "irm",
    title: "Integrated Risk Management",
    image: "/images/services/irm.jpg",
    description:
      "Integrated Risk Management (IRM) gives organizations the confidence and tools they need to run their businesses without violating regulatory boundaries. IRM provides a broader, enterprise-wide approach that empowers organizations to monitor, manage, and act on various risks and compliance controls in real-time.",
    shortSummary:
      "Integrated Risk Management (IRM) empowers organizations to monitor, manage, and act on risks, controls, and regulatory compliance in real-time.",
    overviewTitle: "Explore how your business can improve through IRM",
    overviewParagraphs: [
      "Integrated Risk Management (IRM) is essential in every organisation because stakeholders expect a high level of transparency, accountability, and performance. Regulations are constantly changing in an unpredictable manner, and a lack of risk identification has serious consequences. Many firms, however, do not have well-defined IRM programmes or have a propensity to underfund them. Organisations need to become more resilient and be proactive in anticipating disruptions if they want to survive and continue to provide value. Enhancing risk visibility, coordinating IRM activities with business priorities, and offering proactive insights that empower businesses to act quickly and decisively should be the main goals of the business case for IRM.",
      "Governance refers to the frameworks governing an organisation's activities and their alignment with business objectives, encompassing processes, structures, and policies designed to manage and monitor company operations. Risk management involves an ongoing process of addressing risks, implementing controls to mitigate them, and providing assurance that risks are managed in accordance with policies—including risk measurement, assessment, retention, monitoring, and identification. Compliance entails ensuring that organisational activities adhere to laws and regulations and operate in line with legal requirements."
    ],
    benefits: [
      {
        title: "Cost Reduction and Compliance",
        description:
          "IRM reduces costs and minimizes the likelihood of fines by addressing audit findings, compliance violations, and infractions."
      },
      {
        title: "Enhanced Risk Management",
        description:
          "IRM reduces risk associated with vendors, facilitates adaptation to emerging legislation and digital transformation, and improves responsiveness to changes in business paradigms."
      },
      {
        title: "Operational Efficiency and Productivity",
        description:
          "IRM enables minimal operational impact, enhanced scalability, and increased productivity by streamlining processes, eliminating unnecessary tasks, and utilizing resources efficiently."
      }
    ],
    capabilities: [
      "Risk and compliance management",
      "Policy and control workflows",
      "Audit planning and evidence",
      "Continuous monitoring and reporting"
    ],
    relatedSlugs: ["itom", "itsm", "itam"]
  },
  {
    slug: "secops",
    title: "Security Operations",
    image: "/images/services/secops.jpg",
    description:
      "SecOps brings together IT security and IT operations teams to ensure that all processes, including DevOps, run safely and securely. It is poised to change how IT security and IT operations collaborate to deliver airtight security solutions faster than ever before.",
    shortSummary:
      "SecOps connects IT security and IT operations teams to prioritize threats, streamline responses, and protect critical systems.",
    overviewTitle: "Explore how your business can improve through SecOps",
    overviewParagraphs: [
      "The goal of security operations is to prevent organisational silos within the larger IT structure through the integration and collaboration of IT security and IT operations. The key goal is to fulfil security goals while retaining the best possible IT performance. IT security programmes may find it difficult to defend against every attack and stop every security incident as security threats continue to develop and grow more complex. Establishing a strong team may help with application deployment and enable thorough security oversight during all deployment phases, enabling increased support.",
      "Particularly among operations and development teams that prioritise the speed and usability of applications, there is frequently a preference for speed and tool adoption over security issues. A lack of focus on security, however, might make programmes more susceptible to assaults and compromises. The necessity to prioritise security alongside innovation is highlighted by the fact that security measures have not kept pace with innovation. Innovations may become liabilities and vulnerabilities if this is not done. As hackers deploy more inventive attack techniques, it takes less time to exploit weaknesses. In order to protect data and preserve the integrity of a company's information, quick security responses are essential."
    ],
    benefits: [
      {
        title: "Mitigating Vulnerabilities",
        description:
          "Prioritizing speed and tool adoption over security can leave systems vulnerable to attacks and compromises. It is crucial to address security concerns to mitigate potential vulnerabilities and protect sensitive data."
      },
      {
        title: "Security-Driven Innovation",
        description:
          "Security measures must keep pace with innovation to ensure that advancements do not introduce new risks. By integrating security into the development process, organizations can ensure the adoption of secure practices and minimize security gaps."
      },
      {
        title: "Proactive Defence Against Evolving Threats",
        description:
          "As hackers employ increasingly sophisticated attack techniques, rapid responses and proactive security measures are vital. Organizations must stay vigilant, monitor threats, and promptly address vulnerabilities to safeguard critical information and maintain operational resilience."
      }
    ],
    capabilities: [
      "Security incident response",
      "Threat intelligence and prioritization",
      "Vulnerability response workflows",
      "Integration with existing security tools"
    ],
    relatedSlugs: ["itom", "itam", "csm"]
  },
  {
    slug: "hrsd",
    title: "HR Service Delivery",
    image: "/images/services/hrsd.svg",
    description:
      "HR Service Delivery offers an enhanced employee experience through a centralized platform that streamlines their work requirements, minimizing complexities across various departments.",
    shortSummary:
      "HR Service Delivery delivers a unified employee experience platform that simplifies HR inquiries, onboarding, and cross-team requests.",
    overviewTitle: "Explore how your business can improve through HRSD",
    overviewParagraphs: [
      "The HRSD (Human Resources Service Delivery) platform provides a range of primary functionalities to optimize and streamline HR operations. It includes an Employee Center that allows access to multiple department services through a single unified portal. Additionally, it offers Employee Journey Management to enhance the employee experience by assisting them in navigating significant career milestones. Workforce Optimization enables the improvement of operational efficiency by gaining insights into HR agent schedules, workloads, and skills. The platform also supports Enterprise Onboarding and Transitions, ensuring exceptional employee experiences during critical moments. With Case and Knowledge Management, it becomes possible to standardize documentation, manage employee relations, and fulfil requests. Moreover, Issue Auto Resolution utilizes AI responses to promptly address simple requests, reducing case volumes.",
      "The Now Mobile app simplifies employee self-service with a mobile app designed specifically for their needs. Virtual Agent functionality resolves issues faster and provides 24/7 support through intelligent chatbots. By offering Universal Request, the platform delivers a unified employee service experience and enhances agent collaboration. Employee Relations functionality helps maintain HR processes, documentation, and communications to ensure compliance. Lastly, Performance Analytics enables the tracking of HR performance over time by measuring key performance indicators (KPIs)."
    ],
    benefits: [
      {
        title: "Unified Employee Experience Platform",
        description:
          "Boost productivity and operational efficiency with a unified employee experience platform that integrates IT, HR, Workplace Services, and Legal departments, streamlining service delivery and enhancing collaboration."
      },
      {
        title: "Manager Empowerment",
        description:
          "Equip managers with tools and resources to better support employee needs, providing comprehensive views of their team's journeys, statistics, and requests, enabling informed decision-making and fostering a positive work environment."
      },
      {
        title: "Enhanced Career Guidance",
        description:
          "Create guided workflows for employees during critical career moments, offering step-by-step guidance and proactive prompts, empowering organizations to take proactive action and promote employee career development and satisfaction."
      }
    ],
    capabilities: [
      "Employee Center and HR services",
      "Case and knowledge management",
      "Onboarding and lifecycle workflows",
      "HR service analytics"
    ],
    relatedSlugs: ["itom", "itam", "csm"]
  },
  {
    slug: "csm",
    title: "Customer Service Management",
    image: "/images/services/csm.jpg",
    description:
      "Transform your customer service operations with ServiceNow's Customer Service Management (CSM) solution, revolutionizing the way you engage with your customers. CSM empowers your teams to provide seamless and exceptional customer experiences while driving efficiency and reducing costs.",
    shortSummary:
      "Elevate your customer self-service experience to new heights with the advanced features of Customer Service Management.",
    overviewTitle: "Explore how your business can improve through CSM",
    overviewParagraphs: [
      "With ServiceNow CSM, you can streamline your operations across the entire customer service journey. From the front office to the back office, CSM enables you to optimize processes, automate issue resolution, and provide self-service options across multiple channels. This ensures that your customers can easily access the support they need, when they need it. By leveraging CSM's intelligent features, your agents are equipped with real-time information and intelligent guidance, enabling them to resolve customer issues faster and more effectively. This not only reduces case volumes but also lowers costs associated with manual and time-consuming tasks.",
      "The ultimate result is increased customer satisfaction. With ServiceNow CSM, you can deliver personalized and efficient customer experiences that leave a lasting impression. Your customers will appreciate the seamless service and quick issue resolution, leading to enhanced loyalty and positive word-of-mouth recommendations. Experience the power of ServiceNow CSM and transform your customer service operations today—streamline processes, reduce costs, and elevate customer satisfaction to new heights."
    ],
    benefits: [
      {
        title: "Streamline operations across the front, middle, and back office",
        description:
          "ServiceNow streamlines operations, enhances service delivery, and reduces costs through process optimization and AI-driven incident detection. It improves customer satisfaction with proactive tracking, automated notifications, and personalized support, while enabling performance monitoring and collaborative project management."
      },
      {
        title: "Enable self-service across channels and automate resolution",
        description:
          "ServiceNow's advanced self-service features empower organizations to elevate customer experiences through automation, personalized portals, and preferred communication channels. Deliver exceptional service, optimize interactions, and exceed expectations with ServiceNow's innovative capabilities."
      },
      {
        title: "Empower agents with real-time information and intelligent guidance",
        description:
          "ServiceNow enables efficient case resolution and enhanced agent performance through a unified workspace and contextual guidance. Streamline operations, boost productivity, and effectively manage complex issues with consolidated cases."
      }
    ],
    capabilities: [
      "Customer case management",
      "Customer self-service and knowledge",
      "Intelligent routing and escalation",
      "Customer service analytics"
    ],
    relatedSlugs: ["itom", "itsm", "itam"]
  },
  {
    slug: "fsm",
    title: "Field Service Management",
    image: "/images/services/fsm.jpg",
    description:
      "With an increasing reliance on advanced equipment, hardware, and systems, the number of industries that use FSM is constantly expanding. It includes work order management, scheduling, customer and asset information, parts management, knowledge, collaboration tools, and mobile capabilities.",
    shortSummary:
      "Coordinate field work from dispatch through completion with automated scheduling, mobile workflows, and asset visibility.",
    overviewTitle: "Explore how your business can improve through FSM",
    overviewParagraphs: [
      "In circumstances where authorised technicians carry out necessary duties at specified places, these professionals typically travel to customers' locations to complete tasks like system or equipment installation, repair, maintenance, or removal. Field Service Management (FSM) encompasses essential functions in the field: skilled specialists ensure proper installation of field equipment, providing onboarding, addressing inquiries, and offering guidance on usage; corrective, preventive, and proactive maintenance extend the operational life of off-site equipment; and field service staff promptly perform break-fix repairs, carefully remove or transfer outdated equipment, deploy advanced replacements, and dispatch specialists for beyond-equipment services such as home healthcare visits.",
      "In the realm of Field Service Management (FSM), organizations face various obstacles in delivering successful and satisfying field services. These challenges include multiple trips to address the same issue due to low first-time fix rates, negative customer experiences during field interactions, workforce transitions such as retiring expert technicians and reliance on external contractors, lack of comprehensive information on customer-owned assets, and effectively tracking dispatch and technician tasks."
    ],
    benefits: [
      {
        title: "Efficient scheduling",
        description:
          "Field service management software automates scheduling tasks, improving resource allocation and freeing up time for dispatchers. This enhances overall efficiency in field service operations."
      },
      {
        title: "Reduced administrative workload",
        description:
          "Field service management streamlines processes such as documentation and inventory tracking, enabling technicians to focus on issue resolution. This reduces administrative burdens and increases productivity."
      },
      {
        title: "Improved customer satisfaction",
        description:
          "Field service management enables prompt issue resolution, enhances compliance with procedures, and increases technician utilization. This results in higher customer satisfaction and improved service quality."
      }
    ],
    capabilities: [
      "Work order management",
      "Scheduling and dispatch",
      "Mobile technician workflows",
      "Parts, assets and service reporting"
    ],
    relatedSlugs: ["itom", "itam", "csm"]
  },
  {
    slug: "pa",
    title: "Performance Analytics",
    image: "/images/services/pa.jpg",
    description:
      "Performance Analytics is a solution provided by ServiceNow that helps organizations derive value from their data and drive meaningful change. In a complex business climate, organizations face challenges in leveraging their data effectively.",
    shortSummary:
      "Turn operational data into interactive dashboards, KPIs, and data-driven insights across every level of your business.",
    overviewTitle: "Explore how your business can improve through PA",
    overviewParagraphs: [
      "By offering analytics capabilities that are integrated into the organization's operations and available to the pertinent departments and stakeholders, performance analytics tackles this difficulty. Organisations can use data and analytics to increase their agility, enhance the quality of the services they provide, and show the financial benefit of their efforts. Organisations can detect future trends and take well-informed decisions to manage their teams by analysing past and present performance. Organisations can use performance analytics to get comprehensive insights into the factors that affect their business at organisational, departmental, and individual levels. Employees are given the freedom to monitor their efforts in relation to strategic goals and take appropriate action to cut expenses and boost productivity. The solution comes with responsive and interactive dashboards, extensive drilldown capabilities, and strong analytics tools that offer insightful information for enhancing business services and procedures.",
      "As a result of offering an integrated application for reporting and analysing business performance, ServiceNow's Performance Analytics assists organisations in changing into goal-oriented corporate cultures. It makes data-driven decisions possible, raises the standard of services, and encourages organisational efficiency."
    ],
    benefits: [
      {
        title: "Strategic Insights",
        description:
          "Gain valuable insights into performance, identify improvement areas, and anticipate service bottlenecks for proactive decision-making."
      },
      {
        title: "Optimal Resource Allocation",
        description:
          "Prioritize resources effectively based on real-time information, ensuring efficient coverage in critical areas for improved productivity."
      },
      {
        title: "Data-driven Decision-making",
        description:
          "Utilize performance analytics to track key performance indicators, guide continuous service development, and make informed decisions based on accurate data."
      },
      {
        title: "Enhanced Operational Efficiency",
        description:
          "Align service operations with the overall business plan, driving operational efficiency, and accelerating results through data-backed strategies."
      }
    ],
    capabilities: [
      "Role-based dashboards",
      "KPI and indicator design",
      "Trend and target tracking",
      "Automated reporting"
    ],
    relatedSlugs: ["itom", "itsm", "itam"]
  },
  {
    slug: "spm",
    title: "Strategic Portfolio Management",
    image: "/images/services/spm.svg",
    description:
      "Strategic Portfolio Management, formerly known as IT Business Management, helps customers focus on managing an organization's services and their lifecycle.",
    shortSummary:
      "Align investments, portfolios, and project delivery with strategic business goals across the entire service lifecycle.",
    overviewTitle: "Explore how your business can improve through SPM",
    overviewParagraphs: [
      "IT Business Management (ITBM) assists IT in showcasing its value to the organization and rationalizing investments to focus more on innovation. ITBM also aids in transforming the delivery of new products and services through efficient execution methodologies, enabling businesses to plan, analyse, and optimize their service offerings to align with strategic objectives and meet customer needs effectively. To optimize business operations, it is crucial to align applications and work goals with business objectives. ServiceNow's Application Portfolio Management (APM) reduces costs, ensures alignment, and minimizes risks by effectively managing the application portfolio. Additionally, ServiceNow's Project Portfolio Management (PPM) provides a centralized platform to oversee the entire project lifecycle, optimizing resource utilization and aligning work with strategic objectives.",
      "ServiceNow's Innovation Management solution empowers employees to contribute ideas for new products and features, fostering innovation and streamlining the process from idea submission to actionable demands or projects. Integration with the Scaled Agile Framework (SAFe) enables swift delivery, enhancing competitiveness. ServiceNow also simplifies investment funding workflows, maximizing returns by efficiently allocating and distributing funds. By aligning applications, work goals, fostering innovation, and streamlining funding, ServiceNow optimizes operations, enhances collaboration, and drives better outcomes for a competitive advantage."
    ],
    benefits: [
      {
        title: "Agile Product and Portfolio Management",
        description:
          "Optimize value, accelerate innovation, streamline work, and gain real-time visibility through agile portfolio orchestration and integrated planning with DevOps."
      },
      {
        title: "Alignment Planner Workspace (APW)",
        description:
          "Enhance configurability, transparency, and efficient development pathways for informed decision-making and streamlined technology investments."
      },
      {
        title: "Application and Project Portfolio Management",
        description:
          "Gain a holistic understanding, reduce complexity, save costs, and make informed investment decisions through optimized application portfolio management and streamlined project delivery."
      },
      {
        title: "Hybrid Project and Portfolio Management",
        description:
          "Integrate planning strategies, deliver projects faster, allocate resources efficiently, and centralize project intake for a balanced and streamlined approach."
      }
    ],
    capabilities: [
      "Demand and portfolio planning",
      "Project and resource management",
      "Strategic roadmaps",
      "Value and delivery reporting"
    ],
    relatedSlugs: ["itom", "itsm", "csm"]
  },
  {
    slug: "app-engine",
    title: "App Engine",
    image: "/images/services/app-engine.svg",
    description:
      "In ServiceNow, App Engine is a platform feature that allows users to build and customize applications within the ServiceNow ecosystem. It provides a low-code development environment and tools to create, modify, and deploy custom applications without extensive coding knowledge.",
    shortSummary:
      "Build and deploy custom low-code applications rapidly with pre-built templates, form design, and workflow automation.",
    overviewTitle: "Explore how your business can improve through App Engine",
    overviewParagraphs: [
      "With App Engine, users can leverage pre-built application templates and a visual development interface to rapidly create business applications tailored to their specific needs. It offers a range of features and functionalities, such as form design, workflow management, data modelling, and integration capabilities, to support the development and deployment of custom applications.",
      "App Engine in ServiceNow enables organizations to extend the capabilities of the platform, automate processes, and deliver enhanced user experiences through custom applications that align with their unique business requirements."
    ],
    benefits: [
      {
        title: "Accelerated Development and Efficiency",
        description:
          "ServiceNow App Engine's low-code environment and pre-built application templates accelerate the development process, reducing the need for extensive coding and enabling efficient application creation."
      },
      {
        title: "Customization and Flexibility",
        description:
          "ServiceNow App Engine offers customization options, allowing users to tailor applications according to their specific requirements. The platform provides tools for form design, workflow management, and data modelling, ensuring flexibility in creating tailored solutions."
      },
      {
        title: "Integration and Collaboration",
        description:
          "ServiceNow App Engine seamlessly integrates with other ServiceNow modules and third-party systems, facilitating collaboration and data exchange across the organization. This integration promotes streamlined processes, enhances efficiency, and enables smooth workflow automation."
      }
    ],
    capabilities: [
      "Low-code application development",
      "Reusable data models and workflows",
      "Approvals and automation",
      "Governance and lifecycle practices"
    ],
    relatedSlugs: ["itom", "itam", "csm"]
  },
  {
    slug: "now-mobile",
    title: "NOW Mobile",
    image: "/images/services/now-mobile.jpg",
    description:
      "NOW Mobile gives customers the ability to manage requests, collaborate on projects, access knowledge bases, manage incidents, and manage tasks from their mobile devices. Users can stay connected and productive while on the road thanks to its user-friendly UI that is mobile device optimised.",
    shortSummary:
      "Empower teams and employees to manage requests, incidents, and approvals from anywhere with a mobile-first experience.",
    overviewTitle: "Explore how your business can improve through NOW Mobile",
    overviewParagraphs: [
      "Today's workers rely on consumer apps that make their personal life simple and convenient by letting them communicate with friends, order groceries, and schedule rides with just a few touches. However, using a mobile device to complete work is frequently a difficult experience. Enterprise websites and apps either don't work correctly or aren't well suited for mobile use, and don't make use of camera and location features to their full potential. Employee expectations are changing: the workforce looks for ways to be productive from anywhere in a fast-paced professional setting where responsiveness is vital. Organisations can no longer afford traditional methods of planning, developing, and testing custom mobile apps over months or years; they need a system that enables quick creation and distribution of mobile-first experiences. The ServiceNow platform excels in this area with purpose-built apps designed for particular workflows and personas, and Mobile Studio enables users to create compelling native experiences for iOS and Android without writing code.",
      "ServiceNow offers a comprehensive suite of mobile solutions designed to enhance productivity and deliver seamless experiences to users. With NowMobile, users can access ServiceNow's features and functionalities on their smartphones and tablets to manage requests, collaborate on projects, access knowledge bases, and handle incidents and tasks from anywhere. For IT support staff, Mobile Agent enables support agents to provide assistance and resolve issues directly from their mobile devices while on the move. ServiceNow's Mobile App Builder empowers organizations to create unique mobile applications without extensive coding knowledge using a visual, drag-and-drop interface. The Now Mobile and Mobile Agent apps are available as free downloads from the iOS App Store and Google Play Store."
    ],
    benefits: [
      {
        title: "Enhanced Productivity and Mobility",
        description:
          "Empower employees with the freedom to access information and complete work tasks from anywhere, leading to increased productivity and improved collaboration."
      },
      {
        title: "Streamlined Agent Efficiency",
        description:
          "Equip fulfillers with efficient tools such as barcode scanning, signature gathering, and offline access to cases, enabling them to deliver prompt and efficient service, enhancing customer satisfaction."
      },
      {
        title: "Cost-Effective App Development",
        description:
          "Leverage pre-made templates and streamlined development processes to save time and resources, allowing for the creation of beautiful native apps for iOS and Android without extensive coding or the need for a dedicated development team."
      }
    ],
    capabilities: [
      "Mobile-first service experiences",
      "Approvals and task completion",
      "Employee self-service",
      "Connected notifications and actions"
    ],
    relatedSlugs: ["itom", "itsm", "itam"]
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
