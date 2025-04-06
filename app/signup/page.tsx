"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation } from "@/hooks/use-translation"
import { ArrowLeft, ArrowRight, Check, User } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const { t } = useTranslation()
  const [step, setStep] = useState(1)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-8 px-4">
      <Card className="w-full max-w-md border-0 shadow-2xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">{t("signup.title")}</CardTitle>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i < step ? "bg-blue-500" : i === step ? "bg-blue-500" : "bg-slate-200 dark:bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>
          <CardDescription>{t("signup.step", { current: step, total: 3 })}</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                <User className="h-8 w-8 text-blue-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">{t("signup.name")}</Label>
                <Input id="name" placeholder={t("signup.namePlaceholder")} className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("signup.email")}</Label>
                <Input id="email" type="email" placeholder={t("signup.emailPlaceholder")} className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t("signup.password")}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t("signup.passwordPlaceholder")}
                  className="rounded-xl"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">{t("signup.age")}</Label>
                  <Input id="age" type="number" placeholder={t("signup.agePlaceholder")} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">{t("signup.gender")}</Label>
                  <Select>
                    <SelectTrigger id="gender" className="rounded-xl">
                      <SelectValue placeholder={t("signup.genderPlaceholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">{t("signup.genderOptions.male")}</SelectItem>
                      <SelectItem value="female">{t("signup.genderOptions.female")}</SelectItem>
                      <SelectItem value="other">{t("signup.genderOptions.other")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height">{t("signup.height")}</Label>
                  <Input id="height" type="number" placeholder={t("signup.heightPlaceholder")} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">{t("signup.weight")}</Label>
                  <Input id="weight" type="number" placeholder={t("signup.weightPlaceholder")} className="rounded-xl" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>{t("signup.goal")}</Label>
                <Select>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder={t("signup.goalPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lose-weight">{t("signup.goalOptions.loseWeight")}</SelectItem>
                    <SelectItem value="build-muscle">{t("signup.goalOptions.buildMuscle")}</SelectItem>
                    <SelectItem value="improve-fitness">{t("signup.goalOptions.improveFitness")}</SelectItem>
                    <SelectItem value="maintain">{t("signup.goalOptions.maintain")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>{t("signup.activity")}</Label>
                <Select>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder={t("signup.activityPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">{t("signup.activityOptions.sedentary")}</SelectItem>
                    <SelectItem value="light">{t("signup.activityOptions.light")}</SelectItem>
                    <SelectItem value="moderate">{t("signup.activityOptions.moderate")}</SelectItem>
                    <SelectItem value="very">{t("signup.activityOptions.very")}</SelectItem>
                    <SelectItem value="extra">{t("signup.activityOptions.extra")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>{t("signup.diet")}</Label>
                <Select>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder={t("signup.dietPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-preference">{t("signup.dietOptions.noPreference")}</SelectItem>
                    <SelectItem value="vegetarian">{t("signup.dietOptions.vegetarian")}</SelectItem>
                    <SelectItem value="vegan">{t("signup.dietOptions.vegan")}</SelectItem>
                    <SelectItem value="keto">{t("signup.dietOptions.keto")}</SelectItem>
                    <SelectItem value="paleo">{t("signup.dietOptions.paleo")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={() => setStep(step - 1)} className="rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t("signup.back")}
            </Button>
          ) : (
            <div></div>
          )}
          <Button
            className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0"
            onClick={handleNext}
          >
            {step === 3 ? (
              <>
                {t("signup.complete")} <Check className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                {t("signup.next")} <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

