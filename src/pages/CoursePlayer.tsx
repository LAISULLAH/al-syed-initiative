import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Play,
  CheckCircle2,
  Circle,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Save,
  Maximize,
  Volume2,
  Settings,
  HelpCircle,
  BookOpen,
  ArrowLeft,
  Lock,
  Menu,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COURSES_DATA } from '../data/coursesData';
import { useLearning } from '../context/LearningContext';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { CourseModule, Lesson } from '../types';

export const CoursePlayer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const courseIdParam = searchParams.get('course') || 'osint-mastery-3m';
  const course = COURSES_DATA.find((c) => c.id === courseIdParam) || COURSES_DATA[0];

  const { progressMap, toggleLessonComplete, getNotes, saveNotes } = useLearning();
  const progress = progressMap[course.id] || {
    completedLessonIds: [],
    progressPercentage: 0,
  };

  // Find initial lesson
  const allLessons = course.modules.flatMap((m) => m.lessons);
  const [currentLessonId, setCurrentLessonId] = useState<string>(allLessons[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'overview' | 'notes' | 'resources'>('overview');
  const [notesContent, setNotesContent] = useState('');
  const [notesSavedAlert, setNotesSavedAlert] = useState(false);
  const [mobileCurriculumOpen, setMobileCurriculumOpen] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState('1x');
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentLesson: Lesson =
    allLessons.find((l) => l.id === currentLessonId) || allLessons[0];

  const currentLessonIndex = allLessons.findIndex((l) => l.id === currentLessonId);
  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson =
    currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  const isCurrentCompleted = progress.completedLessonIds.includes(currentLesson.id);

  // Load notes for current lesson
  useEffect(() => {
    if (currentLesson) {
      const saved = getNotes(course.id, currentLesson.id);
      setNotesContent(saved);
    }
  }, [currentLessonId, course.id]);

  const handleSaveNotes = () => {
    saveNotes(course.id, currentLesson.id, notesContent);
    setNotesSavedAlert(true);
    setTimeout(() => setNotesSavedAlert(false), 2000);
  };

  const handleToggleComplete = () => {
    toggleLessonComplete(course.id, currentLesson.id, allLessons.length);
    if (!isCurrentCompleted) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#ffffff', '#888888', '#cccccc'],
      });
    }
  };

  const changePlaybackSpeed = () => {
    if (!videoRef.current) return;
    const speeds = ['1x', '1.25x', '1.5x', '2x'];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIdx];
    setPlaybackSpeed(nextSpeed);
    videoRef.current.playbackRate = parseFloat(nextSpeed.replace('x', ''));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-mono-100 flex flex-col pt-16">
      {/* Top Learning Studio Navigation Bar */}
      <div className="h-14 bg-mono-950 border-b border-mono-800 px-4 sm:px-6 flex items-center justify-between z-30">
        <div className="flex items-center gap-3">
          <Link
            to="/my-learning"
            className="p-1.5 rounded-lg bg-mono-900 text-mono-400 hover:text-white transition-colors"
            title="Back to Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="hidden sm:block">
            <h1 className="text-xs sm:text-sm font-bold text-white truncate max-w-[280px] md:max-w-md">
              {course.title}
            </h1>
            <p className="text-[10px] font-mono text-mono-500">
              {course.category} - Module {course.modules.find(m => m.lessons.some(l => l.id === currentLesson.id))?.moduleNumber || '01'}
            </p>
          </div>
        </div>

        {/* Course completion progress in header */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 w-44">
            <ProgressBar progress={(progress.progressPercentage ?? 0)} size="sm" showLabel={true} />
          </div>
          <button
            onClick={() => setMobileCurriculumOpen(!mobileCurriculumOpen)}
            className="lg:hidden p-2 rounded-lg bg-mono-900 border border-mono-800 text-mono-300"
          >
            {mobileCurriculumOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Studio Body (2 Columns) */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* LEFT COLUMN: Interactive Curriculum Sidebar (Desktop & Mobile Drawer) */}
        <aside
          className={`lg:w-80 xl:w-96 bg-[#0a0a0a] border-r border-mono-800 flex flex-col shrink-0 z-20 transition-all duration-300 ${
            mobileCurriculumOpen
              ? 'fixed inset-y-14 left-0 right-0 z-50 bg-[#050505] p-4'
              : 'hidden lg:flex'
          }`}
        >
          <div className="p-4 border-b border-mono-900 flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-mono-400">
              Curriculum Index
            </span>
            <span className="text-[11px] font-mono text-mono-500">
              {progress.completedLessonIds.length} / {allLessons.length} Complete
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {course.modules.map((mod: CourseModule) => (
              <div key={mod.id} className="space-y-1.5">
                <div className="px-2 py-1 flex items-center justify-between text-xs font-mono text-mono-400 font-bold uppercase">
                  <span>Mod {mod.moduleNumber} - {mod.title}</span>
                </div>

                <div className="space-y-1">
                  {mod.lessons.map((lesson) => {
                    const isActive = lesson.id === currentLessonId;
                    const isDone = progress.completedLessonIds.includes(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          setCurrentLessonId(lesson.id);
                          setMobileCurriculumOpen(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                          isActive
                            ? 'bg-white text-black font-semibold shadow-md'
                            : 'text-mono-300 hover:bg-mono-900 hover:text-white'
                        }`}
                      >
                        <span className="mt-0.5 shrink-0">
                          {isDone ? (
                            <CheckCircle2
                              className={`w-3.5 h-3.5 ${
                                isActive ? 'text-black fill-black' : 'text-white'
                              }`}
                            />
                          ) : (
                            <Circle
                              className={`w-3.5 h-3.5 ${
                                isActive ? 'text-mono-600' : 'text-mono-600'
                              }`}
                            />
                          )}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="truncate leading-tight">{lesson.title}</p>
                          <p
                            className={`text-[10px] font-mono mt-0.5 ${
                              isActive ? 'text-mono-700' : 'text-mono-500'
                            }`}
                          >
                            {lesson.duration}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* RIGHT COLUMN: Video Stage & Companion Deck */}
        <main className="flex-1 flex flex-col overflow-y-auto bg-[#050505]">
          {/* Video Player Stage */}
          <div className="relative bg-black w-full aspect-video max-h-[65vh] flex items-center justify-center border-b border-mono-900 overflow-hidden group">
            <video
              ref={videoRef}
              src={currentLesson.videoUrl}
              controls
              className="w-full h-full object-contain bg-black"
              poster="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
            />
          </div>

          {/* Player Toolbar Controls */}
          <div className="p-4 sm:p-6 border-b border-mono-900 bg-mono-950 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-mono-400 uppercase tracking-widest">
                Now Playing
              </span>
              <h2 className="text-base sm:text-xl font-bold text-white tracking-tight">
                {currentLesson.title}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {/* Playback Speed Switcher */}
              <button
                onClick={changePlaybackSpeed}
                className="px-3 py-1.5 rounded-lg bg-mono-900 border border-mono-800 text-xs font-mono text-mono-300 hover:text-white transition-colors"
                title="Playback Speed"
              >
                {playbackSpeed}
              </button>

              {/* Toggle Complete */}
              <Button
                variant={isCurrentCompleted ? 'secondary' : 'primary'}
                size="sm"
                onClick={handleToggleComplete}
                leftIcon={<CheckCircle2 className="w-4 h-4" />}
              >
                {isCurrentCompleted ? 'Completed' : 'Mark as Complete'}
              </Button>

              {/* Prev / Next triggers */}
              <div className="flex items-center gap-1 border-l border-mono-800 pl-3">
                <button
                  disabled={!prevLesson}
                  onClick={() => prevLesson && setCurrentLessonId(prevLesson.id)}
                  className="p-2 rounded-lg bg-mono-900 text-mono-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Previous Lesson"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={!nextLesson}
                  onClick={() => nextLesson && setCurrentLessonId(nextLesson.id)}
                  className="p-2 rounded-lg bg-mono-900 text-mono-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Next Lesson"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Lesson Companion Deck (Tabs) */}
          <div className="p-4 sm:p-8 flex-1">
            <div className="flex items-center gap-2 border-b border-mono-800 pb-3 mb-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  activeTab === 'overview'
                    ? 'bg-white text-black font-semibold'
                    : 'text-mono-400 hover:text-white'
                }`}
              >
                Lesson Overview
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  activeTab === 'notes'
                    ? 'bg-white text-black font-semibold'
                    : 'text-mono-400 hover:text-white'
                }`}
              >
                Interactive Notes
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  activeTab === 'resources'
                    ? 'bg-white text-black font-semibold'
                    : 'text-mono-400 hover:text-white'
                }`}
              >
                Lab Handouts ({currentLesson.resources?.length || 0})
              </button>
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="max-w-3xl space-y-6 text-mono-300 text-sm leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">Lesson Synopsis</h3>
                  <p className="text-mono-400">{currentLesson.summary}</p>
                </div>

                {currentLesson.notesMarkdown && (
                  <div className="p-5 rounded-2xl bg-mono-950 border border-mono-800 text-xs font-mono space-y-3">
                    <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
                      Investigative Reference Guide
                    </h4>
                    <pre className="whitespace-pre-wrap font-sans text-mono-300 leading-relaxed">
                      {currentLesson.notesMarkdown}
                    </pre>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: INTERACTIVE SCRATCHPAD NOTES */}
            {activeTab === 'notes' && (
              <div className="max-w-3xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-mono-400">
                    Personal Investigation Scratchpad (Auto-saved locally)
                  </span>
                  {notesSavedAlert && (
                    <span className="text-xs font-mono text-white flex items-center gap-1 animate-pulse">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Notes Saved
                    </span>
                  )}
                </div>

                <textarea
                  value={notesContent}
                  onChange={(e) => setNotesContent(e.target.value)}
                  placeholder="Record your investigation queries, tool parameters, target aliases, or case findings here..."
                  className="w-full h-64 p-4 rounded-2xl bg-mono-950 border border-mono-800 text-sm font-mono text-white placeholder-mono-600 focus:outline-none focus:border-white transition-colors"
                />

                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleSaveNotes}
                  leftIcon={<Save className="w-3.5 h-3.5" />}
                >
                  Save Lesson Notes
                </Button>
              </div>
            )}

            {/* TAB 3: LAB HANDOUTS & RESOURCES */}
            {activeTab === 'resources' && (
              <div className="max-w-3xl space-y-3">
                {currentLesson.resources && currentLesson.resources.length > 0 ? (
                  currentLesson.resources.map((res) => (
                    <div
                      key={res.id}
                      className="p-4 rounded-xl bg-mono-950 border border-mono-800 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-mono-400" />
                        <div>
                          <p className="text-sm font-semibold text-white">{res.title}</p>
                          <span className="text-[10px] font-mono text-mono-500 uppercase">
                            Format: {res.type}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" rightIcon={<Download className="w-3.5 h-3.5" />}>
                        Download
                      </Button>
                    </div>
                  ))
                ) : (
                  <p className="text-xs font-mono text-mono-500">
                    No downloadable attachments for this specific lesson.
                  </p>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
