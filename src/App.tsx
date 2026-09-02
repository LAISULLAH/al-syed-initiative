import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LearningProvider } from './context/LearningContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AuthModal } from './components/auth/AuthModal';
import { SitePreloader } from './components/common/SitePreloader';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { CourseDetails } from './pages/CourseDetails';
import { MyLearning } from './pages/MyLearning';
import { CoursePlayer } from './pages/CoursePlayer';
import { HallOfFame } from './pages/HallOfFame';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

// Scroll to top component on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Main Layout Controller to conditionally render Navbar / Footer (e.g. CoursePlayer has full-screen studio layout)
const AppContent: React.FC = () => {
  const location = useLocation();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authInitialMode, setAuthInitialMode] = useState<'login' | 'signup'>('login');

  const openAuth = (mode: 'login' | 'signup' = 'login') => {
    setAuthInitialMode(mode);
    setAuthModalOpen(true);
  };

  const isPlayerView = location.pathname.startsWith('/course-player');

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-mono-100 font-sans">
      {/* 1-Second Cinematic Site Splash Preloader on Initial Load & Refresh */}
      <SitePreloader />

      <ScrollToTop />
      
      {/* Global Navigation */}
      <Navbar onOpenAuth={openAuth} />

      {/* Main Page Routing */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenAuth={openAuth} />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/course-player" element={<CoursePlayer />} />
          <Route path="/hall-of-fame" element={<HallOfFame />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer (hidden inside course player studio for distraction-free learning) */}
      {!isPlayerView && <Footer />}

      {/* Global Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authInitialMode}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <LearningProvider>
        <Router basename="/al-syed-initiative">
          <AppContent />
        </Router>
      </LearningProvider>
    </AuthProvider>
  );
};

export default App;
