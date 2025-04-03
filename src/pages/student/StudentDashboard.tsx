
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, BookOpen, MessageSquare } from 'lucide-react';

const StudentDashboard = () => {
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming Classes</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
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
          </TabsContent>
          
          <TabsContent value="assignments" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Algebra: Quadratic Equations</CardTitle>
                    <CardDescription className="mt-1">Due in 2 days</CardDescription>
                  </div>
                  <Badge variant="destructive">Pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Complete practice problems 1-10 from Chapter 5.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-600" />
                    <span className="text-sm text-gray-600">Estimated: 45 minutes</span>
                  </div>
                  <Button>Start Assignment</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Science: Electricity and Magnetism</CardTitle>
                    <CardDescription className="mt-1">Due in 4 days</CardDescription>
                  </div>
                  <Badge variant="destructive">Pending</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Create a diagram showing the principles of electromagnetic induction.</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-600" />
                    <span className="text-sm text-gray-600">Estimated: 1 hour</span>
                  </div>
                  <Button>Start Assignment</Button>
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
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
