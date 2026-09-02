import { UserProgress, UserNote, UserAchievement } from '../types';

const PROGRESS_STORAGE_KEY = 'alsyed_user_progress';
const NOTES_STORAGE_KEY = 'alsyed_user_notes';

const DEFAULT_PROGRESS: Record<string, UserProgress> = {
  'osint-mastery-3m': {
    courseId: 'osint-mastery-3m',
    completedLessonIds: ['les-01-01', 'les-01-02', 'les-01-03'],
    lastLessonId: 'les-01-04',
    progressPercentage: 35,
    startedAt: '2025-02-01',
    lastActiveAt: '2025-02-28',
    isCompleted: false
  },
  'socmint-deep-dive': {
    courseId: 'socmint-deep-dive',
    completedLessonIds: ['soc-les-01'],
    lastLessonId: 'soc-les-02',
    progressPercentage: 15,
    startedAt: '2025-02-15',
    lastActiveAt: '2025-02-25',
    isCompleted: false
  }
};

const DEFAULT_ACHIEVEMENTS: UserAchievement[] = [
  {
    id: 'ach-01',
    title: 'Certified OSINT Reconnaissance Specialist',
    category: 'Operational Intelligence',
    issuer: 'Al Syed Initiative / ADL Front',
    issueDate: '2025-02-18',
    credentialId: 'ASI-OSINT-2025-0982',
    verificationUrl: 'https://alsyedinitiative.com/verify/ASI-OSINT-2025-0982',
    description: 'Demonstrated mastery in passive reconnaissance, search dorking, and entity mapping.'
  },
  {
    id: 'ach-02',
    title: 'Digital Chain of Custody & Evidentiary Forensics',
    category: 'Legal Forensics',
    issuer: 'ADL Front Legal Cyber Wing',
    issueDate: '2025-01-30',
    credentialId: 'ADL-LEGAL-2025-0441',
    verificationUrl: 'https://alsyedinitiative.com/verify/ADL-LEGAL-2025-0441',
    description: 'Passed the evidentiary tamper-verification and forensic hashing assessment.'
  }
];

export const learningService = {
  getProgressMap(): Record<string, UserProgress> {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(DEFAULT_PROGRESS));
      return DEFAULT_PROGRESS;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return DEFAULT_PROGRESS;
    }
  },

  getCourseProgress(courseId: string): UserProgress {
    const map = this.getProgressMap();
    if (map[courseId]) {
      return map[courseId];
    }
    const fresh: UserProgress = {
      courseId,
      completedLessonIds: [],
      lastLessonId: '',
      progressPercentage: 0,
      startedAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
      isCompleted: false
    };
    map[courseId] = fresh;
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(map));
    return fresh;
  },

  toggleLessonComplete(courseId: string, lessonId: string, totalLessonsInCourse: number): UserProgress {
    const map = this.getProgressMap();
    const cur = map[courseId] || {
      courseId,
      completedLessonIds: [],
      lastLessonId: lessonId,
      progressPercentage: 0,
      startedAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
      isCompleted: false
    };

    const isAlready = cur.completedLessonIds.includes(lessonId);
    if (isAlready) {
      cur.completedLessonIds = cur.completedLessonIds.filter((id) => id !== lessonId);
    } else {
      cur.completedLessonIds.push(lessonId);
    }

    cur.lastLessonId = lessonId;
    cur.lastActiveAt = new Date().toISOString();
    cur.progressPercentage = Math.round((cur.completedLessonIds.length / Math.max(1, totalLessonsInCourse)) * 100);
    cur.isCompleted = cur.progressPercentage >= 100;

    map[courseId] = cur;
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(map));
    return cur;
  },

  getNotes(courseId: string, lessonId: string): string {
    const raw = localStorage.getItem(NOTES_STORAGE_KEY);
    if (!raw) return '';
    try {
      const map: Record<string, UserNote> = JSON.parse(raw);
      const key = `${courseId}_${lessonId}`;
      return map[key]?.content || '';
    } catch {
      return '';
    }
  },

  saveNotes(courseId: string, lessonId: string, content: string): void {
    const raw = localStorage.getItem(NOTES_STORAGE_KEY);
    const map: Record<string, UserNote> = raw ? JSON.parse(raw) : {};
    const key = `${courseId}_${lessonId}`;
    map[key] = {
      id: key,
      courseId,
      lessonId,
      content,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(map));
  },

  getUserAchievements(): UserAchievement[] {
    return DEFAULT_ACHIEVEMENTS;
  }
};
