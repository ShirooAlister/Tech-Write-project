"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Brain,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  MessageSquare,
  Plus,
  Search,
  Settings,
  Share2,
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

export default function CollaborationPage() {
  const [activeTab, setActiveTab] = useState("groups")

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
                        <FileText className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/dashboard/courses">
                        <FileText className="h-4 w-4" />
                        <span>My Courses</span>
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
                    <SidebarMenuButton asChild isActive>
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
              <h1 className="text-lg font-semibold">Collaborative Learning</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Create Group
              </Button>
            </div>
          </header>

          <main className="p-6">
            <div className="mx-auto max-w-6xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Collaborative Learning Space</h2>
                  <p className="text-muted-foreground">
                    Connect with peers, join study groups, and work on projects together
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search groups..." className="w-[200px] pl-8 md:w-[260px]" />
                  </div>
                </div>
              </div>

              <Tabs defaultValue="groups" className="space-y-4" onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="groups">Study Groups</TabsTrigger>
                  <TabsTrigger value="projects">Group Projects</TabsTrigger>
                  <TabsTrigger value="discussions">Discussion Forums</TabsTrigger>
                  <TabsTrigger value="ai-facilitated">AI-Facilitated Sessions</TabsTrigger>
                </TabsList>

                <TabsContent value="groups" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">Machine Learning Study Group</CardTitle>
                          <Badge>8 members</Badge>
                        </div>
                        <CardDescription>Advanced concepts and algorithms</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex -space-x-2 overflow-hidden mb-4">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Avatar key={i} className="border-2 border-background">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${i}`} alt={`Member ${i}`} />
                              <AvatarFallback>M{i}</AvatarFallback>
                            </Avatar>
                          ))}
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                            +3
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>Next meeting: Tomorrow, 3:00 PM</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>24 unread messages</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Join Group</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">Data Visualization Group</CardTitle>
                          <Badge>12 members</Badge>
                        </div>
                        <CardDescription>Techniques and best practices</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex -space-x-2 overflow-hidden mb-4">
                          {[1, 2, 3, 4].map((i) => (
                            <Avatar key={i} className="border-2 border-background">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${i}`} alt={`Member ${i}`} />
                              <AvatarFallback>M{i}</AvatarFallback>
                            </Avatar>
                          ))}
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                            +8
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>Next meeting: Friday, 5:00 PM</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>8 unread messages</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Join Group</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">Python Programming</CardTitle>
                          <Badge>15 members</Badge>
                        </div>
                        <CardDescription>From basics to advanced topics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex -space-x-2 overflow-hidden mb-4">
                          {[1, 2, 3].map((i) => (
                            <Avatar key={i} className="border-2 border-background">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${i}`} alt={`Member ${i}`} />
                              <AvatarFallback>M{i}</AvatarFallback>
                            </Avatar>
                          ))}
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                            +12
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>Next meeting: Monday, 4:00 PM</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>32 unread messages</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Join Group</Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="flex items-center justify-center">
                    <Button variant="outline">
                      View All Study Groups
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="projects" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">Predictive Analytics Project</CardTitle>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            In Progress
                          </Badge>
                        </div>
                        <CardDescription>Building a predictive model for student success</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium">Team Members:</p>
                            <div className="flex -space-x-2 overflow-hidden mt-2">
                              {[1, 2, 3, 4].map((i) => (
                                <Avatar key={i} className="border-2 border-background">
                                  <AvatarImage
                                    src={`/placeholder.svg?height=32&width=32&text=${i}`}
                                    alt={`Member ${i}`}
                                  />
                                  <AvatarFallback>M{i}</AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Deadline:</p>
                            <div className="flex items-center mt-1 text-sm">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>May 15, 2025</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium">AI Suggestions:</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              AI recommends adding feature engineering to improve model accuracy
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">View Project</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">Data Visualization Dashboard</CardTitle>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Open to Join
                          </Badge>
                        </div>
                        <CardDescription>Creating interactive visualizations of educational data</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium">Team Members:</p>
                            <div className="flex -space-x-2 overflow-hidden mt-2">
                              {[1, 2].map((i) => (
                                <Avatar key={i} className="border-2 border-background">
                                  <AvatarImage
                                    src={`/placeholder.svg?height=32&width=32&text=${i}`}
                                    alt={`Member ${i}`}
                                  />
                                  <AvatarFallback>M{i}</AvatarFallback>
                                </Avatar>
                              ))}
                              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary text-xs font-medium text-primary-foreground">
                                +3
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Deadline:</p>
                            <div className="flex items-center mt-1 text-sm">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>June 10, 2025</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium">AI Suggestions:</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              AI suggests using D3.js for more interactive visualizations
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Join Project</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">AI Ethics Research</CardTitle>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                            Planning Phase
                          </Badge>
                        </div>
                        <CardDescription>Exploring ethical implications of AI in education</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium">Team Members:</p>
                            <div className="flex -space-x-2 overflow-hidden mt-2">
                              {[1, 2, 3].map((i) => (
                                <Avatar key={i} className="border-2 border-background">
                                  <AvatarImage
                                    src={`/placeholder.svg?height=32&width=32&text=${i}`}
                                    alt={`Member ${i}`}
                                  />
                                  <AvatarFallback>M{i}</AvatarFallback>
                                </Avatar>
                              ))}
                              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary text-xs font-medium text-primary-foreground">
                                +2
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Deadline:</p>
                            <div className="flex items-center mt-1 text-sm">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>July 20, 2025</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium">AI Suggestions:</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              AI recommends including privacy concerns in research scope
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Join Project</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="discussions" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>AI Ethics in Education</CardTitle>
                      <CardDescription>
                        Discussion on the ethical implications of AI in educational settings
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User 1" />
                            <AvatarFallback>U1</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Sarah Johnson</span>
                              <span className="text-xs text-muted-foreground">2 days ago</span>
                            </div>
                            <p className="text-sm">
                              I'm concerned about the privacy implications of AI in education. How can we ensure student
                              data is protected while still benefiting from personalized learning?
                            </p>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                                <MessageSquare className="h-3 w-3" />
                                <span>Reply</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                                <Share2 className="h-3 w-3" />
                                <span>Share</span>
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 pl-12">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User 2" />
                            <AvatarFallback>U2</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Michael Chen</span>
                              <span className="text-xs text-muted-foreground">1 day ago</span>
                            </div>
                            <p className="text-sm">
                              Great point, Sarah. I think transparent data policies and opt-out options are essential.
                              The research shows that 40% of students are concerned about data privacy.
                            </p>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                                <MessageSquare className="h-3 w-3" />
                                <span>Reply</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                                <Share2 className="h-3 w-3" />
                                <span>Share</span>
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="AI Moderator" />
                            <AvatarFallback>
                              <Brain className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1 rounded-lg border p-3">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">AI Moderator</span>
                              <Badge variant="outline" className="text-xs">
                                AI Facilitated
                              </Badge>
                            </div>
                            <p className="text-sm">
                              This is an important discussion. Research shows that while AI can enhance personalization,
                              privacy concerns must be addressed. Some key considerations:
                            </p>
                            <ul className="ml-4 mt-2 list-disc text-sm space-y-1">
                              <li>Data minimization - only collect what's necessary</li>
                              <li>Transparent policies on data usage</li>
                              <li>User control over their own data</li>
                              <li>Regular audits of AI systems for bias and privacy</li>
                              <li>Age-appropriate data collection practices</li>
                            </ul>
                            <p className="text-sm mt-2">
                              Would anyone like to share specific privacy measures they've seen implemented effectively?
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User 3" />
                            <AvatarFallback>U3</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Aisha Patel</span>
                              <span className="text-xs text-muted-foreground">12 hours ago</span>
                            </div>
                            <p className="text-sm">
                              I've seen some schools implement a tiered consent system where students/parents can choose
                              different levels of data sharing. It seems to work well for balancing personalization with
                              privacy concerns.
                            </p>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                                <MessageSquare className="h-3 w-3" />
                                <span>Reply</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                                <Share2 className="h-3 w-3" />
                                <span>Share</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Textarea placeholder="Add to the discussion..." className="mb-2" />
                        <div className="flex justify-end">
                          <Button>Post Reply</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="ai-facilitated" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>AI-Guided Study Session</CardTitle>
                        <CardDescription>Machine Learning Algorithms - Supervised Learning</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Tomorrow, 4:00 PM - 5:30 PM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">6 participants (max 10)</span>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Brain className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">AI Facilitator Role</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            The AI will guide the discussion, provide explanations of complex concepts, and suggest
                            practice problems based on the group's progress.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Join Session</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Peer Review Workshop</CardTitle>
                        <CardDescription>AI-facilitated feedback on data visualization projects</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Friday, 3:00 PM - 5:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">4 participants (max 8)</span>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Brain className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">AI Facilitator Role</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            The AI will help structure peer reviews, provide additional feedback, and suggest
                            improvements based on best practices in data visualization.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Join Workshop</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Group Problem Solving</CardTitle>
                        <CardDescription>Collaborative approach to complex statistical problems</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Monday, 6:00 PM - 7:30 PM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">5 participants (max 12)</span>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Brain className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">AI Facilitator Role</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            The AI will present problems, provide hints when the group is stuck, and suggest different
                            approaches based on each participant's strengths.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Join Session</Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <div className="flex items-center justify-center">
                    <Button variant="outline">
                      View All AI-Facilitated Sessions
                      <ChevronRight className="ml-2 h-4 w-4" />
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
