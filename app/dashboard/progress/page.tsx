"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Brain,
  Calendar,
  ChevronRight,
  Clock,
  GraduationCap,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Settings,
  Star,
  TrendingUp,
  Users,
} from "lucide-react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"

export default function ProgressPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">EduAI</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/dashboard">
                        <LayoutDashboard className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/dashboard/courses">
                        <BookOpen className="h-4 w-4" />
                        <span>My Courses</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/dashboard/calendar">
                        <Calendar className="h-4 w-4" />
                        <span>Calendar</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                      <Link href="/dashboard/progress">
                        <TrendingUp className="h-4 w-4" />
                        <span>Progress</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Learning</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/dashboard/library">
                        <BookOpen className="h-4 w-4" />
                        <span>Resource Library</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/dashboard/ai-tutor">
                        <MessageSquare className="h-4 w-4" />
                        <span>AI Tutor</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/dashboard/assessments">
                        <GraduationCap className="h-4 w-4" />
                        <span>Assessments</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Community</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/dashboard/collaboration">
                        <Users className="h-4 w-4" />
                        <span>Collaboration</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
            <div className="flex flex-1 items-center gap-4">
              <h1 className="text-lg font-semibold">Learning Progress</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <LineChart className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </header>

          <main className="p-6">
            <div className="mx-auto max-w-6xl space-y-6">
              <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Learning Time</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">87.5 Hours</div>
                        <p className="text-xs text-muted-foreground">+12.5 hours this month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">5 Courses</div>
                        <p className="text-xs text-muted-foreground">2 in progress</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Assessments Taken</CardTitle>
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">24 Assessments</div>
                        <p className="text-xs text-muted-foreground">85% average score</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">14 Days</div>
                        <p className="text-xs text-muted-foreground">Your longest streak: 21 days</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Learning Activity</CardTitle>
                      <CardDescription>Your learning hours over the past 30 days</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] w-full">
                        {/* This would be a chart in a real implementation */}
                        <div className="flex h-full w-full items-end gap-2">
                          {Array.from({ length: 30 }).map((_, i) => {
                            const height = Math.floor(Math.random() * 100) + 20
                            return (
                              <div
                                key={i}
                                className="bg-primary/80 hover:bg-primary"
                                style={{ height: `${height}%`, width: `${100 / 30}%` }}
                                title={`${((height / 100) * 5).toFixed(1)} hours`}
                              ></div>
                            )
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Current Progress</CardTitle>
                        <CardDescription>Your active courses and completion status</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Machine Learning Fundamentals</span>
                            <span className="text-sm text-muted-foreground">75%</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Data Visualization Techniques</span>
                            <span className="text-sm text-muted-foreground">40%</span>
                          </div>
                          <Progress value={40} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Python for Data Science</span>
                            <span className="text-sm text-muted-foreground">90%</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View All Courses
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Skill Development</CardTitle>
                        <CardDescription>Your progress in key skill areas</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Programming</span>
                            <span className="text-sm text-muted-foreground">Advanced</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Data Analysis</span>
                            <span className="text-sm text-muted-foreground">Intermediate</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Machine Learning</span>
                            <span className="text-sm text-muted-foreground">Beginner</span>
                          </div>
                          <Progress value={35} className="h-2" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Visualization</span>
                            <span className="text-sm text-muted-foreground">Intermediate</span>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Skill Details
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>AI-Generated Learning Insights</CardTitle>
                      <CardDescription>Personalized observations about your learning patterns</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border bg-muted/50 p-4">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Brain className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium">Learning Pattern Analysis</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              You learn most effectively in the evening hours, with peak productivity between 7-9 PM.
                              Your comprehension is highest when learning sessions are limited to 45-60 minutes with
                              short breaks.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-muted/50 p-4">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Brain className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium">Strength Areas</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              You excel at practical coding exercises and visual learning content. Your performance in
                              Python programming and data visualization tasks is consistently above average.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-muted/50 p-4">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Brain className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium">Growth Opportunities</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Consider dedicating more time to theoretical concepts in machine learning. Your quiz
                              results show that you grasp practical applications well but could benefit from deeper
                              understanding of underlying mathematical principles.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Personalized Learning Plan</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="courses" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Progress</CardTitle>
                      <CardDescription>Detailed view of your progress in all courses</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="font-medium">In Progress</h3>
                        <div className="space-y-4">
                          <div className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">Machine Learning Fundamentals</div>
                              <Badge>75% Complete</Badge>
                            </div>
                            <Progress value={75} className="mt-2 h-2" />
                            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="mr-1 h-4 w-4" />
                                <span>12 hours left</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>4.8 (125 ratings)</span>
                              </div>
                            </div>
                            <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs">
                              <div className="rounded bg-primary/10 p-2">
                                <div className="font-medium">Modules</div>
                                <div>6/8 completed</div>
                              </div>
                              <div className="rounded bg-primary/10 p-2">
                                <div className="font-medium">Quizzes</div>
                                <div>4/6 completed</div>
                              </div>
                              <div className="rounded bg-primary/10 p-2">
                                <div className="font-medium">Assignments</div>
                                <div>3/4 completed</div>
                              </div>
                              <div className="rounded bg-primary/10 p-2">
                                <div className="font-medium">Projects</div>
                                <div>1/2 completed</div>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">Data Visualization Techniques</div>
                              <Badge>40% Complete</Badge>
                            </div>
                            <Progress value={40} className="mt-2 h-2" />
                            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="mr-1 h-4 w-4" />
                                <span>18 hours left</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>4.6 (98 ratings)</span>
                              </div>
                            </div>
                            <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs">
                              <div className="rounded bg-primary/10 p-2">
                                <div className="font-medium">Modules</div>
                                <div>4/10 completed</div>
                              </div>
                              <div className="rounded bg-primary/10 p-2">
                                <div className="font-medium">Quizzes</div>
                                <div>3/8 completed</div>
                              </div>
                              <div className="rounded bg-primary/10 p-2">
                                <div className="font-medium">Assignments</div>
                                <div>2/5 completed</div>
                              </div>
                              <div className="rounded bg-primary/10 p-2">
                                <div className="font-medium">Projects</div>
                                <div>0/2 completed</div>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">Python for Data Science</div>
                              <Badge>90% Complete</Badge>
                            </div>
                            <Progress value={90} className="mt-2 h-2" />
                            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="mr-1 h-4 w-4" />
                                <span>3 hours left</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>4.9 (210 ratings)</span>
                              </div>
                            </div>
                            <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs">
                              <div className="rounded bg-primary/10 p-2">
                                <div className="font-medium">Modules</div>
                                <div>11/12 completed</div>
                              </div>
                              <div className="rounded bg-primary/10 p-2">
                                <div className="font-medium">Quizzes</div>
                                <div>9/10 completed</div>
                              </div>
                              <div className="rounded bg-primary/10 p-2">
                                <div className="font-medium">Assignments</div>
                                <div>6/6 completed</div>
                              </div>
                              <div className="rounded bg-primary/10 p-2">
                                <div className="font-medium">Projects</div>
                                <div>1/2 completed</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-medium">Completed</h3>
                        <div className="space-y-4">
                          <div className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">Introduction to Programming</div>
                              <Badge className="bg-green-500">Completed</Badge>
                            </div>
                            <Progress value={100} className="mt-2 h-2" />
                            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>Completed on March 15, 2025</span>
                              </div>
                              <div className="flex items-center">
                                <GraduationCap className="mr-1 h-4 w-4" />
                                <span>Certificate Earned</span>
                              </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <Button variant="outline" size="sm">
                                View Certificate
                              </Button>
                            </div>
                          </div>

                          <div className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">Database Fundamentals</div>
                              <Badge className="bg-green-500">Completed</Badge>
                            </div>
                            <Progress value={100} className="mt-2 h-2" />
                            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>Completed on February 28, 2025</span>
                              </div>
                              <div className="flex items-center">
                                <GraduationCap className="mr-1 h-4 w-4" />
                                <span>Certificate Earned</span>
                              </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                              <Button variant="outline" size="sm">
                                View Certificate
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="skills" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Skills Development</CardTitle>
                      <CardDescription>Track your progress in key skill areas</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                          <h3 className="font-medium">Technical Skills</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">Python Programming</span>
                                <span className="text-sm text-muted-foreground">Advanced (85%)</span>
                              </div>
                              <Progress value={85} className="h-2" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">Data Analysis</span>
                                <span className="text-sm text-muted-foreground">Intermediate (65%)</span>
                              </div>
                              <Progress value={65} className="h-2" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">Machine Learning</span>
                                <span className="text-sm text-muted-foreground">Beginner (35%)</span>
                              </div>
                              <Progress value={35} className="h-2" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">Data Visualization</span>
                                <span className="text-sm text-muted-foreground">Intermediate (60%)</span>
                              </div>
                              <Progress value={60} className="h-2" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">SQL & Databases</span>
                                <span className="text-sm text-muted-foreground">Advanced (80%)</span>
                              </div>
                              <Progress value={80} className="h-2" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-medium">Soft Skills</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">Problem Solving</span>
                                <span className="text-sm text-muted-foreground">Advanced (90%)</span>
                              </div>
                              <Progress value={90} className="h-2" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">Critical Thinking</span>
                                <span className="text-sm text-muted-foreground">Advanced (85%)</span>
                              </div>
                              <Progress value={85} className="h-2" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">Communication</span>
                                <span className="text-sm text-muted-foreground">Intermediate (70%)</span>
                              </div>
                              <Progress value={70} className="h-2" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">Teamwork</span>
                                <span className="text-sm text-muted-foreground">Intermediate (75%)</span>
                              </div>
                              <Progress value={75} className="h-2" />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">Time Management</span>
                                <span className="text-sm text-muted-foreground">Intermediate (65%)</span>
                              </div>
                              <Progress value={65} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-muted/50 p-4">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Brain className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium">AI Skill Recommendations</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Based on your career goals and current skill levels, we recommend focusing on developing
                              these skills next:
                            </p>
                            <ul className="mt-2 space-y-1 text-sm">
                              <li className="flex items-center">
                                <ChevronRight className="mr-1 h-3 w-3 text-primary" />
                                <span>Deep Learning fundamentals to complement your machine learning knowledge</span>
                              </li>
                              <li className="flex items-center">
                                <ChevronRight className="mr-1 h-3 w-3 text-primary" />
                                <span>Advanced data visualization techniques using interactive libraries</span>
                              </li>
                              <li className="flex items-center">
                                <ChevronRight className="mr-1 h-3 w-3 text-primary" />
                                <span>Cloud computing platforms for deploying machine learning models</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Personalized Skill Development Plan</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="achievements" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Certificates</CardTitle>
                        <CardDescription>Your earned credentials</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            <div className="rounded-md bg-primary/10 p-2">
                              <GraduationCap className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">Introduction to Programming</div>
                              <div className="text-sm text-muted-foreground">Issued on March 15, 2025</div>
                            </div>
                          </div>
                          <div className="mt-2 flex justify-end">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            <div className="rounded-md bg-primary/10 p-2">
                              <GraduationCap className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">Database Fundamentals</div>
                              <div className="text-sm text-muted-foreground">Issued on February 28, 2025</div>
                            </div>
                          </div>
                          <div className="mt-2 flex justify-end">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View All Certificates
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Badges</CardTitle>
                        <CardDescription>Recognition for your achievements</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="flex flex-col items-center">
                            <div className="rounded-full bg-amber-100 p-3">
                              <Star className="h-6 w-6 text-amber-500" />
                            </div>
                            <span className="mt-2 text-xs font-medium">Fast Learner</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="rounded-full bg-blue-100 p-3">
                              <TrendingUp className="h-6 w-6 text-blue-500" />
                            </div>
                            <span className="mt-2 text-xs font-medium">Consistent</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="rounded-full bg-green-100 p-3">
                              <Users className="h-6 w-6 text-green-500" />
                            </div>
                            <span className="mt-2 text-xs font-medium">Team Player</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="rounded-full bg-purple-100 p-3">
                              <Brain className="h-6 w-6 text-purple-500" />
                            </div>
                            <span className="mt-2 text-xs font-medium">Problem Solver</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="rounded-full bg-red-100 p-3">
                              <Clock className="h-6 w-6 text-red-500" />
                            </div>
                            <span className="mt-2 text-xs font-medium">Early Bird</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="rounded-full bg-gray-100 p-3">
                              <BookOpen className="h-6 w-6 text-gray-500" />
                            </div>
                            <span className="mt-2 text-xs font-medium">Bookworm</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View All Badges
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Milestones</CardTitle>
                        <CardDescription>Key achievements in your learning journey</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            <div className="rounded-md bg-primary/10 p-2">
                              <Calendar className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">100 Hours of Learning</div>
                              <div className="text-sm text-muted-foreground">Achieved on April 10, 2025</div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            <div className="rounded-md bg-primary/10 p-2">
                              <BookOpen className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">5 Courses Completed</div>
                              <div className="text-sm text-muted-foreground">Achieved on March 22, 2025</div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="flex items-center gap-3">
                            <div className="rounded-md bg-primary/10 p-2">
                              <TrendingUp className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">21-Day Learning Streak</div>
                              <div className="text-sm text-muted-foreground">Achieved on February 15, 2025</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View All Milestones
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Learning Journey Timeline</CardTitle>
                      <CardDescription>A chronological view of your educational milestones</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        <div className="flex">
                          <div className="flex flex-col items-center mr-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                              <Calendar className="h-5 w-5" />
                            </div>
                            <div className="h-full w-px bg-border"></div>
                          </div>
                          <div>
                            <div className="font-medium">April 2025</div>
                            <div className="mt-2 space-y-3">
                              <div className="rounded-lg border p-3">
                                <div className="font-medium">Reached 100 Hours of Learning</div>
                                <div className="text-sm text-muted-foreground">April 10, 2025</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="flex flex-col items-center mr-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                              <Calendar className="h-5 w-5" />
                            </div>
                            <div className="h-full w-px bg-border"></div>
                          </div>
                          <div>
                            <div className="font-medium">March 2025</div>
                            <div className="mt-2 space-y-3">
                              <div className="rounded-lg border p-3">
                                <div className="font-medium">Completed Introduction to Programming Course</div>
                                <div className="text-sm text-muted-foreground">March 15, 2025</div>
                              </div>
                              <div className="rounded-lg border p-3">
                                <div className="font-medium">Achieved 5 Courses Milestone</div>
                                <div className="text-sm text-muted-foreground">March 22, 2025</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="flex flex-col items-center mr-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                              <Calendar className="h-5 w-5" />
                            </div>
                            <div className="h-full w-px bg-border"></div>
                          </div>
                          <div>
                            <div className="font-medium">February 2025</div>
                            <div className="mt-2 space-y-3">
                              <div className="rounded-lg border p-3">
                                <div className="font-medium">Completed Database Fundamentals Course</div>
                                <div className="text-sm text-muted-foreground">February 28, 2025</div>
                              </div>
                              <div className="rounded-lg border p-3">
                                <div className="font-medium">Achieved 21-Day Learning Streak</div>
                                <div className="text-sm text-muted-foreground">February 15, 2025</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Complete Timeline
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
