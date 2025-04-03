
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Users, BookOpen, FileText, BarChart, Plus, Upload, Check, X, FileUp, School } from 'lucide-react';

const SchoolDashboard = () => {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

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
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="upload">Upload Resources</TabsTrigger>
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
            
            {/* Event creation section */}
            <Card>
              <CardHeader>
                <CardTitle>Organize New Event</CardTitle>
                <CardDescription>Create and schedule educational events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Event Type</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Live Class</option>
                      <option>Workshop</option>
                      <option>Seminar</option>
                      <option>Parent-Teacher Meeting</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject Area</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Mathematics</option>
                      <option>Physics</option>
                      <option>Chemistry</option>
                      <option>Computer Science</option>
                      <option>Literature</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Event Title</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter event title" />
                </div>
                <div className="flex space-x-4">
                  <Button>Schedule Event</Button>
                  <Button variant="outline">Save Draft</Button>
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
                        <Button size="sm">
                          <Check className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button variant="outline" size="sm">
                          <X className="h-4 w-4 mr-1" />
                          Decline
                        </Button>
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
            
            {/* Curriculum modification */}
            <Card>
              <CardHeader>
                <CardTitle>Update Curriculum</CardTitle>
                <CardDescription>Modify existing topics or add new content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Physics</option>
                      <option>Computer Science</option>
                      <option>Literature</option>
                      <option>Mathematics</option>
                      <option>Chemistry</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Topic Title</label>
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter topic title" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea className="w-full p-2 border rounded-md h-24" placeholder="Enter topic description and learning objectives"></textarea>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="font-medium">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Materials
                    </Button>
                    <Button variant="outline">Save Draft</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* New Assignments tab */}
          <TabsContent value="assignments" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Assignment Management</CardTitle>
                <CardDescription>Create and track student assignments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between">
                  <h4 className="font-medium">Current Assignments</h4>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {[
                    { title: 'Algebra: Quadratic Equations', subject: 'Mathematics', dueDate: 'Apr 5, 2024', submissions: '12/24' },
                    { title: 'Electricity and Magnetism', subject: 'Physics', dueDate: 'Apr 7, 2024', submissions: '8/24' },
                    { title: 'Shakespeare Analysis', subject: 'Literature', dueDate: 'Apr 10, 2024', submissions: '0/22' },
                  ].map((assignment, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition">
                      <div>
                        <p className="font-medium">{assignment.title}</p>
                        <div className="flex items-center mt-1">
                          <BookOpen className="h-4 w-4 mr-1 text-gray-500" />
                          <span className="text-sm text-gray-600 mr-4">{assignment.subject}</span>
                          <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                          <span className="text-sm text-gray-600">Due: {assignment.dueDate}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline">{assignment.submissions} submitted</Badge>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Create Assignment</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Literature</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Due Date</label>
                      <input type="date" className="w-full p-2 border rounded-md" />
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <label className="text-sm font-medium">Assignment Title</label>
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter title" />
                  </div>
                  <div className="space-y-2 mb-4">
                    <label className="text-sm font-medium">Instructions</label>
                    <textarea className="w-full p-2 border rounded-md h-24" placeholder="Enter assignment instructions"></textarea>
                  </div>
                  <Button>Create Assignment</Button>
                </div>
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
            
            <Card>
              <CardHeader>
                <CardTitle>Custom Reports</CardTitle>
                <CardDescription>Generate specialized reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg text-center hover:bg-gray-50 cursor-pointer transition">
                      <School className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-medium">School Performance</h4>
                    </div>
                    <div className="p-4 border rounded-lg text-center hover:bg-gray-50 cursor-pointer transition">
                      <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-medium">Student Progress</h4>
                    </div>
                    <div className="p-4 border rounded-lg text-center hover:bg-gray-50 cursor-pointer transition">
                      <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h4 className="font-medium">Subject Analytics</h4>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Report Parameters</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Date Range</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>Last 30 days</option>
                          <option>Last 3 months</option>
                          <option>Last 6 months</option>
                          <option>Custom range</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Report Format</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>PDF</option>
                          <option>Excel</option>
                          <option>CSV</option>
                        </select>
                      </div>
                    </div>
                    <Button>Generate Report</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* New Upload Resources tab */}
          <TabsContent value="upload" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Upload Resources</CardTitle>
                <CardDescription>Share educational materials with students and volunteers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                    <FileUp className="h-10 w-10 mx-auto text-gray-400 mb-4" />
                    <h4 className="font-medium mb-1">Drag and drop files here</h4>
                    <p className="text-sm text-gray-500 mb-4">or</p>
                    <Button>Browse Files</Button>
                    <p className="text-xs text-gray-500 mt-4">Support for videos, documents, PDFs, and presentations up to 500MB</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Resource Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Resource Title</label>
                        <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter resource title" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Subject</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>Mathematics</option>
                          <option>Physics</option>
                          <option>Computer Science</option>
                          <option>Literature</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Description</label>
                      <textarea className="w-full p-2 border rounded-md h-20" placeholder="Enter resource description"></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Visibility</label>
                      <div className="flex space-x-4 mt-1">
                        <label className="flex items-center">
                          <input type="radio" name="visibility" className="mr-2" defaultChecked />
                          <span>All Students</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="visibility" className="mr-2" />
                          <span>Specific Classes</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="visibility" className="mr-2" />
                          <span>Volunteers Only</span>
                        </label>
                      </div>
                    </div>
                    <Button className="mt-2">Upload Resource</Button>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Recent Uploads</h4>
                    <div className="space-y-2">
                      {[
                        { name: 'Physics_Workbook.pdf', date: 'Apr 2, 2024', type: 'PDF', size: '2.4 MB' },
                        { name: 'Algebra_Lecture.mp4', date: 'Apr 1, 2024', type: 'Video', size: '45.2 MB' },
                        { name: 'Literature_Study_Guide.docx', date: 'Mar 29, 2024', type: 'Document', size: '1.1 MB' }
                      ].map((file, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 mr-3 text-primary" />
                            <div>
                              <p className="font-medium">{file.name}</p>
                              <p className="text-xs text-gray-500">{file.type} • {file.size}</p>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            {file.date}
                          </div>
                        </div>
                      ))}
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
