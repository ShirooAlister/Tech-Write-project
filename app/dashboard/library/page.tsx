"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Brain,
  Calendar,
  Download,
  FileText,
  Filter,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Search,
  Settings,
  TrendingUp,
  Users,
  Video,
  Clock,
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

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState("all")

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
                    <SidebarMenuButton asChild isActive>
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
              <h1 className="text-lg font-semibold">Resource Library</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search resources..." className="w-[200px] pl-8 md:w-[260px]" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </header>

          <main className="p-6">
            <div className="mx-auto max-w-6xl space-y-6">
              <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">AI-Curated Resources</h3>
                    <p className="text-sm text-muted-foreground">
                      These resources are personalized based on your learning history, preferences, and current courses.
                    </p>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="all">All Resources</TabsTrigger>
                  <TabsTrigger value="articles">Articles</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                  <TabsTrigger value="exercises">Exercises</TabsTrigger>
                  <TabsTrigger value="saved">Saved</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Article</Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Recommended
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Introduction to Neural Networks</CardTitle>
                        <CardDescription>Understanding the fundamentals of neural networks</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Neural+Networks"
                            alt="Neural Networks"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <FileText className="mr-1 h-4 w-4" />
                            <span>10 min read</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Brain className="mr-1 h-4 w-4 text-primary" />
                            <span>Recommended for Machine Learning Fundamentals</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Read Now</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Video</Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Recommended
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Data Visualization Best Practices</CardTitle>
                        <CardDescription>Creating effective and informative visualizations</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted relative">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Data+Visualization"
                            alt="Data Visualization"
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-primary/90 p-3">
                              <Video className="h-6 w-6 text-primary-foreground" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>25 min video</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Brain className="mr-1 h-4 w-4 text-primary" />
                            <span>Recommended for Data Visualization Techniques</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Watch Now</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Exercise</Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Recommended
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Python Data Analysis Practice</CardTitle>
                        <CardDescription>Hands-on exercises for data manipulation</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Python+Exercise"
                            alt="Python Exercise"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <GraduationCap className="mr-1 h-4 w-4" />
                            <span>10 practice problems</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Brain className="mr-1 h-4 w-4 text-primary" />
                            <span>Recommended for Python for Data Science</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Start Exercise</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Article</Badge>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Beginner
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Understanding Machine Learning Algorithms</CardTitle>
                        <CardDescription>A comprehensive guide to ML algorithms</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=ML+Algorithms"
                            alt="ML Algorithms"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <FileText className="mr-1 h-4 w-4" />
                            <span>15 min read</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-1 h-4 w-4" />
                            <span>4,250 learners accessed this resource</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Read Now</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Video</Badge>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Intermediate
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Advanced SQL Techniques</CardTitle>
                        <CardDescription>Mastering complex SQL queries and optimization</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted relative">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=SQL+Techniques"
                            alt="SQL Techniques"
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-primary/90 p-3">
                              <Video className="h-6 w-6 text-primary-foreground" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>45 min video</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-1 h-4 w-4" />
                            <span>3,120 learners accessed this resource</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Watch Now</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Exercise</Badge>
                          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                            Advanced
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Deep Learning Project</CardTitle>
                        <CardDescription>Build a neural network from scratch</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Deep+Learning"
                            alt="Deep Learning"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <GraduationCap className="mr-1 h-4 w-4" />
                            <span>Guided project with 5 milestones</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-1 h-4 w-4" />
                            <span>1,850 learners accessed this resource</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Start Project</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="articles" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Article</Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Recommended
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Introduction to Neural Networks</CardTitle>
                        <CardDescription>Understanding the fundamentals of neural networks</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Neural+Networks"
                            alt="Neural Networks"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <FileText className="mr-1 h-4 w-4" />
                            <span>10 min read</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Brain className="mr-1 h-4 w-4 text-primary" />
                            <span>Recommended for Machine Learning Fundamentals</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Read Now</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Article</Badge>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Beginner
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Understanding Machine Learning Algorithms</CardTitle>
                        <CardDescription>A comprehensive guide to ML algorithms</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=ML+Algorithms"
                            alt="ML Algorithms"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <FileText className="mr-1 h-4 w-4" />
                            <span>15 min read</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-1 h-4 w-4" />
                            <span>4,250 learners accessed this resource</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Read Now</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Article</Badge>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Intermediate
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Data Preprocessing Techniques</CardTitle>
                        <CardDescription>Essential steps for preparing data for analysis</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Data+Preprocessing"
                            alt="Data Preprocessing"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <FileText className="mr-1 h-4 w-4" />
                            <span>12 min read</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-1 h-4 w-4" />
                            <span>3,780 learners accessed this resource</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Read Now</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="videos" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Video</Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Recommended
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Data Visualization Best Practices</CardTitle>
                        <CardDescription>Creating effective and informative visualizations</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted relative">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Data+Visualization"
                            alt="Data Visualization"
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-primary/90 p-3">
                              <Video className="h-6 w-6 text-primary-foreground" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>25 min video</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Brain className="mr-1 h-4 w-4 text-primary" />
                            <span>Recommended for Data Visualization Techniques</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Watch Now</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Video</Badge>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Intermediate
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Advanced SQL Techniques</CardTitle>
                        <CardDescription>Mastering complex SQL queries and optimization</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted relative">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=SQL+Techniques"
                            alt="SQL Techniques"
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-primary/90 p-3">
                              <Video className="h-6 w-6 text-primary-foreground" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>45 min video</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-1 h-4 w-4" />
                            <span>3,120 learners accessed this resource</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Watch Now</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Video</Badge>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Beginner
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Python for Data Analysis</CardTitle>
                        <CardDescription>Getting started with Python for data analysis</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted relative">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Python+Analysis"
                            alt="Python Analysis"
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-primary/90 p-3">
                              <Video className="h-6 w-6 text-primary-foreground" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>35 min video</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-1 h-4 w-4" />
                            <span>5,430 learners accessed this resource</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Watch Now</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="exercises" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Exercise</Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Recommended
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Python Data Analysis Practice</CardTitle>
                        <CardDescription>Hands-on exercises for data manipulation</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Python+Exercise"
                            alt="Python Exercise"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <GraduationCap className="mr-1 h-4 w-4" />
                            <span>10 practice problems</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Brain className="mr-1 h-4 w-4 text-primary" />
                            <span>Recommended for Python for Data Science</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Start Exercise</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Exercise</Badge>
                          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                            Advanced
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Deep Learning Project</CardTitle>
                        <CardDescription>Build a neural network from scratch</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Deep+Learning"
                            alt="Deep Learning"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <GraduationCap className="mr-1 h-4 w-4" />
                            <span>Guided project with 5 milestones</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-1 h-4 w-4" />
                            <span>1,850 learners accessed this resource</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Start Project</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Exercise</Badge>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Intermediate
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">SQL Query Challenges</CardTitle>
                        <CardDescription>Practice complex database queries</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=SQL+Challenges"
                            alt="SQL Challenges"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <GraduationCap className="mr-1 h-4 w-4" />
                            <span>15 SQL challenges with solutions</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-1 h-4 w-4" />
                            <span>2,740 learners accessed this resource</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Start Challenges</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="saved" className="space-y-4">
                  <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Your Saved Resources</h3>
                        <p className="text-sm text-muted-foreground">
                          Access your bookmarked resources for quick reference and offline learning.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Article</Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Saved
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Introduction to Neural Networks</CardTitle>
                        <CardDescription>Understanding the fundamentals of neural networks</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Neural+Networks"
                            alt="Neural Networks"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <FileText className="mr-1 h-4 w-4" />
                            <span>10 min read</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Saved on April 15, 2025</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Read Now</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">Video</Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Saved
                          </Badge>
                        </div>
                        <CardTitle className="mt-2">Data Visualization Best Practices</CardTitle>
                        <CardDescription>Creating effective and informative visualizations</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted relative">
                          <img
                            src="/placeholder.svg?height=200&width=360&text=Data+Visualization"
                            alt="Data Visualization"
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-primary/90 p-3">
                              <Video className="h-6 w-6 text-primary-foreground" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>25 min video</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Saved on April 10, 2025</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1">Watch Now</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
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
