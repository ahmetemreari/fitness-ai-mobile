"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useTranslation } from "@/hooks/use-translation"
import {
  Activity,
  Apple,
  BarChart2,
  Calendar,
  ChevronRight,
  Dumbbell,
  Home,
  Menu,
  MessageSquare,
  Moon,
  Settings,
  Sun,
  User,
} from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("overview")
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            FitAI
          </h1>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>{t("dashboard.lightMode")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>{t("dashboard.darkMode")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>{t("dashboard.support")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>{t("dashboard.settings")}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      <main className="flex-1 pt-16 pb-20">
        <div className="container px-4 py-6 md:py-8">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full p-1 rounded-full bg-slate-100 dark:bg-slate-800/50">
              <TabsTrigger
                value="overview"
                className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
              >
                {t("dashboard.tabs.overview")}
              </TabsTrigger>
              <TabsTrigger
                value="fitness"
                className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
              >
                {t("dashboard.tabs.fitness")}
              </TabsTrigger>
              <TabsTrigger
                value="nutrition"
                className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800"
              >
                {t("dashboard.tabs.nutrition")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="h-1.5 bg-gradient-to-r from-purple-600 to-blue-500"></div>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t("dashboard.weeklyProgress")}</CardTitle>
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">68%</div>
                    <p className="text-xs text-muted-foreground">+12% {t("dashboard.fromLastWeek")}</p>
                    <Progress value={68} className="mt-3 h-2" />
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t("dashboard.workoutsCompleted")}</CardTitle>
                    <Dumbbell className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3/5</div>
                    <p className="text-xs text-muted-foreground">2 {t("dashboard.workoutsRemaining")}</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-violet-500"></div>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t("dashboard.calorieGoal")}</CardTitle>
                    <Apple className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,850/2,200</div>
                    <p className="text-xs text-muted-foreground">350 {t("dashboard.caloriesRemaining")}</p>
                    <Progress value={84} className="mt-3 h-2" />
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t("dashboard.todayPlan")}</CardTitle>
                  <CardDescription>{t("dashboard.personalizedSchedule")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4 transition-all hover:bg-slate-100 dark:hover:bg-slate-800">
                      <div className="flex-shrink-0 mt-0.5 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                        <Dumbbell className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{t("dashboard.upperBodyStrength")}</p>
                          <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded-full">
                            {t("dashboard.scheduled")}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          45 {t("dashboard.minutes")} • 4 {t("dashboard.exercises")} • {t("dashboard.mediumIntensity")}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 rounded-full"
                          onClick={() => router.push("/workout/1")}
                        >
                          {t("dashboard.startWorkout")} <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4 transition-all hover:bg-slate-100 dark:hover:bg-slate-800">
                      <div className="flex-shrink-0 mt-0.5 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                        <Apple className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium">{t("dashboard.lunch")}</p>
                        <p className="text-sm text-muted-foreground">
                          {t("dashboard.grilledChicken")} • 550 {t("dashboard.calories")}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 rounded-full"
                          onClick={() => router.push("/recipe/1")}
                        >
                          {t("dashboard.viewRecipe")} <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4 transition-all hover:bg-slate-100 dark:hover:bg-slate-800">
                      <div className="flex-shrink-0 mt-0.5 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 text-white">
                        <Activity className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium">{t("dashboard.dailyActivity")}</p>
                        <p className="text-sm text-muted-foreground">
                          5,600/10,000 {t("dashboard.steps")} • 3.2 km {t("dashboard.walked")}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fitness" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t("dashboard.weeklyWorkoutPlan")}</CardTitle>
                  <CardDescription>{t("dashboard.aiGeneratedProgram")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                      (day, index) => (
                        <div
                          key={day}
                          className={`flex items-start space-x-4 rounded-xl p-4 transition-all ${
                            index === 3
                              ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                              : "bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
                        >
                          <div className="flex-shrink-0 mt-0.5 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex justify-between">
                              <p className="font-medium">{t(`dashboard.days.${day.toLowerCase()}`)}</p>
                              <span
                                className={`text-xs px-2 py-0.5 rounded-full ${
                                  index < 3
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                    : index === 3
                                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                      : "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
                                }`}
                              >
                                {index < 3
                                  ? t("dashboard.completed")
                                  : index === 3
                                    ? t("dashboard.today")
                                    : t("dashboard.upcoming")}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {index % 2 === 0
                                ? `${index === 4 ? t("dashboard.restDay") : t("dashboard.upperBodyStrength")} ${index !== 4 ? `• 45 ${t("dashboard.minutes")}` : ""}`
                                : `${index === 6 ? t("dashboard.restDay") : index === 1 ? t("dashboard.cardio") : t("dashboard.lowerBodyStrength")} ${index !== 6 ? `• ${index === 1 ? "30" : "45"} ${t("dashboard.minutes")}` : ""}`}
                            </p>
                            {index === 3 && (
                              <Button
                                size="sm"
                                className="mt-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0"
                                onClick={() => router.push("/workout/1")}
                              >
                                {t("dashboard.startWorkout")} <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nutrition" className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t("dashboard.mealPlan")}</CardTitle>
                  <CardDescription>{t("dashboard.personalizedNutrition")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["breakfast", "lunch", "dinner"].map((meal, index) => (
                      <div
                        key={meal}
                        className="rounded-xl overflow-hidden border bg-white dark:bg-slate-800 shadow-sm"
                      >
                        <div className="p-4 border-b bg-slate-50 dark:bg-slate-700/50 flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">{t(`dashboard.meals.${meal}`)}</h3>
                            <p className="text-sm text-muted-foreground">
                              {index === 0 ? "450" : index === 1 ? "550" : "650"} {t("dashboard.calories")}
                            </p>
                          </div>
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                            {index === 0 ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                                <line x1="6" y1="1" x2="6" y2="4" />
                                <line x1="10" y1="1" x2="10" y2="4" />
                                <line x1="14" y1="1" x2="14" y2="4" />
                              </svg>
                            ) : index === 1 ? (
                              <Apple className="h-4 w-4" />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M8.21 13.89 7 23l2.5-2 2.5 2 2.5-2 2.5 2 1.21-9.11" />
                                <path d="M11 10.38a3 3 0 1 0 0-5.76" />
                                <path d="M15 13h-2.5a5 5 0 0 1-5-5" />
                                <path d="M14 3.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="p-4 space-y-2">
                          {index === 0 ? (
                            <>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">{t("dashboard.mealItems.yogurt")}</span>
                                <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                                  250 cal
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">{t("dashboard.mealItems.toast")}</span>
                                <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                                  120 cal
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">{t("dashboard.mealItems.coffee")}</span>
                                <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                                  5 cal
                                </span>
                              </div>
                            </>
                          ) : index === 1 ? (
                            <>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">{t("dashboard.mealItems.chickenSalad")}</span>
                                <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                                  350 cal
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">{t("dashboard.mealItems.avocado")}</span>
                                <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                                  160 cal
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">{t("dashboard.mealItems.oliveDressing")}</span>
                                <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                                  40 cal
                                </span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">{t("dashboard.mealItems.salmon")}</span>
                                <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                                  300 cal
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">{t("dashboard.mealItems.quinoa")}</span>
                                <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                                  170 cal
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">{t("dashboard.mealItems.vegetables")}</span>
                                <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                                  180 cal
                                </span>
                              </div>
                            </>
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 w-full rounded-full"
                            onClick={() => router.push(`/recipe/${index + 1}`)}
                          >
                            {t("dashboard.viewRecipe")} <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 border-t bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4">
          <Button
            variant="ghost"
            className="flex-1 flex-col h-16 rounded-none"
            onClick={() => setActiveTab("overview")}
          >
            <Home className={`h-5 w-5 ${activeTab === "overview" ? "text-blue-500" : ""}`} />
            <span className={`text-xs mt-1 ${activeTab === "overview" ? "text-blue-500 font-medium" : ""}`}>
              {t("dashboard.bottomNav.home")}
            </span>
          </Button>
          <Button variant="ghost" className="flex-1 flex-col h-16 rounded-none" onClick={() => setActiveTab("fitness")}>
            <Dumbbell className={`h-5 w-5 ${activeTab === "fitness" ? "text-blue-500" : ""}`} />
            <span className={`text-xs mt-1 ${activeTab === "fitness" ? "text-blue-500 font-medium" : ""}`}>
              {t("dashboard.bottomNav.fitness")}
            </span>
          </Button>
          <Button
            variant="ghost"
            className="flex-1 flex-col h-16 rounded-none"
            onClick={() => setActiveTab("nutrition")}
          >
            <Apple className={`h-5 w-5 ${activeTab === "nutrition" ? "text-blue-500" : ""}`} />
            <span className={`text-xs mt-1 ${activeTab === "nutrition" ? "text-blue-500 font-medium" : ""}`}>
              {t("dashboard.bottomNav.nutrition")}
            </span>
          </Button>
          <Button variant="ghost" className="flex-1 flex-col h-16 rounded-none" onClick={() => router.push("/profile")}>
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">{t("dashboard.bottomNav.profile")}</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

