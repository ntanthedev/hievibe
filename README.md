# 🚀 HiveVibe - Smart Hiring Platform

Just demo by HiveVibe team, we just public UI of this app.

Welcome to **HiveVibe**, a modern hiring platform that connects talents and opportunities through intelligent matching, video profiles, and automated scheduling.

![HiveVibe Landing Page](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Pages](#-available-pages)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## ✨ Features

### 🎯 **For Employers**
- **Quick Hiring**: Smart candidate matching with swipe functionality
- **Video Profiles**: Go beyond traditional resumes with video introductions
- **Automated Scheduling**: AI-powered interview coordination
- **Real-time Connections**: Instant candidate screening and communication

### 👥 **For Job Seekers**
- **Stand Out**: Create compelling video profiles
- **Smart Matching**: Get personalized job recommendations
- **Fast Applications**: Streamlined application process
- **Direct Communication**: Connect directly with employers

### 🌟 **Platform Benefits**
- Modern, responsive design
- Vietnamese and English language support
- Mobile-first approach
- Secure and fast performance

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **Design**: Generated from Figma designs
- **Development**: Hot reload, ESLint, Prettier

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

```bash
# Node.js (version 18 or higher)
node --version

# npm (comes with Node.js)
npm --version

# Git
git --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd HiveVibe
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
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📁 Project Structure

```
HiveVibe/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Landing page (/)
│   ├── get-started/             # Get started page
│   │   └── page.tsx            # (/get-started)
│   ├── sign-in/                # Sign in page
│   │   └── page.tsx            # (/sign-in)
│   ├── sign-up/                # Sign up page
│   │   └── page.tsx            # (/sign-up)
│   └── globals.css             # Global styles
├── public/                      # Static assets
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 📄 Available Pages

### 🏠 **Landing Page** (`/`)
- Hero section with call-to-action
- Feature showcase (Quick Hiring, Video Profiles, Automated Scheduling)
- User testimonials
- Company information and contact details

### 🎯 **Get Started** (`/get-started`)
- Onboarding page with company branding
- Two main actions: Sign Up or Sign In
- Beautiful gradient design with hexagonal logo

### 📝 **Sign Up** (`/sign-up`)
- User registration form
- Full name, email, password, and confirmation fields
- Link to sign-in page for existing users

### 🔐 **Sign In** (`/sign-in`)
- User login form
- Email and password authentication
- Link to sign-up page for new users

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

### Making Changes

1. **Editing Components**: All pages are in the `app/` directory
2. **Styling**: Use Tailwind CSS classes or edit `globals.css`
3. **Adding Pages**: Create new folders in `app/` with `page.tsx` files
4. **Assets**: Add images and static files to the `public/` directory

### Design System

The project uses a consistent color scheme:
- **Primary Green**: `#008236` (used for buttons and accents)
- **Secondary**: Complementary green shades
- **Background**: Light green (`green-50`) for sections
- **Text**: Gray scales for content hierarchy

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

### Other Deployment Options

- **Netlify**: Connect your GitHub repo to Netlify
- **Railway**: Deploy with `railway login` and `railway deploy`
- **Docker**: Use the included configuration for containerized deployment

## 🤝 Contributing

### For Team Members

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code style
   - Use TypeScript for type safety
   - Follow the component structure

3. **Test your changes**
   ```bash
   npm run dev
   # Test on http://localhost:3000
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Add: your feature description"
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Describe your changes
   - Request code review

### Code Guidelines

- Use **TypeScript** for all new files
- Follow **Tailwind CSS** for styling
- Use **Next.js App Router** conventions
- Keep components **small and focused**
- Add **comments** for complex logic

## 🆘 Troubleshooting

### Common Issues

**1. Node modules error**
```bash
rm -rf node_modules package-lock.json
npm install
```

**2. Port already in use**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

**3. TypeScript errors**
```bash
# Check for type errors
npm run type-check
```

**4. Styling not working**
```bash
# Rebuild Tailwind
npm run build
```

## 📞 Support

If you encounter any issues or have questions:

1. **Check this README** for common solutions
2. **Look at the code comments** in the files
3. **Create an issue** in the repository
4. **Contact the development team**

## 🎉 Quick Start Commands

```bash
# Clone and setup
git clone <repo-url>
cd HiveVibe
npm install
npm run dev

# Open http://localhost:3000 in your browser
```

---

**Happy coding! 🚀**

Built with ❤️ by the HiveVibe team
