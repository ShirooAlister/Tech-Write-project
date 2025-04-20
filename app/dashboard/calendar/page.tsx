"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Brain,
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Plus,
  Settings,
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

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [view, setView] = useState("month") // month, week, day

  // Generate calendar days for the current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)

    // Day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = firstDay.getDay()

    // Total days in the month
    const daysInMonth = lastDay.getDate()

    // Array to hold all calendar days including padding days
    const days = []

    // Add padding days from previous month
    for (let i = 0; i < firstDayOfWeek; i++) {
      const prevMonthLastDay = new Date(year, month, 0).getDate()
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - firstDayOfWeek + i + 1),
        isCurrentMonth: false,
        events: [],
      })
    }

    // Add days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
        events: getEventsForDate(new Date(year, month, i)),
      })
    }

    // Add padding days from next month to complete the grid
    const remainingDays = 42 - days.length // 6 rows of 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        events: [],
      })
    }

    return days
  }

  // Mock function to get events for a specific date
  const getEventsForDate = (date) => {
    const events = [
      {
        id: 1,
        title: "Machine Learning Quiz",
        time: "10:00 AM - 11:00 AM",
        type: "assessment",
        date: new Date(2025, 3, 23), // April 23, 2025
      },
      {
        id: 2,
        title: "Data Visualization Assignment Due",
        time: "11:59 PM",
        type: "deadline",
        date: new Date(2025, 3, 27), // April 27, 2025
      },
      {
        id: 3,
        title: "Study Group: Python",
        time: "3:00 PM - 4:30 PM",
        type: "group",
        date: new Date(2025, 3, 20), // April 20, 2025
      },
      {
        id: 4,
        title: "AI Ethics Discussion",
        time: "2:00 PM - 3:00 PM",
        type: "class",
        date: new Date(2025, 3, 22), // April 22, 2025
      },
      {
        id: 5,
        title: "AI Tutor Session",
        time: "4:00 PM - 5:00 PM",
        type: "tutor",
        date: new Date(2025, 3, 21), // April 21, 2025
      },
      {
        id: 6,
        title: "Final Project Milestone",
        time: "11:59 PM",
        type: "deadline",
        date: new Date(2025, 4, 4), // May 4, 2025
      },
    ]

    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )
  }

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Format date to display month and year
  const formatMonthYear = (date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  }

  // Get event badge color based on type
  const getEventBadgeColor = (type) => {
    switch (type) {
      case "assessment":
        return "bg-blue-500"
      case "deadline":
        return "bg-red-500"
      case "group":
        return "bg-green-500"
      case "class":
        return "bg-purple-500"
      case "tutor":
        return "bg-amber-500"
      default:
        return "bg-gray-500"
    }
  }

  const calendarDays = generateCalendarDays()
  const today = new Date()
  const isToday = (date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
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
                      <Link href="/dashboard/courses">
                        <BookOpen className="h-4 w-4" />
                        <span>My Courses</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                      <Link href="/dashboard/calendar">
                        <CalendarIcon className="h-4 w-4" />
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
              <h1 className="text-lg font-semibold">Calendar</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex rounded-md border">
                <Button
                  variant="ghost"
                  className={`rounded-none ${view === "month" ? "bg-muted" : ""}`}
                  onClick={() => setView("month")}
                >
                  Month
                </Button>
                <Button
                  variant="ghost"
                  className={`rounded-none ${view === "week" ? "bg-muted" : ""}`}
                  onClick={() => setView("week")}
                >
                  Week
                </Button>
                <Button
                  variant="ghost"
                  className={`rounded-none ${view === "day" ? "bg-muted" : ""}`}
                  onClick={() => setView("day")}
                >
                  Day
                </Button>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Event
              </Button>
            </div>
          </header>

          <main className="p-6">
            <div className="mx-auto max-w-6xl space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={prevMonth}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h2 className="text-xl font-bold">{formatMonthYear(currentMonth)}</h2>
                  <Button variant="outline" size="icon" onClick={nextMonth}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" onClick={() => setCurrentMonth(new Date())}>
                  Today
                </Button>
              </div>

              {view === "month" && (
                <div className="rounded-lg border bg-card shadow">
                  <div className="grid grid-cols-7 border-b text-center">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                      <div key={index} className="py-2 font-medium">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 auto-rows-fr">
                    {calendarDays.map((day, index) => (
                      <div
                        key={index}
                        className={`min-h-[120px] border-r border-b p-1 ${
                          !day.isCurrentMonth ? "bg-muted/30 text-muted-foreground" : ""
                        } ${isToday(day.date) ? "bg-primary/5" : ""}`}
                      >
                        <div className="flex justify-between">
                          <span
                            className={`flex h-6 w-6 items-center justify-center rounded-full text-sm ${
                              isToday(day.date) ? "bg-primary text-primary-foreground" : ""
                            }`}
                          >
                            {day.date.getDate()}
                          </span>
                          {day.events.length > 0 && (
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium">
                              {day.events.length}
                            </span>
                          )}
                        </div>
                        <div className="mt-1 space-y-1">
                          {day.events.slice(0, 3).map((event) => (
                            <div key={event.id} className="flex items-center rounded px-1 py-0.5 text-xs">
                              <div className={`mr-1 h-2 w-2 rounded-full ${getEventBadgeColor(event.type)}`}></div>
                              <span className="truncate">{event.title}</span>
                            </div>
                          ))}
                          {day.events.length > 3 && (
                            <div className="px-1 text-xs text-muted-foreground">+ {day.events.length - 3} more</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {view === "week" && (
                <div className="rounded-lg border bg-card shadow">
                  <div className="grid grid-cols-7 border-b text-center">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => {
                      const date = new Date(currentMonth)
                      const currentDay = date.getDay()
                      date.setDate(date.getDate() - currentDay + index)

                      return (
                        <div key={index} className="py-2">
                          <div className="font-medium">{day}</div>
                          <div
                            className={`mx-auto mt-1 flex h-6 w-6 items-center justify-center rounded-full text-sm ${
                              isToday(date) ? "bg-primary text-primary-foreground" : ""
                            }`}
                          >
                            {date.getDate()}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="grid grid-cols-7 gap-1 p-2">
                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                      const date = new Date(currentMonth)
                      const currentDay = date.getDay()
                      date.setDate(date.getDate() - currentDay + dayIndex)

                      const events = getEventsForDate(date)

                      return (
                        <div key={dayIndex} className="space-y-2">
                          {events.map((event) => (
                            <div
                              key={event.id}
                              className={`rounded-md p-2 text-sm ${getEventBadgeColor(event.type)} text-white`}
                            >
                              <div className="font-medium">{event.title}</div>
                              <div className="text-xs">{event.time}</div>
                            </div>
                          ))}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {view === "day" && (
                <div className="space-y-4">
                  <div className="rounded-lg border bg-card p-4 shadow">
                    <h3 className="text-lg font-medium">
                      {currentMonth.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </h3>

                    <div className="mt-4 space-y-4">
                      {getEventsForDate(currentMonth).length > 0 ? (
                        getEventsForDate(currentMonth).map((event) => (
                          <div key={event.id} className="flex items-start gap-4 rounded-lg border p-3">
                            <div className={`mt-1 h-4 w-4 rounded-full ${getEventBadgeColor(event.type)}`}></div>
                            <div className="flex-1">
                              <div className="font-medium">{event.title}</div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{event.time}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </div>
                        ))
                      ) : (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                          <CalendarIcon className="h-12 w-12 text-muted-foreground/50" />
                          <h3 className="mt-4 text-lg font-medium">No events scheduled</h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            There are no events scheduled for this day. Click the "Add Event" button to create one.
                          </p>
                          <Button className="mt-4">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Event
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Your scheduled events for the next 7 days</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        id: 3,
                        title: "Study Group: Python",
                        time: "3:00 PM - 4:30 PM",
                        date: "Today",
                        type: "group",
                      },
                      {
                        id: 5,
                        title: "AI Tutor Session",
                        time: "4:00 PM - 5:00 PM",
                        date: "Tomorrow",
                        type: "tutor",
                      },
                      {
                        id: 4,
                        title: "AI Ethics Discussion",
                        time: "2:00 PM - 3:00 PM",
                        date: "Thursday, Apr 22",
                        type: "class",
                      },
                      {
                        id: 1,
                        title: "Machine Learning Quiz",
                        time: "10:00 AM - 11:00 AM",
                        date: "Friday, Apr 23",
                        type: "assessment",
                      },
                    ].map((event) => (
                      <div key={event.id} className="flex items-start gap-4">
                        <div className={`mt-1 h-3 w-3 rounded-full ${getEventBadgeColor(event.type)}`}></div>
                        <div className="flex-1">
                          <div className="font-medium">{event.title}</div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CalendarIcon className="h-3 w-3" />
                            <span>{event.date}</span>
                            <Clock className="ml-2 h-3 w-3" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Deadlines</CardTitle>
                    <CardDescription>Don't miss these important due dates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        id: 2,
                        title: "Data Visualization Assignment",
                        time: "11:59 PM",
                        date: "April 27, 2025",
                        daysLeft: 6,
                        course: "Data Visualization Techniques",
                      },
                      {
                        id: 6,
                        title: "Final Project Milestone",
                        time: "11:59 PM",
                        date: "May 4, 2025",
                        daysLeft: 13,
                        course: "Machine Learning Fundamentals",
                      },
                      {
                        id: 7,
                        title: "Python Programming Quiz",
                        time: "3:00 PM",
                        date: "May 10, 2025",
                        daysLeft: 19,
                        course: "Python for Data Science",
                      },
                    ].map((deadline) => (
                      <div key={deadline.id} className="rounded-lg border p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{deadline.title}</div>
                          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                            {deadline.daysLeft} days left
                          </Badge>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">{deadline.course}</div>
                        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarIcon className="h-3 w-3" />
                          <span>{deadline.date}</span>
                          <Clock className="ml-2 h-3 w-3" />
                          <span>{deadline.time}</span>
                        </div>
                      </div>
                    ))}
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
