"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Loader2, Sparkles, Save, Copy, RotateCcw, Check } from "lucide-react"

export default function AIGenerator() {
  const [activeTab, setActiveTab] = useState("workout")
  const [prompt, setPrompt] = useState("")
  const [generating, setGenerating] = useState(false)
  const [result, setResult] = useState("")
  const [saved, setSaved] = useState(false)

  const handleGenerate = () => {
    setGenerating(true)
    setResult("")

    // Simulate AI generation with a timeout
    setTimeout(() => {
      if (activeTab === "workout") {
        setResult(`# Upper Body Strength Workout

## Workout Details
- **Duration**: 45 minutes
- **Difficulty**: Intermediate
- **Focus**: Chest, Shoulders, Arms
- **Equipment**: Dumbbells, Bench

## Warm-up (5 minutes)
- Arm circles: 20 seconds each direction
- Shoulder rolls: 20 seconds each direction
- Push-ups: 10 reps
- Jumping jacks: 30 seconds

## Main Workout
1. **Dumbbell Bench Press**
   - 3 sets of 12 reps
   - Rest 60 seconds between sets
   
2. **Incline Dumbbell Flyes**
   - 3 sets of 10 reps
   - Rest 60 seconds between sets
   
3. **Shoulder Press**
   - 3 sets of 10 reps
   - Rest 60 seconds between sets
   
4. **Lateral Raises**
   - 3 sets of 12 reps
   - Rest 45 seconds between sets
   
5. **Tricep Dips**
   - 3 sets of 15 reps
   - Rest 45 seconds between sets
   
6. **Bicep Curls**
   - 3 sets of 12 reps
   - Rest 45 seconds between sets

## Cool Down (5 minutes)
- Chest stretch: 30 seconds each side
- Shoulder stretch: 30 seconds each side
- Tricep stretch: 30 seconds each side
- Deep breathing: 1 minute

## Notes
- Focus on proper form rather than lifting heavy
- Increase weight gradually as you get stronger
- Stay hydrated throughout the workout`)
      } else if (activeTab === "nutrition") {
        setResult(`# High Protein Meal Plan

## Meal Plan Details
- **Calories**: ~2000 per day
- **Protein**: 150g
- **Carbs**: 180g
- **Fat**: 65g

## Breakfast
- **Protein Oatmeal**
  - 1/2 cup rolled oats
  - 1 scoop protein powder
  - 1 tbsp almond butter
  - 1/2 banana, sliced
  - Cinnamon to taste
  - Water or almond milk to desired consistency
  
  *Nutrition: 380 calories, 30g protein, 40g carbs, 12g fat*

## Mid-Morning Snack
- Greek yogurt (1 cup)
- 1/4 cup berries
- 1 tbsp honey

  *Nutrition: 220 calories, 20g protein, 25g carbs, 3g fat*

## Lunch
- **Grilled Chicken Salad**
  - 5 oz grilled chicken breast
  - 2 cups mixed greens
  - 1/4 avocado
  - Cherry tomatoes
  - Cucumber
  - 1 tbsp olive oil and lemon dressing
  
  *Nutrition: 450 calories, 40g protein, 15g carbs, 25g fat*

## Afternoon Snack
- Protein shake
- 1 apple

  *Nutrition: 250 calories, 25g protein, 30g carbs, 3g fat*

## Dinner
- **Baked Salmon with Quinoa**
  - 5 oz salmon fillet
  - 1/2 cup cooked quinoa
  - 1 cup roasted vegetables (broccoli, bell peppers, zucchini)
  - Herbs and lemon for seasoning
  
  *Nutrition: 480 calories, 35g protein, 40g carbs, 20g fat*

## Evening Snack (optional)
- Cottage cheese (1/2 cup)
- 1 tbsp flaxseeds

  *Nutrition: 120 calories, 15g protein, 5g carbs, 3g fat*

## Hydration
- Minimum 2.5 liters of water daily
- Green tea (optional)

## Notes
- Adjust portions based on individual needs
- Meal timing can be adjusted to fit your schedule
- Substitute ingredients based on preferences while maintaining similar macros`)
      } else {
        setResult(`# AI Fitness Coach Conversation

## User Profile
- **Name**: Alex
- **Age**: 32
- **Goal**: Weight loss and improved fitness
- **Current weight**: 185 lbs
- **Target weight**: 165 lbs
- **Activity level**: Moderate (3-4 workouts per week)

## Conversation Flow

### Initial Greeting
"Hi Alex! I'm your FitAI coach. I'm here to help you reach your weight loss and fitness goals. How are you feeling today?"

### Check-in Questions
- "How has your energy been this week on a scale of 1-10?"
- "Have you been able to stick to your workout schedule?"
- "Any challenges with your nutrition plan?"
- "How's your sleep quality been?"
- "Are you experiencing any pain or discomfort during workouts?"

### Progress Review
"Great job on completing 4 workouts last week! I noticed you've lost 2 pounds since we started. Your consistency is really paying off."

### Workout Adjustments
"Based on your progress, I recommend increasing your HIIT sessions from 20 to 25 minutes. This small change will help boost your metabolism further."

### Nutrition Tips
"I noticed you've been struggling with afternoon cravings. Try adding more protein to your lunch, and keep Greek yogurt with berries ready for a satisfying snack."

### Motivation
"Remember why you started this journey, Alex. You're already 40% of the way to your goal weight, and your cardiovascular fitness has improved significantly!"

### Weekly Challenge
"This week, I challenge you to add 1,000 more steps to your daily count. This small change can burn an extra 500 calories per week."

### Follow-up Scheduling
"I'll check in with you on Friday to see how you're doing with the new workout intensity. Is there anything specific you'd like to focus on before then?"

## Response Variations

### If User Reports Fatigue
"I hear you're feeling tired. Let's adjust your workout intensity and make sure you're getting enough quality protein and carbs to fuel recovery. Also, how's your sleep been?"

### If User Reports Success
"That's fantastic progress! Your consistency is really showing. Let's build on this momentum by adding a new challenge to keep you motivated."

### If User Misses Workouts
"Life happens! Instead of focusing on what you missed, let's plan how to fit your workouts into your schedule this week. Would shorter, more frequent sessions help?"`)
      }

      setGenerating(false)
    }, 2000)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(result)
  }

  const handleReset = () => {
    setPrompt("")
    setResult("")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">AI Content Generator</h1>
        <div className="flex items-center space-x-2">
          <div className="text-sm text-muted-foreground">AI Model:</div>
          <Select defaultValue="gpt4">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt4">GPT-4o</SelectItem>
              <SelectItem value="gpt35">GPT-3.5 Turbo</SelectItem>
              <SelectItem value="claude">Claude 3 Opus</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="workout">Workout Programs</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition Plans</TabsTrigger>
          <TabsTrigger value="coaching">AI Coaching</TabsTrigger>
        </TabsList>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>
              {activeTab === "workout"
                ? "Generate Workout Program"
                : activeTab === "nutrition"
                  ? "Generate Nutrition Plan"
                  : "Generate AI Coaching Script"}
            </CardTitle>
            <CardDescription>
              {activeTab === "workout"
                ? "Create personalized workout routines based on user goals and fitness levels"
                : activeTab === "nutrition"
                  ? "Create customized meal plans based on dietary preferences and nutritional goals"
                  : "Create AI coaching conversation scripts for user interactions"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="prompt">Prompt</Label>
              <Textarea
                id="prompt"
                placeholder={
                  activeTab === "workout"
                    ? "Create an upper body strength workout for intermediate level..."
                    : activeTab === "nutrition"
                      ? "Create a high protein meal plan for weight loss..."
                      : "Create a coaching conversation for a user trying to lose weight..."
                }
                className="min-h-[120px]"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Difficulty Level</Label>
                  <Select defaultValue="intermediate">
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Duration/Length</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue placeholder="Select length" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short (15-30 min)</SelectItem>
                      <SelectItem value="medium">Medium (30-60 min)</SelectItem>
                      <SelectItem value="long">Long (60+ min)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Focus Area</Label>
                  <Select
                    defaultValue={
                      activeTab === "workout" ? "strength" : activeTab === "nutrition" ? "protein" : "motivation"
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select focus" />
                    </SelectTrigger>
                    <SelectContent>
                      {activeTab === "workout" ? (
                        <>
                          <SelectItem value="strength">Strength</SelectItem>
                          <SelectItem value="cardio">Cardio</SelectItem>
                          <SelectItem value="flexibility">Flexibility</SelectItem>
                          <SelectItem value="hiit">HIIT</SelectItem>
                        </>
                      ) : activeTab === "nutrition" ? (
                        <>
                          <SelectItem value="protein">High Protein</SelectItem>
                          <SelectItem value="lowcarb">Low Carb</SelectItem>
                          <SelectItem value="balanced">Balanced</SelectItem>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="motivation">Motivation</SelectItem>
                          <SelectItem value="adherence">Adherence</SelectItem>
                          <SelectItem value="progress">Progress Review</SelectItem>
                          <SelectItem value="goals">Goal Setting</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Creativity Level</Label>
                    <span className="text-sm text-muted-foreground">70%</span>
                  </div>
                  <Slider defaultValue={[70]} max={100} step={1} />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="detailed" defaultChecked />
              <Label htmlFor="detailed">Include detailed instructions</Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button onClick={handleGenerate} disabled={generating}>
              {generating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        {result && (
          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Generated Content</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
                <Button variant="outline" size="sm" onClick={handleSave}>
                  {saved ? (
                    <>
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      Saved
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 whitespace-pre-wrap font-mono text-sm">
                {result}
              </div>
            </CardContent>
          </Card>
        )}
      </Tabs>
    </div>
  )
}

