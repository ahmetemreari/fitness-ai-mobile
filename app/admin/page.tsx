"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "@/components/ui/chart"
import { Activity, Users, Dumbbell, Salad, ArrowUpRight, ArrowDownRight } from "lucide-react"

export default function AdminDashboard() {
  // Sample data for charts
  const userActivityData = [
    { name: "Mon", value: 420 },
    { name: "Tue", value: 380 },
    { name: "Wed", value: 510 },
    { name: "Thu", value: 470 },
    { name: "Fri", value: 590 },
    { name: "Sat", value: 620 },
    { name: "Sun", value: 450 },
  ]

  const newUsersData = [
    { name: "Week 1", value: 120 },
    { name: "Week 2", value: 145 },
    { name: "Week 3", value: 180 },
    { name: "Week 4", value: 210 },
  ]

  const workoutCompletionData = [
    { name: "Completed", value: 68 },
    { name: "Abandoned", value: 32 },
  ]

  const COLORS = ["#8b5cf6", "#e4e4e7"]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-purple-600 to-blue-500"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,845</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Workouts</CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,254</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>8% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-violet-500"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Meal Plans</CardTitle>
            <Salad className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">876</div>
            <div className="flex items-center text-xs text-green-500 mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>5% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-violet-500 to-pink-500"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">AI Generations</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,428</div>
            <div className="flex items-center text-xs text-red-500 mt-1">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              <span>3% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>User Activity</CardTitle>
                <CardDescription>Daily active users over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={userActivityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>New Users</CardTitle>
                <CardDescription>Weekly new user registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={newUsersData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8b5cf6"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Workout Completion Rate</CardTitle>
                <CardDescription>Percentage of completed vs abandoned workouts</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="h-[300px] w-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={workoutCompletionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {workoutCompletionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Platform Health</CardTitle>
                <CardDescription>Key performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Server Uptime</div>
                    <div className="text-sm text-muted-foreground">99.9%</div>
                  </div>
                  <Progress value={99.9} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">API Response Time</div>
                    <div className="text-sm text-muted-foreground">245ms</div>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">AI Generation Success</div>
                    <div className="text-sm text-muted-foreground">97.2%</div>
                  </div>
                  <Progress value={97.2} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">User Satisfaction</div>
                    <div className="text-sm text-muted-foreground">92%</div>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>User Demographics</CardTitle>
              <CardDescription>Breakdown of user base by key metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Age Distribution</div>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="space-y-2">
                      <div className="bg-purple-100 dark:bg-purple-900/20 h-24 rounded-md relative overflow-hidden">
                        <div className="absolute bottom-0 w-full bg-purple-500 h-[15%]"></div>
                      </div>
                      <div className="text-xs text-center">18-24</div>
                      <div className="text-xs text-center font-medium">15%</div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-purple-100 dark:bg-purple-900/20 h-24 rounded-md relative overflow-hidden">
                        <div className="absolute bottom-0 w-full bg-purple-500 h-[35%]"></div>
                      </div>
                      <div className="text-xs text-center">25-34</div>
                      <div className="text-xs text-center font-medium">35%</div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-purple-100 dark:bg-purple-900/20 h-24 rounded-md relative overflow-hidden">
                        <div className="absolute bottom-0 w-full bg-purple-500 h-[28%]"></div>
                      </div>
                      <div className="text-xs text-center">35-44</div>
                      <div className="text-xs text-center font-medium">28%</div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-purple-100 dark:bg-purple-900/20 h-24 rounded-md relative overflow-hidden">
                        <div className="absolute bottom-0 w-full bg-purple-500 h-[17%]"></div>
                      </div>
                      <div className="text-xs text-center">45-54</div>
                      <div className="text-xs text-center font-medium">17%</div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-purple-100 dark:bg-purple-900/20 h-24 rounded-md relative overflow-hidden">
                        <div className="absolute bottom-0 w-full bg-purple-500 h-[5%]"></div>
                      </div>
                      <div className="text-xs text-center">55+</div>
                      <div className="text-xs text-center font-medium">5%</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Gender Distribution</div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-32 rounded-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-blue-500 rounded-full"
                          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 55% 0, 55% 100%, 0 100%)" }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400">Male</div>
                            <div className="text-lg font-bold">55%</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <div className="text-sm">Male: 55%</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                          <div className="text-sm">Female: 42%</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                          <div className="text-sm">Other: 3%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Subscription Types</div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-32 rounded-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 25% 0, 25% 100%, 0 100%)" }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400">Premium</div>
                            <div className="text-lg font-bold">25%</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                          <div className="text-sm">Premium: 25%</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                          <div className="text-sm">Free: 75%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>User Engagement</CardTitle>
              <CardDescription>Key activity metrics across the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="text-sm font-medium">Most Popular Workouts</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
                        <div>Upper Body Strength</div>
                      </div>
                      <div className="text-sm font-medium">32%</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                        <div>HIIT Cardio</div>
                      </div>
                      <div className="text-sm font-medium">28%</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-8 bg-cyan-500 rounded-full"></div>
                        <div>Lower Body Focus</div>
                      </div>
                      <div className="text-sm font-medium">22%</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-8 bg-violet-500 rounded-full"></div>
                        <div>Core Strength</div>
                      </div>
                      <div className="text-sm font-medium">18%</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm font-medium">Most Popular Diet Plans</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                        <div>Balanced Nutrition</div>
                      </div>
                      <div className="text-sm font-medium">35%</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
                        <div>High Protein</div>
                      </div>
                      <div className="text-sm font-medium">25%</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-8 bg-teal-500 rounded-full"></div>
                        <div>Vegetarian</div>
                      </div>
                      <div className="text-sm font-medium">20%</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-8 bg-lime-500 rounded-full"></div>
                        <div>Keto</div>
                      </div>
                      <div className="text-sm font-medium">15%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="text-sm font-medium">Weekly Activity Trends</div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { name: "Week 1", workouts: 320, nutrition: 240, ai: 180 },
                        { name: "Week 2", workouts: 380, nutrition: 290, ai: 220 },
                        { name: "Week 3", workouts: 420, nutrition: 310, ai: 280 },
                        { name: "Week 4", workouts: 450, nutrition: 340, ai: 310 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="workouts" stroke="#8b5cf6" strokeWidth={2} />
                      <Line type="monotone" dataKey="nutrition" stroke="#10b981" strokeWidth={2} />
                      <Line type="monotone" dataKey="ai" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

