
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  BarChart,
  FileText,
  Settings,
  LogOut,
  Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
}

const SidebarLink = ({ href, icon, children, active }: SidebarLinkProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-secondary",
        active ? "bg-secondary text-primary" : "text-gray-600"
      )}
    >
      {icon}
      <span className="text-sm font-medium">{children}</span>
    </Link>
  );
};

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'student' | 'volunteer' | 'school';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const getNavLinks = () => {
    switch (role) {
      case 'student':
        return [
          { href: '/student/dashboard', icon: <GraduationCap className="h-4 w-4" />, label: 'Dashboard' },
          { href: '/student/classes', icon: <BookOpen className="h-4 w-4" />, label: 'My Classes' },
          { href: '/student/calendar', icon: <Calendar className="h-4 w-4" />, label: 'Calendar' },
          { href: '/student/assignments', icon: <FileText className="h-4 w-4" />, label: 'Assignments' },
          { href: '/student/progress', icon: <BarChart className="h-4 w-4" />, label: 'Progress' },
          { href: '/student/settings', icon: <Settings className="h-4 w-4" />, label: 'Settings' },
        ];
      case 'volunteer':
        return [
          { href: '/volunteer/dashboard', icon: <GraduationCap className="h-4 w-4" />, label: 'Dashboard' },
          { href: '/volunteer/classes', icon: <BookOpen className="h-4 w-4" />, label: 'Classes' },
          { href: '/volunteer/calendar', icon: <Calendar className="h-4 w-4" />, label: 'Calendar' },
          { href: '/volunteer/curriculum', icon: <FileText className="h-4 w-4" />, label: 'Curriculum' },
          { href: '/volunteer/reports', icon: <BarChart className="h-4 w-4" />, label: 'Reports' },
          { href: '/volunteer/settings', icon: <Settings className="h-4 w-4" />, label: 'Settings' },
        ];
      case 'school':
        return [
          { href: '/school/dashboard', icon: <GraduationCap className="h-4 w-4" />, label: 'Dashboard' },
          { href: '/school/curriculum', icon: <BookOpen className="h-4 w-4" />, label: 'Curriculum' },
          { href: '/school/volunteers', icon: <BookOpen className="h-4 w-4" />, label: 'Volunteers' },
          { href: '/school/calendar', icon: <Calendar className="h-4 w-4" />, label: 'Calendar' },
          { href: '/school/assignments', icon: <FileText className="h-4 w-4" />, label: 'Assignments' },
          { href: '/school/reports', icon: <BarChart className="h-4 w-4" />, label: 'Reports' },
          { href: '/school/settings', icon: <Settings className="h-4 w-4" />, label: 'Settings' },
        ];
      default:
        return [];
    }
  };

  const getRoleTitle = () => {
    switch (role) {
      case 'student':
        return 'Student Portal';
      case 'volunteer':
        return 'Volunteer Portal';
      case 'school':
        return 'School Admin';
      default:
        return '';
    }
  };

  const getRoleIcon = () => {
    switch (role) {
      case 'student':
        return <GraduationCap className="h-6 w-6" />;
      case 'volunteer':
        return <BookOpen className="h-6 w-6" />;
      case 'school':
        return <GraduationCap className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 w-64 border-r border-gray-200 bg-white hidden md:flex md:flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            {getRoleIcon()}
            <span>{getRoleTitle()}</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-4 px-3">
          <nav className="grid gap-1">
            {getNavLinks().map((link, index) => (
              <SidebarLink 
                key={index}
                href={link.href}
                icon={link.icon}
                active={currentPath === link.href}
              >
                {link.label}
              </SidebarLink>
            ))}
          </nav>
        </div>
        <div className="border-t p-4">
          <Button variant="outline" className="w-full" asChild>
            <Link to="/">
              <LogOut className="mr-2 h-4 w-4" /> Log out
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col md:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6">
          <div className="md:hidden">
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
          
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
