import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService, AuthUser } from '../services/authService';

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<void>;
  signup: (name: string, email: string, pass: string) => Promise<void>;
  logout: () => void;
  enrollCourse: (courseId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const existing = authService.getCurrentUser();
    if (existing) {
      setUser(existing);
    }
  }, []);

  const login = async (email: string, pass: string) => {
    const logged = await authService.login(email, pass);
    setUser(logged);
  };

  const signup = async (name: string, email: string, pass: string) => {
    const created = await authService.signup(name, email, pass);
    setUser(created);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const enrollCourse = (courseId: string) => {
    if (!user) return;
    if (!user.enrolledCourseIds.includes(courseId)) {
      const updated = {
        ...user,
        enrolledCourseIds: [...user.enrolledCourseIds, courseId]
      };
      setUser(updated);
      localStorage.setItem('alsyed_auth_user', JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout, enrollCourse }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
