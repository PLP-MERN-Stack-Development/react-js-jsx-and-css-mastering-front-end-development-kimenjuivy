# 🚀 React Task Manager Application

A modern, responsive React application built with Vite, React Router, and Tailwind CSS. Features include task management with local storage persistence, API integration with JSONPlaceholder, dark mode support, and a beautiful UI.

![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- ✅ **Task Management** - Create, complete, delete, and filter tasks
- 🌓 **Dark Mode** - Beautiful light and dark themes
- 📡 **API Integration** - Fetch and search data from JSONPlaceholder
- 💾 **Local Storage** - Persistent task storage using custom hooks
- 📱 **Responsive Design** - Mobile-first design that works on all devices
- 🎨 **Modern UI** - Clean interface with smooth animations
- 🔍 **Search & Filter** - Search posts and filter tasks efficiently
- 📄 **Pagination** - Browse API data with pagination controls

## 🛠️ Technologies Used

- **React 18.3** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **React Router DOM** - Declarative routing for React
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **JSONPlaceholder** - Fake REST API for testing

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
   git clone <your-repo-url>
   cd <project-folder>
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start the development server**
```bash
   npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure
```
src/
├── api/                  # API integration functions
│   └── fetchPosts.js     # JSONPlaceholder API calls
├── components/           # Reusable UI components
│   ├── Button.jsx        # Button with variants
│   ├── Card.jsx          # Card layout component
│   ├── Footer.jsx        # Footer with links
│   ├── Navbar.jsx        # Navigation bar
│   └── TaskManager.jsx   # Task management component
├── context/              # React context providers
│   └── ThemeContext.jsx  # Theme management (dark/light)
├── hooks/                # Custom React hooks
│   └── useLocalStorage.js # localStorage persistence hook
├── pages/                # Page components
│   ├── Home.jsx          # Home page with TaskManager
│   └── ApiData.jsx       # API data display with search
├── utils/                # Utility functions
│   └── helpers.js        # Helper functions
├── App.jsx               # Main app component with routing
├── main.jsx              # React entry point
└── index.css             # Global styles with Tailwind
```

## 🎯 Key Components

### TaskManager
- Add, complete, and delete tasks
- Filter tasks by status (All, Active, Completed)
- Persistent storage using custom `useLocalStorage` hook
- Real-time statistics display

### API Data Explorer
- Fetch posts from JSONPlaceholder API
- Search functionality with real-time filtering
- Pagination controls for browsing posts
- Loading and error states

### Theme Switcher
- Toggle between light and dark modes
- Persistent theme preference
- Smooth transitions between themes

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
```bash
   npm install -g vercel
```

2. **Deploy**
```bash
   vercel
```

### Deploy to Netlify

1. **Build the project**
```bash
   npm run build
```

2. **Deploy the `dist` folder** to Netlify via their dashboard or CLI

### Deploy to GitHub Pages

1. **Install gh-pages**
```bash
   npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
```

3. **Deploy**
```bash
   npm run deploy
```

## 📸 Screenshots

### Light Mode
![Home Page Light](./screenshots/home-light.png)

### Dark Mode
![Home Page Dark](./screenshots/home-dark.png)

### Task Manager
![Task Manager](./screenshots/task-manager.png)

### API Data Page
![API Data](./screenshots/api-data.png)

## 🧪 Testing

Run the development server and test:
- ✅ Task CRUD operations
- ✅ Theme switching
- ✅ API data fetching
- ✅ Search functionality
- ✅ Pagination
- ✅ Responsive design on different screen sizes

## 📝 Assignment Requirements Checklist

- [x] React project setup with Vite
- [x] Tailwind CSS configuration
- [x] Proper project structure
- [x] React Router configuration
- [x] Button component with variants
- [x] Card component
- [x] Navbar component
- [x] Footer component
- [x] Layout component
- [x] TaskManager with full CRUD
- [x] useState implementation
- [x] useEffect implementation
- [x] useContext for theme
- [x] Custom useLocalStorage hook
- [x] API integration (JSONPlaceholder)
- [x] Loading and error states
- [x] Pagination
- [x] Search feature
- [x] Responsive design
- [x] Dark mode implementation
- [x] Custom animations

## 👨‍💻 Author

Your Name - [GitHub Profile](kimenjuivy)

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com)
- [Lucide Icons](https://lucide.dev)

---

**Live Demo:** [Add your deployment URL here]

**Made with ❤️ using React & Tailwind CSS**