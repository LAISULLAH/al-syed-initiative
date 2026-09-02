import React, { useState } from 'react';
import { Shield, Mail, Lock, User as UserIcon, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
}) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { login, signup } = useAuth();

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleSwitchMode = (newMode: 'login' | 'signup' | 'forgot') => {
    resetForm();
    setMode(newMode);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (mode !== 'forgot' && (!password || password.length < 6)) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    if (mode === 'signup' && !name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    setIsLoading(true);

    try {
      if (mode === 'login') {
        await login(email, password);
        onClose();
      } else if (mode === 'signup') {
        await signup(name, email, password);
        onClose();
      } else if (mode === 'forgot') {
        await new Promise((r) => setTimeout(r, 600));
        setSuccessMessage('Password reset link has been dispatched to your email.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Authentication error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="md">
      <div className="text-center mb-6">
        <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center mx-auto mb-3 shadow-lg">
          <Shield className="w-6 h-6 fill-black text-black" />
        </div>
        <h3 className="text-2xl font-extrabold text-white tracking-tight">
          {mode === 'login' && 'Access Intelligence Portal'}
          {mode === 'signup' && 'Enroll as Cadet Investigator'}
          {mode === 'forgot' && 'Reset Secure Access'}
        </h3>
        <p className="text-xs text-mono-400 mt-1 font-mono">
          Al Syed Initiative � ADL Front Terminal
        </p>
      </div>

      {/* Mode Switcher Tabs */}
      {mode !== 'forgot' && (
        <div className="grid grid-cols-2 gap-1 p-1 bg-mono-900 border border-mono-800 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => handleSwitchMode('login')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all ${
              mode === 'login'
                ? 'bg-white text-black shadow-sm'
                : 'text-mono-400 hover:text-white'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => handleSwitchMode('signup')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all ${
              mode === 'signup'
                ? 'bg-white text-black shadow-sm'
                : 'text-mono-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>
      )}

      {/* Messages */}
      {errorMessage && (
        <div className="mb-4 p-3 rounded-xl bg-mono-900 border border-white/20 text-xs text-mono-200 font-mono">
          {errorMessage}
        </div>
      )}

      {successMessage && (
        <div className="mb-4 p-3 rounded-xl bg-white/10 border border-white/30 text-xs text-white font-mono">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'signup' && (
          <Input
            label="Full Name"
            placeholder="e.g. Tariq Merchant"
            value={name}
            onChange={(e) => setName(e.target.value)}
            leftIcon={<UserIcon className="w-4 h-4" />}
            required
          />
        )}

        <Input
          label="Official Email"
          type="email"
          placeholder="investigator@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<Mail className="w-4 h-4" />}
          required
        />

        {mode !== 'forgot' && (
          <div>
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="��������"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<Lock className="w-4 h-4" />}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
              required
            />
            {mode === 'login' && (
              <div className="flex justify-end mt-1.5">
                <button
                  type="button"
                  onClick={() => handleSwitchMode('forgot')}
                  className="text-[11px] font-mono text-mono-400 hover:text-white transition-colors"
                >
                  Forgot credential?
                </button>
              </div>
            )}
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          className="w-full mt-2"
          isLoading={isLoading}
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          {mode === 'login' && 'Authenticate & Enter'}
          {mode === 'signup' && 'Confirm Cadet Registration'}
          {mode === 'forgot' && 'Send Reset Instructions'}
        </Button>
      </form>

      {mode === 'forgot' && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => handleSwitchMode('login')}
            className="text-xs font-mono text-mono-400 hover:text-white transition-colors"
          >
            ? Return to sign in
          </button>
        </div>
      )}
    </Modal>
  );
};
