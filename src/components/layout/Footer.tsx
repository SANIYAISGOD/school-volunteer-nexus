
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-accent" />
              <span className="ml-2 text-xl font-bold text-white">EdConnect</span>
            </Link>
            <p className="text-gray-400">
              Bridging the gap between schools and expert volunteers to enhance education quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-accent">Home</Link>
              </li>
              <li>
                <Link to="/schools" className="text-gray-400 hover:text-accent">Search Schools</Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-gray-400 hover:text-accent">Volunteer Leaderboard</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-accent">Events</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Portals</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/student/dashboard" className="text-gray-400 hover:text-accent">Student Portal</Link>
              </li>
              <li>
                <Link to="/volunteer/dashboard" className="text-gray-400 hover:text-accent">Volunteer Portal</Link>
              </li>
              <li>
                <Link to="/school/dashboard" className="text-gray-400 hover:text-accent">School Admin Portal</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-2 mt-0.5" />
                <span className="text-gray-400">123 Education St, Learning City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-2" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-2" />
                <span className="text-gray-400">info@edconnect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} EdConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
