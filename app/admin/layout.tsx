"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import { BarChart3, Users, Dumbbell, Salad, MessageSquare, Settings, LogOut, Shield } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useTranslation()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Simulate authentication check
  useEffect(() => {
    // In a real app, you would check for a valid admin session
    setIsAuthenticated(true)
  }, [])

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Shield className="h-16 w-16 text-slate-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Admin Authentication Required</h1>
          <p className="text-slate-500 mb-4">Please log in to access the admin panel</p>
          <Button onClick={() => router.push("/admin/login")}>Login to Admin</Button>
        </div>
      </div>
    )
  }

  const isActive = (path: string) => pathname === path

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar variant="inset" collapsible="icon">
          <SidebarHeader className="border-b pb-2">
            <div className="flex items-center px-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="font-bold text-lg">FitAI Admin</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={isActive("/admin")}
                  onClick={() => router.push("/admin")}
                  tooltip="Dashboard"
                >
                  <BarChart3 className="h-5 w-5" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={isActive("/admin/users")}
                  onClick={() => router.push("/admin/users")}
                  tooltip="Users"
                >
                  <Users className="h-5 w-5" />
                  <span>Users</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={isActive("/admin/workouts")}
                  onClick={() => router.push("/admin/workouts")}
                  tooltip="Workouts"
                >
                  <Dumbbell className="h-5 w-5" />
                  <span>Workouts</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={isActive("/admin/nutrition")}
                  onClick={() => router.push("/admin/nutrition")}
                  tooltip="Nutrition"
                >
                  <Salad className="h-5 w-5" />
                  <span>Nutrition</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={isActive("/admin/ai-generator")}
                  onClick={() => router.push("/admin/ai-generator")}
                  tooltip="AI Generator"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>AI Generator</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={isActive("/admin/settings")}
                  onClick={() => router.push("/admin/settings")}
                  tooltip="Settings"
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => router.push("/")}>
                  <LogOut className="h-5 w-5" />
                  <span>Exit Admin</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <div className="flex flex-col h-full overflow-hidden">
            <header className="h-16 border-b flex items-center px-6 bg-white dark:bg-slate-950">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold ml-4">Admin Panel</h1>
            </header>
            <main className="flex-1 overflow-auto p-6">{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

