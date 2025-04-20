import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Brain, BarChartIcon as ChartBar, MessageSquare, Users } from "lucide-react"

export default function HomePage() {
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
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
            <Button asChild size="sm">
              <Link href="/onboarding">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Personalized Learning Powered by AI
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  EduAI adapts to your learning style, knowledge level, and preferences to create a tailored educational
                  experience that helps you achieve your goals faster.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/onboarding">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link href="/demo">See Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Educational platform dashboard preview"
                  className="rounded-lg object-cover shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is designed based on extensive research to provide the most effective learning
                  experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <Brain className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Personalized Learning</CardTitle>
                  <CardDescription>Adaptive learning paths based on your unique profile and progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our AI analyzes your learning style and knowledge level to create a customized curriculum that
                    evolves as you learn.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/features/personalization" className="text-sm text-primary hover:underline">
                    Learn more
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <MessageSquare className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Interactive Chatbots</CardTitle>
                  <CardDescription>Engage with AI tutors that adapt to your questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    60% of students prefer interactive chatbots for learning. Our AI assistants provide real-time help
                    and explanations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/features/chatbots" className="text-sm text-primary hover:underline">
                    Learn more
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <ChartBar className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Progress Tracking</CardTitle>
                  <CardDescription>Visualize your learning journey with meaningful metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Track your progress with detailed analytics that highlight strengths and areas for improvement.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/features/analytics" className="text-sm text-primary hover:underline">
                    Learn more
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Multilingual Support</CardTitle>
                  <CardDescription>Learn in your preferred language with full translation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Access content in multiple languages to support diverse learners from different backgrounds.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/features/languages" className="text-sm text-primary hover:underline">
                    Learn more
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Collaborative Learning</CardTitle>
                  <CardDescription>AI-facilitated group work and peer learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Engage in collaborative projects with AI-guided peer review and discussion moderation.</p>
                </CardContent>
                <CardFooter>
                  <Link href="/features/collaboration" className="text-sm text-primary hover:underline">
                    Learn more
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary mb-2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                  <CardTitle>Privacy-Focused</CardTitle>
                  <CardDescription>Transparent data policies with user control</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Addressing the 40% of students concerned about data privacy with clear policies and opt-out options.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/features/privacy" className="text-sm text-primary hover:underline">
                    Learn more
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start Your Learning Journey
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students who are already experiencing the benefits of AI-powered education.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button asChild className="w-full" size="lg">
                  <Link href="/onboarding">
                    Create Your Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">© 2025 EduAI. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
