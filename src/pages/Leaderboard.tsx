
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Clock, BookOpen, ThumbsUp, Users } from 'lucide-react';

// Mock data for volunteers
const topVolunteers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    profession: "Physicist",
    specialties: ["Physics", "Mathematics"],
    hours: 120,
    rating: 4.9,
    students: 85,
    sessions: 42,
    badges: ["Top Contributor", "Science Expert", "Student Favorite"],
    image: null,
    initials: "SJ"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    profession: "Software Engineer",
    specialties: ["Computer Science", "Web Development"],
    hours: 105,
    rating: 4.8,
    students: 73,
    sessions: 38,
    badges: ["Coding Guru", "Tech Expert"],
    image: null,
    initials: "MR"
  },
  {
    id: 3,
    name: "Dr. James Williams",
    profession: "Biologist",
    specialties: ["Biology", "Environmental Science"],
    hours: 98,
    rating: 4.7,
    students: 67,
    sessions: 34,
    badges: ["Science Expert"],
    image: null,
    initials: "JW"
  },
  {
    id: 4,
    name: "Emily Chen",
    profession: "Literature Professor",
    specialties: ["English Literature", "Writing"],
    hours: 92,
    rating: 4.9,
    students: 64,
    sessions: 30,
    badges: ["Humanities Expert", "Student Favorite"],
    image: null,
    initials: "EC"
  },
  {
    id: 5,
    name: "Robert Taylor",
    profession: "Historian",
    specialties: ["History", "Social Studies"],
    hours: 85,
    rating: 4.6,
    students: 59,
    sessions: 28,
    badges: ["Humanities Expert"],
    image: null,
    initials: "RT"
  },
  {
    id: 6,
    name: "Maria Garcia",
    profession: "Mathematician",
    specialties: ["Mathematics", "Statistics"],
    hours: 78,
    rating: 4.8,
    students: 53,
    sessions: 25,
    badges: ["Math Genius"],
    image: null,
    initials: "MG"
  }
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Volunteer Leaderboard</h1>
            <p className="mt-4 text-lg">
              Recognizing our top contributors who are making a difference in education.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <div className="flex justify-center items-center mb-8">
              <Award className="h-12 w-12 text-accent mr-2" />
              <h2 className="text-2xl font-bold">Top Performing Volunteers</h2>
            </div>
            <Tabs defaultValue="hours" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="hours">Hours Contributed</TabsTrigger>
                <TabsTrigger value="ratings">Highest Rated</TabsTrigger>
                <TabsTrigger value="impact">Student Impact</TabsTrigger>
              </TabsList>
              
              <TabsContent value="hours">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {topVolunteers.sort((a, b) => b.hours - a.hours).map((volunteer) => (
                    <VolunteerCard key={volunteer.id} volunteer={volunteer} metric="hours" />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="ratings">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {topVolunteers.sort((a, b) => b.rating - a.rating).map((volunteer) => (
                    <VolunteerCard key={volunteer.id} volunteer={volunteer} metric="rating" />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="impact">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {topVolunteers.sort((a, b) => b.students - a.students).map((volunteer) => (
                    <VolunteerCard key={volunteer.id} volunteer={volunteer} metric="students" />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface VolunteerCardProps {
  volunteer: typeof topVolunteers[0];
  metric: 'hours' | 'rating' | 'students';
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ volunteer, metric }) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
            <AvatarImage src={volunteer.image || undefined} alt={volunteer.name} />
            <AvatarFallback className="text-lg font-medium bg-primary text-white">{volunteer.initials}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{volunteer.name}</CardTitle>
            <CardDescription>{volunteer.profession}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          {volunteer.specialties.map((specialty, index) => (
            <Badge key={index} variant="outline" className="mr-2 mb-2">{specialty}</Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className={`flex items-center ${metric === 'hours' ? 'text-accent font-bold' : ''}`}>
            <Clock className={`h-5 w-5 mr-2 ${metric === 'hours' ? 'text-accent' : 'text-gray-500'}`} />
            <span>{volunteer.hours} Hours</span>
          </div>
          <div className={`flex items-center ${metric === 'rating' ? 'text-accent font-bold' : ''}`}>
            <ThumbsUp className={`h-5 w-5 mr-2 ${metric === 'rating' ? 'text-accent' : 'text-gray-500'}`} />
            <span>{volunteer.rating}/5.0</span>
          </div>
          <div className={`flex items-center ${metric === 'students' ? 'text-accent font-bold' : ''}`}>
            <Users className={`h-5 w-5 mr-2 ${metric === 'students' ? 'text-accent' : 'text-gray-500'}`} />
            <span>{volunteer.students} Students</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-gray-500" />
            <span>{volunteer.sessions} Sessions</span>
          </div>
        </div>
        
        <div className="mt-4">
          {volunteer.badges.map((badge, index) => (
            <Badge key={index} className="mr-2 mb-2 bg-blue-100 text-blue-800 hover:bg-blue-100">
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
