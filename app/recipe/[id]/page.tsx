"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"
import { ArrowLeft, Clock, Flame, Heart } from "lucide-react"

export default function RecipePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { t } = useTranslation()

  // Sample recipe data - in a real app, this would come from an API
  const recipe = {
    id: params.id,
    title: t("recipe.chickenSalad"),
    prepTime: `15 ${t("recipe.minutes")}`,
    calories: 550,
    protein: 42,
    carbs: 18,
    fat: 32,
    image: "/placeholder.svg?height=400&width=800",
    ingredients: [
      "200g " + t("recipe.ingredients.chicken"),
      "2 " + t("recipe.ingredients.mixedGreens"),
      "1/2 " + t("recipe.ingredients.avocado"),
      "1/4 " + t("recipe.ingredients.cherryTomatoes"),
      "1/4 " + t("recipe.ingredients.cucumber"),
      "2 " + t("recipe.ingredients.oliveOil"),
      "1 " + t("recipe.ingredients.lemonJuice"),
      t("recipe.ingredients.saltPepper"),
    ],
    instructions: [
      t("recipe.instructions.step1"),
      t("recipe.instructions.step2"),
      t("recipe.instructions.step3"),
      t("recipe.instructions.step4"),
      t("recipe.instructions.step5"),
      t("recipe.instructions.step6"),
      t("recipe.instructions.step7"),
    ],
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => router.push("/dashboard")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold ml-2">{t("recipe.title")}</h1>
      </div>

      <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden mb-6 shadow-lg">
        <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className="w-full h-full object-cover" />
      </div>

      <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        {recipe.title}
      </h2>

      <div className="flex justify-between items-center mb-6 text-sm">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1 text-blue-500" />
          <span>{recipe.prepTime}</span>
        </div>
        <div className="flex items-center">
          <Flame className="h-4 w-4 mr-1 text-orange-500" />
          <span>
            {recipe.calories} {t("recipe.calories")}
          </span>
        </div>
        <Button variant="outline" size="icon" className="rounded-full text-red-500 hover:text-red-600 hover:bg-red-50">
          <Heart className="h-5 w-5" />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {recipe.protein}g
            </div>
            <div className="text-xs text-muted-foreground">{t("recipe.protein")}</div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {recipe.carbs}g
            </div>
            <div className="text-xs text-muted-foreground">{t("recipe.carbs")}</div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-cyan-500 to-violet-500"></div>
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
              {recipe.fat}g
            </div>
            <div className="text-xs text-muted-foreground">{t("recipe.fat")}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6 border-0 shadow-lg overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-purple-600 to-blue-500"></div>
        <CardHeader>
          <CardTitle>{t("recipe.ingredients")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 mr-3"></div>
                {ingredient}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        <CardHeader>
          <CardTitle>{t("recipe.instructions")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4 list-decimal list-inside">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="pl-2">
                {instruction}
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}

