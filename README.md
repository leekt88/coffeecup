# Amazing Secomm Coffee Cup - Single Page Application

A modern, production-ready React SPA showcasing the Amazing Secomm Coffee Cup product. Built with React, Vite, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalistic, premium aesthetic with Secomm brand colors
- **Smooth Animations**: Framer Motion animations throughout for engaging user experience
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Scrolling**: Seamless navigation between sections
- **Component Library**: Reusable components for maintainability

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Steps

1. **Clone or navigate to the project directory:**
   ```bash
   cd coffee
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add placeholder images** (if not already present):
   
   Create the following placeholder images in `/src/assets/`:
   - `cup.png` - Coffee cup illustration (recommended: 800x800px)
   - `nfc.png` - NFC icon (recommended: 200x200px)
   - `mood.png` - Mood icon (recommended: 200x200px)
   - `qr.png` - QR code image (recommended: 400x400px)
   
   Note: The app includes fallback placeholders if images are missing.

## 🏃 Running the Development Server

Start the development server with:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The optimized build will be output to the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
coffee/
├── src/
│   ├── assets/          # Image assets
│   │   ├── cup.png
│   │   ├── nfc.png
│   │   ├── mood.png
│   │   └── qr.png
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── SectionWrapper.jsx
│   │   ├── CTAButton.jsx
│   │   ├── FeatureCard.jsx
│   │   └── StepCard.jsx
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx
│   │   ├── Concept.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── WhyAmazing.jsx
│   │   └── FinalCTA.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors

The Secomm brand colors are defined in `tailwind.config.js`:

- Primary Blue: `#0054a6`
- Light Blue: `#0066cc`
- Dark Blue: `#004080`

You can modify these in the `tailwind.config.js` file under the `theme.extend.colors.secomm` section.

### Content

All content is directly editable in the section components located in `/src/sections/`.

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **PostCSS** - CSS processing

## 📝 Notes

- The application includes fallback placeholders for missing images
- All animations are optimized for performance
- The navbar becomes opaque on scroll for better visibility
- Smooth scrolling is enabled globally via CSS

## 🐛 Troubleshooting

**Images not loading?**
- Ensure image files are in `/src/assets/` directory
- Check file names match exactly (case-sensitive)
- The app includes fallback placeholders, so it will still function

**Build errors?**
- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall if needed: `rm -rf node_modules && npm install`

**Port already in use?**
- Vite will automatically try the next available port
- Or specify a port: `npm run dev -- --port 3000`

## 📄 License

This project is created for Secomm internal use.

---

**Built with ❤️ for Secomm's coffee culture**

