# SGPA Calculator - Sahyadri College

A modern, responsive SGPA (Semester Grade Point Average) calculator specifically designed for Sahyadri College students. Built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Features

- **🎓 Sahyadri College Focused**: Tailored specifically for Sahyadri College students with department-specific subjects
- **📱 Single Page Experience**: Seamless dropdown selection and calculation on one page
- **⚡ Real-time Calculation**: Instant SGPA calculation with the formula: SGPA = Σ(Credits × Grade) / Σ(Credits)
- **🎨 Modern UI**: Beautiful, responsive design with professional styling
- **📊 Dynamic Subject Loading**: Automatically loads relevant subjects based on your selections
- **✅ Input Validation**: Ensures grades are between 0-10 scale
- **📈 Visual Results**: Color-coded SGPA results with performance indicators
- **🔔 Student Notice**: Built-in warning for Sahyadri College students only

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

## 📊 Grade Scale

The calculator uses a 10-point scale:
- **Range**: 0.0 - 10.0 (decimal values supported)
- **Examples**: 8.5, 7.75, 9.0, 6.5

## 🧮 SGPA Formula

```
SGPA = Σ(Credits × Grade) / Σ(Credits)
```

Where:
- **Credits**: Credit weight of each subject
- **Grade**: Your grade in that subject (0-10 scale)

## 🎯 Performance Indicators

- **9.0+**: Excellent (Green) 🟢
- **8.0-8.9**: Very Good (Blue) 🔵
- **7.0-7.9**: Good (Yellow) 🟡
- **6.0-6.9**: Average (Orange) 🟠
- **<6.0**: Needs Improvement (Red) 🔴

## 🌐 Deployment

This project is deployed on Vercel:

- **Live URL**: [Your Vercel URL here]
- **GitHub Repository**: https://github.com/Tejas1546/sgpa-calci
- **Automatic Deployments**: Every push to main branch triggers deployment

### Deploy Your Own

1. Fork this repository
2. Connect to Vercel
3. Deploy automatically

## 📊 Analytics

This project includes Vercel Web Analytics to track usage and performance metrics.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- **For Sahyadri College Students**: This calculator is specifically designed for your curriculum
- **Issues**: Please open an issue on GitHub for bugs or feature requests
- **Questions**: Feel free to reach out through GitHub discussions

## 🙏 Acknowledgments

- Sahyadri College for the curriculum structure
- Next.js team for the amazing framework
- Vercel for hosting and analytics
- Tailwind CSS for the beautiful styling

---

**Note**: This calculator is specifically designed for Sahyadri College students. Please ensure you're using the correct subjects and credits for your curriculum. 