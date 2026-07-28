import { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {

  // =====================================================
  // PROFILE
  // =====================================================

  profile: {

    firstName: "Supreetha",

    lastName: "G S",

    fullName: "Supreetha G S",

    title: "Data Engineer",

    company: "Deloitte",

    subtitle:
      "Data Engineer | 3.5+ YOE | Databricks & Microsoft Fabric Specialist | End-to-End Data Migration | Incoming Georgia Tech OMSCS (Fall 2026)",

    tagline:
      "Passionate about distributed systems, modern data engineering and enterprise-scale cloud solutions.",

    about: `
Data Engineer with 3.5+ years of experience building scalable cloud-native data platforms and delivering enterprise data migration projects involving 20+ TB of data in Agile environments.
Experienced in building high-performance data solutions that process 100+ GB workloads, modernize 50+ enterprise ETL pipelines, and improve execution time by up to 42% using Azure Databricks, Microsoft Fabric, PySpark, SQL, and Generative AI. 
Incoming M.S. in Computer Science (OMSCS) student at Georgia Tech (Fall 2026).
`,

    image: "/profile.jpeg",

    resume: "/resume.pdf",

    email: "supreethags01@gmail.com",

    phone: "+91 95918 76382",

    location: "Bengaluru, Karnataka, India",

    availableForWork: true,

  },

  // =====================================================
  // SOCIAL LINKS
  // =====================================================

  social: {

    github:
      "https://github.com/Supreetha-GS",

    linkedin:
      "https://www.linkedin.com/in/supreetha-g-s-0a8a67211/",

    medium:
      "https://medium.com/@suppireddy2001",

    twitter: "",

    kaggle: "",

    leetcode: "",

    stackoverflow: ""

  },

  // =====================================================
  // HERO BUTTONS
  // =====================================================

  heroButtons: [

    {

      title: "Resume",

      icon: "FileText",

      link: "/resume.pdf",

      primary: true

    },

    {

      title: "GitHub",

      icon: "Github",

      link: "https://github.com/Supreetha-GS",

      primary: false

    },

    {

      title: "LinkedIn",

      icon: "Linkedin",

      link: "https://www.linkedin.com/in/supreetha-g-s-0a8a67211/",

      primary: false

    },

    {

      title: "Medium",

      icon: "BookOpen",

      link: "https://medium.com/@suppireddy2001",

      primary: false

    }

  ],

  // =====================================================
  // NAVIGATION
  // =====================================================

  navigation: [

    "About",

    "Experience",

    "Projects",

    "Skills",

    "Education",

    "Certifications",

    "Contact"

  ],

  // =====================================================
// ABOUT
// =====================================================

about: {

  title: "About Me",

  subtitle:
    "Who I Am and What I Do",

  paragraphs: [

    `
    Hi, I'm Supreetha G S, a Data Engineer from Bengaluru with 3.5 years of experience building cloud-native data platforms at Deloitte and Genpact. Across my career, I've worked on large-scale data engineering initiatives in the manufacturing (parts, services & pricing), insurance, energy, pricing, and marketing domains, specializing in PySpark, metadata-driven ETL frameworks, Delta Lake/Lakehouse architectures, and high-performance incremental data pipelines that modernize legacy ecosystems while improving scalability, reliability, and cost efficiency.

    `,

    `
    I've contributed to 20+ TB enterprise data modernization programs, re-engineered 100+ ETL workflows, and optimized large-scale transactional pipelines by reducing an 8-hour workload processing over 10 million records to approximately 40 minutes through incremental processing and Delta-based design. Beyond migration, I've built pricing and marketing analytics solutions, implemented fuzzy matching for customer data, and developed enterprise data quality frameworks for business-critical reporting. I also leverage Generative AI within metadata-driven migration frameworks to interpret legacy ETL logic, recommend transformation mappings, identify schema inconsistencies, and generate validation rules, accelerating migration analysis while enabling engineers to focus on architecture, performance optimization, and delivering scalable cloud-native data solutions.
    `,
    
    `
    Outside of work, I love traveling and experiencing new places, and I make it a tradition to bring home a fridge magnet from every destination. When I'm not planning my next trip, you'll probably find me crocheting anything from tote bags to cute plushies. I also enjoy unwinding with a good Netflix series (even though my watchlist grows much faster than I can finish it). I'm usually planning my next adventure before I've even unpacked from the last one, and if we ever meet, there's a good chance you'll leave with a handmade crochet bag!
    `

  ],

  educationTitle: "Education & Certifications",

  educationHighlights: [
    {
      degree: "Master of Science in Computer Science (OMSCS)",
      university: "Georgia Institute of Technology",
      duration: "2026 – Present",
      score: ""
    },
    {
      degree: "Bachelor of Engineering – Information Science & Engineering",
      university: "Nitte Meenakshi Institute of Technology",
      duration: "2019 – 2023",
      score: "CGPA: 9.14 / 10"
    }
  ],

  certificationHighlights: [
    "Databricks Certified -  Data Engineer Professional",
    "Databricks Certified Data - Engineer Associate",
    "Databricks Accreditation - Azure Databricks Platform Architect",
    "Databricks Accreditation - Generative AI Fundamentals",
    "Microsoft Certified -  Azure Fundamentals (AZ-900)",
    "NPTEL - Artificial Intelligence: Search Methods for Problem Solving",
    "NPTEL - Intellectual Property"
  ],

  skillsTitle:
    "Technologies I Work With",

  featuredSkills: [
    { name: "PySpark" },
    { name: "Python" },
    { name: "SQL" },
    { name: "Databricks" },
    { name: "Microsoft Fabric" },
    { name: "Azure" },
    { name: "AWS" },
    { name: "Delta Lake" },
    { name: "Lakehouse" },
    { name: "ADLS" },
    { name: "Data Warehousing" },
    { name: "Metadata-Driven ETL" },
    { name: "Performance Optimization" },
    { name: "Generative AI" },
    { name: "Git" }
  ]

},

  // =====================================================
  // QUICK STATS
  // =====================================================

  stats: [

    {

      label: "Years Experience",

      value: "3.5+"

    },

    {

      label: "Enterprise Projects",

      value: "6+"

    },

    {

      label: "Data Migrated",

      value: "20+ TB"

    },

    {

      label: "Performance Gain",

      value: "~42%"

    }

  ],
    

  // =====================================================
  // FEATURED PROJECTS
  // =====================================================

  projects: [

  {
    id: 1,

    featured: true,

    title: "Enterprise SAP Lakehouse Modernization",

    company: "Manufacturing Domain",

    duration: "2026 - Present",

    image: "/projects/sap-lakehouse.png",

    gallery: [
      "/projects/sap-lakehouse.png"
    ],

    github: "",

    live: "",

    technologies: [
      "Microsoft Fabric",
      "OneLake",
      "PySpark",
      "Delta Lake",
      "Python",
      "SQL",
      "Power BI"
    ],

    shortDescription:
      "Building a cloud-native Lakehouse platform by modernizing 20+ TB of SAP data.",

    description: `
Designed a greenfield Microsoft Fabric Lakehouse platform to migrate over 20 TB of historical SAP B1 and SAP BW data dating back to 2014. Built metadata-driven ingestion pipelines, enterprise data quality frameworks, incremental processing and curated business-ready datasets for analytics.
`,

    businessProblem:
      "Legacy SAP systems contained thousands of fragmented dealer tables, undocumented business logic and inconsistent reporting, making enterprise analytics slow and difficult to maintain.",

    responsibilities: [
      "Designed metadata-driven ingestion framework.",
      "Implemented Data Quality validation framework.",
      "Built Bronze, Silver and Gold Lakehouse architecture.",
      "Implemented Incremental Loading and SCD.",
      "Developed business transformation pipelines.",
      "Published curated datasets for Power BI."
    ],

    highlights: [
      "20+ TB historical data modernization",
      "2,000+ dealer tables consolidated",
      "Historical data since 2014",
      "Enterprise Data Quality Framework"
    ],

    architecture: [
      "SAP B1",
      "SAP BW",
      "Microsoft Fabric",
      "OneLake",
      "Delta Lake",
      "Power BI"
    ]
  },

  {
    id: 2,

    featured: true,

    title: "Insurance Data Integration Platform",

    company: "Insurance Domain",

    duration: "2026",

    image: "/projects/insurance.png",

    gallery: [
      "/projects/insurance.png"
    ],

    github: "",

    live: "",

    technologies: [
      "Azure SQL",
      "Azure Functions",
      "Azure Data Factory",
      "REST APIs",
      "Python",
      "SQL"
    ],

    shortDescription:
      "Built transactional integration pipelines between PostgreSQL and enterprise insurance platforms.",

    description: `
Designed cloud-native data integration pipelines that migrated transactional insurance data from PostgreSQL through Azure SQL into downstream enterprise systems using Azure Functions and REST APIs.
`,

    businessProblem:
      "Manual integration between transactional systems created delays, inconsistent transformations and operational overhead.",

    responsibilities: [
      "Designed source-to-target mappings.",
      "Developed Azure Functions.",
      "Implemented REST API integrations.",
      "Built Azure Data Factory pipelines.",
      "Validated transactional data consistency."
    ],

    highlights: [
      "Near real-time transactional processing",
      "Reduced manual intervention",
      "Automated enterprise integrations"
    ],

    architecture: [
      "PostgreSQL",
      "Azure SQL",
      "ADF",
      "Azure Functions",
      "REST APIs"
    ]
  },

  {
    id: 3,

    featured: true,

    title: "Pricing & Marketing Analytics Platform",

    company: "Pricing & Marketing Domain",

    duration: "2025 - 2026",

    image: "/projects/pricing.png",

    gallery: [
      "/projects/pricing.png"
    ],

    github: "",

    live: "",

    technologies: [
      "Databricks",
      "PySpark",
      "Greenplum",
      "Alteryx",
      "SQL"
    ],

    shortDescription:
      "Built scalable analytics pipelines supporting pricing, customer segmentation and marketing insights.",

    description: `
Designed optimized PySpark pipelines for pricing analytics, historical price realization, customer matching and marketing reporting after migrating legacy Alteryx workflows into Databricks.
`,

    businessProblem:
      "Business reporting depended on slow legacy workflows that were difficult to scale for large historical datasets.",

    responsibilities: [
      "Converted Alteryx workflows to PySpark.",
      "Implemented fuzzy matching algorithms.",
      "Built pricing realization pipelines.",
      "Optimized stakeholder reporting.",
      "Worked directly with business users."
    ],

    highlights: [
      "4 years of historical pricing data",
      "Improved reporting performance",
      "Fuzzy matching for customer analytics"
    ],

    architecture: [
      "Greenplum",
      "Databricks",
      "PySpark",
      "Power BI"
    ]
  },


  {
    id: 4,

    featured: true,

    title: "Enterprise ETL Modernization",

    company: "Energy Domain",

    duration: "2024 - 2025",

    image: "/projects/etl-modernization.png",

    gallery: [
      "/projects/etl-modernization.png"
    ],

    github: "",

    live: "",

    technologies: [
      "Databricks",
      "PySpark",
      "Oracle",
      "Informatica",
      "Delta Lake",
      "SQL"
    ],

    shortDescription:
      "Migrated enterprise Oracle and Informatica workloads to Databricks using metadata-driven ETL.",

    description: `
Modernized over 100 legacy Informatica workflows and more than 2 TB of enterprise data by developing reusable metadata-driven ETL frameworks with PySpark and Delta Lake.
`,

    businessProblem:
      "Legacy ETL workloads were expensive, slow and difficult to maintain, requiring a scalable cloud-native replacement.",

    responsibilities: [
      "Migrated 100+ Informatica mappings.",
      "Converted Stored Procedures and Functions.",
      "Designed metadata-driven ETL framework.",
      "Implemented incremental loading.",
      "Optimized Spark execution."
    ],

    highlights: [
      "100+ ETL workflows migrated",
      "2+ TB enterprise data",
      "8 hours reduced to 40 minutes",
      "42% runtime improvement"
    ],

    architecture: [
      "Oracle",
      "Informatica",
      "Databricks",
      "Delta Lake",
      "Power BI"
    ]
  },

  
  {
    id: 5,

    featured: true,

    title: "Metadata-Driven Database Migration Framework",

    company: "Internal Engineering Platform",

    duration: "2023-2024",

    image: "/projects/gmigrate.png",

    gallery: [
      "/projects/gmigrate.png"
    ],

    github: "",

    live: "",

    technologies: [
      "Python",
      "PySpark",
      "Databricks",
      "Oracle",
      "PostgreSQL",
      "Snowflake"
    ],

    shortDescription:
      "Developed reusable migration automation and validation frameworks for enterprise databases.",

    description: `
Built GMigrate and GValidate, metadata-driven frameworks capable of analyzing, migrating and validating enterprise databases with minimal manual effort, supporting multiple legacy platforms.
`,

    businessProblem:
      "Database migrations relied heavily on manual engineering effort and expensive third-party migration services.",

    responsibilities: [
      "Designed metadata-driven migration engine.",
      "Built automated migration analysis.",
      "Developed reusable validation framework.",
      "Implemented rule-based and cell-level validation.",
      "Supported multiple source databases."
    ],

    highlights: [
      "Automated migration workflow",
      "Reusable metadata-driven framework",
      "Reduced manual validation effort",
      "Supported multiple database platforms"
    ],

    architecture: [
      "Oracle",
      "PostgreSQL",
      "Snowflake",
      "Databricks",
      "PySpark"
    ]
  }

],

// =====================================================
  // EXPERIENCE
  // =====================================================

experience: [
  {
    id: 1,

    company: "Deloitte",

    role: "Data Engineer",

    duration: "Apr 2026 - Present",

    location: "Bengaluru, Karnataka, India",

    summary:
      "Building a cloud-native Microsoft Fabric Lakehouse platform for enterprise SAP modernization across manufacturing and insurance domains.",

    technologies: [
      "Microsoft Fabric",
      "OneLake",
      "PySpark",
      "Python",
      "SQL",
      "Delta Lake",
      "Azure",
      "Power BI"
    ],

    achievements: [
      "Developing a greenfield Microsoft Fabric Lakehouse platform to modernize 20+ TB of historical SAP B1 and SAP BW data dating back to 2014.",
      "Designed metadata-driven ingestion pipelines for nearly 2,000 dealer-specific tables with reusable data quality and validation frameworks.",
      "Implemented incremental loading, SCD handling and Delta-based transformations to deliver curated datasets for Power BI reporting.",
      "Reconstructed undocumented business logic by analysing legacy reports and collaborating with business stakeholders to build reliable enterprise reporting."
    ]
  },

  {
    id: 2,

    company: "Genpact - Internal LE Movement",

    role: "Data Engineer",

    duration: "May 2024 - Apr 2026",

    location: "Bengaluru, Karnataka, India",

    summary:
      "Delivered enterprise-scale data modernization, analytics and performance engineering solutions across energy, pricing and marketing domains.",

    technologies: [
      "Databricks",
      "PySpark",
      "Spark SQL",
      "Delta Lake",
      "Oracle",
      "Informatica",
      "Greenplum",
      "Python",
      "SQL"
    ],

    achievements: [
      "Migrated 100+ Informatica mappings and over 2 TB of transactional and master data from Oracle to Databricks using metadata-driven ETL frameworks.",
      "Reduced a critical transactional pipeline processing 10+ million records from 8 hours to approximately 40 minutes using incremental processing and Delta optimization.",
      "Designed pricing and marketing analytics pipelines, implemented fuzzy matching for customer identification, and converted Alteryx workflows into optimized PySpark jobs.",
      "Leveraged Generative AI during migration analysis to interpret legacy ETL logic, recommend transformation mappings and automate validation rule generation."
    ]
  },

  {
    id: 3,

    company: "Enquero (Genpact)",

    role: "Data Engineering Intern",

    duration: "Aug 2023 - April 2024",

    location: "Bengaluru, Karnataka, India",

    summary:
      "Built metadata-driven migration automation frameworks that accelerated enterprise database modernization projects.",

    technologies: [
      "Python",
      "PySpark",
      "Databricks",
      "PostgreSQL",
      "Oracle",
      "Snowflake",
      "SQL"
    ],

    achievements: [
      "Developed GMigrate, a reusable framework for migrating complete databases or selected tables from PostgreSQL, Oracle and Snowflake to Databricks.",
      "Built GValidate to automate row-level, cell-level and business-rule validation, significantly reducing manual verification effort.",
      "Implemented automated migration analysis, data quality assessment and metadata-driven execution to streamline enterprise migration projects.",
      "Designed reusable components that enabled multiple database migrations through configuration instead of custom development."
    ]
  }
],

  // =====================================================
  // PROJECT ARCHIVE
  // =====================================================

  projectArchive: [

    /*
      Future projects go here.

      Example:

      {
        ...
      }
    */

  ],
    // =====================================================
  // SKILLS
  // =====================================================

  
  skills: {
  "Programming Languages": [
    { name: "Python", level: "Advanced" },
    { name: "SQL", level: "Advanced" }
  ],

  "Data Engineering": [
    { name: "PySpark", level: "Advanced" },
    { name: "Apache Spark", level: "Advanced" },
    { name: "Spark SQL", level: "Advanced" },
    { name: "Databricks", level: "Advanced" },
    { name: "Microsoft Fabric", level: "Intermediate" },
    { name: "Delta Lake", level: "Advanced" },
    { name: "Lakehouse Architecture", level: "Advanced" },
    { name: "Data Warehousing", level: "Advanced" },
    { name: "ETL / ELT", level: "Advanced" },
    { name: "Metadata-Driven Frameworks", level: "Advanced" },
    { name: "Incremental Data Processing", level: "Advanced" },
    { name: "SCD (Type 1 & Type 2)", level: "Advanced" }
  ],

  Cloud: [
    { name: "Microsoft Azure", level: "Advanced" },
    { name: "Azure Data Lake Storage (ADLS)", level: "Advanced" },
    { name: "Azure Data Factory (ADF)", level: "Advanced" },
    { name: "Azure Functions", level: "Intermediate" },
    { name: "AWS", level: "Intermediate" },
    { name: "AWS Glue", level: "Intermediate" },
    { name: "AWS Lambda", level: "Intermediate" }
  ],

  Databases: [
    { name: "Oracle", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "SQL Server", level: "Advanced" },
    { name: "Snowflake", level: "Intermediate" },
    { name: "Greenplum", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" }
  ],

  "Performance Optimization": [
    { name: "Partitioning", level: "Advanced" },
    { name: "Z-Ordering", level: "Advanced" },
    { name: "Caching", level: "Advanced" },
    { name: "Broadcast Joins", level: "Advanced" },
    { name: "Performance Tuning", level: "Advanced" }
  ],

  "Generative AI": [
    { name: "Azure OpenAI", level: "Intermediate" },
    { name: "Prompt Engineering", level: "Intermediate" },
    { name: "AI-assisted Data Migration", level: "Advanced" },
    { name: "Metadata Intelligence", level: "Advanced" }
  ],

  DevOps: [
    { name: "Git", level: "Advanced" },
    { name: "GitHub", level: "Advanced" },
    { name: "CI/CD", level: "Intermediate" }
  ],

  Tools: [
    { name: "Visual Studio Code", level: "Advanced" },
    { name: "Jupyter Notebook", level: "Advanced" },
    { name: "Power BI", level: "Intermediate" },
    { name: "Informatica", level: "Advanced" },
    { name: "Alteryx", level: "Intermediate" }
  ]
},

  // =====================================================
  // EDUCATION
  // =====================================================

  education: [

    {

      degree:
        "Master of Science in Computer Science (OMSCS)",

      university:
        "Georgia Institute of Technology",

      duration:
        "2026 - Present",

      location:
        "Atlanta, Georgia (Online)",

      score: "",

      logo:
        "/education/gatech.png"

    },

    {

      degree:
        "Bachelor of Engineering - Information Science and Engineering",

      university:
        "Nitte Meenakshi Institute of Technology",

      duration:
        "2019 - 2023",

      location:
        "Bengaluru, India",

      score:
        "CGPA: 9.14 / 10",

      logo:
        "/education/nmit.png"

    }

  ],

  // =====================================================
  // CERTIFICATIONS
  // =====================================================

  certifications: [

    {

      title:
        "Databricks Certified -  Data Engineer Professional",

      issuer:
        "Databricks",

      year:
        "2026",

      badge:
        "/certifications/databricks-professional.png",

      credential: ""

    },

    {

      title:
        "Databricks Certified -  Data Engineer Associate",

      issuer:
        "Databricks",

      year:
        "2024",

      badge:
        "/certifications/databricks-associate.png",

      credential: ""

    },

    {

      title:
        "Databricks Accreditation - Azure Databricks Platform Architect",

      issuer:
        "Databricks",

      year:
        "2024",

      badge:
        "/certifications/databricks-platform-architect.png",

      credential: ""

    },

    {

      title:
        "Databricks Accreditation - Generative AI Fundamentals",

      issuer:
        "Databricks",

      year:
        "2023",

      badge:
        "/certifications/databricks-genai.png",

      credential: ""

    },

    {

      title:
        "Microsoft Azure Fundamentals (AZ-900)",

      issuer:
        "Microsoft",

      year:
        "2023",

      badge:
        "/certifications/azure.png",

      credential: ""

    },

    {

      title:
        "Intellectual Property",

      issuer:
        "NPTEL - IIT Madras",

      year:
        "2022",

      badge:
        "/certifications/nptel-ip.png",

      credential: ""

    },

    {

      title:
        "Artificial Intelligence: Search Methods for Problem Solving",

      issuer:
        "NPTEL - IIT Madras",

      year:
        "2021",

      badge:
        "/certifications/nptel-ai.png",

      credential: ""

    }

  ],

  // =====================================================
  // BLOGS
  // =====================================================

  blogs: [

    /*
    {
      title: "",
      description: "",
      date: "",
      image: "",
      url: ""
    }
    */

  ],

  // =====================================================
  // ACHIEVEMENTS
  // =====================================================

  achievements: [

    "Reduced enterprise pipeline runtime by 40%.",

    "Migrated 50+ Informatica workflows to Azure Databricks.",

    "Built metadata-driven migration accelerator.",

    "Processed enterprise datasets up to 100 GB.",

    "2× Databricks Certified.",

    "Incoming OMSCS Student at Georgia Tech."

  ],

  // =====================================================
  // CONTACT
  // =====================================================

  contact: {

    title:
      "Let's Connect",

    subtitle:
      "I'm always happy to discuss data engineering, cloud technologies, open-source, or new opportunities.",

    email:
      "supreethags01@gmail.com",

    phone:
      "+91 95918 76382",

    location:
      "Bengaluru, Karnataka, India"

  },

  // =====================================================
  // FOOTER
  // =====================================================

  footer: {

    message:
      "Designed & Built by Supreetha G S",

    tech:
      "Next.js • React • TypeScript • Tailwind CSS • Framer Motion"

  }

};