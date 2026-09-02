import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Star, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Course } from '../../types';
import { Badge } from '../ui/Badge';

interface CourseCardProps {
  course: Course;
  viewMode?: 'grid' | 'list';
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <div className="group relative bg-[#080808] border border-white/[0.08] rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-white/25 hover:bg-[#0e0e0e] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]">
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-mono-300 font-semibold">
              {course.category}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-mono-400">
              {course.difficulty}
            </span>
            {course.featured && (
              <span className="px-2.5 py-1 rounded-md bg-white text-black text-[10px] font-mono font-bold uppercase tracking-wider">
                Flagship Cohort
              </span>
            )}
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-mono-200 transition-colors tracking-tight leading-snug">
            <Link to={`/courses/${course.slug}`}>{course.title}</Link>
          </h3>

          <p className="text-sm text-mono-300 line-clamp-2 max-w-3xl leading-relaxed font-normal">
            {course.description || course.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs text-mono-400 font-mono">
            <span className="flex items-center gap-1.5 text-mono-300">
              <Clock className="w-3.5 h-3.5 text-mono-400" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5 text-mono-300">
              <BookOpen className="w-3.5 h-3.5 text-mono-400" />
              {course.totalLessons} Lessons ({course.hoursTotal}h)
            </span>
            <span className="flex items-center gap-1.5 text-white font-medium">
              <Star className="w-3.5 h-3.5 fill-white text-white" />
              {course.rating.toFixed(2)} ({course.reviewCount} reviews)
            </span>
            <span className="flex items-center gap-1.5 text-mono-400 hidden sm:flex">
              <ShieldCheck className="w-3.5 h-3.5 text-mono-400" />
              {course.instructor.name}
            </span>
          </div>
        </div>

        <div className="w-full lg:w-auto shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/[0.08]">
          <Link
            to={`/courses/${course.slug}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white text-black font-semibold text-xs rounded-xl hover:bg-mono-100 transition-all duration-200 shadow-sm active:scale-[0.98]"
          >
            <span>View Syllabus</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative h-full flex flex-col justify-between bg-[#080808] border border-white/[0.08] rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:border-white/25 hover:bg-[#0e0e0e] shadow-[0_15px_40px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-mono-300 font-semibold">
              {course.category}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-mono-400">
              {course.difficulty}
            </span>
          </div>

          {course.featured && (
            <span className="px-2.5 py-0.5 rounded-full bg-white text-black text-[9px] font-mono font-bold uppercase tracking-widest shadow-sm">
              Flagship
            </span>
          )}
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-mono-200 transition-colors tracking-tight leading-snug mb-2.5">
          <Link to={`/courses/${course.slug}`}>
            {course.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-mono-400 line-clamp-3 leading-relaxed font-normal mb-6">
          {course.tagline || course.description}
        </p>
      </div>

      <div className="mt-auto pt-5 border-t border-white/[0.08] space-y-4">
        <div className="grid grid-cols-2 gap-2 text-xs font-mono text-mono-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-mono-500 shrink-0" />
            <span className="truncate">{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-mono-500 shrink-0" />
            <span className="truncate">{course.totalLessons} Lessons</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono pt-1 text-mono-400">
          <div className="flex items-center gap-1.5 truncate max-w-[170px]">
            <ShieldCheck className="w-3.5 h-3.5 text-mono-500 shrink-0" />
            <span className="truncate text-mono-300">{course.instructor.name}</span>
          </div>
          <div className="flex items-center gap-1 text-white font-medium shrink-0">
            <Star className="w-3.5 h-3.5 fill-white text-white" />
            <span>{course.rating.toFixed(2)}</span>
          </div>
        </div>

        <Link
          to={`/courses/${course.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white/[0.04] border border-white/10 text-white font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-200 shadow-sm active:scale-[0.98]"
        >
          <span>View Syllabus</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
};