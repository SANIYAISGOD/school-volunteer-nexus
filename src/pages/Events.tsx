
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, Clock, MapPin, Users, Calendar as CalendarLucide, Search } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

// Mock data for events
const eventsData = [
  {
    id: 1,
    title: "Science Fair Mentorship",
    date: "2023-05-15",
    time: "3:00 PM - 5:00 PM",
    location: "Washington High School, Seattle",
    description: "Volunteer mentors needed to guide students through science fair projects.",
    category: "Workshop",
    attendees: 45,
    school: "Washington High School",
    upcoming: true,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Coding Boot Camp",
    date: "2023-05-20",
    time: "9:00 AM - 4:00 PM",
    location: "Tech Innovation Center, Portland",
    description: "Full-day intensive coding workshop for high school students interested in computer science.",
    category: "Boot Camp",
    attendees: 30,
    school: "Lincoln High School",
    upcoming: true,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Career Day Speakers",
    date: "2023-06-10",
    time: "10:00 AM - 2:00 PM",
    location: "Jefferson Middle School, San Francisco",
    description: "Professionals sharing career insights and educational pathways with students.",
    category: "Career",
    attendees: 120,
    school: "Jefferson Middle School",
    upcoming: true,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Math Olympiad Preparation",
    date: "2023-04-05",
    time: "4:00 PM - 6:00 PM",
    location: "Kennedy Elementary School, Chicago",
    description: "Help students prepare for upcoming mathematics competition.",
    category: "Academic",
    attendees: 28,
    school: "Kennedy Elementary School",
    upcoming: false,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Art Workshop Series",
    date: "2023-04-12",
    time: "3:30 PM - 5:30 PM",
    location: "Creative Arts Center, Los Angeles",
    description: "Series of workshops teaching various art techniques to middle school students.",
    category: "Workshop",
    attendees: 35,
    school: "Roosevelt Arts Academy",
    upcoming: false,
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Environmental Science Field Trip",
    date: "2023-04-18",
    time: "9:00 AM - 3:00 PM",
    location: "National Park, Denver",
    description: "Guided educational field trip focusing on environmental conservation.",
    category: "Field Trip",
    attendees: 60,
    school: "Green Valley High School",
    upcoming: false,
    image: "/placeholder.svg"
  }
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [category, setCategory] = useState('');
  const [school, setSchool] = useState('');
  
  const categories = [...new Set(eventsData.map(event => event.category))];
  const schools = [...new Set(eventsData.map(event => event.school))];

  const filterEvents = (events: typeof eventsData) => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           event.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDate = !date || event.date === format(date, 'yyyy-MM-dd');
      
      const matchesCategory = !category || event.category === category;
      
      const matchesSchool = !school || event.school === school;
      
      return matchesSearch && matchesDate && matchesCategory && matchesSchool;
    });
  };

  const upcomingEvents = filterEvents(eventsData.filter(event => event.upcoming));
  const pastEvents = filterEvents(eventsData.filter(event => !event.upcoming));

  const formatEventDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Events & Workshops</h1>
            <p className="mt-4 text-lg">
              Discover educational events and volunteer opportunities at schools near you.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and filter section */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search events by title or description..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((cat, index) => (
                      <SelectItem key={index} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="school">School</Label>
                <Select value={school} onValueChange={setSchool}>
                  <SelectTrigger id="school">
                    <SelectValue placeholder="Select school" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Schools</SelectItem>
                    {schools.map((sch, index) => (
                      <SelectItem key={index} value={sch}>{sch}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {date && (
              <div className="mt-4 flex items-center">
                <Button variant="ghost" size="sm" onClick={() => setDate(undefined)}>
                  Clear date filter
                </Button>
              </div>
            )}
          </div>
          
          {/* Events tabs */}
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              {upcomingEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                  <CalendarLucide className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-xl font-medium text-gray-900">No upcoming events found</h3>
                  <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past">
              {pastEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map(event => (
                    <EventCard key={event.id} event={event} isPast />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                  <CalendarLucide className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-xl font-medium text-gray-900">No past events found</h3>
                  <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface EventCardProps {
  event: typeof eventsData[0];
  isPast?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, isPast = false }) => {
  return (
    <Card className={`card-hover ${isPast ? 'opacity-80' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle>{event.title}</CardTitle>
          <Badge>{event.category}</Badge>
        </div>
        <CardDescription className="flex items-center mt-1">
          <CalendarIcon className="h-4 w-4 mr-1" />
          {formatEventDate(event.date)}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-2">
        <p className="text-gray-700 mb-4">{event.description}</p>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            {event.attendees} {event.attendees === 1 ? 'Attendee' : 'Attendees'}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={isPast ? "outline" : "default"} className="w-full">
          {isPast ? 'View Summary' : 'Register'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Events;
