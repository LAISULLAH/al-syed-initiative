import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Award, CheckCircle2, Clock, ShieldCheck, ArrowUpRight, Flame, BarChart3, ExternalLink } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { AchievementCard } from '../components/common/AchievementCard';
import { useAuth } from '../context/AuthContext';
import { useLearning } from '../context/LearningContext';
import { COURSES_DATA } from '../data/coursesData';
import { UserAchievement } from '../types';

export const MyLearning: React.FC = () => {
  const { user } = useAuth();
  const { progressMap, achievements } = useLearning();
  const [selectedAchievement, setSelectedAchievement] = useState<UserAchievement | null>(null);
  const [activeTab, setActiveTab] = useState<'courses' | 'credentials' | 'analytics'>('courses');

  const enrolledCourses = COURSES_DATA.filter((c) =>
    user?.enrolledCourseIds?.includes(c.id)
  );

  const activeCourse = enrolledCourses[0] || COURSES_DATA[0];
  const activeCourseProgress = progressMap[activeCourse.id] || {
    progressPercentage: 35,
    completedLessonIds: ['les-01-01', 'les-01-02'],
    lastLessonId: 'les-01-03',
  };

  return (
    <PageContainer>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-mono-900 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white text-black font-extrabold text-xl flex items-center justify-center shadow-lg">
            {user?.avatarInitials || 'AN'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {user?.name || 'Investigator Cadet'}
              </h1>
              <span className="text-[11px] font-mono text-mono-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                {user?.verificationBadge || 'Cadet Investigator'}
              </span>
            </div>
            <p className="text-xs font-mono text-mono-500 mt-1">
              Terminal ID: {user?.id || 'USR-092'} - Active Batch Candidate
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-mono-950 border border-mono-800 p-3 rounded-2xl">
          <div className="flex items-center gap-2 px-3 border-r border-mono-800">
            <Flame className="w-4 h-4 text-white" />
            <div>
              <span className="text-xs font-bold text-white block">14 Days</span>
              <span className="text-[10px] font-mono text-mono-500">Learning Streak</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3">
            <BarChart3 className="w-4 h-4 text-white" />
            <div>
              <span className="text-xs font-bold text-white block">8.5 Hrs</span>
              <span className="text-[10px] font-mono text-mono-500">Studied this week</span>
            </div>
          </div>
        </div>
      </div>

      {activeCourse && (
        <div className="mb-12 bg-gradient-to-r from-mono-950 via-[#0e0e0e] to-mono-950 border border-white/15 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-white text-black px-2 py-0.5 rounded font-bold">
                  In Progress
                </span>
                <span className="text-xs font-mono text-mono-400">
                  {activeCourse.category} - Module 01
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                {activeCourse.title}
              </h2>

              <p className="text-xs sm:text-sm text-mono-400 max-w-2xl font-normal leading-relaxed">
                Next Lesson: 01.04 - Digital Chain of Custody & Timestamp Hashing
              </p>

              <div className="pt-2 max-w-md">
                <ProgressBar
                  progress={activeCourseProgress.progressPercentage}
                  size="sm"
                  label="Course Completion"
                />
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link to="/course-player">
                <Button
                  variant="primary"
                  size="lg"
                  leftIcon={<Play className="w-4 h-4 fill-black" />}
                >
                  Resume Classroom
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 border-b border-mono-800 pb-4 mb-8">
        <button
          onClick={() => setActiveTab('courses')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'courses'
              ? 'bg-white text-black'
              : 'text-mono-400 hover:text-white hover:bg-mono-900'
          }`}
        >
          Enrolled Programs ({enrolledCourses.length})
        </button>
        <button
          onClick={() => setActiveTab('credentials')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'credentials'
              ? 'bg-white text-black'
              : 'text-mono-400 hover:text-white hover:bg-mono-900'
          }`}
        >
          Verified Credentials ({achievements.length})
        </button>
      </div>

      {activeTab === 'courses' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((c) => {
            const prog = progressMap[c.id]?.progressPercentage || 0;
            return (
              <div
                key={c.id}
                className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="subtle" size="sm">{c.category}</Badge>
                    <span className="text-xs font-mono text-mono-400">{c.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    <Link to={`/courses/${c.slug}`}>{c.title}</Link>
                  </h3>

                  <p className="text-xs text-mono-400 line-clamp-2 mb-6 leading-relaxed">
                    {c.tagline}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-mono-900">
                  <ProgressBar progress={prog} size="sm" />
                  <Link to="/course-player" className="block">
                    <Button variant="outline" size="sm" className="w-full">
                      Open Player
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'credentials' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach) => (
            <AchievementCard
              key={ach.id}
              achievement={ach}
              onVerify={() => setSelectedAchievement(ach)}
            />
          ))}
        </div>
      )}

      {selectedAchievement && (
        <Modal
          isOpen={!!selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
          title="Verified Academy Credential"
          maxWidth="lg"
        >
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center mx-auto shadow-2xl">
              <ShieldCheck className="w-9 h-9 fill-black text-black" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {selectedAchievement.title ?? selectedAchievement.courseTitle ?? ''}
              </h3>
              <p className="text-xs font-mono text-mono-400 mt-1">
                Issued by {selectedAchievement.issuer ?? selectedAchievement.issuerName ?? ''} · {selectedAchievement.issueDate ?? selectedAchievement.issuedDate ?? ''}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-mono-900 border border-mono-800 text-left text-xs font-mono space-y-2">
              <div className="flex justify-between">
                <span className="text-mono-500">Credential ID:</span>
                <span className="text-white font-bold">{selectedAchievement.credentialId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mono-500">Recipient:</span>
                <span className="text-white">{user?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-mono-500">Status:</span>
                <span className="text-white font-semibold">Active & Cryptographically Sealed</span>
              </div>
            </div>

            <p className="text-xs text-mono-400 leading-relaxed">
              This credential validates the candidate's assessed competence in operational open-source intelligence and chain-of-custody documentation.
            </p>

            <Button
              variant="outline"
              size="md"
              className="w-full"
              onClick={() => setSelectedAchievement(null)}
            >
              Close Verification Record
            </Button>
          </div>
        </Modal>
      )}
    </PageContainer>
  );
};
