"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Calendar,
  Clock,
  Filter,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Search,
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

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("enrolled")

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
                    <SidebarMenuButton asChild isActive>
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
                    <SidebarMenuButton asChild>
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
              <h1 className="text-lg font-semibold">My Courses</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search courses..." className="w-[200px] pl-8 md:w-[260px]" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </header>

          <main className="p-6">
            <div className="mx-auto max-w-6xl space-y-6">
              <Tabs defaultValue="enrolled" className="space-y-4" onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="enrolled">Enrolled Courses</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                  <TabsTrigger value="catalog">Course Catalog</TabsTrigger>
                </TabsList>

                <TabsContent value="enrolled" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-blue-500">In Progress</Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">4.8</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">Machine Learning Fundamentals</CardTitle>
                        <CardDescription>Learn the core concepts of machine learning</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Machine+Learning"
                            alt="Machine Learning Course"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span className="font-medium">75%</span>
                            </div>
                            <Progress value={75} className="h-2" />
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>12 hours left</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              <span>8 modules</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Continue Learning</Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-blue-500">In Progress</Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">4.6</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">Data Visualization Techniques</CardTitle>
                        <CardDescription>Master the art of visualizing complex data</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Data+Visualization"
                            alt="Data Visualization Course"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span className="font-medium">40%</span>
                            </div>
                            <Progress value={40} className="h-2" />
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>18 hours left</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              <span>10 modules</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Continue Learning</Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-blue-500">In Progress</Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">4.9</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">Python for Data Science</CardTitle>
                        <CardDescription>Essential Python skills for data analysis</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Python+Programming"
                            alt="Python Course"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span className="font-medium">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>3 hours left</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              <span>12 modules</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Continue Learning</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="completed" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-green-500">Completed</Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">4.7</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">Introduction to Programming</CardTitle>
                        <CardDescription>Basics of programming concepts</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Programming+Basics"
                            alt="Programming Course"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Completed on</span>
                              <span className="font-medium">March 15, 2025</span>
                            </div>
                            <Progress value={100} className="h-2" />
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <GraduationCap className="mr-1 h-4 w-4" />
                              <span>Certificate Earned</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              <span>8 modules</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Certificate
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-green-500">Completed</Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">4.5</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">Database Fundamentals</CardTitle>
                        <CardDescription>Introduction to database design and SQL</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Database+Design"
                            alt="Database Course"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Completed on</span>
                              <span className="font-medium">February 28, 2025</span>
                            </div>
                            <Progress value={100} className="h-2" />
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <GraduationCap className="mr-1 h-4 w-4" />
                              <span>Certificate Earned</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              <span>6 modules</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Certificate
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="recommended" className="space-y-4">
                  <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Brain className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">AI-Powered Recommendations</h3>
                        <p className="text-sm text-muted-foreground">
                          Based on your learning history and goals, we've curated these courses specifically for you.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                            Recommended
                          </Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">4.9</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">Deep Learning Specialization</CardTitle>
                        <CardDescription>Advanced neural networks and AI techniques</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Deep+Learning"
                            alt="Deep Learning Course"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>40 hours total</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              <span>5 courses</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <Brain className="mr-1 inline-block h-4 w-4 text-primary" />
                            Recommended because you completed Machine Learning Fundamentals
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Enroll Now</Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                            Recommended
                          </Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">4.7</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">Advanced Data Analysis</CardTitle>
                        <CardDescription>Statistical methods for complex datasets</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Data+Analysis"
                            alt="Data Analysis Course"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>30 hours total</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              <span>8 modules</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <Brain className="mr-1 inline-block h-4 w-4 text-primary" />
                            Recommended based on your interest in data visualization
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Enroll Now</Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                            Recommended
                          </Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">4.8</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">Natural Language Processing</CardTitle>
                        <CardDescription>AI techniques for processing human language</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=NLP"
                            alt="NLP Course"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>35 hours total</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              <span>10 modules</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <Brain className="mr-1 inline-block h-4 w-4 text-primary" />
                            Recommended to complement your machine learning skills
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Enroll Now</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="catalog" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Showing 6 of 120 courses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                      <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                        <option>Most Popular</option>
                        <option>Newest</option>
                        <option>Highest Rated</option>
                        <option>Beginner Friendly</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Beginner</Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">4.8</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">Introduction to AI</CardTitle>
                        <CardDescription>Fundamentals of artificial intelligence</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=AI+Basics"
                            alt="AI Course"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>25 hours total</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              <span>8 modules</span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm">
                            <span className="font-medium">Instructor:</span>
                            <span className="ml-1 text-muted-foreground">Dr. Sarah Chen</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Enroll Now</Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Intermediate</Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">4.9</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">Web Development with React</CardTitle>
                        <CardDescription>Build modern web applications</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=React+Development"
                            alt="React Course"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>40 hours total</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              <span>12 modules</span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm">
                            <span className="font-medium">Instructor:</span>
                            <span className="ml-1 text-muted-foreground">Michael Johnson</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Enroll Now</Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Advanced</Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm">4.7</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">Cloud Computing Architecture</CardTitle>
                        <CardDescription>Design scalable cloud solutions</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Cloud+Computing"
                            alt="Cloud Computing Course"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>45 hours total</span>
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              <span>10 modules</span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm">
                            <span className="font-medium">Instructor:</span>
                            <span className="ml-1 text-muted-foreground">Dr. James Wilson</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Enroll Now</Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="flex items-center justify-center gap-2 pt-4">
                    <Button variant="outline" size="icon">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8">
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8">
                      2
                    </Button>
                    <Button size="sm" className="h-8 w-8">
                      3
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8">
                      4
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8">
                      5
                    </Button>
                    <Button variant="outline" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
