# Service Squad Multi-Trade Platform

A modern, high-performance Next.js application integrated with Sanity CMS, CallRail Dynamic Number Insertion (DNI), and multi-trade LocalBusiness JSON-LD structured data.

---

## 🚀 Key Specifications Implemented

### 1. Multi-Trade Schema Array (Applied to ALL Locations)
Because all three locations operate as full-service hubs, the automated JSON-LD schema applies the multi-category array rather than a single category:

```json
"@type": ["WaterDamageRestorationService", "PlumbingContractor", "HVACBusiness"]
```

### 2. Verified Location Directory
All hubs use our primary local dispatch number: **(713) 999-9150** (the old 800 number has been deprecated).

| Location Hub | Business Name | Street Address | Dispatch Phone | Target Landing Page | Service Radius | Operating Hours |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Location 1 (Corporate Hub - Houston)** | Service Squad | 7321 Ashcroft Dr, Houston, TX 77081 | (713) 999-9150 | `/locations/houston-tx/` | Bellaire, Galleria, Meyerland, Heights, Inner Loop | Open 24 Hours / 7 Days |
| **Location 2 (Stafford Hub)** | Service Squad of Stafford | 435 Murphy Rd, Suite B1-121, Stafford, TX 77477 | (713) 999-9150 | `/locations/stafford-tx/` | Sugar Land, Missouri City, Meadows Place, Alief | Open 24 Hours / 7 Days |
| **Location 3 (Richmond Hub)** | Service Squad of Richmond | 1319 Pine Mills Dr, Richmond, TX 77469 | (713) 999-9150 | `/locations/richmond-tx/` | Rosenberg, Pecan Grove, Greatwood, Fulshear, Katy (South) | Open 24 Hours / 7 Days |

### 3. Cumulative Layout Shift (CLS) Prevention
- Fallback phone number `(713) 999-9150` is hardcoded across all static HTML templates.
- CallRail DNI swap elements use fixed width and tabular numbers (`.callrail-dni`, `.callrail-phone`, `.dni-phone`) to prevent visual layout shifts when dynamic tracking numbers are injected.

---

## 🛠 Tech Stack & Architecture

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: TailwindCSS with custom Service Squad brand tokens
- **CMS**: Sanity Studio v3 mounted directly at `/studio`
  - **Project ID**: `qsg1mmpf`
  - **Dataset**: `production`
- **Analytics & DNI**: CallRail script loader (`CallRailScript.tsx`)
- **Structured Data**: `LocalBusinessJsonLd.tsx` generating Google-compliant schema.org markup

---

## 📂 Project Structure

```
├── sanity.config.ts                    # Sanity Studio root configuration
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts        # Dispatch lead capture API
│   │   ├── locations/[slug]/page.tsx   # Verified Hub Landing Pages (/locations/houston-tx/, etc.)
│   │   ├── services/[slug]/page.tsx    # Multi-trade service landing pages
│   │   ├── studio/[[...tool]]/page.tsx # Embedded Sanity Studio
│   │   ├── globals.css                 # Global styles and CLS protection
│   │   ├── layout.tsx                  # Root layout with JSON-LD & CallRail DNI
│   │   └── page.tsx                    # Main homepage
│   ├── components/
│   │   ├── CallRailScript.tsx          # CallRail script & CLS-safe fallback phone
│   │   ├── DispatchForm.tsx            # Interactive emergency dispatch form
│   │   ├── Footer.tsx                  # Complete verified directory & licenses
│   │   ├── Header.tsx                  # Top banner, navigation & dispatch CTA
│   │   └── LocalBusinessJsonLd.tsx     # Multi-trade LocalBusiness JSON-LD markup
│   ├── data/
│   │   ├── locations.ts                # Verified Directory seed data & helper functions
│   │   └── services.ts                 # Multi-trade services data
│   └── sanity/
│       ├── env.ts                      # Sanity environment config (qsg1mmpf)
│       ├── lib/
│       │   ├── client.ts               # Sanity client
│       │   ├── image.ts                # Sanity image URL builder
│       │   └── queries.ts              # GROQ queries for data fetching
│       └── schemaTypes/
│           ├── callRail.ts             # CallRail DNI Settings schema
│           ├── form.ts                 # Dynamic Lead Forms schema
│           ├── formSubmission.ts       # Captured Inquiries schema
│           ├── index.ts                # Schema registry
│           ├── location.ts             # Location Hub schema (Multi-Trade array)
│           └── service.ts              # Service schema (Water, Plumbing, HVAC)
├── .env.local                          # Local environment variables
└── package.json                        # Dependencies and scripts
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Open Sanity Studio
Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage locations, services, forms, and CallRail DNI configurations directly.

---

## 🌐 Deploying to Vercel & GitHub

1. **Commit and Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initialize Service Squad Next.js app with Sanity schemas and multi-trade JSON-LD"
   git remote add origin https://github.com/<your-org>/<repo-name>.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - In your Vercel team dashboard (`vercel.com/service-squad`), click **"Import Project"**.
   - Select your GitHub repository.
   - Add the environment variables:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID=qsg1mmpf`
     - `NEXT_PUBLIC_SANITY_DATASET=production`
     - `NEXT_PUBLIC_FALLBACK_PHONE=(713) 999-9150`
   - Click **Deploy**.
