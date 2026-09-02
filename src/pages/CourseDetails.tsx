import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  BookOpen,
  Star,
  CheckCircle2,
  ShieldCheck,
  Award,
  PlayCircle,
  FileDown,
  ArrowRight,
  UserCheck,
  HelpCircle,
  Check,
  ChevronDown
} from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { Accordion, AccordionItem } from '../components/ui/Accordion';
import { courseService } from '../services/courseService';
import { useAuth } from '../context/AuthContext';
import { Course } from '../types';

export const CourseDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [enrollSuccess, setEnrollSuccess] = useState(false);
  const [activeModuleIndex, setActiveModuleIndex] = useState<number | null>(0);

  const { isAuthenticated, enrollCourse, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      setIsLoading(true);
      if (slug) {
        const found = await courseService.getCourseBySlug(slug);
        setCourse(found);
      }
      setIsLoading(false);
    };
    fetchCourse();
  }, [slug]);

  if (isLoading) {
    return (
      <PageContainer>
        <div className="max-w-4xl mx-auto space-y-6 animate-pulse">
          <div className="h-10 bg-mono-900 rounded-xl w-3/4" />
          <div className="h-6 bg-mono-900 rounded-lg w-1/2" />
          <div className="h-64 bg-mono-900 rounded-2xl w-full" />
        </div>
      </PageContainer>
    );
  }

  if (!course) {
    return (
      <PageContainer>
        <div className="max-w-md mx-auto text-center py-20 bg-[#0d0d0d] border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-2">Program Not Found</h2>
          <p className="text-sm text-mono-400 mb-6">
            The requested course curriculum could not be located.
          </p>
          <Link to="/courses">
            <Button variant="primary" size="md">
              Return to Course Catalog
            </Button>
          </Link>
        </div>
      </PageContainer>
    );
  }

  const handleEnrollConfirm = () => {
    if (course) {
      enrollCourse(course.id);
      setEnrollSuccess(true);
      setTimeout(() => {
        setEnrollModalOpen(false);
        navigate('/my-learning');
      }, 1500);
    }
  };

  const isAlreadyEnrolled = user?.enrolledCourseIds?.includes(course.id);

  return (
    <PageContainer>
      <div className="border-b border-mono-800/80 pb-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="subtle" size="md">{course.category}</Badge>
              <Badge variant="outline" size="md">{course.difficulty}</Badge>
              <span className="text-xs font-mono text-mono-400 bg-mono-900 border border-mono-800 px-3 py-1 rounded-full">
                {course.batchSchedule}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-[1.1]">
              {course.title}
            </h1>

            <p className="text-base sm:text-xl text-mono-300 font-normal leading-relaxed">
              {course.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-mono-900 text-xs font-mono text-mono-400">
              <div>
                <span className="text-mono-600 block text-[10px] uppercase">Duration</span>
                <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </span>
              </div>
              <div>
                <span className="text-mono-600 block text-[10px] uppercase">Content</span>
                <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  {course.totalLessons} Lessons ({course.hoursTotal}h)
                </span>
              </div>
              <div>
                <span className="text-mono-600 block text-[10px] uppercase">Rating</span>
                <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  {course.rating.toFixed(2)} ({course.reviewCount})
                </span>
              </div>
              <div>
                <span className="text-mono-600 block text-[10px] uppercase">Enrolled</span>
                <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                  <UserCheck className="w-3.5 h-3.5" />
                  {course.enrolledCount}+ Students
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-mono-900 border border-mono-800 flex items-center justify-center font-bold text-xs text-white">
                ADL
              </div>
              <div>
                <p className="text-xs font-mono text-white font-semibold flex items-center gap-1.5">
                  <span>{course.instructor.name}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </p>
                <p className="text-[11px] font-mono text-mono-500">{course.instructor.affiliation}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#0d0d0d] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl sticky top-28">
            <div className="space-y-1">
              <span className="text-xs font-mono text-mono-400 uppercase tracking-widest block">
                Admission Status
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {course.priceType}
              </h3>
              <p className="text-xs text-mono-400 font-mono">
                Live Cohort with Direct Instructor Access
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-mono-900 text-xs text-mono-300 font-mono">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span>36 Live & Recorded Masterclasses</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span>Weekly Lab Sandboxes & Challenges</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span>ADL Capstone Legal Dossier Evaluation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span>Digital Wing Operational Recruitment</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {isAlreadyEnrolled ? (
                <Link to="/course-player" className="block">
                  <Button variant="primary" size="lg" className="w-full">
                    Resume in Classroom
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => setEnrollModalOpen(true)}
                >
                  Apply & Enroll Now
                </Button>
              )}

              <a
                href="https://wa.me/919800415583"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs font-mono text-mono-400 hover:text-white transition-colors"
              >
                Inquire via WhatsApp Desk →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8 uppercase">
          Key Learning Outcomes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.learningOutcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0d0d0d] border border-white/10 flex items-start gap-3.5"
            >
              <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-mono-300 leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase">
              Course Curriculum
            </h2>
            <p className="text-xs sm:text-sm font-mono text-mono-400 mt-1">
              {course.modules.length} Modules • {course.totalLessons} Total Lessons • {course.hoursTotal} Hours
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {course.modules.map((mod, idx) => (
            <div
              key={mod.id}
              className="border border-white/10 rounded-2xl overflow-hidden bg-[#0d0d0d]"
            >
              <button
                onClick={() => setActiveModuleIndex(activeModuleIndex === idx ? null : idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors hover:bg-mono-900/50"
              >
                <div className="flex-1 pr-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold bg-white text-black px-2.5 py-1 rounded">
                      Module {mod.moduleNumber}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {mod.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-mono-400 mt-2 font-normal">
                    {mod.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-mono-500">
                    {mod.duration}
                  </span>
                  <div className={`w-7 h-7 rounded-lg bg-mono-900 border border-mono-800 flex items-center justify-center text-mono-400 transition-transform ${activeModuleIndex === idx ? 'rotate-180 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {activeModuleIndex === idx && (
                <div className="border-t border-mono-900 p-5 sm:p-6 bg-mono-950/60 space-y-3">
                  {mod.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="p-3.5 rounded-xl bg-mono-900/40 border border-mono-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <PlayCircle className="w-4 h-4 text-mono-400 shrink-0" />
                        <div>
                          <p className="font-semibold text-white">{lesson.title}</p>
                          <p className="text-mono-500 text-[11px] line-clamp-1">{lesson.summary}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 sm:shrink-0 font-mono text-mono-400">
                        <span>{lesson.duration}</span>
                        {lesson.isFreePreview && (
                          <span className="text-[10px] bg-white/10 text-white border border-white/20 px-2 py-0.5 rounded">
                            Preview Available
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="p-8 rounded-3xl bg-[#0d0d0d] border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
            Prerequisites
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-mono-300">
            {course.prerequisites.map((req, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-white font-mono">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-[#0d0d0d] border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
            Who This Program Is For
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-mono-300">
            {course.targetAudience.map((aud, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-white font-mono">•</span>
                <span>{aud}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        title="Confirm Academy Enrollment"
        maxWidth="md"
      >
        {enrollSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white">Enrollment Confirmed!</h4>
            <p className="text-sm text-mono-300 font-mono">
              You are now enrolled in {course.title}. Redirecting to your learning dashboard...
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-mono-900 border border-mono-800 text-xs font-mono space-y-2">
              <div className="flex justify-between text-mono-400">
                <span>Program:</span>
                <span className="text-white font-bold">{course.title}</span>
              </div>
              <div className="flex justify-between text-mono-400">
                <span>Cohort:</span>
                <span className="text-white">Next Live Cohort</span>
              </div>
              <div className="flex justify-between text-mono-400">
                <span>Format:</span>
                <span className="text-white">Live Virtual & Recorded Lab</span>
              </div>
            </div>

            <p className="text-xs text-mono-400 leading-relaxed">
              By confirming, your candidate profile will be provisioned in the LMS with full sandbox access and lesson telemetry.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handleEnrollConfirm}
              >
                Confirm & Enter Classroom
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </PageContainer>
  );
};
