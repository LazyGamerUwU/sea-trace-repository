import { Target, ArrowLeft, DollarSign, TrendingUp, Bell, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

export default function SetPriceTargetPage() {
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
                <Target className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">Set Price Target</span>
              </div>
            </div>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save Target
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Price Target Configuration
              </CardTitle>
              <CardDescription>
                Set your desired price targets and get notified when market conditions are favorable
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="target-price">Target Price (₱/kg)</Label>
                  <Input id="target-price" type="number" placeholder="48" className="text-lg" />
                  <p className="text-xs text-muted-foreground">Current market price: ₱45/kg</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="seaweed-grade">Seaweed Grade</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a-plus">Grade A+</SelectItem>
                      <SelectItem value="a">Grade A</SelectItem>
                      <SelectItem value="b-plus">Grade B+</SelectItem>
                      <SelectItem value="b">Grade B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Expected Quantity (kg)</Label>
                <Input id="quantity" type="number" placeholder="500" />
                <p className="text-xs text-muted-foreground">This helps us calculate potential earnings</p>
              </div>

              <div className="space-y-4">
                <Label>Alert Conditions</Label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">Price Reached</div>
                      <div className="text-xs text-muted-foreground">Alert when market price reaches your target</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">High Demand</div>
                      <div className="text-xs text-muted-foreground">Alert during high demand periods</div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">Quality Premium</div>
                      <div className="text-xs text-muted-foreground">Alert when quality premiums increase</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Target Analysis
              </CardTitle>
              <CardDescription>AI analysis of your price target feasibility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="font-medium text-primary">Target Feasibility: High</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on current market trends, your target price of ₱48/kg is achievable within the next 7-10 days.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-muted/30">
                  <div className="text-lg font-bold text-foreground">85%</div>
                  <div className="text-xs text-muted-foreground">Probability</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/30">
                  <div className="text-lg font-bold text-foreground">7-10 days</div>
                  <div className="text-xs text-muted-foreground">Est. Timeline</div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-medium text-foreground mb-3">Recommendations</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Monitor market conditions daily for optimal timing</li>
                  <li>• Consider listing at ₱46/kg for quicker sale</li>
                  <li>• Quality grade A+ supports your target price</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Link href="/pricing" className="flex-1">
              <Button variant="outline" className="w-full bg-transparent">
                Cancel
              </Button>
            </Link>
            <Button className="flex-1">
              <Bell className="h-4 w-4 mr-2" />
              Set Price Alert
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
