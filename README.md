# Nazmul Islam Portfolio

A modern, interactive portfolio website showcasing skills, projects, and professional experience. Built with Next.js and Tailwind CSS.

## Features

- 📱 Fully responsive design
- 🌓 Dark/light mode
- ✨ Smooth animations with Framer Motion
- 🔍 SEO optimized
- 📊 Interactive components
- 📝 Contact form
- 🚀 Fast performance

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nazmul-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd nazmul-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/               # Next.js app directory
│   ├── components/    # React components
│   ├── styles/        # Global styles
│   ├── layout.tsx     # Root layout component
│   └── page.tsx       # Home page component
├── public/            # Static assets
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Customization

### Personal Information

Update your personal information in the components:

- `Hero.tsx`: Update name, title, and description
- `About.tsx`: Update your background information
- `Experience.tsx`: Update your work experience
- `Education.tsx`: Update your education history
- `Contact.tsx`: Update contact information

### Projects

Add your projects in the `Projects.tsx` file:

```tsx
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    image: '/projects/project-image.jpg',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://demo-link.com'
  },
  // Add more projects...
];
```

### Skills

Update your skills in the `Skills.tsx` file:

```tsx
const skills = [
  { name: 'JavaScript', imgSrc: '/skills/javascript.png' },
  // Add more skills...
];
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/) 