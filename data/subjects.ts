export interface Subject {
  name: string;
  credits: number;
}

export interface SubjectData {
  [department: string]: {
    [semester: string]: Subject[] | {
      [subBranch: string]: Subject[];
    };
  };
}

export const subjectData: SubjectData = {
  CSE: {
    "4": [
      { name: "Web Technology and Applications", credits: 4 },
      { name: "Operating Systems", credits: 4 },
      { name: "Computer Organization and Architecture", credits: 3 },
      { name: "Design and Analysis of Algorithms", credits: 3 },
      { name: "Design and Analysis of Algorithms lab", credits: 1 },
      { name: "Mathematics", credits: 3 },
      { name: "Ability Enhancement Course", credits: 1 },
      { name: "Biology for Engineers", credits: 2 },
      { name: "UHV Course", credits: 1 }
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
    ]
  },
  ISE: {
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
        { name: "data science laborotary", credits: 1 },
        { name: "MongoDB", credits: 1 }
      ],
      ISE: [
        { name: "Software Engineering and Project Management", credits: 3 },
        { name: "Big data analytics", credits: 4 },
        { name: "Artificial Inteligence and Machine learning", credits: 3 },
        { name: "Cryptography and network security", credits: 3 },
        { name: "Open Elective Course", credits: 3 },
        { name: "Project Work Phase 1", credits: 4 },
        { name: "Artificial Inteligence and Machine learning laborotary", credits: 1 },
        { name: "MongoDB", credits: 1 }
      ]
    }
  },
  ECE: {
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
  }
}; 