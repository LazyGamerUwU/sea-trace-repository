import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  Globe,
  MapPin,
  Calendar,
  Target,
  AlertTriangle,
  CheckCircle,
  Activity,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function DynamicPricingPage() {
  const marketData = {
    currentPrice: 45,
    recommendedPrice: 48,
    priceChange: 12,
    demandLevel: "High",
    supplyLevel: "Moderate",
    qualityPremium: 8,
    globalCarrageenanPrice: 2.85,
    regionalProduction: "Above Average",
  }

  const priceFactors = [
    {
      factor: "Quality Grade (A+)",
      impact: "+15%",
      weight: 35,
      status: "positive",
      description: "Premium quality commands higher prices",
    },
    {
      factor: "Market Demand",
      impact: "+8%",
      weight: 25,
      status: "positive",
      description: "High demand from processors",
    },
    {
      factor: "Global Carrageenan Prices",
      impact: "+5%",
      weight: 20,
      status: "positive",
      description: "International prices trending upward",
    },
    {
      factor: "Regional Supply",
      impact: "-3%",
      weight: 15,
      status: "negative",
      description: "Moderate oversupply in region",
    },
    {
      factor: "Seasonal Trends",
      impact: "+2%",
      weight: 5,
      status: "positive",
      description: "Peak harvesting season",
    },
  ]

  const historicalPrices = [
    { date: "Jan 1", price: 38, demand: "Low" },
    { date: "Jan 5", price: 40, demand: "Moderate" },
    { date: "Jan 10", price: 42, demand: "Moderate" },
    { date: "Jan 15", price: 45, demand: "High" },
    { date: "Jan 20", price: 48, demand: "High" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">Dynamic Pricing Engine</span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Activity className="h-4 w-4 mr-2" />
                Market Alerts
              </Button>
              <Button size="sm">
                <Target className="h-4 w-4 mr-2" />
                Set Price Target
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Price Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Market Price</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">₱{marketData.currentPrice}/kg</div>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="h-3 w-3 text-primary" />
                <span className="text-xs text-primary">+{marketData.priceChange}% from last week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Recommended Price</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">₱{marketData.recommendedPrice}/kg</div>
              <div className="flex items-center gap-1 mt-2">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span className="text-xs text-primary">Optimal pricing detected</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Market Demand</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{marketData.demandLevel}</div>
              <Badge variant="secondary" className="mt-2 bg-accent/10 text-accent">
                Favorable Conditions
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quality Premium</CardTitle>
              <BarChart3 className="h-4 w-4 text-chart-2" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">+{marketData.qualityPremium}%</div>
              <p className="text-xs text-muted-foreground mt-2">For Grade A+ quality</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="analysis" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analysis">Price Analysis</TabsTrigger>
            <TabsTrigger value="trends">Market Trends</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          {/* Price Analysis Tab */}
          <TabsContent value="analysis" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Price Factors */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Price Influencing Factors
                  </CardTitle>
                  <CardDescription>AI analysis of factors affecting your seaweed pricing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {priceFactors.map((factor, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{factor.factor}</span>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-sm font-medium ${
                              factor.status === "positive" ? "text-primary" : "text-destructive"
                            }`}
                          >
                            {factor.impact}
                          </span>
                          {factor.status === "positive" ? (
                            <TrendingUp className="h-3 w-3 text-primary" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-destructive" />
                          )}
                        </div>
                      </div>
                      <Progress value={factor.weight} className="h-2" />
                      <p className="text-xs text-muted-foreground">{factor.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Market Conditions */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Market Conditions
                  </CardTitle>
                  <CardDescription>Current supply and demand dynamics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="text-2xl font-bold text-primary mb-2">{marketData.demandLevel}</div>
                      <div className="text-sm text-muted-foreground">Market Demand</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-accent/5 border border-accent/10">
                      <div className="text-2xl font-bold text-accent mb-2">{marketData.supplyLevel}</div>
                      <div className="text-sm text-muted-foreground">Regional Supply</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-chart-2" />
                        <span className="text-sm font-medium">Global Carrageenan Price</span>
                      </div>
                      <span className="text-sm font-bold">${marketData.globalCarrageenanPrice}/kg</span>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-chart-3" />
                        <span className="text-sm font-medium">Regional Production</span>
                      </div>
                      <span className="text-sm font-bold">{marketData.regionalProduction}</span>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-chart-4" />
                        <span className="text-sm font-medium">Seasonal Factor</span>
                      </div>
                      <span className="text-sm font-bold">Peak Season</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Market Trends Tab */}
          <TabsContent value="trends" className="space-y-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Price Trends - Last 20 Days
                </CardTitle>
                <CardDescription>Historical pricing data and market movements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-5 gap-4">
                    {historicalPrices.map((data, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-foreground">₱{data.price}</div>
                        <div className="text-xs text-muted-foreground">{data.date}</div>
                        <Badge
                          variant="outline"
                          className={`mt-1 text-xs ${
                            data.demand === "High"
                              ? "border-primary text-primary"
                              : data.demand === "Moderate"
                                ? "border-accent text-accent"
                                : "border-muted-foreground text-muted-foreground"
                          }`}
                        >
                          {data.demand}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-medium text-foreground mb-4">Market Insights</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">
                          Prices have increased 26% over the past 20 days due to high processor demand
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">
                          Quality premiums are at their highest, with Grade A+ commanding 15% more than Grade B
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-accent mt-0.5" />
                        <span className="text-sm">
                          International carrageenan prices expected to remain stable through Q1 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recommendations Tab */}
          <TabsContent value="recommendations" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Pricing Recommendations
                  </CardTitle>
                  <CardDescription>AI-powered suggestions for optimal pricing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium text-primary">Recommended Action</span>
                    </div>
                    <p className="text-sm text-foreground mb-3">
                      List your Grade A+ seaweed at ₱48/kg for maximum profitability
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Based on current market conditions and quality assessment
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Conservative Price</span>
                      <span className="font-medium">₱45/kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Recommended Price</span>
                      <span className="font-medium text-primary">₱48/kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Premium Price</span>
                      <span className="font-medium">₱52/kg</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-accent" />
                    Market Alerts
                  </CardTitle>
                  <CardDescription>Important market updates and opportunities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium">Price Opportunity</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Current prices are 12% above 30-day average. Consider harvesting soon.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Export Demand</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      International buyers showing increased interest in Philippine seaweed.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-chart-2/10 border border-chart-2/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 text-chart-2" />
                      <span className="text-sm font-medium">Seasonal Forecast</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Prices expected to remain strong through February harvest season.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">Ready to list your seaweed?</h3>
                    <p className="text-sm text-muted-foreground">
                      Use our recommended pricing to maximize your profits
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="bg-transparent">
                      Set Price Alert
                    </Button>
                    <Link href="/marketplace">
                      <Button>List at ₱48/kg</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
