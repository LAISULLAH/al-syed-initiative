import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

export const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !password) {
      setError('Please fill in all registration fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);
    try {
      await signup(name, email, password);
      navigate('/my-learning');
    } catch (err: any) {
      setError(err.message || 'Registration failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <div className="max-w-md mx-auto bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center mx-auto mb-3 shadow-lg">
            <Shield className="w-6 h-6 fill-black text-black" />
          </div>
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">
            Cadet Registration
          </h1>
          <p className="text-xs font-mono text-mono-400 mt-1">
            Enroll in the Al Syed Initiative Academy
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-mono-900 border border-white/20 text-xs text-mono-200 font-mono">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            placeholder="e.g. Tariq Merchant"
            value={name}
            onChange={(e) => setName(e.target.value)}
            leftIcon={<User className="w-4 h-4" />}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="investigator@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={<Mail className="w-4 h-4" />}
            required
          />

          <div>
            <Input
              label="Password (min 6 chars)"
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
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-2"
            isLoading={isLoading}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Create Candidate Account
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-mono-900 text-center text-xs text-mono-400">
          <span>Already have an account? </span>
          <Link to="/login" className="text-white font-semibold hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};
