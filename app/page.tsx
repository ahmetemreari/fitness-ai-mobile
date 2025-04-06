"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslation } from "@/hooks/use-translation"
import { ChevronRight, Dumbbell, LineChart, Salad } from "lucide-react"

export default function Home() {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            FitAI
          </h1>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 max-w-[800px]">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-600 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  {t("home.title")}
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                  {t("home.subtitle")}
                </p>
              </div>
              <div className="space-x-4 mt-6">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white border-0 rounded-full px-8 py-6 h-auto text-lg font-medium shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30"
                  onClick={() => router.push("/signup")}
                >
                  {t("home.getStarted")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-slate-50 dark:bg-slate-900/50 rounded-t-[40px]">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-12">{t("home.features.title")}</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl text-white">
                  <Dumbbell className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{t("home.features.personalized.title")}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-center">
                  {t("home.features.personalized.description")}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white">
                  <LineChart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{t("home.features.adaptive.title")}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-center">
                  {t("home.features.adaptive.description")}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 transition-all hover:shadow-xl hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-2xl text-white">
                  <Salad className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{t("home.features.nutrition.title")}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-center">
                  {t("home.features.nutrition.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold">{t("home.testimonials.title")}</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg">
                    <p className="italic text-slate-600 dark:text-slate-300">"{t("home.testimonials.quote1")}"</p>
                    <div className="mt-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                      <div className="ml-3">
                        <p className="font-medium">Sarah K.</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{t("home.testimonials.lost")} 15kg</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg">
                    <p className="italic text-slate-600 dark:text-slate-300">"{t("home.testimonials.quote2")}"</p>
                    <div className="mt-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                      <div className="ml-3">
                        <p className="font-medium">Alex M.</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {t("home.testimonials.gained")} 8kg {t("home.testimonials.muscle")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-purple-600 to-blue-500 rounded-[40px] shadow-2xl shadow-blue-500/20 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=480"
                    alt="App screenshot"
                    className="w-full h-full object-cover mix-blend-overlay opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <h3 className="text-2xl font-bold mb-4">{t("home.appPreview")}</h3>
                      <Button
                        className="bg-white text-blue-600 hover:bg-white/90 rounded-full px-6"
                        onClick={() => router.push("/signup")}
                      >
                        {t("home.tryNow")} <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-slate-100 dark:bg-slate-900 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-sm text-slate-500 dark:text-slate-400">
              © 2025 FitAI. {t("home.footer.rights")}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                {t("home.footer.privacy")}
              </Link>
              <Link
                href="#"
                className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                {t("home.footer.terms")}
              </Link>
              <Link
                href="#"
                className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                {t("home.footer.contact")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

