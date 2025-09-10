
export const DATA = {
  name: "Wongsakron Kongkamud",
  role: "Software / Backend Engineer",
  location: "Bangkok, Thailand (UTC+7)",
  summary:
    "Backend-focused engineer who ships production-grade APIs, microservices, and automated tests. Passionate about clean architecture, performance, and DX.",
  contacts: {
    email: "you@example.com",
    github: "https://github.com/Q-wongsakron",
    linkedin: "https://www.linkedin.com/in/your-profile/",
    resumeUrl: "#"
  },
  skills: {
    Languages: ["Java", "TypeScript/JavaScript", "Python", "SQL"],
    Frameworks: ["Spring Boot", "JPA/Hibernate", "Node.js/Nest.js", "React"],
    Architecture: ["Microservices", "REST/JSON", "JWT/OAuth2", "CI/CD"],
    Databases: ["PostgreSQL", "MySQL", "Redis"],
    Tools: ["Docker", "GitHub Actions", "JUnit/MockMvc", "Jest"]
  },
  projects: [
    {
      slug: "task-tracking-app",
      title: "Task Tracking App",
      blurb: "Full-featured task tracker with CRUD, DTO/Entity mapping, layered architecture, and unit/integration tests.",
      highlights: [
        "Spring Boot 3 + JPA + MapStruct",
        "Global exception handling, Bean Validation",
        "CI/CD with GitHub Actions"
      ],
      tech: ["Spring Boot", "PostgreSQL", "MapStruct", "JUnit", "Docker"],
      tags: ["backend", "microservices-ready"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200",
        "https://images.unsplash.com/photo-1527430253228-e93688616381?w=1200"
      ],
      longDescription: [
        { heading: "Overview", body: "A production-minded task management API designed with clean architecture. It exposes CRUD endpoints with DTO mappers, central error handling, and validation pipelines." },
        { heading: "Key Decisions", body: "Used MapStruct for compile-time mapping, standardized error contracts (RFC 7807-like), and added CI for tests + Docker build. Pagination & filtering ready for scale." },
        { heading: "Results", body: "Achieved ~98% controller coverage; pipeline produces artifacts automatically on main merges." }
      ]
    },
    {
      slug: "secure-blog-api",
      title: "Secure Blog API",
      blurb: "Blog platform focusing on security: JWT auth, RBAC, refresh tokens, and audit logging.",
      highlights: [
        "Spring Security 6 (JWT)",
        "Role-based access (ADMIN/USER)",
        "Integration tests with MockMvc"
      ],
      tech: ["Spring Boot", "Spring Security", "JWT", "MySQL"],
      tags: ["backend", "security"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200",
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200"
      ],
      longDescription: [
        { heading: "Threat Model", body: "Token theft and replay prevention via short-lived access + long-lived refresh tokens, strict CORS, and audit trails for privileged actions." },
        { heading: "Implementation", body: "Stateless JWT with refresh rotation and blacklist; RBAC guards with method-level security and integration tests." }
      ]
    },
    {
      slug: "restaurant-review-platform",
      title: "Restaurant Review Platform",
      blurb: "Users can review restaurants, upload photos, and see rating analytics. Clean API + responsive UI.",
      highlights: [
        "RESTful API, pagination & filtering",
        "Image upload (S3-compatible)",
        "CI pipeline and containerization"
      ],
      tech: ["Spring Boot", "React", "PostgreSQL", "S3", "Docker"],
      tags: ["full-stack", "backend"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200"
      ],
      longDescription: [
        { heading: "Data Model", body: "Normalized schema for Restaurants, Reviews, Users, and Media with indexes optimized for search and sort." },
        { heading: "Ops", body: "Containerized services with compose; CI builds and pushes images on tag." }
      ]
    },
    {
      slug: "event-ticket-platform",
      title: "Event Ticket Platform",
      blurb: "Microservice-style ticketing with seat inventory, order lifecycle, and payment webhook simulation.",
      highlights: [
        "Service boundaries & contracts",
        "Outbox/Inbox pattern (conceptual)",
        "Request validation + errors spec"
      ],
      tech: ["Nest.js", "PostgreSQL", "Redis", "Docker"],
      tags: ["microservices", "backend"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200",
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200"
      ],
      longDescription: [
        { heading: "Architecture", body: "Separated ticket, order, and payment bounded contexts. Async event flow simulated using a lightweight queue and webhook callbacks." }
      ]
    },
    {
      slug: "trading-system-dashboard",
      title: "Trading System Dashboard",
      blurb: "Python-based strategy backtests with MT5 integration; web dashboard to visualize signals & PnL.",
      highlights: [
        "Vectorized backtests (pandas)",
        "Session filters & risk caps",
        "Exportable performance reports"
      ],
      tech: ["Python", "Pandas", "MetaTrader5 API", "FastAPI", "React"],
      tags: ["data", "backend"],
      repo: "https://github.com/Q-wongsakron",
      demo: "#",
      images: [
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
      ],
      longDescription: [
        { heading: "Performance", body: "Includes walk-forward analysis, robust parameter selection, and session-aware execution to reduce slippage and chop." }
      ]
    }
  ],
  internship: {
    title: "Backend Engineering Intern · Fintech Co.",
    period: "Jun 2024 – Aug 2024",
    summary:
      "Contributed to payment API refactor, added endpoints with comprehensive tests, and improved query performance.",
    bullets: [
      "Implemented idempotent POST /payments with request de-dup",
      "Cut DB query time ~35% by introducing read-model indexes",
      "Built CI pipeline step for integration tests (MockMvc)"
    ],
    tech: ["Spring Boot", "PostgreSQL", "Docker", "GitHub Actions"]
  }
};
