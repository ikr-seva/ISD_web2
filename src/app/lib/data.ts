export interface DebateEvent {
  id: string;
  title: string;
  description: string;
  category: string;
  eventDate: string;
  location: string;
  proSchool: {
    id: string;
    name: string;
    team: string[];
  };
  conSchool: {
    id: string;
    name: string;
    team: string[];
  };
  judgePanel: string[];
  summary: string;
  keyArgumentsPro: string[];
  keyArgumentsCon: string;
  reflectionCount: number;
}

export interface Reflection {
  id: string;
  debateId: string;
  author: string;
  school: string;
  content: string;
  createdAt: string;
  type: "observation" | "question" | "analysis" | "interpretation";
}

export interface School {
  id: string;
  name: string;
  location: string;
  studentsCount: number;
  contactStatus: "identified" | "contacted" | "participating";
}

export interface Feedback {
  id: string;
  category: "organization" | "clarity" | "website" | "content";
  author: string;
  content: string;
  createdAt: string;
  status: "under-review" | "acknowledged";
}

// Mock data - Currently empty as initiative is in foundational phase
export const mockDebateEvents: DebateEvent[] = [];

export const mockReflections: Record<string, Reflection[]> = {};

// Potential participating schools (city-based public schools)
export const mockSchools: School[] = [
  {
    id: "1",
    name: "Asia School",
    location: "Djizakh",
    studentsCount: 1450,
    contactStatus: "contacted"
  }
];