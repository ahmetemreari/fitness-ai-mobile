"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useTranslation } from "@/hooks/use-translation"
import { ArrowLeft, CheckCircle, Clock, Dumbbell, Play } from "lucide-react"

export default function WorkoutPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { t } = useTranslation()
  const [currentExercise, setCurrentExercise] = useState(0)
  const [isResting, setIsResting] = useState(false)
  const [timer, setTimer] = useState(60)
  const [timerActive, setTimerActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isResting && timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
    } else if (timer === 0) {
      setIsResting(false)
      setCurrentExercise((prev) => prev + 1)
      setTimer(60)
      setTimerActive(false)
    }

    return () => clearInterval(interval)
  }, [isResting, timer, timerActive])

  // Sample workout data - in a real app, this would come from an API
  const workout = {
    id: params.id,
    title: t("workout.upperBodyStrength"),
    duration: `45 ${t("workout.minutes")}`,
    intensity: t("workout.mediumIntensity"),
    exercises: [
      {
        name: t("workout.exercises.pushups"),
        sets: 3,
        reps: 12,
        restTime: 60,
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: t("workout.exercises.dumbbellRows"),
        sets: 3,
        reps: 10,
        restTime: 60,
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: t("workout.exercises.shoulderPress"),
        sets: 3,
        reps: 10,
        restTime: 60,
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        name: t("workout.exercises.tricepDips"),
        sets: 3,
        reps: 12,
        restTime: 60,
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
  }

  const handleNext = () => {
    if (currentExercise < workout.exercises.length - 1) {
      setIsResting(true)
      setTimerActive(true)
    } else {
      router.push("/dashboard?completed=true")
    }
  }

  const handleFinishRest = () => {
    setIsResting(false)
    setCurrentExercise(currentExercise + 1)
    setTimer(60)
    setTimerActive(false)
  }

  const progress = (currentExercise / workout.exercises.length) * 100

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => router.push("/dashboard")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold ml-2">{workout.title}</h1>
      </div>

      <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{workout.duration}</span>
        </div>
        <div className="flex items-center">
          <Dumbbell className="h-4 w-4 mr-1" />
          <span>{workout.intensity}</span>
        </div>
      </div>

      <Progress value={progress} className="mb-6 h-2" />

      {isResting ? (
        <Card className="mb-6 border-0 shadow-lg overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          <CardHeader className="text-center">
            <CardTitle>{t("workout.restTime")}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="w-32 h-32 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {timer}
              </div>
            </div>
            <p className="text-muted-foreground">{t("workout.takeBreath")}</p>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0"
              onClick={handleFinishRest}
            >
              {t("workout.skipRest")}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="mb-6 border-0 shadow-lg overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-purple-600 to-blue-500"></div>
          <CardHeader>
            <CardTitle>{workout.exercises[currentExercise].name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden">
              <img
                src={workout.exercises[currentExercise].image || "/placeholder.svg"}
                alt={workout.exercises[currentExercise].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  {workout.exercises[currentExercise].sets}
                </div>
                <div className="text-xs text-muted-foreground">{t("workout.sets")}</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  {workout.exercises[currentExercise].reps}
                </div>
                <div className="text-xs text-muted-foreground">{t("workout.reps")}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0"
              onClick={handleNext}
            >
              {currentExercise < workout.exercises.length - 1 ? t("workout.completeNext") : t("workout.finishWorkout")}
            </Button>
          </CardFooter>
        </Card>
      )}

      <div className="space-y-2">
        <h2 className="text-sm font-medium mb-2">{t("workout.progress")}</h2>
        {workout.exercises.map((exercise, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-xl border ${
              index === currentExercise
                ? "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800"
                : index < currentExercise
                  ? "bg-slate-50 dark:bg-slate-800/50"
                  : ""
            }`}
          >
            <div className="flex items-center">
              {index < currentExercise ? (
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              ) : index === currentExercise ? (
                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white mr-3">
                  <Play className="h-3 w-3" />
                </div>
              ) : (
                <div className="h-5 w-5 rounded-full border border-slate-300 dark:border-slate-600 mr-3" />
              )}
              <span className={index < currentExercise ? "text-muted-foreground" : ""}>{exercise.name}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {exercise.sets} × {exercise.reps}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

