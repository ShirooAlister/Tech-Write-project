"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, ChevronLeft, ChevronRight, Globe, Lock, User } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      router.push("/dashboard")
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-bold">EduAI</span>
            </Link>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Step {step} of {totalSteps}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container max-w-3xl">
          <div className="mb-8">
            <Progress value={(step / totalSteps) * 100} className="h-2" />
          </div>

          {step === 1 && (
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <CardTitle className="text-2xl">Create Your Profile</CardTitle>
                </div>
                <CardDescription>
                  Let's start by getting to know you better so we can personalize your learning experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="education">Education Level</Label>
                  <Select>
                    <SelectTrigger id="education">
                      <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="elementary">Elementary School</SelectItem>
                      <SelectItem value="middle">Middle School</SelectItem>
                      <SelectItem value="high">High School</SelectItem>
                      <SelectItem value="undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Primary Learning Goal</Label>
                  <RadioGroup defaultValue="academic" className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="academic" id="academic" />
                      <Label htmlFor="academic">Academic Education</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="professional" id="professional" />
                      <Label htmlFor="professional">Professional Development</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="personal" id="personal" />
                      <Label htmlFor="personal">Personal Interest</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="skill" id="skill" />
                      <Label htmlFor="skill">Specific Skill</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => router.push("/")}>
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
                </Button>
                <Button onClick={nextStep}>
                  Continue <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <CardTitle className="text-2xl">Learning Style Assessment</CardTitle>
                </div>
                <CardDescription>
                  Help us understand how you learn best so we can tailor content to your preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>How do you prefer to consume educational content?</Label>
                  <RadioGroup defaultValue="visual" className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="visual" id="visual" />
                      <Label htmlFor="visual">Visual (videos, diagrams, infographics)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="auditory" id="auditory" />
                      <Label htmlFor="auditory">Auditory (lectures, discussions, audio)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="reading" id="reading" />
                      <Label htmlFor="reading">Reading/Writing (text, articles, notes)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="kinesthetic" id="kinesthetic" />
                      <Label htmlFor="kinesthetic">Kinesthetic (hands-on activities, practice)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>How do you prefer to interact with AI learning assistants?</Label>
                  <RadioGroup defaultValue="chatbot" className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="chatbot" id="chatbot" />
                      <Label htmlFor="chatbot">Interactive chatbot (60% of students prefer this)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="assistant" id="assistant" />
                      <Label htmlFor="assistant">Virtual classroom assistant (40% of students prefer this)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="voice" id="voice" />
                      <Label htmlFor="voice">Voice-enabled interactions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="minimal" id="minimal" />
                      <Label htmlFor="minimal">Minimal AI interaction</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>What pace of learning do you prefer?</Label>
                  <RadioGroup defaultValue="self" className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="self" id="self" />
                      <Label htmlFor="self">Self-paced with flexible deadlines</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="structured" id="structured" />
                      <Label htmlFor="structured">Structured with regular schedules</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="accelerated" id="accelerated" />
                      <Label htmlFor="accelerated">Accelerated learning</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gradual" id="gradual" />
                      <Label htmlFor="gradual">Gradual with extensive practice</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep}>
                  Continue <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <CardTitle className="text-2xl">Language & Accessibility</CardTitle>
                </div>
                <CardDescription>
                  Configure language preferences and accessibility options for an inclusive learning experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-language">Primary Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="primary-language">
                      <SelectValue placeholder="Select your primary language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                      <SelectItem value="ko">Korean</SelectItem>
                      <SelectItem value="ar">Arabic</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="fil">Filipino</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="secondary-language">Secondary Language (Optional)</Label>
                  <Select>
                    <SelectTrigger id="secondary-language">
                      <SelectValue placeholder="Select a secondary language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                      <SelectItem value="ko">Korean</SelectItem>
                      <SelectItem value="ar">Arabic</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="fil">Filipino</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Accessibility Options</Label>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="screen-reader" className="h-4 w-4 rounded border-gray-300" />
                      <Label htmlFor="screen-reader">Screen reader optimization</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="high-contrast" className="h-4 w-4 rounded border-gray-300" />
                      <Label htmlFor="high-contrast">High contrast mode</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="captions" className="h-4 w-4 rounded border-gray-300" />
                      <Label htmlFor="captions">Always show captions for videos</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="text-to-speech" className="h-4 w-4 rounded border-gray-300" />
                      <Label htmlFor="text-to-speech">Text-to-speech for written content</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="simplified-ui" className="h-4 w-4 rounded border-gray-300" />
                      <Label htmlFor="simplified-ui">Simplified user interface</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Internet Connectivity Options</Label>
                  <RadioGroup defaultValue="always" className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="always" id="always" />
                      <Label htmlFor="always">Always online (stable connection)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermittent" id="intermittent" />
                      <Label htmlFor="intermittent">Intermittent connection (download for offline use)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="limited" id="limited" />
                      <Label htmlFor="limited">Limited bandwidth (optimize for low data usage)</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep}>
                  Continue <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <CardTitle className="text-2xl">Privacy Settings</CardTitle>
                </div>
                <CardDescription>
                  Control how your data is used to power your learning experience (addressing the 40% of students
                  concerned about data privacy).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4 bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">
                    EduAI uses your learning data to personalize your experience. We prioritize your privacy and give
                    you control over how your data is used.
                  </p>
                </div>

                <Tabs defaultValue="data-collection">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="data-collection">Data Collection</TabsTrigger>
                    <TabsTrigger value="ai-personalization">AI Personalization</TabsTrigger>
                    <TabsTrigger value="sharing">Data Sharing</TabsTrigger>
                  </TabsList>
                  <TabsContent value="data-collection" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label>Learning Activity Data</Label>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="progress-tracking"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                          <Label htmlFor="progress-tracking">Track learning progress and completion</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="engagement-metrics"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                          <Label htmlFor="engagement-metrics">
                            Collect engagement metrics (time spent, interactions)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="assessment-results"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                          <Label htmlFor="assessment-results">Store assessment results and performance data</Label>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="ai-personalization" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label>AI Personalization Features</Label>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="content-recommendations"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                          <Label htmlFor="content-recommendations">
                            Personalized content recommendations based on learning patterns
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="adaptive-difficulty"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                          <Label htmlFor="adaptive-difficulty">Adaptive difficulty adjustments</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="learning-path"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                          <Label htmlFor="learning-path">AI-generated learning path optimization</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="chatbot-memory"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                          <Label htmlFor="chatbot-memory">AI chatbot memory of past interactions</Label>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="sharing" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label>Data Sharing Preferences</Label>
                      <div className="grid grid-cols-1 gap-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="teachers"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                          <Label htmlFor="teachers">Share progress with teachers/administrators</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="research" className="h-4 w-4 rounded border-gray-300" />
                          <Label htmlFor="research">Contribute anonymized data to educational research</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="third-party" className="h-4 w-4 rounded border-gray-300" />
                          <Label htmlFor="third-party">Allow third-party educational partners access</Label>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-2">
                  <Label>Data Retention</Label>
                  <RadioGroup defaultValue="session" className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="session" id="session" />
                      <Label htmlFor="session">Session only (minimal retention)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="course" id="course" />
                      <Label htmlFor="course">Course duration (deleted upon completion)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="account" id="account" />
                      <Label htmlFor="account">Account lifetime (deleted if account closed)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300" required />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={nextStep}>
                  Complete Setup <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
