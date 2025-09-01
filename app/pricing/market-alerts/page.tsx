import { Activity, ArrowLeft, Bell, TrendingUp, AlertTriangle, CheckCircle, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

export default function MarketAlertsPage() {
  const alerts = [
    {
      id: 1,
      type: "price_increase",
      title: "Price Surge Alert",
      message: "Seaweed prices increased 8% in the last 24 hours",
      timestamp: "2 hours ago",
      priority: "high",
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      id: 2,
      type: "demand_spike",
      title: "High Demand Detected",
      message: "Processor demand up 25% - optimal time to list premium grades",
      timestamp: "5 hours ago",
      priority: "high",
      icon: AlertTriangle,
      color: "text-accent",
    },
    {
      id: 3,
      type: "quality_premium",
      title: "Quality Premium Opportunity",
      message: "Grade A+ commanding 18% premium over Grade B",
      timestamp: "1 day ago",
      priority: "medium",
      icon: CheckCircle,
      color: "text-primary",
    },
    {
      id: 4,
      type: "seasonal_trend",
      title: "Seasonal Price Pattern",
      message: "Historical data shows prices typically peak in February",
      timestamp: "2 days ago",
      priority: "low",
      icon: TrendingUp,
      color: "text-chart-2",
    },
  ]

  const alertSettings = [
    { id: "price_changes", label: "Price Changes (±5%)", enabled: true },
    { id: "demand_spikes", label: "Demand Spikes", enabled: true },
    { id: "quality_premiums", label: "Quality Premium Opportunities", enabled: true },
    { id: "seasonal_trends", label: "Seasonal Trends", enabled: false },
    { id: "competitor_pricing", label: "Competitor Pricing", enabled: true },
    { id: "export_opportunities", label: "Export Opportunities", enabled: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/pricing" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5 text-muted-foreground" />
              </Link>
              <div className="flex items-center gap-2">
                <Activity className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">Market Alerts</span>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Alert Settings
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Recent Alerts
                </CardTitle>
                <CardDescription>Stay informed about market opportunities and price movements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert) => {
                    const IconComponent = alert.icon
                    return (
                      <div
                        key={alert.id}
                        className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
                      >
                        <div className={`p-2 rounded-full bg-muted/50 ${alert.color}`}>
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-foreground">{alert.title}</h4>
                            <Badge
                              variant={
                                alert.priority === "high"
                                  ? "default"
                                  : alert.priority === "medium"
                                    ? "secondary"
                                    : "outline"
                              }
                              className="text-xs"
                            >
                              {alert.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                          <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Alert Preferences
                </CardTitle>
                <CardDescription>Customize which alerts you want to receive</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alertSettings.map((setting) => (
                    <div key={setting.id} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{setting.label}</span>
                      <Switch checked={setting.enabled} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/pricing/set-target" className="block">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Set Price Target
                  </Button>
                </Link>
                <Link href="/marketplace" className="block">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    View Marketplace
                  </Button>
                </Link>
                <Link href="/pricing" className="block">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Pricing Analysis
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
