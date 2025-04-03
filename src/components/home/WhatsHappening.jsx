
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const events = [
  {
    id: 1,
    title: "Science Fair Mentorship Program",
    description: "Volunteer mentors needed to guide students through science fair projects over a 6-week period.",
    date: "2023-05-15",
    time: "3:00 PM - 5:00 PM",
    location: "Multiple Schools",
    category: "Mentorship",
    urgent: true,
  },
  {
    id: 2,
    title: "Coding Workshop Series",
    description: "A 4-part workshop introducing middle school students to basic programming concepts and web development.",
    date: "2023-05-22",
    time: "4:00 PM - 6:00 PM",
    location: "Tech Center",
    category: "Workshop",
    urgent: false,
  },
  {
    id: 3,
    title: "Career Day Speakers",
    description: "Professionals from various fields needed to speak about their careers and educational paths.",
    date: "2023-06-10",
    time: "9:00 AM - 2:00 PM",
    location: "Westside High School",
    category: "Career",
    urgent: true,
  }
];

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const WhatsHappening = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What's Happening</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest events, workshops, and volunteer opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="card-hover">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{event.title}</CardTitle>
                  {event.urgent && (
                    <Badge variant="destructive">Urgent</Badge>
                  )}
                </div>
                <CardDescription className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  {formatDate(event.date)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{event.description}</p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <Badge variant="outline" className="mt-2">{event.category}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <a href="/events">View All Events</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatsHappening;
