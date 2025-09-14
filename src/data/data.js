export const DATA = {
  name: "Wongsakron Kongkamud",
  role: "Software / Backend Engineer",
  location: "Bangkok, Thailand (UTC+7)",
  summary:
    "Backend-focused engineer specializing in Spring Boot APIs, security (JWT/OAuth2/Keycloak), clean architecture, automated testing, and CI/CD. Comfortable with React on the frontend and Dockerized dev environments.",
  contacts: {
    email: "wongsakron.kon@gmail.com",
    github: "https://github.com/Q-wongsakron",
    linkedin: "https://www.linkedin.com/in/", // เติมได้ภายหลัง
    resumeUrl: "https://q-wongsakron.github.io/portfolio-se-be/",
  },
  skills: {
    Languages: ["Java", "JavaScript/TypeScript", "Python", "SQL"],
    Frameworks: [
      "Spring Boot",
      "Spring Security",
      "JPA/Hibernate",
      "MapStruct",
      "React",
      "Node.js",
    ],
    Architecture: [
      "Layered Architecture",
      "REST/JSON",
      "JWT/OAuth2",
      "Microservices (basics)",
      "CI/CD",
    ],
    Databases: ["PostgreSQL", "MySQL", "H2 (tests)"],
    Tools: [
      "Docker",
      "GitHub Actions",
      "JUnit/Mockito/MockMvc",
      "OpenAPI/Swagger",
      "Postman",
      "Apache Airflow",
    ],
  },

  projects: [
    {
      slug: "event-ticket-platform",
      title: "Event Ticket Platform",
      blurb:
        "Full-stack ticketing system with Spring Boot backend, React frontend, PostgreSQL, and Keycloak auth.",
      highlights: [
        "REST APIs for events, ticket creation/purchase, and QR code validation",
        "Entities: User, Event, TicketType, Ticket, TicketValidation, QrCode + enums",
        "Docker Compose for PostgreSQL & Keycloak; automatic user provisioning",
      ],
      tech: [
        "Spring Boot",
        "React",
        "PostgreSQL",
        "Keycloak",
        "MapStruct",
        "Lombok",
        "Docker",
      ],
      tags: ["full-stack", "backend"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200",
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200",
      ],
      longDescription: [
        {
          heading: "Overview",
          body: "Built a Spring Boot API and React UI for event management, ticket purchase, and on-site validation with QR codes. Keycloak provides authentication/authorization.",
        },
        {
          heading: "Domain",
          body: "Designed entity classes (User, Event, TicketType, Ticket, TicketValidation, QrCode) and enums to represent event/ticket/QR statuses.",
        },
        {
          heading: "Ops",
          body: "Integrated MapStruct + Lombok for DTO–entity mapping and ran PostgreSQL/Keycloak locally via Docker Compose. Implemented automatic user provisioning on first login.",
        },
      ],
    },

    {
      slug: "task-tracking-app",
      title: "Task Tracking App",
      blurb:
        "Clean layered Spring Boot service with DTO mapping, centralized errors, and comprehensive tests.",
      highlights: [
        "Controllers/Services/Repositories/DTOs + global exception handling",
        "Unit, repository, and integration tests (JUnit, Mockito, @DataJpaTest, MockMvc)",
        "OpenAPI/Swagger docs and CI coverage (JaCoCo) on GitHub Actions",
      ],
      tech: ["Spring Boot", "PostgreSQL", "MapStruct", "JUnit", "Docker"],
      tags: ["backend", "testing", "ci-cd"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200",
      ],
      longDescription: [
        {
          heading: "Overview",
          body: "Production-minded CRUD API with validation and clear error contracts.",
        },
        {
          heading: "Quality",
          body: "High-signal test suite across layers; CI builds, runs tests, and publishes coverage artifacts.",
        },
      ],
    },

    {
      slug: "user-management-app",
      title: "Role-Based User Management API",
      blurb:
        "Spring Boot 3 backend with registration/login and role-based CRUD secured by JWT.",
      highlights: [
        "Spring Security + JWT authentication/authorization",
        "BCrypt password hashing; role-based endpoint protection",
        "Layered structure with DTOs for maintainability",
      ],
      tech: ["Spring Boot", "Spring Security", "JWT", "MySQL"],
      tags: ["backend", "security"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200",
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200",
      ],
      longDescription: [
        {
          heading: "Security",
          body: "Stateless JWT with role checks on endpoints; passwords hashed with BCrypt.",
        },
      ],
    },

    {
      slug: "quiz-app-microservices",
      title: "Quiz App (Microservices Basics)",
      blurb:
        "Split a monolith into Quiz/Question services with Spring Cloud (Eureka, API Gateway, Feign).",
      highlights: [
        "Service discovery with Eureka; Feign REST clients",
        "Gateway routing and basic load balancing",
        "Clear service boundaries and contracts",
      ],
      tech: ["Spring Boot", "Spring Cloud", "Eureka", "API Gateway", "Feign"],
      tags: ["backend", "microservices"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [
        "https://images.unsplash.com/photo-1527430253228-e93688616381?w=1200",
      ],
      longDescription: [
        {
          heading: "Architecture",
          body: "Refactored into separate Quiz and Question services with inter-service communication via Feign and discovery through Eureka.",
        },
      ],
    },

    {
      slug: "internship-management-system",
      title: "Internship Management System (Final Year Project)",
      blurb:
        "Workflow platform for job posts, recruitment, document processing, and evaluation.",
      highlights: [
        "React + Bootstrap + Node.js + MySQL",
        "ER/Class diagrams; automated PDF generation (PDFKit)",
        "Dockerized deployment",
      ],
      tech: ["React", "Node.js", "MySQL", "Docker"],
      tags: ["full-stack"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [
        "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200",
      ],
      longDescription: [
        {
          heading: "Scope",
          body: "Covers internship listing, candidate flow, document generation, and final evaluations.",
        },
      ],
    },

    {
      slug: "audio-transcriber",
      title: "Audio Transcriber",
      blurb:
        "Small full-stack app that uploads audio and returns transcriptions via OpenAI.",
      highlights: [
        "Spring Boot REST endpoints for multipart uploads",
        "React (Vite) frontend; Axios data flow",
        "CORS setup, API key management, and basic validation/errors",
      ],
      tech: ["Spring Boot", "React (Vite)", "OpenAI API"],
      tags: ["full-stack", "ai-integration"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200",
      ],
      longDescription: [
        {
          heading: "Overview",
          body: "Connects a simple upload API to OpenAI’s speech-to-text and streams results to the UI.",
        },
      ],
    },
  ],

  certificates: [
    {
      title: "Spring Boot Unit Testing with JUnit, Mockito and MockMvc",
      issuer: "Udemy — Chad Darby & Eric Roby",
      date: "2024",
      link: "#",
    },
    {
      title: "[NEW] Spring Boot 3, Spring 6 & Hibernate for Beginners",
      issuer: "Udemy — Chad Darby & Eric Roby",
      date: "2024",
      link: "#",
    },
  ],

  activities: [
    {
      title: "TESA Top Gun Rally 2022",
      org: "TESA",
      role: "Participant — Device Development for Metaverse",
      date: "2022",
      desc: "Server programming for Docker/MQTT/Node-RED; connected ROS simulator (MATLAB) using Scrum.",
      link: "#",
    },
    {
      title: "CARLA CONTEST 2023",
      org: "TOYOTA TSUSHO NEXTY ELECTRONICS (THAILAND) CO., LTD.",
      role: "Participant",
      date: "2023",
      desc: "Explored autonomous driving with the CARLA simulator and industry tooling.",
      link: "#",
    },
  ],

  internship: {
    title:
      "Software Developer Intern · Trade Competition Commission of Thailand (TCCT)",
    period: "Jun 2023 – Jul 2023",
    summary:
      "Built a GIS convenience-store web app with Node.js/React and an ETL pipeline (Airflow → Python) to PostgreSQL & Amazon S3; added monitoring and email alerts.",
    bullets: [
      "Implemented data pipeline from store APIs → transform (Python) → PostgreSQL/S3",
      "Added flow monitoring and error email notifications",
      "Optimized rendering by removing unnecessary loops and improving object access (≈90s → 20s)",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "Amazon S3", "Apache Airflow"],
  },
};
