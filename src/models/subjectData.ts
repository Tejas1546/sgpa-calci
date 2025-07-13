import subjectJson from '../data/subjects.json';

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

const buildCSE2022 = () => {
  const cse2022Data: Record<string, any> = {};

  subjectJson.semesters.forEach((semData: any) => {
    const semKey = semData.semester.toString();
    if (!cse2022Data[semKey]) {
      cse2022Data[semKey] = semData.cycle ? {} : [];
    }
    
    if (semData.cycle) {
      const cycleKey = semData.cycle.toLowerCase() === 'physics' ? 'Physics Cycle' : 'Chemistry Cycle';
      cse2022Data[semKey][cycleKey] = semData.subjects;
    } else {
      cse2022Data[semKey] = semData.subjects;
    }
  });
  
  return cse2022Data;
};

export const subjectData: SubjectDataBySchema = {
  "2022": {
    CSE: buildCSE2022(),
    ISE: {},
    ECE: {},
    MRE: {}
  },
  "2024": {
    CSE: {},
    ISE: {},
    ECE: {},
    MRE: {}
  }
};