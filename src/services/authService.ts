export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'analyst' | 'mentor';
  avatarInitials: string;
  enrolledCourseIds: string[];
  joinedAt: string;
  verificationBadge?: string;
}

const STORAGE_KEY = 'alsyed_auth_user';

const DEFAULT_USER: AuthUser = {
  id: 'usr-analyst-007',
  name: 'Hamza Al-Syed',
  email: 'investigator@alsyedinitiative.com',
  role: 'analyst',
  avatarInitials: 'HA',
  enrolledCourseIds: ['osint-mastery-3m', 'socmint-deep-dive'],
  joinedAt: '2025-01-15',
  verificationBadge: 'Verified OSINT Specialist'
};

export const authService = {
  getCurrentUser(): AuthUser | null {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    try {
      const parsed = JSON.parse(data);
      if (parsed?.id === 'usr-analyst-007') {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return parsed;
    } catch {
      return null;
    }
  },

  async login(email: string, _password: string): Promise<AuthUser> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const namePart = email.split('@')[0];
    const user: AuthUser = {
      id: 'usr-' + Math.random().toString(36).substring(2, 8),
      name: namePart.charAt(0).toUpperCase() + namePart.slice(1),
      email,
      role: 'student',
      avatarInitials: namePart.slice(0, 2).toUpperCase(),
      enrolledCourseIds: ['osint-mastery-3m'],
      joinedAt: new Date().toISOString().split('T')[0],
      verificationBadge: 'Cohort Candidate'
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  },

  async signup(name: string, email: string, _password: string): Promise<AuthUser> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    const user: AuthUser = {
      id: 'usr-' + Math.random().toString(36).substring(2, 8),
      name,
      email,
      role: 'student',
      avatarInitials: name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase(),
      enrolledCourseIds: ['osint-mastery-3m'],
      joinedAt: new Date().toISOString().split('T')[0],
      verificationBadge: 'Cadet Investigator'
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  },

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
};
