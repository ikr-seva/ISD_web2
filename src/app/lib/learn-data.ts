export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "debate-principles" | "critical-thinking" | "communication";
  content: string;
  readTime: string;
  author: string;
  date: string;
}

export interface Discussion {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  school: string;
  date: string;
  replies: number;
  views: number;
}

export const mockResources: Resource[] = [
  {
    id: "1",
    title: "Understanding Debate Formats and Structure",
    description: "An introduction to formal debate formats, speaking roles, and time management in academic discussions.",
    category: "debate-principles",
    content: "Formal debate follows a structured format designed to ensure fairness and clarity...",
    readTime: "8 min read",
    author: "Dr. Sarah Mitchell",
    date: "2026-02-15"
  },
  {
    id: "2",
    title: "Building Logical Arguments",
    description: "Learn how to construct sound arguments using evidence, reasoning, and clear structure.",
    category: "critical-thinking",
    content: "Effective argumentation requires three key components: a clear claim, supporting evidence...",
    readTime: "10 min read",
    author: "Prof. James Reynolds",
    date: "2026-02-10"
  },
  {
    id: "3",
    title: "Active Listening in Academic Discussions",
    description: "Developing the essential skill of truly hearing and understanding opposing viewpoints.",
    category: "communication",
    content: "Active listening goes beyond hearing words—it involves comprehension, interpretation...",
    readTime: "6 min read",
    author: "Dr. Emily Chen",
    date: "2026-02-08"
  },
  {
    id: "6",
    title: "Identifying Logical Fallacies",
    description: "Common errors in reasoning and how to recognize them in arguments.",
    category: "critical-thinking",
    content: "Logical fallacies are flaws in reasoning that weaken arguments. Common examples include...",
    readTime: "7 min read",
    author: "Dr. Robert Taylor",
    date: "2026-01-28"
  },
  {
    id: "7",
    title: "Public Speaking Confidence",
    description: "Building confidence and presence when presenting arguments to an audience.",
    category: "communication",
    content: "Confidence in public speaking develops through preparation and practice. Key strategies include...",
    readTime: "8 min read",
    author: "Dr. Lisa Anderson",
    date: "2026-01-25"
  },
  {
    id: "8",
    title: "Cross-Examination Techniques",
    description: "Asking effective questions and responding thoughtfully during debate rounds.",
    category: "debate-principles",
    content: "Cross-examination is a critical phase where participants can clarify points and challenge...",
    readTime: "11 min read",
    author: "Prof. David Martinez",
    date: "2026-01-20"
  }
];

export const mockDiscussions: Discussion[] = [
  {
    id: "1",
    title: "What Makes a Strong Opening Statement?",
    description: "Exploring the elements of effective debate openings and how to capture audience attention while establishing credibility.",
    category: "Debate Strategy",
    author: "Alexandra Kim",
    school: "Riverside Academy",
    date: "2026-02-20",
    replies: 12,
    views: 245
  },
  {
    id: "2",
    title: "Understanding Different Perspectives on Technology in Education",
    description: "A discussion about various viewpoints regarding educational technology, examining benefits, challenges, and considerations.",
    category: "Educational Topics",
    author: "Marcus Thompson",
    school: "Oakwood Prep",
    date: "2026-02-18",
    replies: 23,
    views: 389
  },
  {
    id: "3",
    title: "How Do You Overcome Speaking Anxiety?",
    description: "Sharing experiences and strategies for managing nervousness when speaking in formal settings.",
    category: "Communication Skills",
    author: "Sophie Martinez",
    school: "Greenfield School",
    date: "2026-02-17",
    replies: 31,
    views: 512
  },
  {
    id: "4",
    title: "Exploring the Ethics of Debate Topics",
    description: "Discussion about how to approach sensitive topics respectfully and thoughtfully in academic settings.",
    category: "Academic Ethics",
    author: "James Patterson",
    school: "Riverside Academy",
    date: "2026-02-15",
    replies: 18,
    views: 301
  },
  {
    id: "5",
    title: "What Are the Best Resources for Research?",
    description: "Students sharing their favorite academic databases, journals, and research tools for debate preparation.",
    category: "Research Methods",
    author: "Emma Wilson",
    school: "Lincoln Heights",
    date: "2026-02-12",
    replies: 27,
    views: 421
  },
  {
    id: "6",
    title: "Understanding Climate Policy from Multiple Angles",
    description: "An exploratory discussion examining different approaches to environmental policy without advocating for specific positions.",
    category: "Environmental Topics",
    author: "Ryan Chen",
    school: "Oakwood Prep",
    date: "2026-02-10",
    replies: 19,
    views: 367
  }
];

export const resourceCategories = [
  { id: "debate-principles", name: "Debate Principles", description: "Fundamental concepts and formats" },
  { id: "critical-thinking", name: "Critical Thinking", description: "Logic, reasoning, and analysis" },
  { id: "communication", name: "Communication Skills", description: "Speaking, listening, and presentation" }
];
