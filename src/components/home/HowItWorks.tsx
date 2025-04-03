
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { School, Users, GraduationCap, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <School className="h-12 w-12 text-primary" />,
      title: 'Schools Register',
      description: 'Schools sign up and identify areas where they need expert volunteers to enhance their curriculum and student experience.'
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: 'Volunteers Join',
      description: 'Professional volunteers register their expertise, availability, and preferences for involvement in educational activities.'
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: 'Students Benefit',
      description: 'Students gain access to real-world knowledge, mentorship, and enhanced learning experiences from industry experts.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How EdConnect Works</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A simple process that creates impactful educational experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto bg-blue-50 p-4 rounded-full inline-block">{step.icon}</div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-4 text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-gray-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
