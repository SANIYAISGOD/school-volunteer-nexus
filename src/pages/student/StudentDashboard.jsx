
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, BookOpen, MessageSquare, Star, Upload, FileText, Video, Play, BarChart } from 'lucide-react';

const StudentDashboard = () => {
  const [feedbackRating, setFeedbackRating] = useState(0);

  return (
    <DashboardLayout role="student">
      <div className="grid gap-6">
        {/* Welcome section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome back, Alex</h1>
            <p className="text-gray-600">Here's what's happening with your learning today.</p>
          </div>
          <Button>View All Classes</Button>
        </div>
        
        {/* Stats overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Classes Today</CardDescription>
              <CardTitle className="text-3xl">2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600">Next: Mathematics at 2:00 PM</p>
              <Progress value={25} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Pending Assignments</CardDescription>
              <CardTitle className="text-3xl">5</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600">3 due this week</p>
              <Progress value={60} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Attendance Rate</CardDescription>
              <CardTitle className="text-3xl">95%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600">Last 30 days</p>
              <Progress value={95} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Average Grade</CardDescription>
              <CardTitle className="text-3xl">B+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600">Up 5% from last month</p>
              <Progress value={85} className="mt-2" />
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="upcoming">Upcoming Classes</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="timeline">Class Timeline</TabsTrigger>
            <TabsTrigger value="notes">Class Notes</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Mathematics: Algebra Fundamentals</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      Today, 2:00 PM - 3:30 PM
                    </CardDescription>
                  </div>
                  <Badge>Live Session</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>JW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Dr. James Williams</p>
                    <p className="text-sm text-gray-600">Volunteer Instructor</p>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Button>Join Class</Button>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Science: Physics Principles</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      Today, 4:00 PM - 5:00 PM
                    </CardDescription>
                  </div>
                  <Badge>Live Session</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Dr. Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Volunteer Instructor</p>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Button>Join Class</Button>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>

            {/* Class Feedback section */}
            <Card>
              <CardHeader>
                <CardTitle>Provide Feedback</CardTitle>
                <CardDescription>Rate your latest completed class</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="font-medium mb-2">Physics: Electromagnetic Induction (Yesterday)</p>
                  <div className="flex items-center mb-4">
                    <p className="text-sm text-gray-600 mr-2">Instructor: Dr. Sarah Johnson</p>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-6 w-6 cursor-pointer ${
                          star <= feedbackRating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                        }`}
                        onClick={() => setFeedbackRating(star)}
                      />
                    ))}
                  </div>
                  <Button size="sm">Submit Feedback</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="assignments" className="space-y-4 pt-4">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-medium">Your Assignments</h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Submit New
                </Button>
              </div>
            </div>
            
            {/* Pending assignments */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Pending</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-start p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                  <div>
                    <p className="font-medium">Algebra: Quadratic Equations</p>
                    <p className="text-sm text-gray-600 mt-1">Due in 2 days</p>
                    <div className="flex items-center mt-2">
                      <Clock className="h-4 w-4 mr-2 text-gray-600" />
                      <span className="text-sm text-gray-600">Estimated: 45 minutes</span>
                    </div>
                  </div>
                  <Badge variant="destructive">Pending</Badge>
                </div>
                
                <div className="flex justify-between items-start p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                  <div>
                    <p className="font-medium">Science: Electricity and Magnetism</p>
                    <p className="text-sm text-gray-600 mt-1">Due in 4 days</p>
                    <div className="flex items-center mt-2">
                      <Clock className="h-4 w-4 mr-2 text-gray-600" />
                      <span className="text-sm text-gray-600">Estimated: 1 hour</span>
                    </div>
                  </div>
                  <Badge variant="destructive">Pending</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Submitted assignments */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Submitted</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-start p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                  <div>
                    <p className="font-medium">Mathematics: Calculus Fundamentals</p>
                    <p className="text-sm text-gray-600 mt-1">Submitted on April 1, 2024</p>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">Graded: A</Badge>
                </div>
                
                <div className="flex justify-between items-start p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                  <div>
                    <p className="font-medium">Physics: Motion and Forces</p>
                    <p className="text-sm text-gray-600 mt-1">Submitted on March 28, 2024</p>
                  </div>
                  <Badge variant="secondary">Being reviewed</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Late assignments */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Late Submissions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-start p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                  <div>
                    <p className="font-medium">Literature Analysis</p>
                    <p className="text-sm text-gray-600 mt-1">Due on March 22, 2024</p>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="destructive">1 week late</Badge>
                    <Button size="sm">Submit Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="materials" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Algebra Fundamentals</CardTitle>
                    <CardDescription className="mt-1">Course Materials</CardDescription>
                  </div>
                  <Badge variant="secondary">New</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-3 text-primary" />
                    <span>Algebra Textbook Chapter 5</span>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-3 text-primary" />
                    <span>Class Notes - Apr 2</span>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                  <div className="flex items-center">
                    <Video className="h-5 w-5 mr-3 text-primary" />
                    <span>Recorded Lecture - Introduction to Quadratics</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Physics Principles</CardTitle>
                    <CardDescription className="mt-1">Course Materials</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-3 text-primary" />
                    <span>Physics Interactive Modules</span>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-3 text-primary" />
                    <span>Lab Instructions - Electricity</span>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                  <div className="flex items-center">
                    <Video className="h-5 w-5 mr-3 text-primary" />
                    <span>Live Class Recording - Apr 1, 2024</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* New Class Timeline tab */}
          <TabsContent value="timeline" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Class Schedule</CardTitle>
                <CardDescription>Your upcoming class timeline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 h-96 bg-white">
                  {/* This would be replaced with a real Google Calendar embed */}
                  <div className="flex flex-col space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <p className="font-medium">Mathematics: Algebra</p>
                      <p className="text-sm text-gray-600">Today, 2:00 PM - 3:30 PM</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                      <p className="font-medium">Science: Physics Principles</p>
                      <p className="text-sm text-gray-600">Today, 4:00 PM - 5:00 PM</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <p className="font-medium">Chemistry Lab Session</p>
                      <p className="text-sm text-gray-600">Tomorrow, 1:00 PM - 3:00 PM</p>
                    </div>
                    <div className="border-l-4 border-amber-500 pl-4 py-2">
                      <p className="font-medium">Literature Discussion</p>
                      <p className="text-sm text-gray-600">Apr 5, 10:00 AM - 11:30 AM</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4 py-2">
                      <p className="font-medium">Mathematics Quiz</p>
                      <p className="text-sm text-gray-600">Apr 6, 2:00 PM - 3:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button>
                    <Calendar className="h-4 w-4 mr-2" />
                    Sync with Your Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* New Class Notes tab */}
          <TabsContent value="notes" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Class Notes</CardTitle>
                <CardDescription>Your saved notes from classes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: 'Physics: Electromagnetic Forces', date: 'April 2, 2024', preview: 'Key concepts: Faraday\'s law, electromagnetic induction...' },
                  { title: 'Algebra: Solving Quadratic Equations', date: 'April 1, 2024', preview: 'The quadratic formula: x = (-b ± √(b² - 4ac)) / 2a...' },
                  { title: 'Chemistry: Organic Compounds', date: 'March 29, 2024', preview: 'Types of organic compounds and their properties...' }
                ].map((note, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{note.title}</h4>
                      <Badge variant="outline">{note.date}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{note.preview}</p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        View Full Notes
                      </Button>
                      <Button size="sm" variant="ghost">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Share with Class
                      </Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Create New Notes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* New Progress tab */}
          <TabsContent value="progress" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Track your academic performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Mathematics</h4>
                      <Badge>Grade: B+</Badge>
                    </div>
                    <Progress value={85} className="h-2 mb-1" />
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Topics Mastered: 15/20</span>
                      <span>85% Complete</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Physics</h4>
                      <Badge>Grade: A-</Badge>
                    </div>
                    <Progress value={92} className="h-2 mb-1" />
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Topics Mastered: 11/12</span>
                      <span>92% Complete</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Chemistry</h4>
                      <Badge>Grade: B</Badge>
                    </div>
                    <Progress value={78} className="h-2 mb-1" />
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Topics Mastered: 7/10</span>
                      <span>78% Complete</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mt-6">
                    <h4 className="font-medium mb-3">Recent Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-green-50 border border-green-100 p-3 rounded-md">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 mr-2" />
                          <p className="font-medium text-sm">Top Physics Student - March 2024</p>
                        </div>
                      </div>
                      <div className="bg-blue-50 border border-blue-100 p-3 rounded-md">
                        <div className="flex items-center">
                          <BarChart className="h-5 w-5 text-blue-500 mr-2" />
                          <p className="font-medium text-sm">95% Attendance Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
