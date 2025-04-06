"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Filter, Plus, Edit, Copy, Eye, Trash, Sparkles } from "lucide-react"

// Sample meal plan data
const mealPlans = [
  {
    id: 1,
    name: "High Protein Weight Loss",
    type: "weight-loss",
    diet: "high-protein",
    calories: 1800,
    meals: 5,
    duration: 7,
    popularity: "high",
    created: "2023-06-10",
  },
  {
    id: 2,
    name: "Vegetarian Balanced",
    type: "maintenance",
    diet: "vegetarian",
    calories: 2200,
    meals: 4,
    duration: 7,
    popularity: "medium",
    created: "2023-07-15",
  },
  {
    id: 3,
    name: "Keto Fat Loss",
    type: "weight-loss",
    diet: "keto",
    calories: 1600,
    meals: 3,
    duration: 14,
    popularity: "high",
    created: "2023-05-22",
  },
  {
    id: 4,
    name: "Muscle Building Plan",
    type: "muscle-gain",
    diet: "high-protein",
    calories: 3000,
    meals: 6,
    duration: 28,
    popularity: "medium",
    created: "2023-08-05",
  },
  {
    id: 5,
    name: "Vegan Essentials",
    type: "maintenance",
    diet: "vegan",
    calories: 2000,
    meals: 4,
    duration: 7,
    popularity: "low",
    created: "2023-09-12",
  },
  {
    id: 6,
    name: "Paleo Reset",
    type: "weight-loss",
    diet: "paleo",
    calories: 1900,
    meals: 3,
    duration: 21,
    popularity: "medium",
    created: "2023-07-30",
  },
  {
    id: 7,
    name: "Intermittent Fasting Plan",
    type: "weight-loss",
    diet: "balanced",
    calories: 1700,
    meals: 2,
    duration: 14,
    popularity: "high",
    created: "2023-08-18",
  },
  {
    id: 8,
    name: "Athlete Performance",
    type: "performance",
    diet: "high-carb",
    calories: 3200,
    meals: 5,
    duration: 28,
    popularity: "medium",
    created: "2023-06-25",
  },
]

export default function NutritionPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMealPlans = mealPlans.filter(
    (plan) =>
      plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.diet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getDietColor = (diet) => {
    switch (diet) {
      case "high-protein":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
      case "vegetarian":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
      case "vegan":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300"
      case "keto":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
      case "paleo":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300"
      case "balanced":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-300"
      case "high-carb":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300"
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "weight-loss":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
      case "muscle-gain":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
      case "maintenance":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
      case "performance":
        return "bg-violet-100 text-violet-800 dark:bg-violet-900/20 dark:text-violet-300"
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Nutrition Plans</h1>
        <Button onClick={() => {}}>
          <Plus className="mr-2 h-4 w-4" />
          Create Meal Plan
        </Button>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Meal Plans</CardTitle>
          <Button variant="outline" size="sm" onClick={() => {}}>
            <Sparkles className="mr-2 h-4 w-4" />
            AI Generate
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search meal plans..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Diet</TableHead>
                  <TableHead>Calories</TableHead>
                  <TableHead>Meals/Day</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Popularity</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMealPlans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell className="font-medium">{plan.name}</TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(plan.type)} variant="outline">
                        {plan.type
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getDietColor(plan.diet)} variant="outline">
                        {plan.diet
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </Badge>
                    </TableCell>
                    <TableCell>{plan.calories} kcal</TableCell>
                    <TableCell>{plan.meals}</TableCell>
                    <TableCell>{plan.duration} days</TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {plan.popularity.charAt(0).toUpperCase() + plan.popularity.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(plan.created).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => {}}>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => {}}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => {}}>
                            <Copy className="mr-2 h-4 w-4" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => {}} className="text-red-600 dark:text-red-400">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

