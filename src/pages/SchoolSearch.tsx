
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { SearchIcon, MapPin, BookOpen, Clock, Users } from 'lucide-react';

// Mock data for schools
const schools = [
  {
    id: 1,
    name: "Washington Elementary School",
    location: "Seattle, WA",
    subjects: ["Mathematics", "Science", "Art"],
    urgency: "High",
    description: "Looking for volunteers to help with after-school STEM programs and math tutoring.",
    students: 450,
    volunteerHours: 120,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Lincoln Middle School",
    location: "Portland, OR",
    subjects: ["English", "History", "Computer Science"],
    urgency: "Medium",
    description: "Seeking volunteers for our computer science club and English language mentors.",
    students: 620,
    volunteerHours: 85,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Roosevelt High School",
    location: "San Francisco, CA",
    subjects: ["Biology", "Chemistry", "Physics", "Mathematics"],
    urgency: "Low",
    description: "Need experienced science professionals to guide students with advanced lab experiments.",
    students: 980,
    volunteerHours: 210,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Jefferson Academy",
    location: "Denver, CO",
    subjects: ["Music", "Drama", "Visual Arts"],
    urgency: "High",
    description: "Searching for arts professionals to mentor students and assist with our annual showcase.",
    students: 350,
    volunteerHours: 95,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Adams Technical College",
    location: "Chicago, IL",
    subjects: ["Engineering", "Computer Science", "Robotics"],
    urgency: "Medium",
    description: "Looking for engineers and programmers to mentor students in our robotics competition team.",
    students: 520,
    volunteerHours: 150,
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Madison Elementary School",
    location: "Austin, TX",
    subjects: ["Reading", "Mathematics", "Science"],
    urgency: "High",
    description: "Need volunteer reading coaches and math tutors for elementary students.",
    students: 380,
    volunteerHours: 65,
    image: "/placeholder.svg"
  }
];

const SchoolSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [urgencyFilter, setUrgencyFilter] = useState('');

  // Filter schools based on search and filter criteria
  const filteredSchools = schools.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         school.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !locationFilter || school.location.includes(locationFilter);
    
    const matchesSubject = !subjectFilter || school.subjects.includes(subjectFilter);
    
    const matchesUrgency = !urgencyFilter || school.urgency === urgencyFilter;
    
    return matchesSearch && matchesLocation && matchesSubject && matchesUrgency;
  });

  // Extract unique locations and subjects for filter options
  const locations = [...new Set(schools.map(school => school.location))];
  const subjects = [...new Set(schools.flatMap(school => school.subjects))];

  const getUrgencyColor = (urgency: string) => {
    switch(urgency) {
      case 'High': return 'destructive';
      case 'Medium': return 'default';
      case 'Low': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">Find Schools That Need Your Expertise</h1>
            <p className="mt-4 text-lg">
              Browse schools looking for volunteers in your area and subjects of interest.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and filter section */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <div className="mb-6">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search schools by name or description..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Locations</SelectItem>
                    {locations.map((location, index) => (
                      <SelectItem key={index} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select value={subjectFilter} onValueChange={setSubjectFilter}>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Subjects</SelectItem>
                    {subjects.map((subject, index) => (
                      <SelectItem key={index} value={subject}>{subject}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="urgency">Urgency</Label>
                <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
                  <SelectTrigger id="urgency">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Urgency</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Results section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {filteredSchools.length} {filteredSchools.length === 1 ? 'School' : 'Schools'} Found
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchools.map((school) => (
                <Card key={school.id} className="card-hover">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle>{school.name}</CardTitle>
                      <Badge variant={getUrgencyColor(school.urgency) as any}>
                        {school.urgency} Need
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {school.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="py-2">
                    <p className="text-gray-700 mb-4">{school.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {school.subjects.map((subject, index) => (
                        <Badge key={index} variant="outline">{subject}</Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{school.students} Students</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{school.volunteerHours} Hours</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          {/* No results message */}
          {filteredSchools.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">No schools found</h3>
              <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchoolSearch;
