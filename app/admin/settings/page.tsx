"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Save, RefreshCw, Key, Shield, Cpu, BellRing, Mail } from "lucide-react"

export default function SettingsPage() {
  const [saving, setSaving] = useState(false)

  const handleSave = () => {
    setSaving(true)
    setTimeout(() => setSaving(false), 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your application settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="app-name">Application Name</Label>
                <Input id="app-name" defaultValue="FitAI" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="app-description">Application Description</Label>
                <Textarea
                  id="app-description"
                  defaultValue="AI-powered fitness and nutrition planning application"
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="language">Default Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="tr">Turkish</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="theme">Default Theme</Label>
                  <Select defaultValue="system">
                    <SelectTrigger id="theme">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <div className="text-sm text-muted-foreground">Put the application in maintenance mode</div>
                </div>
                <Switch id="maintenance-mode" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Regional Settings</CardTitle>
              <CardDescription>Configure regional preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Default Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">Eastern Time (EST)</SelectItem>
                      <SelectItem value="cst">Central Time (CST)</SelectItem>
                      <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                      <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                      <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date-format">Date Format</Label>
                  <Select defaultValue="mdy">
                    <SelectTrigger id="date-format">
                      <SelectValue placeholder="Select date format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="units">Measurement Units</Label>
                  <Select defaultValue="metric">
                    <SelectTrigger id="units">
                      <SelectValue placeholder="Select units" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                      <SelectItem value="imperial">Imperial (lb, in)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                      <SelectItem value="try">TRY (₺)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>API Settings</CardTitle>
              <CardDescription>Manage API keys and access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex space-x-2">
                  <Input id="api-key" value="sk_live_51N9z2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" type="password" />
                  <Button variant="outline" size="icon">
                    <Key className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your API key gives access to all API endpoints. Keep it secure.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" placeholder="https://your-server.com/webhook" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="api-access">Enable API Access</Label>
                  <div className="text-sm text-muted-foreground">Allow external applications to access the API</div>
                </div>
                <Switch id="api-access" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="rate-limiting">Rate Limiting</Label>
                  <div className="text-sm text-muted-foreground">Limit API requests to prevent abuse</div>
                </div>
                <Switch id="rate-limiting" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Third-Party Integrations</CardTitle>
              <CardDescription>Configure external service connections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">OpenAI</Label>
                  <div className="text-sm text-muted-foreground">Connect to OpenAI for AI-powered features</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Stripe</Label>
                  <div className="text-sm text-muted-foreground">Payment processing integration</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Google Analytics</Label>
                  <div className="text-sm text-muted-foreground">Track user behavior and app usage</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Mailchimp</Label>
                  <div className="text-sm text-muted-foreground">Email marketing automation</div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security options for your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <div className="text-sm text-muted-foreground">Require 2FA for all admin users</div>
                </div>
                <Switch id="two-factor" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="password-policy">Strong Password Policy</Label>
                  <div className="text-sm text-muted-foreground">Enforce complex passwords for all users</div>
                </div>
                <Switch id="password-policy" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <div className="flex items-center space-x-4">
                  <Slider defaultValue={[30]} max={120} step={5} className="flex-1" />
                  <div className="w-12 text-center font-medium">30</div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="allowed-ips">Allowed IP Addresses</Label>
                <Textarea id="allowed-ips" placeholder="Enter IP addresses (one per line)" className="min-h-[100px]" />
                <p className="text-sm text-muted-foreground">Leave blank to allow all IP addresses</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="audit-logging">Audit Logging</Label>
                  <div className="text-sm text-muted-foreground">Log all admin actions for security review</div>
                </div>
                <Switch id="audit-logging" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Data Protection</CardTitle>
              <CardDescription>Configure data security and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="data-encryption">Data Encryption</Label>
                  <div className="text-sm text-muted-foreground">Encrypt sensitive user data at rest</div>
                </div>
                <Switch id="data-encryption" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="gdpr-compliance">GDPR Compliance</Label>
                  <div className="text-sm text-muted-foreground">Enable features required for GDPR compliance</div>
                </div>
                <Switch id="gdpr-compliance" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="data-retention">Data Retention Period (days)</Label>
                <Select defaultValue="365">
                  <SelectTrigger id="data-retention">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                    <SelectItem value="730">2 years</SelectItem>
                    <SelectItem value="forever">Forever</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Shield className="mr-2 h-4 w-4" />
                Run Security Audit
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>AI Configuration</CardTitle>
              <CardDescription>Configure AI models and behavior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="ai-model">Default AI Model</Label>
                <Select defaultValue="gpt4">
                  <SelectTrigger id="ai-model">
                    <SelectValue placeholder="Select AI model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt4">GPT-4o</SelectItem>
                    <SelectItem value="gpt35">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="claude">Claude 3 Opus</SelectItem>
                    <SelectItem value="llama">Llama 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="temperature">Temperature</Label>
                  <span className="text-sm text-muted-foreground">0.7</span>
                </div>
                <Slider defaultValue={[0.7]} max={1} step={0.1} className="flex-1" />
                <p className="text-sm text-muted-foreground">
                  Controls randomness: Lower values are more deterministic, higher values more creative
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-tokens">Max Response Length</Label>
                <Select defaultValue="2048">
                  <SelectTrigger id="max-tokens">
                    <SelectValue placeholder="Select max tokens" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="512">512 tokens</SelectItem>
                    <SelectItem value="1024">1024 tokens</SelectItem>
                    <SelectItem value="2048">2048 tokens</SelectItem>
                    <SelectItem value="4096">4096 tokens</SelectItem>
                    <SelectItem value="8192">8192 tokens</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="content-filter">Content Filtering</Label>
                  <div className="text-sm text-muted-foreground">Filter inappropriate content from AI responses</div>
                </div>
                <Switch id="content-filter" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="ai-logging">AI Interaction Logging</Label>
                  <div className="text-sm text-muted-foreground">Log AI interactions for quality improvement</div>
                </div>
                <Switch id="ai-logging" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>AI Usage Limits</CardTitle>
              <CardDescription>Configure usage limits for AI features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="daily-requests">Daily AI Requests Limit</Label>
                <Select defaultValue="1000">
                  <SelectTrigger id="daily-requests">
                    <SelectValue placeholder="Select limit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500">500 requests</SelectItem>
                    <SelectItem value="1000">1,000 requests</SelectItem>
                    <SelectItem value="5000">5,000 requests</SelectItem>
                    <SelectItem value="10000">10,000 requests</SelectItem>
                    <SelectItem value="unlimited">Unlimited</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="user-limits">Per-User AI Limits (Free Tier)</Label>
                <Select defaultValue="10">
                  <SelectTrigger id="user-limits">
                    <SelectValue placeholder="Select limit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 requests/day</SelectItem>
                    <SelectItem value="10">10 requests/day</SelectItem>
                    <SelectItem value="20">20 requests/day</SelectItem>
                    <SelectItem value="50">50 requests/day</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="rate-limiting-ai">AI Rate Limiting</Label>
                  <div className="text-sm text-muted-foreground">Limit frequency of AI requests per user</div>
                </div>
                <Switch id="rate-limiting-ai" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Cpu className="mr-2 h-4 w-4" />
                Test AI Configuration
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure system notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="user-signup">User Signup Notifications</Label>
                  <div className="text-sm text-muted-foreground">Receive notifications when new users sign up</div>
                </div>
                <Switch id="user-signup" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="subscription-notifications">Subscription Notifications</Label>
                  <div className="text-sm text-muted-foreground">Receive notifications for subscription changes</div>
                </div>
                <Switch id="subscription-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="system-alerts">System Alerts</Label>
                  <div className="text-sm text-muted-foreground">Receive notifications for system issues</div>
                </div>
                <Switch id="system-alerts" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notification-email">Notification Email</Label>
                <Input id="notification-email" type="email" defaultValue="admin@fitai.com" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Email Templates</CardTitle>
              <CardDescription>Configure email notification templates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="welcome-email">Welcome Email</Label>
                <Textarea
                  id="welcome-email"
                  defaultValue="Welcome to FitAI! We're excited to have you join our community of fitness enthusiasts. Get started by setting up your profile and goals."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-reset">Password Reset Email</Label>
                <Textarea
                  id="password-reset"
                  defaultValue="You've requested a password reset for your FitAI account. Click the link below to reset your password. If you didn't request this, please ignore this email."
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-footer">Include Company Footer</Label>
                  <div className="text-sm text-muted-foreground">Add company information to email footers</div>
                </div>
                <Switch id="email-footer" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Send Test Email
              </Button>
              <Button variant="outline">
                <BellRing className="mr-2 h-4 w-4" />
                Send Test Notification
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

