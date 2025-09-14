export const DATA = {
  name: "Wongsakron Kongkamud",
  role: "Software / Backend Engineer",
  location: "Bangkok, Thailand (UTC+7)",
  summary:
    "Backend engineer with a strong focus on Spring Boot and backend architectures. Experienced in building production-ready APIs, authentication flows, and CI/CD pipelines. I enjoy designing clean systems, writing tests that give confidence, and making sure code is easy to maintain. Comfortable with React on the frontend and Docker-based development environments.",

  contacts: {
    email: "wongsakron.kon@gmail.com",
    github: "https://github.com/Q-wongsakron",
    linkedin: "https://www.linkedin.com/in/", // เพิ่มลิงก์จริงได้
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
      "REST/JSON APIs",
      "JWT/OAuth2",
      "Basic Microservices (Eureka, Gateway, Feign)",
      "CI/CD Pipelines",
    ],
    Databases: ["PostgreSQL", "MySQL", "H2 (for testing)"],
    Tools: [
      "Docker & Docker Compose",
      "GitHub Actions",
      "JUnit / Mockito / MockMvc",
      "OpenAPI / Swagger UI",
      "Postman",
      "Apache Airflow",
    ],
  },

  projects: [
    {
      slug: "event-ticket-platform",
      title: "Event Ticket Platform",
      blurb:
        "A full-stack ticketing system where events can be created, tickets purchased, and staff can validate entries with QR codes.",
      highlights: [
        "Spring Boot backend + React frontend",
        "PostgreSQL database with JPA entities and enums",
        "Keycloak for authentication/authorization",
        "QR code validation flow for ticket usage",
        "Docker Compose for local PostgreSQL + Keycloak",
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
      longDescription: [
        {
          heading: "Overview",
          body: "I built this project as a complete ticketing platform. The backend (Spring Boot 3) exposes REST APIs for managing events, creating/purchasing tickets, and validating them at the entrance via QR code. The frontend is a React app that interacts with these APIs. Authentication and authorization are handled by Keycloak, integrated with OAuth2/JWT.",
        },
        {
          heading: "Domain Model",
          body: "The system models real-world entities such as User, Event, TicketType, Ticket, TicketValidation, and QrCode. Enums are used for statuses (event status, ticket status, QR code status) to make workflows explicit and reduce errors. This ensures the ticket lifecycle is consistent: created → valid → used or expired.",
        },
        {
          heading: "Implementation Details",
          body: "I used MapStruct with Lombok to reduce boilerplate when mapping between DTOs and entities. PostgreSQL and Keycloak run in Docker Compose, which makes local development predictable. I also added automatic user provisioning — when a new user logs in through Keycloak, they are inserted into the application database.",
        },
      ],
    },

    {
      slug: "task-tracking-app",
      title: "Task Tracking App",
      blurb: "A Spring Boot CRUD application with testing and CI/CD pipelines.",
      highlights: [
        "Layered architecture with Controllers, Services, Repositories, DTOs, Mappers",
        "Centralized error handling using @RestControllerAdvice",
        "Unit, repository, and integration tests with JUnit, Mockito, @DataJpaTest, MockMvc",
        "OpenAPI/Swagger docs",
        "CI/CD with GitHub Actions + JaCoCo coverage",
      ],
      tech: ["Spring Boot", "PostgreSQL", "MapStruct", "JUnit", "Docker"],
      tags: ["backend", "ci-cd", "testing"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      longDescription: [
        {
          heading: "Overview",
          body: "This app was designed with clean separation of concerns: controllers handle requests, services manage business logic, and repositories interface with the database. DTOs and mappers keep data transfer clean and maintainable.",
        },
        {
          heading: "Testing",
          body: "I wrote tests across different layers: unit tests for services, repository tests using @DataJpaTest with H2, and integration tests with MockMvc. Coverage is tracked with JaCoCo and shown in CI.",
        },
        {
          heading: "CI/CD",
          body: "GitHub Actions run the pipeline automatically on each push. It builds, runs tests, and publishes coverage artifacts. Swagger UI is enabled for exploring APIs.",
        },
      ],
    },

    {
      slug: "user-management-app",
      title: "Role-Based User Management API",
      blurb:
        "Spring Boot 3 backend providing authentication and role-based CRUD operations.",
      highlights: [
        "Spring Security with JWT authentication/authorization",
        "Password hashing with BCrypt",
        "Role-based endpoint protection",
        "Layered structure with DTOs and services",
      ],
      tech: ["Spring Boot", "Spring Security", "JWT", "MySQL"],
      tags: ["backend", "security"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      longDescription: [
        {
          heading: "Overview",
          body: "This system allows users to register, log in, and perform CRUD operations depending on their roles. Roles are enforced via JWT tokens and Spring Security rules.",
        },
        {
          heading: "Security",
          body: "Passwords are hashed with BCrypt. The API is fully stateless, and JWT is used to secure every request. Endpoints are protected at method-level and route-level.",
        },
      ],
    },

    {
      slug: "quiz-app-microservices",
      title: "Quiz App (Microservices)",
      blurb:
        "Split a monolith into smaller services with Spring Cloud components.",
      highlights: [
        "Spring Boot 3 microservices",
        "Eureka for service discovery",
        "Feign for inter-service communication",
        "API Gateway for routing and load balancing",
      ],
      tech: ["Spring Boot", "Spring Cloud", "Eureka", "API Gateway", "Feign"],
      tags: ["backend", "microservices"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      longDescription: [
        {
          heading: "Overview",
          body: "Originally a monolithic quiz app, I refactored it into Quiz and Question services. Each service is independent, and they communicate over REST APIs.",
        },
        {
          heading: "Implementation",
          body: "Eureka handles service discovery. Feign clients simplify communication between services. An API Gateway routes requests and provides basic load balancing.",
        },
      ],
    },

    {
      slug: "internship-management-system",
      title: "Internship Management System (Final Year Project)",
      blurb:
        "A full-stack platform to manage internships, from job posts to evaluation.",
      highlights: [
        "React + Bootstrap frontend",
        "Node.js backend + MySQL database",
        "ER/Class diagrams for planning",
        "Automated PDF generation with PDFKit",
        "Docker deployment",
      ],
      tech: ["React", "Node.js", "MySQL", "Docker"],
      tags: ["full-stack"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      longDescription: [
        {
          heading: "Overview",
          body: "This was my final year project. It manages the entire internship workflow: job postings, recruiting, document processing, and final evaluations.",
        },
        {
          heading: "Implementation",
          body: "I designed the ER/Class diagrams, built the database schema, and implemented the workflow in Node.js and MySQL. Documents are auto-generated with PDFKit.",
        },
        {
          heading: "Deployment",
          body: "The whole system was packaged into Docker and deployed on a server.",
        },
      ],
    },

    {
      slug: "audio-transcriber",
      title: "Audio Transcriber",
      blurb:
        "A small app for uploading audio files and getting transcriptions using OpenAI models.",
      highlights: [
        "Spring Boot REST APIs for file upload",
        "React (Vite) frontend",
        "OpenAI speech-to-text integration",
        "CORS setup, API key management, validation & error handling",
      ],
      tech: ["Spring Boot", "React (Vite)", "OpenAI API"],
      tags: ["full-stack", "ai-integration"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      longDescription: [
        {
          heading: "Overview",
          body: "The app lets a user upload audio files via React (Vite). The backend (Spring Boot) handles the upload and passes the file to OpenAI’s speech-to-text model.",
        },
        {
          heading: "Implementation",
          body: "Axios is used to send files to the backend. I configured CORS, API key security, and added validation/error handling for failed requests.",
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
      desc: "Worked on the server programming side: Docker, MQTT, and Node-RED to connect a ROS simulator robot arm in MATLAB. Used Scrum for collaboration.",
      link: "#",
    },
    {
      title: "CARLA CONTEST 2023",
      org: "TOYOTA TSUSHO NEXTY ELECTRONICS (THAILAND) CO., LTD.",
      role: "Participant",
      date: "2023",
      desc: "Explored autonomous driving using the CARLA simulator, applying modern automotive software practices.",
      link: "#",
    },
  ],

  internship: {
    title:
      "Software Developer Intern · Trade Competition Commission of Thailand (TCCT)",
    period: "Jun 2023 – Jul 2023",
    summary:
      "Built a GIS-based convenience store web app with Node.js and React. Designed and ran an ETL pipeline (Airflow + Python) to bring data from store APIs into PostgreSQL and S3. Added monitoring with email alerts and improved frontend performance by cutting render time drastically.",
    bullets: [
      "Developed ETL pipeline: extracted data from store APIs, transformed with Python, loaded into PostgreSQL and Amazon S3",
      "Set up monitoring with error notifications sent by email",
      "Optimized rendering: reduced map location display time from ~90s to ~20s by improving object access and removing unnecessary loops",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "Amazon S3", "Apache Airflow"],
  },
};
