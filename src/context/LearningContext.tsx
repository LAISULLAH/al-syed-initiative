import React, { createContext, useContext, useState, useEffect } from 'react';
import { learningService } from '../services/learningService';
import { UserProgress, UserAchievement } from '../types';

interface LearningContextType {
  progressMap: Record<string, UserProgress>;
  achievements: UserAchievement[];
  getCourseProgress: (courseId: string) => UserProgress;
  toggleLessonComplete: (courseId: string, lessonId: string, totalLessons: number) => void;
  getNotes: (courseId: string, lessonId: string) => string;
  saveNotes: (courseId: string, lessonId: string, content: string) => void;
  refreshProgress: () => void;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progressMap, setProgressMap] = useState<Record<string, UserProgress>>({});
  const [achievements, setAchievements] = useState<UserAchievement[]>([]);

  const refreshProgress = () => {
    setProgressMap(learningService.getProgressMap());
    setAchievements(learningService.getUserAchievements());
  };

  useEffect(() => {
    refreshProgress();
  }, []);

  const getCourseProgress = (courseId: string) => {
    return learningService.getCourseProgress(courseId);
  };

  const toggleLessonComplete = (courseId: string, lessonId: string, totalLessons: number) => {
    const updated = learningService.toggleLessonComplete(courseId, lessonId, totalLessons);
    setProgressMap((prev) => ({ ...prev, [courseId]: updated }));
  };

  const getNotes = (courseId: string, lessonId: string) => {
    return learningService.getNotes(courseId, lessonId);
  };

  const saveNotes = (courseId: string, lessonId: string, content: string) => {
    learningService.saveNotes(courseId, lessonId, content);
  };

  return (
    <LearningContext.Provider
      value={{
        progressMap,
        achievements,
        getCourseProgress,
        toggleLessonComplete,
        getNotes,
        saveNotes,
        refreshProgress
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
