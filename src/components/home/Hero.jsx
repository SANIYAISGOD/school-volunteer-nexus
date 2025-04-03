
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, School } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight animate-fade-in">
            Connecting Schools with Expert Volunteers
          </h1>
          <p className="mt-6 text-xl max-w-2xl mx-auto animate-fade-in">
            Enhance education through collaboration. Join our platform to bridge the gap between educational needs and expert knowledge.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <School className="mr-2 h-5 w-5" />
              For Schools
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Users className="mr-2 h-5 w-5" />
              For Volunteers
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <GraduationCap className="mr-2 h-5 w-5" />
              For Students
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent">500+</div>
              <div className="mt-2">Schools Participating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">2,000+</div>
              <div className="mt-2">Expert Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">50,000+</div>
              <div className="mt-2">Students Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
