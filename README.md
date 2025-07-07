# SGPA Calculator - Sahyadri College

A modern, responsive SGPA (Semester Grade Point Average) calculator specifically designed for Sahyadri College students. Built with Next.js, TypeScript, and Tailwind CSS.

## 🏫 Supported Departments & Semesters

### CSE (Computer Science Engineering)
- **Semester 4**: Complete subject list with credits
- **Semester 6**: Complete subject list with credits

### ISE (Information Science Engineering)
- **Semester 4**: Complete subject list with credits  
- **Semester 6**: Complete subject list with credits

## 🛠️ Tech Stack

- **Framework**: Next.js 13 with Pages Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Feather Icons
- **Analytics**: Vercel Web Analytics
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Tejas1546/sgpa-calci.git
cd sgpa-calci
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
sgpa-calci/
├── components/          # React components
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── SubjectTable.tsx # Subject grades table
│   └── SGPAResult.tsx  # SGPA result display
├── data/               # Static data
│   └── subjects.ts     # Subject data for all departments
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper with analytics
│   ├── index.tsx       # Main calculator page
│   └── calculator.tsx  # Calculator page (legacy)
├── styles/             # Styles
│   └── globals.css     # Global styles with Tailwind
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── utils/              # Utility functions
│   └── calculator.ts   # SGPA calculation logic
└── public/             # Static assets
```

## 📖 How to Use

1. **Select Department**: Choose between CSE or ISE
2. **Select Semester**: Choose your semester (4 or 6)
3. **Select Sub-branch** (for ISE only): Choose between ISE or DS
4. **Enter Grades**: Input your grades for each subject (0-10 scale)
5. **View Results**: Your SGPA will be calculated and displayed automatically

## 🧮 SGPA Formula

```
SGPA = Σ(Credits × Grade) / Σ(Credits)
```

Where:
- **Credits**: Credit weight of each subject
- **Grade**: Your grade in that subject (0-10 scale)

## 🌐 Deployment

This project is deployed on Vercel:

- **Live URL**: [Your Vercel URL here]
- **GitHub Repository**: https://github.com/Tejas1546/sgpa-calci
- **Automatic Deployments**: Every push to main branch triggers deployment

### Deploy Your Own

1. Fork this repository
2. Connect to Vercel
3. Deploy automatically

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 