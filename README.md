# Production-Ready Task Management System (Full-Stack)

A pixel-perfect, highly responsive Task Management application built to demonstrate modern software engineering practices, scalable folder hierarchy, robust database integration, and intuitive product-focused user experiences.

## 🛠️ Tech Stack & Key Choices

- **Frontend Framework:** Next.js 14 (App Router Architecture) for optimized hydration and structural clarity.
- **Styling UI:** Tailwind CSS utilizing highly strict design token mappings to ensure total design parity.
- **Backend Framework:** NestJS (Node.js MVC architecture) utilizing clean controller-service delegation patterns.
- **Database Engine:** PostgreSQL deployed via cloud-native architecture decoupled efficiently from infrastructure.
- **Data Layer Access:** Prisma ORM utilized for complete structural safety and declarative schema generation patterns.
- **State Management:** Native context API combined with decoupled persistence pipelines.

---

## 🚀 Key Architectural Implements

### 1. Theme Configuration & Persistence
The system incorporates an inline color-token mapping engine using local storage states to evaluate and match visual metrics seamlessly without any structural component re-rendering shifts.

### 2. High-Performance Guest Sessions
The Guest Login logic uses stateless backend validation keys that create real-time decoupled profile spaces instantly, ensuring quick access for evaluation teams without login friction.

### 3. Structural Code Modularity
Every visual section is split into clean, modular, and declarative code fragments to maximize component readability, interface optimization, and maintainability.

---

## 🏃‍♂️ Setup and Running Locally

To get the entire stack operating seamlessly on a local viewport environment, execute the sequential instructions below.

### 1. Backend Engine Configuration
```bash
# Navigate to backend architecture root
cd task-manager-backend

# Install package dependencies cleanly
npm install

# Setup environment infrastructure
# Create a .env file mapping to your PostgreSQL connection string:
# DATABASE_URL="postgresql://postgres:your_secret_pass@db.supabase.co:5432/postgres"

# Sync DB state to engine schema mapping
npx prisma db push

# Launch development environment engine
npm run start
```

### 2. Frontend Application Setup
```bash
# Navigate to client layer folder
cd task-manager-frontend

# Install node module assets
npm install

# Initialize development runtime server
npm run dev
```

---

## 📌 Features Completed As Per Evaluation Scope
- **Figma Parity:** Meticulous translation of spacing tokens, typography arrays, states, colors, and layout ratios.
- **Interactive States:** Seamless drag transitions/status changes across multiple kanban columns.
- **Theme Support:** Fully reactive system configuration persisting automatically across re-renders.
- **Deployment Strategy:** Production build scripts decoupled and running fully on globally distributed networks.

