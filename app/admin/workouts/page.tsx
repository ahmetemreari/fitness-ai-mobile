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
import { Search, MoreHorizontal, Filter, Plus, Edit, Copy, Eye, Trash, Dumbbell } from "lucide-react"

// Sample workout data
const workouts = [
  {
    id: 1,
    name: "Upper Body Strength",
    type: "strength",
    difficulty: "intermediate",
    duration: 45,
    exercises: 6,
    equipment: "dumbbells, bench",
    popularity: "high",
    created: "2023-06-15",
  },
  {
    id: 2,
    name: "HIIT Cardio Blast",
    type: "cardio",
    difficulty: "advanced",
    duration: 30,
    exercises: 8,
    equipment: "none",
    popularity: "high",
    created: "2023-05-22",
  },
  {
    id: 3,
    name: "Lower Body Focus",
    type: "strength",
    difficulty: "intermediate",
    duration: 50,
    exercises: 7,
    equipment: "dumbbells, resistance bands",
    popularity: "medium",
    created: "2023-07-08",
  },
  {
    id: 4,
    name: "Full Body Beginner",
    type: "strength",
    difficulty: "beginner",
    duration: 40,
    exercises: 5,
    equipment: "dumbbells",
    popularity: "high",
    created: "2023-04-30",
  },
  {
    id: 5,
    name: "Core Crusher",
    type: "strength",
    difficulty: "intermediate",
    duration: 25,
    exercises: 6,
    equipment: "mat",
    popularity: "medium",
    created: "2023-08-12",
  },
  {
    id: 6,
    name: "Yoga Flow",
    type: "flexibility",
    difficulty: "beginner",
    duration: 60,
    exercises: 10,
    equipment: "mat",
    popularity: "low",
    created: "2023-09-05",
  },
  {
    id: 7,
    name: "Advanced Strength Circuit",
    type: "strength",
    difficulty: "advanced",
    duration: 55,
    exercises: 8,
    equipment: "full gym",
    popularity: "medium",
    created: "2023-07-25",
  },
  {
    id: 8,
    name: "Quick Morning Routine",
    type: "cardio",
    difficulty: "beginner",
    duration: 15,
    exercises: 4,
    equipment: "none",
    popularity: "high",
    created: "2023-08-30",
  },
]

export default function WorkoutsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredWorkouts = workouts.filter(
    (workout) =>
      workout.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workout.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
      case "intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
      case "advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "strength":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300"
      case "cardio":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
      case "flexibility":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-300"
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Workout Programs</h1>
        <Button onClick={() => {}}>
          <Plus className="mr-2 h-4 w-4" />
          Create Workout
        </Button>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Workouts</CardTitle>
          <Button variant="outline" size="sm" onClick={() => {}}>
            <Dumbbell className="mr-2 h-4 w-4" />
            AI Generate
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search workouts..."
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
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Exercises</TableHead>
                  <TableHead>Equipment</TableHead>
                  <TableHead>Popularity</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWorkouts.map((workout) => (
                  <TableRow key={workout.id}>
                    <TableCell className="font-medium">{workout.name}</TableCell>
                    <TableCell>
                      <Badge className={getTypeColor(workout.type)} variant="outline">
                        {workout.type.charAt(0).toUpperCase() + workout.type.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getDifficultyColor(workout.difficulty)} variant="outline">
                        {workout.difficulty.charAt(0).toUpperCase() + workout.difficulty.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{workout.duration} min</TableCell>
                    <TableCell>{workout.exercises}</TableCell>
                    <TableCell>{workout.equipment}</TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {workout.popularity.charAt(0).toUpperCase() + workout.popularity.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(workout.created).toLocaleDateString()}</TableCell>
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

