import TaskTackingMain from "../assets/TaskTackingMain.png";
import TaskTackingDetail1 from "../assets/TaskTackingDetail1.png";
import TaskTackingDetail2 from "../assets/TaskTackingDetail2.png";
import UserManagementMain from "../assets/UserManagementMain.png";
import MicroserviceMain from "../assets/microservice1.png";
import InternshipApplicationMain from "../assets/InternshipApplicationMain.png";
import AudioTranscriberMain from "../assets/AudioTranscriberMain.png";
import TesaTopGun1 from "../assets/TesaTopGun1.jpg";
import TesaTopGun2 from "../assets/TesaTopGun2.jpg";
import Cara1 from "../assets/Cara1.jpg";
import Cara2 from "../assets/Cara2.jpg";
import TA1 from "../assets/TA1.jpg";
import CertSpringBootUnit from "../assets/certificate-spring-boot-unit-test.jpg";
import CertSpringBoot3 from "../assets/certificate-spring-boot-springboot3.jpg";

export const DATA = {
  name: "Wongsakron Kongkamud",
  role: "Software / Backend Engineer",
  location: "Bangkok, Thailand (UTC+7)",
  summary:
    "Computer Engineering graduate with hands-on experience in developing backend APIs, full-stack applications, and microservices. Strong focus on Spring Boot, authentication systems, database design, and automated testing. I enjoy turning ideas into working software and building complete solutions from design to deployment.",

  contacts: {
    email: "wongsakron.kon@gmail.com",
    github: "https://github.com/Q-wongsakron",
  },

  skills: {
    Languages: [
      "Java",
      "Python",
      "JavaScript/TypeScript",
      "SQL",
      "HTML/CSS",
      "JSON",
    ],
    Frameworks: [
      "Spring Boot",
      "Spring Security",
      "Spring AI",
      "JPA/Hibernate",
      "Node.js",
      "React.js",
      "Tailwind CSS",
    ],
    Testing: ["JUnit", "Mockito", "MockMvc", "JaCoCo"],
    Tools: [
      "Git/GitHub",
      "Docker & Docker Compose",
      "GitHub Actions",
      "Maven",
      "IntelliJ IDEA",
      "VS Code",
      "Postman",
      "Apache Airflow",
    ],
    Databases: ["PostgreSQL", "MySQL", "H2 (in-memory for testing)"],
    Architecture: [
      "Layered Architecture",
      "REST APIs",
      "JWT/OAuth2",
      "Basic Microservices (Eureka, Gateway, Feign)",
      "CI/CD Pipelines",
    ],
  },

  projects: [
    {
      slug: "task-tracking-app",
      title: "Task Tracking App",
      blurb:
        "Spring Boot CRUD application with layered architecture, comprehensive testing, and CI/CD pipeline.",
      highlights: [
        "Layered architecture (controller, service, repository, DTO, mapper)",
        "Integration & unit tests with H2 database",
        "CI/CD automation with GitHub Actions",
      ],
      tech: ["Spring Boot", "PostgreSQL", "MapStruct", "JUnit", "Docker"],
      tags: ["backend", "ci-cd", "testing"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [TaskTackingMain, TaskTackingDetail1, TaskTackingDetail2],
      longDescription: [
        {
          heading: "Architecture",
          body: "Built with a layered approach: controllers handle HTTP requests, services contain business logic, repositories manage persistence, and DTOs/mappers ensure clean separation.",
        },
        {
          heading: "Error Handling",
          body: "Implemented global exception handling with @RestControllerAdvice and used Bean Validation annotations for request validation.",
        },
        {
          heading: "Testing",
          body: "Wrote unit, repository, and integration tests using JUnit, Mockito, @DataJpaTest, and MockMvc with H2 in-memory database. Improved code quality by tracking coverage with JaCoCo.",
        },
        {
          heading: "Documentation & CI",
          body: "Documented REST APIs with springdoc OpenAPI/Swagger UI. Configured GitHub Actions pipeline to build, test, and generate coverage reports automatically.",
        },
      ],
    },

    {
      slug: "user-management-app",
      title: "Role-Based CRUD User Management App",
      blurb:
        "Backend service supporting user registration, login, and role-based CRUD with JWT security.",
      highlights: [
        "JWT authentication & authorization",
        "Role-based endpoint protection",
        "Password hashing with BCrypt",
      ],
      tech: ["Spring Boot", "Spring Security", "JWT", "MySQL"],
      tags: ["backend", "security"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [UserManagementMain],
      longDescription: [
        {
          heading: "Overview",
          body: "Developed a backend system for managing users. Features include registration, login, and CRUD operations restricted by roles.",
        },
        {
          heading: "Security",
          body: "Implemented Spring Security with JWT to secure endpoints. Applied password hashing with BCrypt and enforced role-based access control on APIs.",
        },
        {
          heading: "Architecture",
          body: "Structured into controllers, services, repositories, and DTOs to keep the codebase maintainable and extendable.",
        },
      ],
    },

    {
      slug: "quiz-app-microservices",
      title: "Quiz App (Microservices)",
      blurb:
        "Refactored a monolithic quiz system into microservices using Spring Cloud.",
      highlights: [
        "Separated Quiz and Question services",
        "Feign REST clients",
        "Service discovery with Eureka",
        "API Gateway routing & load balancing",
      ],
      tech: ["Spring Boot", "Spring Cloud", "Eureka", "Feign", "API Gateway"],
      tags: ["backend", "microservices"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [MicroserviceMain],
      longDescription: [
        {
          heading: "Architecture",
          body: "Refactored a monolithic quiz application into independent microservices (Quiz and Question).",
        },
        {
          heading: "Implementation",
          body: "Used Eureka for service discovery, Feign for declarative REST client communication, and an API Gateway for routing and basic load balancing.",
        },
        {
          heading: "Learning Outcome",
          body: "Gained practical experience in microservice design and distributed system communication.",
        },
      ],
    },

    {
      slug: "internship-management-system",
      title: "Internship Management System (Final Year Project)",
      blurb:
        "Workflow system for student internships, covering job posts, recruitment, document handling, and evaluation.",
      highlights: [
        "React + Bootstrap frontend",
        "Node.js backend with MySQL",
        "PDFKit document automation",
        "Dockerized deployment",
      ],
      tech: ["React", "Node.js", "MySQL", "Docker"],
      tags: ["full-stack"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [InternshipApplicationMain],
      longDescription: [
        {
          heading: "Scope",
          body: "Developed a full-stack web application to manage the entire internship workflow: creating job postings, recruiting students, processing required documents, and evaluating interns.",
        },
        {
          heading: "Design",
          body: "Gathered requirements, designed workflows, and created ER/Class diagrams to plan the database schema and system flow.",
        },
        {
          heading: "Implementation",
          body: "Built the frontend with React + Bootstrap, backend with Node.js + MySQL. Implemented automated PDF document creation using PDFKit.",
        },
        {
          heading: "Deployment",
          body: "Containerized and deployed using Docker.",
        },
      ],
    },

    {
      slug: "audio-transcriber",
      title: "Audio Transcriber",
      blurb:
        "Full-stack app for uploading audio files and transcribing them using OpenAI models.",
      highlights: [
        "Spring Boot APIs for file upload",
        "React (Vite) frontend",
        "OpenAI speech-to-text integration",
      ],
      tech: ["Spring Boot", "React (Vite)", "OpenAI API"],
      tags: ["full-stack", "ai-integration"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [AudioTranscriberMain],
      longDescription: [
        {
          heading: "Overview",
          body: "Built a small application to practice integrating Spring Boot with external APIs. The system allows uploading audio files from a React frontend, then sends them to OpenAI's speech-to-text model.",
        },
        {
          heading: "Implementation",
          body: "Spring Boot provides endpoints for multipart file upload. Axios handles requests from the frontend. Configured CORS, managed API keys, and implemented validation and error handling.",
        },
      ],
    },
  ],

  internship: {
    title:
      "Software Developer Intern — Trade Competition Commission of Thailand (TCCT)",
    period: "Jun 2023 – Jul 2023",
    summary:
      "Contributed to building a GIS-based convenience store management system. Focused on backend data pipelines, monitoring, and frontend performance optimization.",
    bullets: [
      "Enhanced a Node.js + React GIS web app by improving UI reliability",
      "Built an ETL pipeline using Apache Airflow and Python to extract data from store APIs, transform it, and load into PostgreSQL and Amazon S3",
      "Added a monitoring system that automatically sent error alerts via email",
      "Reduced rendering time of store location markers from ~90s to ~20s by optimizing loops and object access",
    ],
    tech: ["Node.js", "React", "PostgreSQL", "Amazon S3", "Apache Airflow"],
  },

  activities: [
    {
      title: "TESA Top Gun Rally 2022",
      org: "TESA",
      role: "Participant",
      date: "2022",
      desc: "Worked on server programming using Docker, MQTT, and Node-RED to connect a ROS simulator robot arm in MATLAB. Practiced teamwork with Scrum methodology.",
      images: [TesaTopGun1, TesaTopGun2],
    },
    {
      title: "CARLA CONTEST 2023",
      org: "TOYOTA TSUSHO NEXTY ELECTRONICS (THAILAND) CO., LTD.",
      role: "Participant",
      date: "2023",
      desc: "Explored autonomous driving development using the CARLA simulator and applied automotive software practices.",
      images: [Cara1, Cara2],
    },
    {
      title: "Teaching Assistant (Onshape CAD) 2023",
      org: "FABLAB NSTDA",
      role: "Teaching Assistant",
      date: "2023",
      desc: "Assisted high school students in learning Onshape CAD for 2D/3D design projects, supporting the process of creating models to be laser-cut on acrylic sheets.",
      images: [TA1],
    },
  ],

  certificates: [
    {
      title: "Spring Boot Unit Testing with JUnit, Mockito and MockMvc",
      issuer: "Udemy — Chad Darby & Eric Roby",
      date: "2024",
      image: CertSpringBootUnit,
    },
    {
      title: "[NEW] Spring Boot 3, Spring 6 & Hibernate for Beginners",
      issuer: "Udemy — Chad Darby & Eric Roby",
      date: "2024",
      image: CertSpringBoot3,
    },
  ],
};
