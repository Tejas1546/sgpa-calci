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
      DS: [
        { name: "Programming Fundamentals", credits: 4 },
        { name: "Data Structures", credits: 3 },
        { name: "Mathematics for Data Science", credits: 3 },
        { name: "Digital Electronics", credits: 3 },
        { name: "Programming Lab", credits: 1 },
        { name: "Data Structures Lab", credits: 1 }
      ],
      ISE: [
        { name: "Programming Fundamentals", credits: 4 },
        { name: "Data Structures", credits: 3 },
        { name: "Mathematics for Information Science", credits: 3 },
        { name: "Digital Electronics", credits: 3 },
        { name: "Programming Lab", credits: 1 },
        { name: "Data Structures Lab", credits: 1 }
      ]
    },
    "6": {
      DS: [
        { name: "Data Science Tools", credits: 4 },
        { name: "Data Mining", credits: 3 },
        { name: "Statistical Analysis", credits: 3 },
        { name: "Mini Project", credits: 2 },
        { name: "Database Systems", credits: 3 },
        { name: "Programming for Data Science", credits: 3 }
      ],
      ISE: [
        { name: "Software Engineering", credits: 4 },
        { name: "Cloud Infrastructure", credits: 3 },
        { name: "Web Technologies", credits: 3 },
        { name: "Mini Project", credits: 2 },
        { name: "Database Management", credits: 3 },
        { name: "Object Oriented Programming", credits: 3 }
      ]
    }
  }
}; 