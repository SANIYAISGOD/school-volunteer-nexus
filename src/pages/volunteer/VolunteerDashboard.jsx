
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, School, Users, Clock, BookOpen, Award, MessageSquare, Download, FileText } from 'lucide-react';

const VolunteerDashboard = () => {
  const [activeMessageTab, setActiveMessageTab] = useState('inbox');
  
  return (
    <DashboardLayout role="volunteer">
      <div className="grid gap-6">
        {/* Welcome section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome back, Dr. Johnson</h1>
            <p className="text-gray-600">Thank you for your contribution to education.</p>
          </div>
          <Button>View Schedule</Button>
        </div>
        
        {/* Performance overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Hours</CardDescription>
              <CardTitle className="text-3xl">120</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600">8 hours this week</p>
              <Progress value={67} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Students Helped</CardDescription>
              <CardTitle className="text-3xl">85</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600">Across 5 schools</p>
              <Progress value={85} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Average Rating</CardDescription>
              <CardTitle className="text-3xl">4.9</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-600">From 42 sessions</p>
              <Progress value={98} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Badges Earned</CardDescription>
              <CardTitle className="text-3xl">3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-1">
                <Award className="h-5 w-5 text-accent" />
                <Award className="h-5 w-5 text-accent" />
                <Award className="h-5 w-5 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
            <TabsTrigger value="schools">My Schools</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="messaging">Messaging</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-4 pt-4">
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
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                      <School className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Washington High School</p>
                    <div className="flex items-center mt-1">
                      <Users className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-600">24 students</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Button>Start Session</Button>
                  <Button variant="outline">View Materials</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Physics: Forces and Motion</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      Tomorrow, 2:30 PM - 4:00 PM
                    </CardDescription>
                  </div>
                  <Badge>Live Session</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                      <School className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Jefferson Middle School</p>
                    <div className="flex items-center mt-1">
                      <Users className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-600">18 students</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Button variant="outline">View Materials</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="schools" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>My Assigned Schools</CardTitle>
                <CardDescription>Schools you're currently volunteering with</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {['Washington High School', 'Jefferson Middle School', 'Roosevelt Arts Academy'].map((school, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                    <div className="flex items-center">
                      <School className="h-5 w-5 mr-3 text-primary" />
                      <span>{school}</span>
                    </div>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </div>
                ))}
                
                <Button className="w-full mt-4" variant="outline">
                  Find More Schools
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="curriculum" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Physics Curriculum</CardTitle>
                    <CardDescription className="mt-1">Assigned topics and materials</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {['Electromagnetic Induction', 'Forces and Motion', 'Thermodynamics', 'Wave Mechanics'].map((topic, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-3 text-primary" />
                      <span>{topic}</span>
                    </div>
                    <Button variant="ghost" size="sm">View Materials</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle>Recommended Resources</CardTitle>
                    <CardDescription className="mt-1">Supplementary teaching materials</CardDescription>
                  </div>
                  <Badge>New</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {['Interactive Physics Simulations', 'Lab Activity Guidelines', 'Assessment Templates'].map((resource, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-3 text-primary" />
                      <span>{resource}</span>
                    </div>
                    <Button variant="ghost" size="sm">Download</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* New messaging tab */}
          <TabsContent value="messaging" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Messaging Center</CardTitle>
                <CardDescription>Communicate with students and school admins</CardDescription>
                <div className="mt-2">
                  <TabsList className="w-full grid grid-cols-2">
                    <TabsTrigger 
                      value="inbox" 
                      onClick={() => setActiveMessageTab('inbox')}
                      className={activeMessageTab === 'inbox' ? 'bg-primary text-white' : ''}
                    >
                      Inbox
                    </TabsTrigger>
                    <TabsTrigger 
                      value="sent" 
                      onClick={() => setActiveMessageTab('sent')}
                      className={activeMessageTab === 'sent' ? 'bg-primary text-white' : ''}
                    >
                      Sent
                    </TabsTrigger>
                  </TabsList>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeMessageTab === 'inbox' ? (
                  [
                    { sender: 'Alex Smith', school: 'Washington High', preview: 'Question about tomorrow\'s lesson...', time: '2 hours ago' },
                    { sender: 'Principal Johnson', school: 'Jefferson Middle', preview: 'Thank you for the workshop last week...', time: '1 day ago' },
                    { sender: 'Emma Davis', school: 'Roosevelt Arts', preview: 'Can you provide additional resources for...', time: '2 days ago' }
                  ].map((message, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition cursor-pointer">
                      <div>
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback>{message.sender.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{message.sender}</p>
                            <p className="text-xs text-gray-600">{message.school}</p>
                          </div>
                        </div>
                        <p className="text-sm mt-1 text-gray-600">{message.preview}</p>
                      </div>
                      <div className="text-xs text-gray-500">{message.time}</div>
                    </div>
                  ))
                ) : (
                  [
                    { recipient: 'Physics Class 101', preview: 'Additional resources for tomorrow\'s class...', time: '5 hours ago' },
                    { recipient: 'Principal Chen', preview: 'Regarding the upcoming science fair...', time: '3 days ago' }
                  ].map((message, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition cursor-pointer">
                      <div>
                        <p className="font-medium">To: {message.recipient}</p>
                        <p className="text-sm mt-1 text-gray-600">{message.preview}</p>
                      </div>
                      <div className="text-xs text-gray-500">{message.time}</div>
                    </div>
                  ))
                )}
                <Button className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Compose New Message
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* New certificates tab */}
          <TabsContent value="certificates" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Certificates</CardTitle>
                <CardDescription>Download and share your achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Physics Education Excellence', date: 'Awarded May 15, 2024', type: 'Gold' },
                  { name: 'STEM Volunteer Recognition', date: 'Awarded March 8, 2024', type: 'Silver' },
                  { name: '100 Hours of Service', date: 'Awarded January 20, 2024', type: 'Bronze' }
                ].map((cert, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Award className={`h-10 w-10 ${
                        cert.type === 'Gold' ? 'text-yellow-500' : 
                        cert.type === 'Silver' ? 'text-gray-400' : 'text-amber-700'
                      }`} />
                      <div>
                        <h4 className="font-medium">{cert.name}</h4>
                        <p className="text-sm text-gray-600">{cert.date}</p>
                        <Badge className="mt-1" variant="outline">{cert.type}</Badge>
                      </div>
                    </div>
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
                <div className="mt-6 p-4 border border-dashed rounded-lg text-center">
                  <p className="text-gray-500 mb-2">Complete 10 more hours to earn your next certificate</p>
                  <Progress value={60} className="mt-2 mb-4" />
                  <p className="text-sm text-gray-600">60% progress to "Distinguished Educator" certification</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerDashboard;
