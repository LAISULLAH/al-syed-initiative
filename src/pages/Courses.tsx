import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  LayoutGrid, 
  List, 
  RefreshCw, 
  BookOpen, 
  X, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Award, 
  Video, 
  CheckCircle2, 
  Sparkles,
  SlidersHorizontal,
  FileText
} from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { CourseCard } from '../components/common/CourseCard';
import { Skeleton } from '../components/ui/Skeleton';
import { Button } from '../components/ui/Button';
import { courseService, CourseFilterParams } from '../services/courseService';
import { Course, CourseCategory, CourseDifficulty } from '../types';
import { Reveal, RevealGroup, Typewriter } from '../components/common/Reveal';
import { LIVE_CLASSES_TRACKS } from '../data/coursesData';

export const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'All'>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<CourseDifficulty | 'All'>('All');
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'duration'>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCatalogTab, setActiveCatalogTab] = useState<'courses' | 'cohorts'>('courses');

  const categories: (CourseCategory | 'All')[] = [
    'All',
    'OSINT Masterclass',
    'Cohort Archive',
  ];

  const difficulties: (CourseDifficulty | 'All')[] = [
    'All',
    'Beginner',
    'Intermediate',
    'Advanced',
  ];

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const params: CourseFilterParams = {
        searchQuery,
        category: selectedCategory,
        difficulty: selectedDifficulty,
        sortBy,
      };
      const data = await courseService.getAllCourses(params);
      setCourses(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || selectedDifficulty !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setSortBy('popular');
  };

  const flagshipCourse = useMemo(() => {
    return courses.find((c) => c.featured) || courses[0];
  }, [courses]);

  return (
    <PageContainer>
      <div className="max-w-4xl pt-4 pb-10">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-xs text-mono-300 uppercase tracking-widest font-semibold inline-flex items-center">
            <Typewriter text="ACADEMY CURRICULUM // OPEN-SOURCE INTELLIGENCE" speedMs={20} />
          </span>
        </div>

        <Reveal as="h1" className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-5">
          OSINT Training Programs
        </Reveal>

        <Reveal as="p" delayMs={100} className="text-base sm:text-lg text-mono-300 font-normal leading-relaxed max-w-2xl">
          Specialized open-source intelligence training, persona unmasking, and target profiling programs engineered by ADL Front researchers for lawful investigation and ethical accountability.
        </Reveal>

        <RevealGroup className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 mt-8 border-t border-white/[0.08]">
          {[
            { label: 'Controlled LMS Access', sub: 'Dedicated Student Portal' },
            { label: 'Live Cohort Classes', sub: 'Weekend Mentor Sessions' },
            { label: 'Practical Workflows', sub: 'Hands-on Labs & Targets' },
            { label: 'Official Certificate', sub: 'Authorized Recognition' },
          ].map((item) => (
            <div key={item.label} className="reveal-item p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center gap-1.5 text-xs text-white font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-mono-400 shrink-0" />
                <span>{item.label}</span>
              </div>
              <p className="text-[10px] font-mono text-mono-500 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </RevealGroup>
      </div>

      {flagshipCourse && !hasActiveFilters && activeCatalogTab === 'courses' && (
        <div className="relative mb-14 rounded-3xl bg-[#080808] border border-white/15 p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
          <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  Coming Soon — Batch IV
                </span>
                <span className="text-xs font-mono text-mono-400">
                  Flagship Professional Training
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {flagshipCourse.title}
              </h2>

              <p className="text-sm sm:text-base text-mono-300 leading-relaxed font-normal max-w-2xl">
                {flagshipCourse.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {[
                  '01. Foundation & OPSEC Setup',
                  '02. Reconnaissance & Surface Mapping',
                  '03. Online Identity & SOCMINT',
                  '04. Evidence Dossiers & Verification',
                ].map((mod) => (
                  <span
                    key={mod}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-mono-300"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <div className="space-y-2 text-xs font-mono text-mono-400">
                <div className="flex justify-between pb-2 border-b border-white/[0.06]">
                  <span>Duration:</span>
                  <span className="text-white font-medium">{flagshipCourse.duration}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/[0.06]">
                  <span>Total Content:</span>
                  <span className="text-white font-medium">{flagshipCourse.totalLessons} Lessons ({flagshipCourse.hoursTotal}h)</span>
                </div>
                <div className="flex justify-between">
                  <span>Recognition:</span>
                  <span className="text-white font-medium">Official Certificate</span>
                </div>
              </div>

              <Link
                to={`/courses/${flagshipCourse.slug}`}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-mono-100 transition-all shadow-sm active:scale-[0.98]"
              >
                <span>View Syllabus & Enroll</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-8">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveCatalogTab('courses')}
            className={`pb-2 text-sm font-display font-semibold transition-all relative ${
              activeCatalogTab === 'courses'
                ? 'text-white'
                : 'text-mono-500 hover:text-mono-200'
            }`}
          >
            All Courses ({courses.length})
            {activeCatalogTab === 'courses' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveCatalogTab('cohorts')}
            className={`pb-2 text-sm font-display font-semibold transition-all relative ${
              activeCatalogTab === 'cohorts'
                ? 'text-white'
                : 'text-mono-500 hover:text-mono-200'
            }`}
          >
            Live Cohorts & Batch Tracks ({LIVE_CLASSES_TRACKS.length})
            {activeCatalogTab === 'cohorts' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
            )}
          </button>
        </div>

        {activeCatalogTab === 'courses' && (
          <div className="hidden sm:flex items-center p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-white text-black font-bold' : 'text-mono-400 hover:text-white'
              }`}
              title="Grid View"
              aria-label="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-white text-black font-bold' : 'text-mono-400 hover:text-white'
              }`}
              title="List View"
              aria-label="List View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {activeCatalogTab === 'courses' && (
        <div className="glass-card p-4 sm:p-6 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-mono-500" />
              <input
                type="text"
                placeholder="Search programs by title, topic, or keyword (e.g., OSINT, Recon, Dorking)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 bg-[#050505] border border-white/10 rounded-xl text-sm text-white placeholder-mono-500 focus:outline-none focus:border-white/40 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-mono-500 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value as any)}
                className="bg-[#050505] border border-white/10 rounded-xl text-xs sm:text-sm text-mono-300 px-4 py-3 focus:outline-none focus:border-white/40 cursor-pointer"
              >
                {difficulties.map((diff) => (
                  <option key={diff} value={diff}>
                    {diff === 'All' ? 'All Difficulties' : diff}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#050505] border border-white/10 rounded-xl text-xs sm:text-sm text-mono-300 px-4 py-3 focus:outline-none focus:border-white/40 cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Duration (Longest)</option>
              </select>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="px-3.5 py-3 text-xs font-mono text-mono-400 hover:text-white bg-white/5 border border-white/10 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.06]">
            <span className="text-xs font-mono text-mono-500 mr-2">Category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all duration-150 ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:border-white/25 text-mono-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

            {activeCatalogTab === 'courses' ? (
        isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-96 rounded-3xl bg-[#080808] border border-white/10 p-6 space-y-4">
                <Skeleton className="h-6 w-1/3 bg-white/5" />
                <Skeleton className="h-8 w-3/4 bg-white/5" />
                <Skeleton className="h-14 w-full bg-white/5" />
                <div className="pt-16">
                  <Skeleton className="h-10 w-full bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        ) : courses.length > 0 ? (
          <RevealGroup
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'
                : 'space-y-4'
            }
          >
            {courses.map((course) => (
              <div key={course.id} className="reveal-item">
                <CourseCard course={course} viewMode={viewMode} />
              </div>
            ))}
          </RevealGroup>
        ) : (
          <div className="bg-[#080808] border border-white/10 rounded-3xl p-12 text-center max-w-lg mx-auto">
            <BookOpen className="w-12 h-12 text-mono-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No programs match your filters</h3>
            <p className="text-sm text-mono-400 mb-6 leading-relaxed">
              Try adjusting your search terms, clearing selected categories, or resetting filters.
            </p>
            <Button variant="outline" size="sm" onClick={resetFilters} leftIcon={<RefreshCw className="w-3.5 h-3.5" />}>
              Reset All Filters
            </Button>
          </div>
        )
      ) : (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 max-w-3xl mb-8">
            <Reveal as="h3" className="font-display text-xl font-bold text-white mb-2">
              Live Interactive OSINT Class Tracks
            </Reveal>
            <Reveal as="p" delayMs={100} className="text-sm text-mono-400 leading-relaxed">
              Every cohort features dedicated live weekend interactive sessions with instructor demonstration, practical workflow walkthroughs, and live doubt resolution.
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIVE_CLASSES_TRACKS.map((track) => (
              <div
                key={track.id}
                className="reveal-item rounded-3xl bg-[#080808] border border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-white/25 transition-all shadow-[0_15px_40px_-20px_rgba(0,0,0,0.9)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-mono-300">
                      {track.month}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        track.status === 'Coming Soon'
                          ? 'bg-white text-black'
                          : 'bg-white/10 text-mono-300'
                      }`}
                    >
                      {track.status}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                    {track.batch}
                  </h4>

                  <p className="text-xs font-mono text-mono-400 mb-4">
                    Track: {track.trackName}
                  </p>

                  <div className="space-y-2 text-xs font-mono text-mono-400 pt-3 border-t border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-mono-500" />
                      <span>{track.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-mono-500" />
                      <span>{track.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <Link
                    to="/courses/osint-professional-training-program-batch-iv"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white/[0.05] border border-white/10 text-white font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-200"
                  >
                    <span>View Track Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      )}

      <div className="mt-20 pt-12 border-t border-white/[0.08]">
        <div className="max-w-3xl mb-8">
          <span className="font-mono text-xs text-mono-500 uppercase tracking-widest block mb-2">
            Educational Methodology
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">
            From Enrollment to Verified Recognition
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Curriculum & Setup',
              desc: 'Direct enrollment unlocks the student dashboard with modular video lessons, OPSEC environments, and resource repositories.',
            },
            {
              step: '02',
              title: 'Live Cohort Practice',
              desc: 'Participate in live weekend classes applying reconnaissance techniques to real scenarios with direct instructor guidance.',
            },
            {
              step: '03',
              title: 'Recognition & Archive',
              desc: 'Submit practical investigation dossiers to earn the official Certificate of Excellence and eligibility for the Hall of Fame.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-[#080808] border border-white/[0.08] hover:border-white/20 transition-all"
            >
              <span className="font-mono text-2xl font-black text-mono-700 block mb-2">
                {item.step}
              </span>
              <h4 className="font-display text-base font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-mono-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};
