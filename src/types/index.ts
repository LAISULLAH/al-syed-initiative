export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  summary: string;
  isFreePreview?: boolean;
  notesMarkdown?: string;
  resources?: { id: string; name: string; title: string; type: string; url: string }[];
}

export interface CourseModule {
  id: string;
  moduleNumber: string;
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  bio: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  difficulty: string;
  duration: string;
  hoursTotal: number;
  totalLessons: number;
  totalModules: number;
  instructor: Instructor;
  rating: number;
  reviewCount: number;
  enrolledCount: number;
  tags: string[];
  featured: boolean;
  batchSchedule?: string;
  priceType?: string;
  learningOutcomes: string[];
  prerequisites: string[];
  targetAudience: string[];
  modules: CourseModule[];
}

export type CourseCategory = string;
export type CourseDifficulty = string;

export interface UserProgress {
  courseId: string;
  completedLessonIds: string[];
  lastLessonId?: string;
  lastAccessedAt?: string;
  lastActiveAt?: string;
  startedAt?: string;
  progressPercentage: number;
  isCompleted?: boolean;
  notes?: { [lessonId: string]: string };
}

export interface UserAchievement {
  id: string;
  courseId?: string;
  courseTitle?: string;
  title?: string;
  category?: string;
  description?: string;
  credentialId: string;
  issuedDate?: string;
  issueDate?: string;
  issuerName?: string;
  issuer?: string;
  verificationUrl?: string;
}

export interface UserNote {
  id?: string;
  courseId?: string;
  lessonId?: string;
  content: string;
  updatedAt: string;
}

export interface HallOfFameStudent {
  id: string;
  name: string;
  role: string;
  cohort: string;
  year: string;
  caseStudySummary: string;
  verifiedBadges: string[];
  featured?: boolean;
  achievementTitle?: string;
  contributionArea?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PlatformStat {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  role: string;
  cohort: string;
  affiliation?: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatarInitials: string;
  enrolledCourseIds: string[];
}