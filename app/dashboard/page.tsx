import {
  Thermometer,
  Droplets,
  AlertTriangle,
  TrendingUp,
  Calendar,
  Camera,
  MapPin,
  Leaf,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SharedHeader } from "@/components/shared-header"
import Link from "next/link"

export default function FarmerDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Shared Header */}
      <SharedHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Message */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Welcome back, Maria Santos</h1>
          <p className="text-muted-foreground">Here's what's happening with your seaweed farm today.</p>
        </div>

        {/* Farm Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Farm Health</CardTitle>
              <Leaf className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">Excellent</div>
              <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary">
                No Issues Detected
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Water Temperature</CardTitle>
              <Thermometer className="h-4 w-4 text-chart-2" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">28.5°C</div>
              <p className="text-xs text-muted-foreground mt-2">Optimal range: 26-30°C</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Salinity Level</CardTitle>
              <Droplets className="h-4 w-4 text-chart-2" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">32 ppt</div>
              <p className="text-xs text-muted-foreground mt-2">Within ideal range</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Price</CardTitle>
              <DollarSign className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">₱45/kg</div>
              <p className="text-xs text-primary mt-2">+12% from last week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Farm Status */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Farm Status - Barangay Talon-Talon
                </CardTitle>
                <CardDescription>Real-time monitoring of your 2.5 hectare seaweed farm</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Growth Progress</span>
                      <span className="text-sm text-muted-foreground">Day 35 of 45</span>
                    </div>
                    <Progress value={78} className="h-2" />
                    <p className="text-xs text-muted-foreground">Estimated harvest in 10 days</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Quality Score</span>
                      <span className="text-sm font-semibold text-primary">Grade A</span>
                    </div>
                    <Progress value={92} className="h-2" />
                    <p className="text-xs text-muted-foreground">Excellent color and density</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">2,800</div>
                    <div className="text-xs text-muted-foreground">Lines Planted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">1.2 tons</div>
                    <div className="text-xs text-muted-foreground">Expected Yield</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-primary">₱54,000</div>
                    <div className="text-xs text-muted-foreground">Est. Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Water quality check completed</p>
                      <p className="text-xs text-muted-foreground">All parameters within optimal range</p>
                      <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 bg-chart-2 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Photos uploaded for quality assessment</p>
                      <p className="text-xs text-muted-foreground">12 images processed - Grade A quality detected</p>
                      <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Market price alert</p>
                      <p className="text-xs text-muted-foreground">Price increased to ₱45/kg - Good time to harvest</p>
                      <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alerts */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <AlertTriangle className="h-4 w-4 text-accent" />
                  Alerts & Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">Market Opportunity</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Current prices are 12% above average. Consider harvesting within the next week.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Leaf className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Growth Update</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Seaweed growth is ahead of schedule. Quality remains excellent.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-sm">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/quality-grading" className="block">
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    <Camera className="h-4 w-4 mr-2" />
                    Upload Farm Photos
                  </Button>
                </Link>
                <Link href="/dashboard/water-conditions" className="block">
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    <Thermometer className="h-4 w-4 mr-2" />
                    Log Water Conditions
                  </Button>
                </Link>
                <Link href="/dashboard/schedule-harvest" className="block">
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Harvest
                  </Button>
                </Link>
                <Link href="/pricing" className="block">
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Market Trends
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Weather Forecast */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-sm">Weather Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Today</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-foreground">29°C</span>
                      <span className="text-xs text-muted-foreground">Sunny</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Tomorrow</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-foreground">27°C</span>
                      <span className="text-xs text-muted-foreground">Cloudy</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground">Day 3</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-foreground">26°C</span>
                      <span className="text-xs text-muted-foreground">Light Rain</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
