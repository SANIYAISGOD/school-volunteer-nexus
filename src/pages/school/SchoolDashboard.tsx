
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Users, BookOpen, FileText, BarChart, Plus } from 'lucide-react';

const SchoolDashboard = () => {
  return (
    <DashboardLayout role="school">
      <div className="grid gap-6">
        {/* Welcome section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Washington High School Dashboard</h1>
            <p className="text-gray-600">Manage your curriculum, volunteers, and reports.</p>
          </div>
          <div className="flex gap-2">
            <Button>
              <Plus className="h-4 w-4 mr-2" /> 
              Create Event
            </Button>
            <Button variant="outline">Find Volunteers</Button>
          </div>
        </div>
        
        {/* Stats overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Volunteers</CardDescription>
              <CardTitle className="text-3xl">15</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600">3 pending applications</p>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Topics Coverage</CardDescription>
              <CardTitle className="text-3xl">82%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600">12 topics covered</p>
              <Progress value={82} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Volunteer Hours</CardDescription>
              <CardTitle className="text-3xl">245</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600">This semester</p>
              <Progress value={68} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Student Attendance</CardDescription>
              <CardTitle className="text-3xl">91%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600">Last 30 days</p>
              <Progress value={91} className="mt-2" />
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="events">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="events" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Physics: Electromagnetic Induction</CardTitle>
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
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-gray-600" />
                    <span className="text-sm text-gray-600">24 students registered</span>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Computer Science Workshop</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      Tomorrow, 3:30 PM - 5:30 PM
                    </CardDescription>
                  </div>
                  <Badge>Workshop</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Michael Rodriguez</p>
                    <p className="text-sm text-gray-600">Volunteer Instructor</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-gray-600" />
                    <span className="text-sm text-gray-600">18 students registered</span>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="volunteers" className="space-y-4 pt-4">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-medium">Active Volunteers</h3>
              <Button variant="outline" size="sm">Invite New Volunteers</Button>
            </div>
            
            {['Dr. Sarah Johnson', 'Michael Rodriguez', 'Emily Chen'].map((volunteer, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>{volunteer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{volunteer}</p>
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <BookOpen className="h-4 w-4 mr-1" />
                          <span>{['Physics', 'Computer Science', 'Literature'][index]}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Schedule</Button>
                      <Button variant="ghost" size="sm">Profile</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Pending Applications</h3>
              {['Robert Taylor', 'Maria Garcia'].map((volunteer, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback>{volunteer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{volunteer}</p>
                          <div className="flex items-center mt-1 text-sm text-gray-600">
                            <BookOpen className="h-4 w-4 mr-1" />
                            <span>{['History', 'Mathematics'][index]}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm">Approve</Button>
                        <Button variant="outline" size="sm">Decline</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="curriculum" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Curriculum</CardTitle>
                <CardDescription>Manage subjects and topics that need volunteer assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { subject: 'Physics', topics: ['Electromagnetic Induction', 'Forces and Motion', 'Thermodynamics'], coverage: 85 },
                    { subject: 'Computer Science', topics: ['Web Development', 'Algorithms', 'Database Design'], coverage: 70 },
                    { subject: 'Literature', topics: ['Modern Poetry', 'Shakespeare', 'Essay Writing'], coverage: 90 },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{item.subject}</h4>
                        <Badge variant="outline">{item.coverage}% Covered</Badge>
                      </div>
                      <Progress value={item.coverage} className="h-2 mb-4" />
                      <div className="space-y-2">
                        {item.topics.map((topic, i) => (
                          <div key={i} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span>{topic}</span>
                            <Button variant="ghost" size="sm">
                              <FileText className="h-4 w-4 mr-1" />
                              Details
                            </Button>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Topic
                      </Button>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Subject
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>View comprehensive reports and metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Volunteer Contribution</h4>
                      <Button variant="outline" size="sm">
                        <BarChart className="h-4 w-4 mr-1" />
                        Full Report
                      </Button>
                    </div>
                    <div className="h-60 bg-gray-100 rounded flex items-center justify-center">
                      <p className="text-gray-500">Volunteer Hours Chart</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Student Engagement</h4>
                      <Button variant="outline" size="sm">
                        <BarChart className="h-4 w-4 mr-1" />
                        Full Report
                      </Button>
                    </div>
                    <div className="h-60 bg-gray-100 rounded flex items-center justify-center">
                      <p className="text-gray-500">Student Engagement Chart</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Curriculum Progress</h4>
                      <Button variant="outline" size="sm">
                        <BarChart className="h-4 w-4 mr-1" />
                        Full Report
                      </Button>
                    </div>
                    <div className="h-60 bg-gray-100 rounded flex items-center justify-center">
                      <p className="text-gray-500">Curriculum Progress Chart</p>
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

export default SchoolDashboard;
