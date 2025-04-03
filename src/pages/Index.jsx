
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import SuccessStories from '@/components/home/SuccessStories';
import WhatsHappening from '@/components/home/WhatsHappening';
import HowItWorks from '@/components/home/HowItWorks';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <SuccessStories />
        <WhatsHappening />
        
        <section className="section-padding bg-primary text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="mt-4 text-xl max-w-3xl mx-auto">
              Join EdConnect today and be part of a community that's transforming education through collaboration.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Register as School
              </Button>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Become a Volunteer
              </Button>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Join as Student
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
