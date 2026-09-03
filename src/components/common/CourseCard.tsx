import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Star, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Course } from '../../types';
import { Badge } from '../ui/Badge';
import { CountUp } from './Reveal';

interface CourseCardProps {
  course: Course;
  viewMode?: 'grid' | 'list';
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, viewMode = 'grid' }) => {
  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'intermediate':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'advanced':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-white/[0.04] text-mono-300 border-white/10';
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="glass-card group p-6 sm:p-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono uppercase tracking-wider text-mono-300 font-semibold">
              {course.category}
            </span>
            <span className={`px-2.5 py-1 rounded-full border text-[10px] font-mono uppercase tracking-wider font-semibold ${getDifficultyBadge(course.difficulty)}`}>
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
              <span className="mono-index mr-1">MODULES</span>
              <CountUp end={course.totalLessons} /> Lessons ({course.hoursTotal}h)
            </span>
            <span className="flex items-center gap-1.5 text-white font-medium">
              <Star className="w-3.5 h-3.5 fill-white text-white" />
              {course.rating.toFixed(2)} (<CountUp end={course.reviewCount} /> reviews)
            </span>
            <span className="flex items-center gap-1.5 text-mono-400 hidden sm:flex">
              <ShieldCheck className="w-3.5 h-3.5 text-mono-400" />
              <span className="mono-index mr-1">LEAD</span>
              {course.instructor.name}
            </span>
          </div>
        </div>

        <div className="w-full lg:w-auto shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/[0.08]">
          <Link
            to={`/courses/${course.slug}`}
            className="portfolio-btn-primary btn-shine-sweep w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
          >
            <span>View Syllabus</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card group h-full flex flex-col justify-between p-6 sm:p-7">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono uppercase tracking-wider text-mono-300 font-semibold">
              {course.category}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-wider font-semibold ${getDifficultyBadge(course.difficulty)}`}>
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
            <span className="mono-index mr-0.5">MOD</span>
            <span className="truncate"><CountUp end={course.totalLessons} /> Lessons</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono pt-1 text-mono-400">
          <div className="flex items-center gap-1.5 truncate max-w-[170px]">
            <ShieldCheck className="w-3.5 h-3.5 text-mono-500 shrink-0" />
            <span className="mono-index mr-0.5">LEAD</span>
            <span className="truncate text-mono-300">{course.instructor.name}</span>
          </div>
          <div className="flex items-center gap-1 text-white font-medium shrink-0">
            <Star className="w-3.5 h-3.5 fill-white text-white" />
            <span>{course.rating.toFixed(2)}</span>
          </div>
        </div>

        <Link
          to={`/courses/${course.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white/[0.04] border border-white/10 text-white font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-200 shadow-sm active:scale-[0.98]"
        >
          <span>View Syllabus</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};