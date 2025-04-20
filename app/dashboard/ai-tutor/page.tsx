"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Brain,
  FileText,
  Lightbulb,
  Mic,
  PanelLeft,
  Send,
  Settings,
  ThumbsUp,
  ThumbsDown,
  Volume2,
} from "lucide-react"
import {
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
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function AITutorPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI tutor. How can I help with your learning today?",
      timestamp: new Date().toISOString(),
    },
  ])

  const [inputValue, setInputValue] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const newMessages = [
      ...messages,
      {
        role: "user",
        content: inputValue,
        timestamp: new Date().toISOString(),
      },
    ]

    setMessages(newMessages)
    setInputValue("")

    // Simulate AI response after a short delay
    setTimeout(() => {
      let response

      if (inputValue.toLowerCase().includes("machine learning")) {
        response =
          "Machine learning is a subset of artificial intelligence that focuses on building systems that learn from data. The key types are supervised learning (using labeled data), unsupervised learning (finding patterns in unlabeled data), and reinforcement learning (learning through trial and error). Would you like me to explain any of these in more detail?"
      } else if (inputValue.toLowerCase().includes("supervised learning")) {
        response =
          "Supervised learning is when an algorithm learns from labeled training data to make predictions. It's like learning with a teacher who provides the correct answers. Common algorithms include linear regression, logistic regression, decision trees, and neural networks. Would you like an example of how these are applied?"
      } else if (inputValue.toLowerCase().includes("example")) {
        response =
          "Here's an example of supervised learning: Imagine you want to predict house prices. You'd train a model using data with features (size, location, bedrooms) and labels (actual prices). The model learns the relationship between features and prices, then can predict prices for new houses. Would you like me to create a simple practice problem for you?"
      } else {
        response =
          "I'd be happy to help with that! Could you provide more details about what you're trying to learn? I can explain concepts, provide examples, create practice problems, or help you work through assignments."
      }

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: response,
          timestamp: new Date().toISOString(),
        },
      ])
    }, 1000)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar collapsible="offcanvas">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">EduAI Tutor</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Recent Conversations</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FileText className="h-4 w-4" />
                      <span>Machine Learning Basics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FileText className="h-4 w-4" />
                      <span>Data Visualization Help</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FileText className="h-4 w-4" />
                      <span>Python Programming Questions</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Learning Topics</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <span>Machine Learning</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <span>Data Science</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <span>Programming</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <span>Statistics</span>
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
                  <Link href="/dashboard">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard/settings">
                    <Settings className="h-4 w-4" />
                    <span>Tutor Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
            <div className="flex flex-1 items-center gap-4">
              <Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Tabs defaultValue="chat">
                <TabsList>
                  <TabsTrigger value="chat">Chat</TabsTrigger>
                  <TabsTrigger value="voice">Voice</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </header>

          <main className="flex flex-1 flex-col">
            <div className="flex-1 overflow-auto p-4">
              <div className="mx-auto max-w-3xl space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"} items-start gap-3`}
                    >
                      <Avatar className={message.role === "user" ? "bg-primary" : "bg-muted"}>
                        {message.role === "user" ? (
                          <>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                            <AvatarFallback>U</AvatarFallback>
                          </>
                        ) : (
                          <>
                            <AvatarImage src="/placeholder.svg" alt="AI Tutor" />
                            <AvatarFallback>
                              <Brain className="h-5 w-5" />
                            </AvatarFallback>
                          </>
                        )}
                      </Avatar>
                      <div
                        className={`rounded-lg p-3 ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <div className="mt-2 flex items-center justify-end gap-2">
                          <span className="text-xs opacity-70">
                            {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </span>
                          {message.role === "assistant" && (
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="icon" className="h-6 w-6">
                                <ThumbsUp className="h-3 w-3" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-6 w-6">
                                <ThumbsDown className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t bg-background p-4">
              <div className="mx-auto max-w-3xl">
                <Card>
                  <CardContent className="p-3">
                    <div className="flex items-end gap-2">
                      <div className="relative flex-1">
                        <Input
                          placeholder="Ask your AI tutor anything..."
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="pr-10"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full"
                          onClick={() => setInputValue("")}
                        >
                          <Mic className="h-4 w-4" />
                          <span className="sr-only">Voice Input</span>
                        </Button>
                      </div>
                      <Button size="icon" onClick={handleSendMessage}>
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Send</span>
                      </Button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                          <Lightbulb className="h-3 w-3" />
                          <span>Suggest Questions</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                          <Volume2 className="h-3 w-3" />
                          <span>Read Aloud</span>
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">Personalized to your learning style</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
