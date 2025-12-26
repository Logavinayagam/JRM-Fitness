# 📘 Digital Marketing Enabled Gym Website

**A professional gym website built with React JS and Firebase, featuring integrated digital marketing tools, lead generation, and analytics.**

## 🚀 Live Demo
[Visit the Live Website](https://jrmfitness.web.app)

---

## 1. Introduction
In today’s digital era, businesses rely heavily on online platforms to promote their services. This project focuses on developing a **digital marketing enabled gym website** using **React JS** and **Firebase**. It helps promote gym services online, capture customer leads, and analyze user behavior effectively.

The website is designed as a **single-page scroll-based application**, providing a smooth user experience while implementing key digital marketing strategies such as **SEO, lead generation, analytics, and branding**.

---

## 2. Problem Statement
Many local gyms lack a professional online presence and depend on offline marketing methods that are costly and difficult to track. Without proper digital marketing tools, gym owners cannot effectively understand customer behavior or measure the success of their promotions.

---

## 3. Objectives
* To design a professional gym website using modern web technologies.
* To implement digital marketing concepts such as SEO and analytics.
* To capture potential customer enquiries (leads) digitally.
* To analyze user behavior using Google Analytics.
* To provide a scalable solution that can be extended in the future.

---

## 4. Purpose of the Website
1. **Online Promotion:** Promote gym services, membership plans, and trainers.
2. **Lead Generation:** Convert visitors into potential customers through enquiry forms.
3. **Brand Awareness:** Establish a strong digital identity.
4. **Customer Engagement:** Provide clear information and encourage interaction.
5. **Data-Driven Decisions:** Analyze performance using Google Analytics.

---

## 5. Key Features & Digital Marketing Concepts

### 5.1 Search Engine Optimization (SEO)
Implemented to improve visibility on search engines using:
* Meta title and description (React Helmet)
* Keyword-optimized content
* Sitemap.xml for indexing
* Mobile-friendly responsive design

### 5.2 Lead Generation (Firebase + Google Sheets)
The website includes a **Join / Contact form** where users can enter their details.
* **Data Storage:** Leads are stored in **Firebase Firestore** AND **Google Sheets** (via Google Apps Script) for easy access.
* **Benefit:** Transforms website visitors into sales opportunities.

### 5.3 Google Analytics
Integrated GA4 to track:
* Number of visitors
* Real-time users
* Page engagement and user behavior

### 5.4 Responsive Design
Fully responsive using CSS Flexbox and media queries, ensuring a seamless experience on mobile devices where most users access the site.

---

## 6. Technology Stack

| Layer     | Technology             |
| --------- | ---------------------- |
| Frontend  | React JS, Vite         |
| Styling   | CSS (Glassmorphism)    |
| Database  | Firebase Firestore     |
| Hosting   | Firebase Hosting       |
| Integration| Google Apps Script    |
| Analytics | Google Analytics (GA4) |

---

## 7. System Architecture

**Flow of the System:**
```
User
 ↓
React Gym Website (Firebase Hosting)
 ↓
Contact / Join Form
 ↓
Firebase Firestore (Lead Storage) + Google Sheets (Backup)
 ↓
Google Analytics (User Tracking)
```

---

## 8. Getting Started (Local Development)

### Prerequisites
* Node.js installed
* Firebase account

### Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd jrm
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory with your credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_GOOGLE_SCRIPT_URL=your_google_script_url
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 🔥 ONE-LINE SUMMARY
> “This project is a digital marketing enabled gym website developed using React JS and Firebase to promote gym services, generate leads, and analyze user behavior through SEO and Google Analytics.”