"use client"

import { useState } from "react"
import { Target, DollarSign, TrendingUp, Bell, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { SharedHeader } from "@/components/shared-header"

export default function SetPriceTargetPage() {
  const [showSaveSuccess, setShowSaveSuccess] = useState(false)
  const [targetPrice, setTargetPrice] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("")
  const [quantity, setQuantity] = useState("")

  const handleSaveTarget = () => {
    if (!targetPrice || !selectedGrade || !quantity) {
      alert("Please fill in all required fields (Target Price, Grade, and Quantity)")
      return
    }

    setShowSaveSuccess(true)

    // Simulate saving process
    setTimeout(() => {
      setShowSaveSuccess(false)

      // Show detailed confirmation
      const confirmationMessage = `
Price Target Saved Successfully!

Target Details:
• Price: ₱${targetPrice}/kg
• Grade: ${selectedGrade.replace("-", " ").toUpperCase()}
• Quantity: ${quantity} kg
• Estimated Value: ₱${(Number.parseFloat(targetPrice) * Number.parseFloat(quantity)).toLocaleString()}

You will receive notifications when:
✓ Market price reaches your target
✓ High demand conditions occur
✓ Quality premiums increase (if enabled)

Alerts will be sent via email and in-app notifications.
      `
      alert(confirmationMessage)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      {showSaveSuccess && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right-2">
          <Card className="border-primary bg-primary/5 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary animate-pulse" />
                <div>
                  <div className="text-sm font-medium text-primary">Saving price target...</div>
                  <div className="text-xs text-muted-foreground">Setting up your alerts</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Set Price Target</h1>
          <p className="text-muted-foreground">
            Configure your desired price targets and get notified when market conditions are favorable.
          </p>
        </div>

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
                  <Label htmlFor="target-price">Target Price (₱/kg) *</Label>
                  <Input
                    id="target-price"
                    type="number"
                    placeholder="48"
                    className="text-lg"
                    value={targetPrice}
                    onChange={(e) => setTargetPrice(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">Current market price: ₱45/kg</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="seaweed-grade">Seaweed Grade *</Label>
                  <Select value={selectedGrade} onValueChange={setSelectedGrade}>
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
                <Label htmlFor="quantity">Expected Quantity (kg) *</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="500"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  This helps us calculate potential earnings
                  {targetPrice && quantity && (
                    <span className="font-medium text-primary ml-2">
                      (Est. value: ₱{(Number.parseFloat(targetPrice) * Number.parseFloat(quantity)).toLocaleString()})
                    </span>
                  )}
                </p>
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
                  <span className="font-medium text-primary">
                    Target Feasibility:{" "}
                    {targetPrice && Number.parseFloat(targetPrice) <= 50
                      ? "High"
                      : targetPrice && Number.parseFloat(targetPrice) <= 55
                        ? "Medium"
                        : "Low"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {targetPrice
                    ? Number.parseFloat(targetPrice) <= 50
                      ? `Your target price of ₱${targetPrice}/kg is achievable within the next 7-10 days based on current market trends.`
                      : Number.parseFloat(targetPrice) <= 55
                        ? `Your target price of ₱${targetPrice}/kg may take 2-3 weeks to achieve. Consider market conditions carefully.`
                        : `Your target price of ₱${targetPrice}/kg is ambitious and may require exceptional market conditions.`
                    : "Enter a target price to see AI feasibility analysis."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-muted/30">
                  <div className="text-lg font-bold text-foreground">
                    {targetPrice
                      ? Number.parseFloat(targetPrice) <= 50
                        ? "85%"
                        : Number.parseFloat(targetPrice) <= 55
                          ? "65%"
                          : "35%"
                      : "--"}
                  </div>
                  <div className="text-xs text-muted-foreground">Probability</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/30">
                  <div className="text-lg font-bold text-foreground">
                    {targetPrice
                      ? Number.parseFloat(targetPrice) <= 50
                        ? "7-10 days"
                        : Number.parseFloat(targetPrice) <= 55
                          ? "2-3 weeks"
                          : "1-2 months"
                      : "--"}
                  </div>
                  <div className="text-xs text-muted-foreground">Est. Timeline</div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-medium text-foreground mb-3">Recommendations</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Monitor market conditions daily for optimal timing</li>
                  <li>• Consider listing at ₱46/kg for quicker sale</li>
                  <li>• Quality grade A+ supports your target price</li>
                  {targetPrice && Number.parseFloat(targetPrice) > 50 && (
                    <li className="text-amber-600">• High target price - consider market volatility</li>
                  )}
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
            <Button className="flex-1" onClick={handleSaveTarget} disabled={showSaveSuccess}>
              <Bell className="h-4 w-4 mr-2" />
              {showSaveSuccess ? "Saving..." : "Set Price Alert"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
