# 🚀 Geno's Portfolio (v2)

Welcome to the source repository of my personal portfolio website. This is a highly interactive, responsive, and modern single-page portfolio built using **React 18**, **Material UI (MUI) v6**, and **Styled Components**. It is designed with a premium dark-themed color palette (navy and teal) and features smooth navigation, subtle animations, and direct email integration.

---

## 🔗 Live Showcase & Repository

*   **Repository URL:** [https://github.com/Geno-code/portfolio-v2](https://github.com/Geno-code/portfolio-v2)
*   **Developer:** Geno A. ([GitHub Profile](https://github.com/Geno-code))

---

## 🛠️ Technology Stack

This application is built with a modern frontend stack to ensure responsiveness, aesthetic visual cues, and optimized styling:

| Category | Technology / Library | Description |
| :--- | :--- | :--- |
| **Framework** | React 18 | Declarative component architecture |
| **Styling** | MUI v6, Styled Components, Emotion | Clean, responsive component layout & custom styling/animations |
| **Navigation** | React Scroll | Smooth scroll behavior between sections |
| **Icons** | MUI Icons, React Icons | Extensive icon sets for UI elements |
| **Form Backend** | EmailJS | Direct, client-side email delivery from the contact form |
| **Build Tool** | Create React App | Build setup & package manager integrations |

---

## ✨ Features

-   **Premium Modern Aesthetic:** Designed with a dark blue navy background (`#0a192f`) and vibrant teal accent (`#64ffda`), drawing inspiration from modern developer portfolio trends.
-   **Interactive Project Cards:** Hovering over featured project cards reveals overlays with clean description summaries, custom action buttons, and hover float animations.
-   **EmailJS Contact Form:** A fully functional, direct contact form that accepts user submissions and sends them straight to the developer's mailbox securely.
-   **Responsive Navigation:** Fully optimized for mobile views with a responsive navbar layout and auto-collapsing design.
-   **Dynamic Skills Grid:** Categorized skill levels represented in a structured layout derived from modular config data.

---

## 📁 Project Structure

```text
portfolio-v2/
├── public/                 # Static public assets (HTML, Favicon, etc.)
└── src/
    ├── assets/             # Images, static stylesheets, and configuration data
    │   ├── data.js         # Skills catalog configuration
    │   ├── me.png          # Hero section developer image
    │   └── works.css       # Projects/Works custom stylesheets
    ├── components/         # Modular React UI components
    │   ├── Navbar.jsx      # Navigation header with smooth scrolling links
    │   ├── Home.jsx        # Hero section welcoming visitors
    │   ├── About.jsx       # Detailed bio and quick technologies highlight
    │   ├── Skills.jsx      # Skills visualization dashboard
    │   ├── Works.jsx       # Featured projects showcase
    │   ├── Contact.jsx     # Contact form utilizing EmailJS integrations
    │   └── Footer.jsx      # Social profiles footer & copyright
    ├── App.js              # Application root, mounting all sections
    ├── App.css             # Root level component styles
    ├── index.js            # App entry point
    └── index.css           # Global reset & baseline styling
```

---

## ⚙️ Configuration & Customization

### 1. Modifying Skills Data
The skills list displayed on the website is configured dynamically. To add, edit, or remove skills, open [src/assets/data.js](file:///d:/Interview/portfolio-v2/src/assets/data.js) and update the JSON structure:
```javascript
export const skills = [
  {
    category: "Backend Development",
    icon: "/path-to-icon/backend-icon.svg",
    items: [
      { name: "Java", level: 85, icon: "/path-to-icon/java-icon.svg" },
      // add more skills here...
    ]
  },
  // ...
];
```

### 2. EmailJS Setup
The contact form is powered by EmailJS. If you deploy your own copy of this portfolio, make sure to replace the service credentials in [src/components/Contact.jsx](file:///d:/Interview/portfolio-v2/src/components/Contact.jsx#L93-L98) with your own EmailJS details:
```javascript
emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current,
  'YOUR_PUBLIC_KEY'
)
```

---

## 🚀 Getting Started Locally

To run this project on your local machine, follow these steps:

### Prerequisites
Make sure you have Node.js (version 16 or higher) and npm installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Geno-code/portfolio-v2.git
   cd portfolio-v2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Available Commands
In the project directory, you can run:

*   **`npm start`**: Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads automatically if you edit files.
*   **`npm run build`**: Compiles and bundles the application for production inside the `build/` folder. It optimizes the build for performance and minifies output.
*   **`npm test`**: Launches the test runner in interactive watch mode.

---

## 📂 Featured Projects in Portfolio

Some of the key projects showcased in the **Works** section of this portfolio include:

1.  **Multiplayer 2D Jump-and-Shoot Game**
    *   *Tech:* React, Spring Boot, WebSocket
    *   *Repo:* [game-api](https://github.com/Geno-code/game-api.git)
2.  **Chat Application**
    *   *Tech:* Spring Boot, WebSockets, React.js
    *   *Repo:* [chatapp-api](https://github.com/Geno-code/chatapp-api.git)
3.  **Bug Tracker System**
    *   *Tech:* Spring Boot, PostgreSQL, Role-Based Access Control
    *   *Repo:* [bug-tracker-api](https://github.com/Geno-code/bug-tracker-api.git)
4.  **Language Translator App**
    *   *Tech:* React, Python, Translation APIs
    *   *Repo:* [language_translator_project](https://github.com/Geno-code/language_translator_project.git)
5.  **Smart Streetlight Monitoring**
    *   *Tech:* IoT sensors, Web dashboard map integration
    *   *Repo:* [StreetLightFaultDetection](https://github.com/Geno-code/StreetLightFaultDetection.git)
6.  **Online Voting System**
    *   *Tech:* Secure election engine, administrative controls
    *   *Repo:* [voterEngineAPI](https://github.com/Geno-code/voterEngineAPI.git)

---

## 📄 License

This project is licensed under the MIT License. Feel free to use it to build your own portfolio site!
