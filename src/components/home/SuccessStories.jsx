
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarCheck, BookOpen, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Emma Jameson',
    role: 'Science Teacher',
    school: 'Lincoln High School',
    image: null,
    initials: 'EJ',
    content: 'EdConnect brought professional engineers to our classroom. Students were able to see real-world applications of what we were teaching. The engagement levels skyrocketed!',
    stats: { hours: 24, sessions: 8, impact: '92%' }
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Developer',
    company: 'Tech Innovations Inc.',
    image: null,
    initials: 'MC',
    content: 'Volunteering through EdConnect has been incredibly rewarding. I\'ve been able to share my programming knowledge with students who wouldn\'t otherwise have access to industry experts.',
    stats: { hours: 36, sessions: 12, impact: '88%' }
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    role: 'Student',
    school: 'Washington Middle School',
    image: null,
    initials: 'SR',
    content: 'The volunteers who came to our school made learning math exciting! I used to struggle with algebra, but Mr. Thompson explained it in a way that finally clicked for me.',
    stats: { hours: 18, sessions: 6, impact: '95%' }
  }
];

const SuccessStories = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how EdConnect is transforming education through collaboration and expertise sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Avatar className="h-12 w-12 border-2 border-primary">
                    <AvatarImage src={testimonial.image || undefined} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-white">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} {testimonial.school ? `at ${testimonial.school}` : testimonial.company ? `at ${testimonial.company}` : ''}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-3 text-gray-700">
                  "{testimonial.content}"
                </blockquote>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t pt-4">
                  <div className="text-center">
                    <Clock className="h-5 w-5 mx-auto text-secondary" />
                    <p className="mt-1 text-sm font-medium">{testimonial.stats.hours} Hours</p>
                  </div>
                  <div className="text-center">
                    <CalendarCheck className="h-5 w-5 mx-auto text-secondary" />
                    <p className="mt-1 text-sm font-medium">{testimonial.stats.sessions} Sessions</p>
                  </div>
                  <div className="text-center">
                    <BookOpen className="h-5 w-5 mx-auto text-secondary" />
                    <p className="mt-1 text-sm font-medium">{testimonial.stats.impact} Impact</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-secondary hover:bg-secondary/90 text-white">View More Success Stories</Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
