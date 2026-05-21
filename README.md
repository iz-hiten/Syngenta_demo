# 🌾 FarmCast — AI-Powered Agricultural Marketing Intelligence Platform

> **Syngenta Cognitive Intelligence & Autonomous Marketing Core**
> 
> A premium, full-scale, production-ready marketing intelligence and automated campaign orchestration dashboard built to optimize regional agrarian reach and safeguard grower communications across India.

---

## 📖 Table of Contents
1. [Project Overview](#-project-overview)
2. [UI/UX & Design Philosophy](#-uiux--design-philosophy)
3. [App Features & Structure](#-app-features--structure)
4. [Data Science & Machine Learning Research Pipeline](#-data-science--machine-learning-research-pipeline)
5. [Tech Stack & Architecture](#-tech-stack--architecture)
6. [Local Installation & Setup Guide](#-local-installation--setup-guide)
7. [Production Deployment](#-production-deployment)

---

## 🌟 Project Overview

**FarmCast** is an enterprise-level SaaS platform developed for Syngenta, a global agri-tech leader. It leverages localized agronomical signals, regional pest intelligence, and predictive models to dynamically organize, translate, and dispatch marketing and defensive product advisories to hundreds of thousands of growers.

The application addresses critical marketing problems in modern agriculture:
* **Overcoming Vernacular Barriers**: Automatically translates product solutions into Hindi, Telugu, Tamil, Kannada, and Marathi scripts.
* **Autonomous Outbreak Response**: Connects satellite and field telemetry with instant CRM triggers (e.g., dispatching systemic fungicides the moment wheat yellow rust crosses critical thresholds).
* **Guarding Grower Retention**: Uses a sophisticated message fatigue scoring model to auto-suppress communications if frequency values threaten grower opt-out rates.

---

## 🎨 UI/UX & Design Philosophy

FarmCast features a custom-built **Premium Agri-Tech Aesthetic** inspired by modern productivity tools (like Notion and Linear) blended with the dense data ergonomics of a Bloomberg Terminal, all while retaining earthy organic warmth.

* **Palette**: Deep Forest Green (`#1a3c2e`) as primary theme, Warm Amber (`#f59e0b`) for CTAs and critical vectors, Soft Sage (`#e8f0eb`) backgrounds, and Clean Off-white (`#fafafa`) main sheets.
* **Typography**: Elegant, high-contrast display headings using *Space Grotesk* paired with clean legible *Inter* body elements and *JetBrains Mono* for system tracking and counters.
* **Transitions**: Integrated clean microsensors, hover feedback classes, and structured layout transitions using `motion/react`.

---

## 📱 App Features & Structure

The platform is split into 5 core modules via a persistent, beautiful left-sidebar navigation:

### 1. 📊 Monitor Dashboard (Home)
* **Outbreak Heatmap & Diagnostic**: A visual interactive grid mapping major Indian agricultural states. Clicking on a state dynamically reveals its active pest warning, estimated farmer strain, recommended Syngenta product, and quick actions to auto-draft localized campaigns.
* **Telemetry Counters**: Real-time KPI summaries tracking Total Active Campaigns, Deliveries, Engagement rates, and Active Alerts.
* **Integrated Feeds**: Track the last 5 automatically triggered crop saving campaigns alongside a visual fatigue threshold mini-sparkline.

### 2. 🪄 AI Vernacular Campaign Generator
* **Localized Inputs**: Tailor scripts by crop (Rice, Cotton, Wheat, Tomato, Sugarcane, Maize), region, growth stage, pest threat severity, delivery channel, and vernacular script.
* **Pre-compiled Agronomic Models**: Instantly drafts professional, realistic, agronomy-backed copy across SMS, WhatsApp, and Voice note formats.
* **Simulated Delay**: Incorporates fake asynchronous loading feedback (translating, parsing, checking fatigue limits) for a high-fidelity enterprise experience.

### 3. 🛡️ Fatigue Monitor
* **Audience Safe Zones Registry**: A structured spreadsheet detailing active farmer segments, message frequencies, and fatigue scores.
* **Suppression System**: Automatic "Auto-paused" badges display if message counts top safe weekly limits (≥ 6).
* **Bypass Overrides**: Enables marketing managers to enforce forced high-priority emergency broadcasts (e.g., immediate crop-saving warnings).
* **Custom Historical Chart**: Real-time rendering of weekly broadcast curves via an interactive inline SVG line chart.

### 4. 🔔 Pest Alert Engine
* **Satellite Radar Dispatch**: Monitors live triggers fired by imagery and field data.
* **Fidelity Simulator**: A high-action "Simulate Radar Alert" button generates randomized real-life outbreaks with springy list animations.
* **Granular Filtering**: Instantly filters high-strain vectors by state or crop.

### 5. 🎙️ Voice & Badging
* **Auditory Proofing**: An interactive WhatsApp-style voice message mockup with custom play/pause actions, duration timers, and moving audio wave bars.
* **Loyalty Badge Customizer**: Select progressive master farmers (using safe placeholder avatars with no-referrer protections) or upload custom imagery to output branded Syngenta commemorative badges.

---

## 🧪 Data Science & Machine Learning Research Pipeline

Before building this interactive interface, rigorous data-science modeling was conducted to uncover behavior patterns and predict grower engagement metrics. 

### 1. Data Loading and Initial Exploration
The modeling foundation began by ingesting four essential datasets:
* `whatsapp_campaign.csv`: Metrics tracking individual message deliveries, opens, and final call-to-action click rates.
* `digital_funnel_weekly.csv`: Top-of-funnel social media post impressions, landing page visits, and registration metrics.
* `growers.csv`: Master repository capturing state, language, age, and historical product scans.
* `retailers.csv`: Geolocation records mapping regional certified distributors.

### 2. Data Preprocessing
* **Temporal Alignments**: Date attributes (including `message_sent_date`, `week_start_date`, and `product_scan_datetime`) were parsed to pythonic datetimes for temporal modeling.
* **Crop Calendar Ingestion**: The `grower_crop_calendar` column (stored as JSON-like documents) was parsed to isolate `season`, `crop`, `sowing_date`, and `harvest_date`.
* **Imputations**: Missing values in categorical columns were filled with `'Unknown'`, while missing scale entries in `grower_farm_size` were imputed with median metrics.

### 3. Data Integration
A comprehensive, enriched analytical dataframe (`merged_campaign_grower_df`) was assembled by merging `whatsapp_campaign_df` and `growers_df` on `grower_id`, combining historical demographics with real-time response signals.

### 4. Exploratory Data Analysis (EDA)
* Analyzed average open rates across crops and click-through rates across specified Syngenta treatment products.
* Observed trends in social post impressions over time to gauge winter-to-monsoon marketing conversions.
* Evaluated age distribution, mobile device breakdown (iOS/Android), and language preferences of our target audience.

### 5. Feature Engineering
We engineered several high-impact predictive characteristics:
* **Rate Metrics**: Created historical rates for delivery, message open, and CTR.
* **Grower Portfolios**: Aggregated cumulative interactions (e.g., `total_messages_opened`, `total_messages_clicked`) to determine a grower's historical engagement score.
* **Binned Categorizations**: Created standard age-tiers and farm-size groups to identify non-linear agricultural trends.
* **Categorical Encoding**: Utilized Scikit-Learn's `LabelEncoder` labels to safely translate categorical strings to standard ordinal integers.

### 6. Model Training and Evaluation
* **Target Isolation**: Placed `clicked_status` as the target variable ($y$). Drop-caps and safety guards were placed on variables like `opened_status` or current-campaign rates to strictly prevent informational **Data Leakage**.
* **Imbalance Treatment**: Applied **SMOTE** (Synthetic Minority Over-sampling Technique) on train splits to construct synthetic patterns representing clicked events, adjusting the classification algorithm's bias.
* **Models Tested**: Trained Logistic Regression (as a baseline), Random Forest, and **XGBoost**.
* **Hyperparameter Tuning**: Ran a comprehensive `GridSearchCV` on the XGBoost classifier, maximizing the $F_1$-score.
* **Threshold Optimizations**: Analyzed Precision-Recall curves to isolate the optimal classification probability cutoff (moving away from standard 0.5 rules) to protect against severe false positives.

### 7. Feature Importance and Model Interpretability
* Analyzed tree node splits to generate localized feature importances.
* Integrated **SHAP** (SHapley Additive exPlanations) values on the optimized XGBoost classifier to provide global and localized prediction explanations (explaining which farmer demographics or history attributes pushed the click decision).

### 8. Generating Personalized Marketing Recommendations
The final output of the modeling pipeline was integrated into the recommendation ledger:
1. Calculates click probabilities for all available crop advisories for any given grower.
2. Ranks and lists the top 3 high-probability campaigns.
3. Automatically falls back to a standardized "awareness advisory" if predicted probabilities do not cross the classification threshold.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Framework**: React 19 (using strict functional hooks and state parameters).
* **Compiler & Build System**: Vite 6.
* **Styling**: Tailwind CSS (loaded directly via modern `@import "tailwindcss";` specs inside a singular styles sheet).
* **Animations**: Motion (imported strictly using `motion/react`).
* **Icons**: Lucide-React.
* **Typography**: Space Grotesk & Inter via Google Fonts.

---

## 🚀 Local Installation & Setup Guide

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (v18 or higher recommended).

### 1. Clone & Access the Directory
Navigate to the project root:
```bash
cd /workspace
```

### 2. Install Project Dependencies
Vite and companion libraries will be resolved:
```bash
npm install
```

### 3. Set Up Environment Configuration
Establish local parameters by reviewing the `.env.example` file. Create a copy named `.env`:
```bash
cp .env.example .env
```
Ensure your configurations are set inside `.env`:
```env
GEMINI_API_KEY="YOUR_KEY"
APP_URL="http://localhost:3000"
```

### 4. Run the Development Server
Our infrastructure routes traffic via port 3000. Start the application:
```bash
npm run dev
```
The application will be accessible locally at:
👉 **[http://localhost:3000](http://localhost:3000)**

