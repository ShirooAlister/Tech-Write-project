"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  BookOpen,
  Brain,
  Calendar,
  Clock,
  FileText,
  Flame,
  GraduationCap,
  LayoutDashboard,
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

export default function DashboardPage() {
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
                    <SidebarMenuButton asChild isActive={activeTab === "overview"}>
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
                    <SidebarMenuButton asChild>
                      <Link href="/dashboard/library">
                        <FileText className="h-4 w-4" />
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
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-6 md:gap-8">
            <div className="grid auto-rows-max gap-4 md:gap-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
                    <Flame className="h-4 w-4 text-orange-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">7 Days</div>
                    <p className="text-xs text-muted-foreground">+2 days compared to last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Time Spent</CardTitle>
                    <Clock className="h-4 w-4 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12.5 Hours</div>
                    <p className="text-xs text-muted-foreground">+2.5 hours compared to last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Courses</CardTitle>
                    <BookOpen className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3 Active</div>
                    <p className="text-xs text-muted-foreground">2 completed this month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Achievement Points</CardTitle>
                    <Star className="h-4 w-4 text-yellow-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,250</div>
                    <p className="text-xs text-muted-foreground">+350 points this week</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Your Learning Path</CardTitle>
                    <CardDescription>
                      AI-generated personalized learning journey based on your profile and progress
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <span className="text-sm font-bold">1</span>
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">Introduction to Machine Learning</p>
                          <p className="text-sm text-muted-foreground">Fundamentals and key concepts</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Completed
                          </Badge>
                        </div>
                      </div>
                      <div className="ml-5 h-6 w-px bg-border"></div>
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <span className="text-sm font-bold">2</span>
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">Supervised Learning Algorithms</p>
                          <p className="text-sm text-muted-foreground">Classification and regression techniques</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            In Progress
                          </Badge>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                      </div>
                      <div className="ml-5 h-6 w-px bg-border"></div>
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                          <span className="text-sm font-bold">3</span>
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">Unsupervised Learning</p>
                          <p className="text-sm text-muted-foreground">Clustering and dimensionality reduction</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                          <Badge variant="outline" className="bg-gray-50 text-gray-500 border-gray-200">
                            Upcoming
                          </Badge>
                        </div>
                      </div>
                      <div className="ml-5 h-6 w-px bg-border"></div>
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                          <span className="text-sm font-bold">4</span>
                        </div>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">Neural Networks & Deep Learning</p>
                          <p className="text-sm text-muted-foreground">Advanced AI techniques</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                          <Badge variant="outline" className="bg-gray-50 text-gray-500 border-gray-200">
                            Upcoming
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Full Learning Path
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="lg:col-span-3">
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

                    <div className="pt-4">
                      <h4 className="text-sm font-medium mb-3">Recommended Next Steps</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          Complete "Classification Models" module
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          Take practice quiz on supervised learning
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          Review feedback on your last assignment
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Resume Learning
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>AI Tutor</CardTitle>
                    <CardDescription>Get personalized help with your studies</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="rounded-full bg-primary/10 p-6">
                      <Brain className="h-10 w-10 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-medium">Ask me anything!</h4>
                      <p className="text-sm text-muted-foreground">
                        Your AI tutor is ready to help with explanations, practice problems, and study guidance.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Chat with AI Tutor</Button>
                  </CardFooter>
                </Card>

                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Upcoming Deadlines</CardTitle>
                    <CardDescription>Tasks and assessments due soon</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Classification Assignment</p>
                          <p className="text-xs text-muted-foreground">Due in 2 days</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Quiz: Supervised Learning</p>
                          <p className="text-xs text-muted-foreground">Due in 5 days</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-md bg-primary/10 p-2">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Group Project Milestone</p>
                          <p className="text-xs text-muted-foreground">Due in 1 week</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Deadlines
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Collaborative Learning</CardTitle>
                    <CardDescription>Connect with peers and study groups</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Study Group" />
                          <AvatarFallback>SG</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Machine Learning Study Group</p>
                          <p className="text-xs text-muted-foreground">8 members • Active now</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Project Team" />
                          <AvatarFallback>PT</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Data Visualization Project Team</p>
                          <p className="text-xs text-muted-foreground">5 members • Last active 2h ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Discussion" />
                          <AvatarFallback>D</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">AI Ethics Discussion Forum</p>
                          <p className="text-xs text-muted-foreground">24 members • Last active 1d ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Join a Study Group
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
