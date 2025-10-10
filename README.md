# Not So Far 🌌

A visual interface for exploring our solar system, built with React and TypeScript.

## 🎯 Project Overview

Not So Far is an interactive web application that brings solar system data to life. Using the [Solar System Open Data API](https://api.le-systeme-solaire.net/en/), users can explore detailed information about planets, moons, asteroids, and other celestial bodies in an intuitive, visually engaging interface.

### Key Features

- Browse celestial bodies by type (planets, moons, asteroids, comets)
- View detailed information about each celestial object
- Responsive component design that adapts to different body types
- Clean, accessible UI built with Radix UI primitives
- Component-driven development with Storybook

## 🛠 Tech Stack

- **Frontend:** React 18 with TypeScript
- **Build Tool:** Vite
- **UI Components:** Radix UI
- **Development:** Storybook for component documentation
- **API:** Solar System Open Data (RESTful)

## 📋 Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- Text editor (VS Code recommended)

## 🚀 Getting Started

### Installation

1. Fork and clone the repository
```bash
git clone https://github.com/[YOUR-USERNAME]/not-so-far.git
cd not-so-far
```

2. Install dependencies
```bash
npm install
```

### Running the Application

**Development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

**Run Storybook:**
```bash
npm run storybook
```

## 📁 Project Structure

```
not-so-far/
├── src/
│   ├── components/    # React components
│   ├── hooks/         # Custom React hooks
│   ├── styles/        # Global styles
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
├── .storybook/        # Storybook configuration
└── package.json
```

## 🌟 Features in Detail

### LocalInset Component
Dynamic component that adjusts its display based on the type of celestial body being viewed. Each body type (planet, moon, asteroid, etc.) gets a tailored presentation.

### API Integration
Seamlessly fetches and displays data from the Solar System Open Data API, including:
- Physical characteristics (mass, radius, gravity)
- Orbital parameters
- Atmospheric composition
- Discovery information
- And much more!

## 🗺 Roadmap

### ✅ Completed
- [x] Basic project setup with React + TypeScript + Vite
- [x] Integration with Solar System API
- [x] LocalInset component with dynamic sizing
- [x] Radix UI component integration
- [x] Storybook setup for component development

### 📅 Planned Features
- [ ] Search functionality for celestial bodies
- [ ] Comparison view for multiple objects
- [ ] 3D visualization of orbits
- [ ] Favoriting and bookmarking system
- [ ] Dark/light mode toggle
- [ ] Mobile-optimized experience
- [ ] Unit and integration tests
- [ ] Performance optimizations

## 🧪 Development

This project uses Storybook for component development and documentation. Run Storybook to see all components in isolation:

```bash
npm run storybook
```

## 🤝 Contributing

This is a personal portfolio project, but contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

Copyright (c) 2025 Dior Shelton

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Dior Shelton**
- GitHub: [@diorshelton](https://github.com/diorshelton)

## 🙏 Acknowledgments

- [Solar System Open Data API](https://api.le-systeme-solaire.net/en/) for providing comprehensive solar system data
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives

---

*Exploring the cosmos, one component at a time.* ✨
