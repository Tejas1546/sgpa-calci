# SGPA Calculator - Sahyadri College

A modern, responsive SGPA (Semester Grade Point Average) and CGPA calculator specifically designed for Sahyadri College students. Built with Next.js, TypeScript, and Tailwind CSS.

## 🏫 Supported Schemas & Departments

### Schema 2022 & 2024
- **CSE (Computer Science Engineering)**
- **ISE (Information Science Engineering)**
- **ECE (Electronics & Communication Engineering)**
- **EEE (Electrical & Electronics Engineering)**
- **ME (Mechanical Engineering)**
- **CE (Civil Engineering)**

## 📚 Semester Coverage

### Semesters 1 & 2 (All Departments)
- **Cycle Selection**: Physics or Chemistry
- **Common subjects** with department-specific variations

### Semesters 3-8 (All Departments)
- **Direct subject selection** based on department and semester
- **Complete subject lists** with proper credit distribution

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
│   ├── CGPACalculator.tsx # CGPA calculation component
│   ├── SGPAResult.tsx  # SGPA result display
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── SubjectTable.tsx # Subject grades table
├── data/               # Static data
│   └── subjects.ts     # Subject data for all schemas/departments
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper with analytics
│   ├── index.tsx       # Main calculator page
│   └── calculator.tsx  # Calculator page (legacy)
├── styles/             # Styles
│   └── globals.css     # Global styles with Tailwind
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── utils/              # Utility functions
│   ├── calculator.ts   # SGPA calculation logic
│   └── icons.ts        # Icon utilities
└── public/             # Static assets
```

## 📖 How to Use

### SGPA Calculation
1. **Select Schema**: Choose between 2022 or 2024 schema
2. **Select Department**: Choose your engineering department
3. **Select Semester**: Choose your semester (1-8)
4. **Select Cycle** (Semesters 1-2 only): Choose Physics or Chemistry
5. **Enter Grades**: Input your grades for each subject (0-10 scale)
6. **View Results**: Your SGPA will be calculated and displayed automatically

### CGPA Calculation
1. **Auto-fill**: Current semester SGPA is automatically filled from your SGPA calculation
2. **Previous Semesters**: Previous semester SGPA values are auto-filled from stored calculations
3. **Manual Override**: You can edit any SGPA value manually
4. **Calculate**: Click "Calculate CGPA" to get your cumulative GPA
5. **Clear Memory**: Use "Clear Memory" to reset all values

## 🧮 Calculation Formulas

### SGPA Formula
```
SGPA = Σ(Credits × Grade) / Σ(Credits)
```

### CGPA Formula
```
CGPA = Σ(Semester SGPA) / Number of Semesters
```

Where:
- **Credits**: Credit weight of each subject
- **Grade**: Your grade in that subject (0-10 scale)
- **Semester SGPA**: SGPA for each completed semester

## ✨ Key Features

- **Multi-Schema Support**: 2022 and 2024 curriculum schemas
- **All Departments**: Complete coverage for all engineering branches
- **All Semesters**: Semesters 1-8 with proper subject distribution
- **Cycle Selection**: Physics/Chemistry cycles for first year
- **Auto-fill**: Smart auto-filling of SGPA values
- **Memory Management**: Store and recall previous calculations
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Calculation**: Instant SGPA/CGPA updates

## 🌐 Deployment

This project is deployed on Vercel:

- **Live URL**: https://sgpa-calci.vercel.app/
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
