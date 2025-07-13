export interface Subject {
  name: string;
  credits: number;
}

export interface SubjectDataBySchema {
  [schema: string]: {
    [department: string]: {
      [semester: string]: Subject[] | {
        [subBranch: string]: Subject[];
      } | {
        [cycle: string]: Subject[];
      };
    };
  };
}

export const subjectData: SubjectDataBySchema = {
  "2022": {
    CSE: {
      "1": {
        "Physics Cycle": [
          { name: "Technical English I", credits: 1 },
          { name: "Scientific foundations of Health", credits: 1 },
          { name: "Applied Mathematics I", credits: 4 },
          { name: "Principles of Programming with C", credits: 3 },
          { name: "Introduction to Electronics Engineering", credits: 3 },
          { name: "Engineering Physics", credits: 4 },
          { name: "Kannada", credits: 1 },
          { name: "Fundamentals of Industrial Automation Modelling", credits: 3 }
        ],
        "Chemistry Cycle": [
          { name: "Applied Mathematics II", credits: 4 },
          { name: "Engineering Chemistry", credits: 4 },
          { name: "Introduction to Electrical Engineering", credits: 3 },
          { name: "Introduction to Sustainable Infrastructure Technologies", credits: 3 },
          { name: "Technical English II", credits: 1 },
          { name: "Constitution of India, Professional Ethics and Cyber Law", credits: 1 },
          { name: "Innovation and Design Thinking", credits: 1 },
          { name: "Computer Aided Engineering Drawing", credits: 3 }
        ]
      },
      "2": {
        "Physics Cycle": [
          { name: "Technical English I", credits: 1 },
          { name: "Scientific foundations of Health", credits: 1 },
          { name: "Applied Mathematics I", credits: 4 },
          { name: "Principles of Programming with C", credits: 3 },
          { name: "Introduction to Electronics Engineering", credits: 3 },
          { name: "Engineering Physics", credits: 4 },
          { name: "Kannada", credits: 1 },
          { name: "Fundamentals of Industrial Automation Modelling", credits: 3 }
        ],
        "Chemistry Cycle": [
          { name: "Applied Mathematics II", credits: 4 },
          { name: "Engineering Chemistry", credits: 4 },
          { name: "Introduction to Electrical Engineering", credits: 3 },
          { name: "Introduction to Sustainable Infrastructure Technologies", credits: 3 },
          { name: "Technical English II", credits: 1 },
          { name: "Constitution of India, Professional Ethics and Cyber Law", credits: 1 },
          { name: "Innovation and Design Thinking", credits: 1 },
          { name: "Computer Aided Engineering Drawing", credits: 3 }
        ]
      },
      "3": [
        { name: "Computational Discrete Mathematics", credits: 3 },
        { name: "Logic Design and Embedded", credits: 4 },
        { name: "Object Oriented Programming", credits: 4 },
        { name: "Data Structures and Applications", credits: 3 },
        { name: "Data Structures Lab", credits: 1 },
        { name: "Open Elective Course", credits: 3 },
        { name: "UHV Course", credits: 1 },
        { name: "Ability Enhancement Course", credits: 1 }
      ],
      "4": [
        { name: "Web Technology and Applications", credits: 4 },
        { name: "Operating Systems", credits: 4 },
        { name: "Computer Organization and Architecture", credits: 3 },
        { name: "Design and Analysis of Algorithms", credits: 3 },
        { name: "Design and Analysis of Algorithms Lab", credits: 1 },
        { name: "Advanced Graph Theory", credits: 3 },
        { name: "Ability Enhancement Course", credits: 1 },
        { name: "Biology for Engineers", credits: 2 },
        { name: "UHV Course", credits: 1 }
      ],
      "5": [
        { name: "Machine Learning and Applications", credits: 4 },
        { name: "Computer Networks", credits: 4 },
        { name: "Automata Theory and Computability", credits: 3 },
        { name: "Database Management Systems", credits: 3 },
        { name: "Database Management Systems Lab", credits: 1 },
        { name: "Professional Elective Course", credits: 3 },
        { name: "Mini-Project Work", credits: 2 },
        { name: "Research Methodology and IPR", credits: 1 },
        { name: "Environmental Studies", credits: 1 }
      ],
      "6": [
        { name: "Software Engineering and Project Management", credits: 3 },
        { name: "System software and Compiler", credits: 4 },
        { name: "Computer Graphics and Fundamentals of Image Processing", credits: 3 },
        { name: "Professional Elective Course", credits: 3 },
        { name: "Open Elective Course", credits: 3 },
        { name: "Project Work Phase 1", credits: 4 },
        { name: "Computer Graphics and Image Processing Laboratory", credits: 1 },
        { name: "Ability Enhancement Course", credits: 1 }
      ],
      "7": [
        { name: "Cloud Computing and Security", credits: 4 },
        { name: "Deep Learning", credits: 3 },
        { name: "Professional Elective Course", credits: 3 },
        { name: "Open Elective Course", credits: 3 },
        { name: "Deep Learning Lab", credits: 1 },
        { name: "Project Work Phase II", credits: 8 }
      ],
      "8": [
        { name: "Internship (14-20 Weeks)", credits: 10 },
        { name: "Research oriented Technical Seminar", credits: 2 }
      ]
    },
    ISE: {
      "1": {
        "Physics Cycle": [
          { name: "Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Basic Electrical Engineering", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Basic Electrical Lab", credits: 1 },
          { name: "Technical English", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Basic Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Basic Electronics Lab", credits: 1 },
          { name: "Technical English", credits: 2 }
        ]
      },
      "2": {
        "Physics Cycle": [
          { name: "Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Basic Electrical Engineering", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Basic Electrical Lab", credits: 1 },
          { name: "Technical English", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Basic Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Basic Electronics Lab", credits: 1 },
          { name: "Technical English", credits: 2 }
        ]
      },
      "4": {
        ISE: [
          { name: "Software Engineering", credits: 4 },
          { name: "Cloud Infrastructure", credits: 3 },
          { name: "Web Technologies", credits: 3 },
          { name: "Mini Project", credits: 2 },
          { name: "Database Management", credits: 3 },
          { name: "Object Oriented Programming", credits: 3 }
        ]
      },
      "6": {
        DS: [
          { name: "Software Engineering and Project Management", credits: 3 },
          { name: "Big data analytics", credits: 4 },
          { name: "Data science for engineers", credits: 3 },
          { name: "Cryptography and network security", credits: 3 },
          { name: "Open Elective Course", credits: 3 },
          { name: "Project Work Phase 1", credits: 4 },
          { name: "Data Science Laborotary", credits: 1 },
          { name: "MongoDB", credits: 1 }
        ],
        ISE: [
          { name: "Software Engineering and Project Management", credits: 3 },
          { name: "Big data analytics", credits: 4 },
          { name: "Artificial Inteligence and Machine learning", credits: 3 },
          { name: "Cryptography and network security", credits: 3 },
          { name: "Open Elective Course", credits: 3 },
          { name: "Project Work Phase 1", credits: 4 },
          { name: "Artificial Inteligence and Machine learning Laborotary", credits: 1 },
          { name: "MongoDB", credits: 1 }
        ]
      }
    },
    ECE: {
      "1": {
        "Physics Cycle": [
          { name: "Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Basic Electrical Engineering", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Basic Electrical Lab", credits: 1 },
          { name: "Technical English", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Basic Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Basic Electronics Lab", credits: 1 },
          { name: "Technical English", credits: 2 }
        ]
      },
      "2": {
        "Physics Cycle": [
          { name: "Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Basic Electrical Engineering", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Basic Electrical Lab", credits: 1 },
          { name: "Technical English", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Basic Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Basic Electronics Lab", credits: 1 },
          { name: "Technical English", credits: 2 }
        ]
      },
      "4": [
        { name: "Moderm control systems", credits: 4 },
        { name: "Microelectronic Circuits", credits: 4 },
        { name: "Principles of communication system", credits: 3 },
        { name: "Signals and Systems", credits: 3 },
        { name: "Communication laboratory", credits: 1 },
        { name: "8051 Microcontroller", credits: 3 },
        { name: "Engineering Statistics and Linear Algebra", credits: 3 },
        { name: "Electronic Devices", credits: 3 },
        { name: "PCB Design", credits: 2 },
        { name: "Biology for Engineers", credits: 2 },
        { name: "UHV Course", credits: 1 }
      ],
      "6": [
        { name: "Management Course specific to the Program", credits: 3 },
        { name: "Information Theory and Coding", credits: 4 },
        { name: "VLSI Design and Testing", credits: 4 },
        { name: "Machine Learning", credits: 3 },
        { name: "Digital Image Processing", credits: 3 },
        { name: "Open Elective Course", credits: 3 },
        { name: "Project Work Phase 1", credits: 4 },
        { name: "VLSI Design Lab", credits: 1 },
        { name: "Automotive Electronics", credits: 3 }
      ]
    },
    MRE: {
      "1": {
        "Physics Cycle": [
          { name: "Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Basic Electrical Engineering", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Basic Electrical Lab", credits: 1 },
          { name: "Technical English", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Basic Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Basic Electronics Lab", credits: 1 },
          { name: "Technical English", credits: 2 }
        ]
      },
      "2": {
        "Physics Cycle": [
          { name: "Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Basic Electrical Engineering", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Basic Electrical Lab", credits: 1 },
          { name: "Technical English", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Basic Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Basic Electronics Lab", credits: 1 },
          { name: "Technical English", credits: 2 }
        ]
      },
      "4": [
        { name: "Engineering Thermodynamics", credits: 4 },
        { name: "Mechanics of Materials", credits: 4 },
        { name: "Manufacturing Processes", credits: 3 },
        { name: "Fluid Mechanics", credits: 3 },
        { name: "Thermodynamics Lab", credits: 1 },
        { name: "Materials Lab", credits: 1 },
        { name: "Mathematics", credits: 3 },
        { name: "Open Elective Course", credits: 3 }
      ],
      "6": [
        { name: "Technology Entrepreneurship and Business", credits: 3 },
        { name: "Microcontroller and PLC", credits: 4 },
        { name: "Robot Design and Programming", credits: 4 },
        { name: "Computer Vision and Deep Learning", credits: 3 },
        { name: "Open Elective Course", credits: 3 },
        { name: "Project Work Phase 1", credits: 4 },
        { name: "Robot Programming Laboratory", credits: 1 },
        { name: "ML Using Tensorflow", credits: 3 }
      ]
    }
  },
  "2024": {
    CSE: {
      "1": {
        "Physics Cycle": [
          { name: "Advanced Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Advanced Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ]
      },
      "2": {
        "Physics Cycle": [
          { name: "Advanced Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Advanced Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ]
      },
      "4": [
        { name: "Quantum Computing Basics", credits: 4 },
        { name: "Advanced Operating Systems", credits: 4 },
        { name: "Data Structures and Algorithms II", credits: 3 },
        { name: "Cloud Computing", credits: 3 },
        { name: "Mathematics IV", credits: 3 },
        { name: "IoT Fundamentals", credits: 2 },
        { name: "Professional Ethics", credits: 1 }
      ],
      "6": [
        { name: "Machine Learning", credits: 4 },
        { name: "Blockchain Technology", credits: 3 },
        { name: "Cyber Security", credits: 3 },
        { name: "Mobile Application Development", credits: 3 },
        { name: "Open Elective II", credits: 3 },
        { name: "Project Work Phase 1", credits: 4 },
        { name: "ML Lab", credits: 1 }
      ]
    },
    ISE: {
      "1": {
        "Physics Cycle": [
          { name: "Advanced Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Advanced Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ]
      },
      "2": {
        "Physics Cycle": [
          { name: "Advanced Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Advanced Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ]
      },
      "4": [
        { name: "Software Design Patterns", credits: 4 },
        { name: "Cloud Security", credits: 3 },
        { name: "Web Frameworks", credits: 3 },
        { name: "Mini Project II", credits: 2 },
        { name: "Database Systems", credits: 3 },
        { name: "Python Programming", credits: 3 }
      ],
      "6": [
        { name: "AI and Deep Learning", credits: 4 },
        { name: "Cloud Native Applications", credits: 3 },
        { name: "Cyber Law", credits: 2 },
        { name: "Open Elective III", credits: 3 },
        { name: "Project Work Phase 1", credits: 4 },
        { name: "AI Lab", credits: 1 },
        { name: "DevOps", credits: 3 }
      ]
    },
    ECE: {
      "1": {
        "Physics Cycle": [
          { name: "Advanced Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Advanced Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ]
      },
      "2": {
        "Physics Cycle": [
          { name: "Advanced Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Advanced Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ]
      },
      "4": [
        { name: "Embedded Systems", credits: 4 },
        { name: "Analog Electronics", credits: 4 },
        { name: "Digital Signal Processing", credits: 3 },
        { name: "Wireless Communication", credits: 3 },
        { name: "Electronics Lab", credits: 1 },
        { name: "Mathematics for ECE", credits: 3 },
        { name: "PCB Design II", credits: 2 }
      ],
      "6": [
        { name: "VLSI Design", credits: 4 },
        { name: "IoT for ECE", credits: 3 },
        { name: "Robotics", credits: 3 },
        { name: "Open Elective IV", credits: 3 },
        { name: "Project Work Phase 1", credits: 4 },
        { name: "VLSI Lab", credits: 1 },
        { name: "Automotive Electronics II", credits: 3 }
      ]
    },
    MRE: {
      "1": {
        "Physics Cycle": [
          { name: "Advanced Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Advanced Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ]
      },
      "2": {
        "Physics Cycle": [
          { name: "Advanced Engineering Physics", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Physics Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ],
        "Chemistry Cycle": [
          { name: "Advanced Engineering Chemistry", credits: 4 },
          { name: "Engineering Mathematics I", credits: 4 },
          { name: "Digital Electronics", credits: 3 },
          { name: "Engineering Drawing", credits: 2 },
          { name: "Chemistry Lab", credits: 1 },
          { name: "Digital Electronics Lab", credits: 1 },
          { name: "Technical Communication", credits: 2 }
        ]
      },
      "4": [
        { name: "Thermal Engineering", credits: 4 },
        { name: "Material Science", credits: 4 },
        { name: "Robotics Fundamentals", credits: 3 },
        { name: "Fluid Power", credits: 3 },
        { name: "Thermal Lab", credits: 1 },
        { name: "Materials Lab II", credits: 1 },
        { name: "Mathematics for MRE", credits: 3 }
      ],
      "6": [
        { name: "Industrial Automation", credits: 4 },
        { name: "Microcontrollers II", credits: 3 },
        { name: "Robot Programming II", credits: 3 },
        { name: "Computer Vision", credits: 3 },
        { name: "Open Elective MRE", credits: 3 },
        { name: "Project Work Phase 1", credits: 4 },
        { name: "Automation Lab", credits: 1 }
      ]
    }
  }
}; 