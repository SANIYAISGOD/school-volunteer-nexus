
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Users,
  School
} from 'lucide-react';
import { cn } from '@/lib/utils';
import AuthModal from '@/components/auth/AuthModal';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'student' | 'volunteer' | 'school'>('student');

  const openAuthModal = (type: 'student' | 'volunteer' | 'school') => {
    setAuthType(type);
    setIsAuthModalOpen(true);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Search Schools', href: '/schools' },
    { name: 'Volunteer Leaderboard', href: '/leaderboard' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">EdConnect</span>
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(true)}
              className="rounded-md p-2"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-base font-medium text-gray-700 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-2">
            <div className="relative group">
              <Button
                variant="outline"
                className="flex items-center"
                onClick={() => {}}
              >
                Login
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1" role="menu">
                  <button
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => openAuthModal('student')}
                  >
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Student
                  </button>
                  <button
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => openAuthModal('volunteer')}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Volunteer
                  </button>
                  <button
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => openAuthModal('school')}
                  >
                    <School className="mr-2 h-4 w-4" />
                    School Admin
                  </button>
                </div>
              </div>
            </div>
            <Button onClick={() => setIsAuthModalOpen(true)}>Register</Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-gray-800 bg-opacity-25 md:hidden",
          isMobileMenuOpen ? "block" : "hidden"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">EdConnect</span>
            </Link>
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-md p-2"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <nav className="mt-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <p className="mb-2 text-sm font-medium text-gray-500">Login as:</p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    openAuthModal('student');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Student
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    openAuthModal('volunteer');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Volunteer
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    openAuthModal('school');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <School className="mr-2 h-4 w-4" />
                  School Admin
                </Button>
              </div>
              <Button 
                className="mt-4 w-full"
                onClick={() => {
                  setIsAuthModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Register
              </Button>
            </div>
          </nav>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        authType={authType}
      />
    </header>
  );
};

export default Navbar;
