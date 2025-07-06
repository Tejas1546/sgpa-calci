# SGPA Calculator

A modern, responsive SGPA (Semester Grade Point Average) calculator built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎯 **Easy to Use**: Simple dropdown selection for semester, department, and sub-branch
- 📊 **Real-time Calculation**: Instant SGPA calculation with the formula: SGPA = Σ(Credits × Grade) / Σ(Credits)
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 📱 **Mobile Friendly**: Works perfectly on all devices
- 🔄 **Dynamic Subjects**: Loads different subjects based on semester and department selection
- 📈 **Visual Results**: Color-coded SGPA results with performance indicators

## Supported Departments

- **CSE (Computer Science Engineering)**
  - Semester 6, 7, 8

- **ISE (Information Science Engineering)**
  - Sub-branches: ISE, DS (Data Science)
  - Semester 6, 7, 8

## Tech Stack

- **Framework**: Next.js 13 with Pages Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sgpa-calculator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
sgpa-calculator/
├── components/          # React components
│   ├── Header.tsx      # Application header
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── SubjectTable.tsx # Subject grades table
│   └── SGPAResult.tsx  # SGPA result display
├── data/               # Static data
│   └── subjects.ts     # Subject data for all departments
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── index.tsx       # Landing page
│   └── calculator.tsx  # Calculator page
├── styles/             # Styles
│   └── globals.css     # Global styles with Tailwind
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── utils/              # Utility functions
│   └── calculator.ts   # SGPA calculation logic
└── public/             # Static assets
```

## Usage

1. **Select Semester**: Choose your semester (6, 7, or 8)
2. **Select Department**: Choose between CSE or ISE
3. **Select Sub-branch** (for ISE only): Choose between ISE or DS
4. **Load Subjects**: Click "Load Subjects" to see your subjects
5. **Enter Grades**: Input your grades for each subject (0-10 scale)
6. **Calculate SGPA**: Click "Calculate SGPA" to see your result

## Grade Scale

The calculator uses a 10-point scale:
- **0.0 - 10.0**: Decimal values are supported
- **Examples**: 8.5, 7.75, 9.0, 6.5

## SGPA Formula

```
SGPA = Σ(Credits × Grade) / Σ(Credits)
```

Where:
- **Credits**: Credit weight of each subject
- **Grade**: Your grade in that subject (0-10 scale)

## Performance Indicators

- **9.0+**: Excellent (Green)
- **8.0-8.9**: Very Good (Blue)
- **7.0-7.9**: Good (Yellow)
- **6.0-6.9**: Average (Orange)
- **<6.0**: Needs Improvement (Red)

## Deployment

This project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on GitHub. 