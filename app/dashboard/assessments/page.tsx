"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  Brain,
  Calendar,
  Check,
  Clock,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  TrendingUp,
  X,
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

export default function AssessmentsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [quizCompleted, setQuizCompleted] = useState(false)

  const questions = [
    {
      id: 1,
      question: "Which of the following is a supervised learning algorithm?",
      options: ["K-means clustering", "Linear regression", "Principal Component Analysis (PCA)", "Autoencoders"],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "What is the main difference between supervised and unsupervised learning?",
      options: [
        "Supervised learning requires more computational power",
        "Unsupervised learning always produces better results",
        "Supervised learning uses labeled data while unsupervised learning does not",
        "Unsupervised learning is only used for image recognition",
      ],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "Which metric is commonly used to evaluate regression models?",
      options: ["Accuracy", "Precision", "Mean Squared Error (MSE)", "F1 Score"],
      correctAnswer: 2,
    },
  ]

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex,
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++
      }
    })
    return (correct / questions.length) * 100
  }

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
                      <Link href="/dashboard/progress">
                        <TrendingUp className="h-4 w-4" />
                        <span>Progress</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                      <Link href="/dashboard/assessments">
                        <GraduationCap className="h-4 w-4" />
                        <span>Assessments</span>
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
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
            <div className="flex flex-1 items-center gap-4">
              <h1 className="text-lg font-semibold">Assessment & Feedback</h1>
            </div>
          </header>

          <main className="p-6">
            <div className="mx-auto max-w-6xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Assessments</h2>
                  <p className="text-muted-foreground">
                    Track your progress with adaptive quizzes and personalized feedback
                  </p>
                </div>
              </div>

              <Tabs defaultValue="upcoming" className="space-y-4" onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="practice">Practice</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Machine Learning Quiz</CardTitle>
                          <Badge>Due in 3 days</Badge>
                        </div>
                        <CardDescription>Test your knowledge of supervised learning algorithms</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Due: April 23, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Estimated time: 30 minutes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">10 questions</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" onClick={() => setActiveTab("active")}>
                          Start Quiz
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Data Visualization Assignment</CardTitle>
                          <Badge>Due in 1 week</Badge>
                        </div>
                        <CardDescription>Create visualizations from the provided dataset</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Due: April 27, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Estimated time: 2 hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Project submission</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">View Assignment</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Final Project Milestone</CardTitle>
                          <Badge>Due in 2 weeks</Badge>
                        </div>
                        <CardDescription>Submit your project proposal and initial findings</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Due: May 4, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Estimated time: 4 hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Document submission</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">View Project Details</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="active" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Machine Learning Quiz</CardTitle>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          In Progress
                        </Badge>
                      </div>
                      <CardDescription>Test your knowledge of supervised learning algorithms</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {!quizCompleted ? (
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">
                                Question {currentQuestion + 1} of {questions.length}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {Math.round((currentQuestion / questions.length) * 100)}% complete
                              </span>
                            </div>
                            <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>

                            <RadioGroup
                              value={selectedAnswers[questions[currentQuestion].id]?.toString()}
                              onValueChange={(value) =>
                                handleAnswerSelect(questions[currentQuestion].id, Number.parseInt(value))
                              }
                            >
                              {questions[currentQuestion].options.map((option, index) => (
                                <div
                                  key={index}
                                  className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted"
                                >
                                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                                    {option}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>

                          <div className="flex justify-between pt-4">
                            <Button variant="outline" onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
                              Previous
                            </Button>
                            <Button
                              onClick={handleNextQuestion}
                              disabled={selectedAnswers[questions[currentQuestion].id] === undefined}
                            >
                              {currentQuestion < questions.length - 1 ? "Next" : "Submit"}
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div className="rounded-lg bg-muted p-6 text-center">
                            <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
                            <p className="text-muted-foreground mb-4">
                              You scored {calculateScore()}% on this assessment
                            </p>
                            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl font-bold text-primary">{Math.round(calculateScore())}%</span>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-medium">Question Review</h4>
                            {questions.map((question, index) => (
                              <div key={index} className="rounded-lg border p-4">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <p className="font-medium">{question.question}</p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                      Your answer: {question.options[selectedAnswers[question.id]]}
                                    </p>
                                  </div>
                                  <div>
                                    {selectedAnswers[question.id] === question.correctAnswer ? (
                                      <div className="flex items-center text-green-600">
                                        <Check className="h-5 w-5 mr-1" />
                                        <span>Correct</span>
                                      </div>
                                    ) : (
                                      <div className="flex items-center text-red-600">
                                        <X className="h-5 w-5 mr-1" />
                                        <span>Incorrect</span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {selectedAnswers[question.id] !== question.correctAnswer && (
                                  <div className="mt-2 rounded-md bg-muted p-3">
                                    <p className="text-sm font-medium">Correct answer:</p>
                                    <p className="text-sm">{question.options[question.correctAnswer]}</p>
                                    <div className="mt-2 flex items-center">
                                      <Brain className="h-4 w-4 text-primary mr-2" />
                                      <p className="text-sm text-muted-foreground">
                                        AI Explanation: This is the correct answer because it accurately describes the
                                        concept being tested. Would you like more detailed feedback?
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>

                          <div className="space-y-4 pt-4">
                            <h4 className="font-medium">AI-Generated Recommendations</h4>
                            <div className="rounded-lg border p-4">
                              <div className="flex items-start gap-3">
                                <Brain className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                  <p className="font-medium">
                                    Based on your performance, here are some recommended resources:
                                  </p>
                                  <ul className="mt-2 space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                      <FileText className="h-4 w-4 text-muted-foreground" />
                                      <span>Review "Introduction to Supervised Learning" module</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <FileText className="h-4 w-4 text-muted-foreground" />
                                      <span>
                                        Practice with the "Regression vs. Classification" interactive exercise
                                      </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                      <span>Schedule a session with your AI tutor to review difficult concepts</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      {quizCompleted && (
                        <>
                          <Button variant="outline" asChild>
                            <Link href="/dashboard">Return to Dashboard</Link>
                          </Button>
                          <Button>Practice Similar Questions</Button>
                        </>
                      )}
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="completed" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Python Basics Quiz</CardTitle>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            92% Score
                          </Badge>
                        </div>
                        <CardDescription>Fundamentals of Python programming</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Completed: April 10, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">15 questions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-primary" />
                          <span className="text-sm">AI Feedback: Strong understanding of core concepts</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Results
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Data Analysis Project</CardTitle>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            85% Score
                          </Badge>
                        </div>
                        <CardDescription>Exploratory data analysis techniques</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Completed: April 5, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Project submission</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-primary" />
                          <span className="text-sm">AI Feedback: Good analysis, could improve visualizations</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Feedback
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Statistics Fundamentals</CardTitle>
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            78% Score
                          </Badge>
                        </div>
                        <CardDescription>Basic statistical concepts and methods</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Completed: March 28, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">20 questions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-primary" />
                          <span className="text-sm">AI Feedback: Review hypothesis testing concepts</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Results & Practice
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="practice" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Adaptive Practice Quiz</CardTitle>
                        <CardDescription>Questions tailored to your knowledge gaps</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="rounded-lg bg-primary/10 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Brain className="h-4 w-4 text-primary" />
                            <span className="font-medium">AI-Generated Practice</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Based on your previous assessments, this quiz focuses on areas where you need more practice.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Topics covered:</p>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              <span>Hypothesis testing</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              <span>Regression analysis</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              <span>Model evaluation metrics</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Start Practice</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Flashcards</CardTitle>
                        <CardDescription>Quick review of key concepts</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="rounded-lg bg-primary/10 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Brain className="h-4 w-4 text-primary" />
                            <span className="font-medium">Spaced Repetition</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            AI-powered flashcards that use spaced repetition to help you remember key concepts.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Available decks:</p>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              <span>Machine Learning Terminology</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              <span>Statistical Methods</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              <span>Python Functions</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Review Flashcards</Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Problem Generator</CardTitle>
                        <CardDescription>Practice with custom problems</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="rounded-lg bg-primary/10 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Brain className="h-4 w-4 text-primary" />
                            <span className="font-medium">AI Problem Creation</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Generate custom practice problems with step-by-step solutions.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Problem types:</p>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              <span>Coding challenges</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              <span>Data analysis scenarios</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              <span>Mathematical problems</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Generate Problems</Button>
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
