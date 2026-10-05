# AIOpsCare — Product Website

**Next.js marketing website for AIOpsCare, a hospital operations and maintenance SaaS platform.**

AIOpsCare is designed around the operational reality of hospitals: assets, maintenance tickets, service contracts, housekeeping, laundry, utilities, workflows, compliance checklists and operational analytics.

This repository contains the product-facing website. The core platform backend and Angular applications are maintained separately.

## Product

AIOpsCare brings hospital facilities and maintenance workflows into a single operational platform.

Key product areas include:

- Asset and equipment management
- Maintenance tickets and SLA tracking
- Preventive maintenance workflows
- Contracts, AMC/CMC and renewals
- Housekeeping operations
- Laundry management
- Utility meters
- Compliance checklists
- Workflow automation
- Operational dashboards and reports

## Website goals

The website is designed to communicate the product clearly to hospital and facilities teams by presenting:

- The operational problems the platform addresses
- Product capabilities and modules
- SaaS-oriented architecture
- Benefits of centralising maintenance operations
- A clear path from product discovery to enquiry/demo

## Technology

| Layer | Technology |
|---|---|
| Framework | Next.js 16 |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Tooling | ESLint |

## Application architecture

```text
Next.js App
   │
   ├── Product pages / sections
   ├── Responsive UI
   ├── Motion / interactions
   └── Product messaging
             │
             ▼
       AIOpsCare Platform
             │
      ┌──────┴──────┐
      ▼             ▼
 Angular Apps    FastAPI API
                      │
                      ▼
                  PostgreSQL
```

The website is intentionally separated from the application backend so the public product experience can evolve independently from the operational platform.

## Related repositories

- Backend: `hospital_backend`
- Frontend: `hospital_frontend`

The backend repository contains the deeper technical architecture, including PostgreSQL schema-per-tenant isolation, JWT/RBAC and the service/repository layers.

## Local development

### Requirements

- Node.js
- npm

### Install

```bash
git clone https://github.com/channupraveen/aiopscarewebsite.git
cd aiopscarewebsite
npm install
```

### Start

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Engineering highlights

This project demonstrates:

- Building a product-facing SaaS website with modern Next.js
- Responsive React UI development
- TypeScript-based frontend architecture
- Motion and interaction design
- Separating marketing/product presentation from the application platform
- Communicating complex B2B software through a clear product experience

## Author

**Praveen Kumar**

GitHub: https://github.com/channupraveen

Part of the DevSparkAI product ecosystem.

## License

MIT
