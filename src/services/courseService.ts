import { Course, CourseCategory, CourseDifficulty } from '../types';
import { COURSES_DATA } from '../data/coursesData';

export interface CourseFilterParams {
  searchQuery?: string;
  category?: CourseCategory | 'All';
  difficulty?: CourseDifficulty | 'All';
  sortBy?: 'popular' | 'rating' | 'duration' | 'newest';
}

export const courseService = {
  async getAllCourses(params?: CourseFilterParams): Promise<Course[]> {
    // Simulate brief network latency for realistic feel
    await new Promise((resolve) => setTimeout(resolve, 80));
    
    let result = [...COURSES_DATA];

    if (params?.searchQuery && params.searchQuery.trim() !== '') {
      const q = params.searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.tagline.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (params?.category && params.category !== 'All') {
      result = result.filter((c) => c.category === params.category);
    }

    if (params?.difficulty && params.difficulty !== 'All') {
      result = result.filter((c) => c.difficulty === params.difficulty);
    }

    if (params?.sortBy) {
      if (params.sortBy === 'rating') {
        result.sort((a, b) => b.rating - a.rating);
      } else if (params.sortBy === 'duration') {
        result.sort((a, b) => b.hoursTotal - a.hoursTotal);
      } else if (params.sortBy === 'popular') {
        result.sort((a, b) => b.enrolledCount - a.enrolledCount);
      }
    }

    return result;
  },

  async getCourseBySlug(slug: string): Promise<Course | null> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    return COURSES_DATA.find((c) => c.slug === slug || c.id === slug) || null;
  },

  async getFeaturedCourses(): Promise<Course[]> {
    return COURSES_DATA.filter((c) => c.featured);
  }
};
