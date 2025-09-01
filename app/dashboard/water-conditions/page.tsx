"use client"

import type React from "react"

import { useState } from "react"
import { Thermometer, Droplets, Wind, Eye, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SharedHeader } from "@/components/shared-header"
import Link from "next/link"

export default function WaterConditionsPage() {
  const [conditions, setConditions] = useState({
    temperature: "",
    salinity: "",
    ph: "",
    turbidity: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Water conditions logged:", conditions)
    alert("Water conditions logged successfully!")
  }

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Log Water Conditions</h1>
          <p className="text-muted-foreground">Record current water quality parameters for your farm.</p>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Water Quality Assessment</CardTitle>
            <CardDescription>Enter the current water conditions at your farm location.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="temperature">Temperature (°C)</Label>
                  <div className="relative">
                    <Thermometer className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="temperature"
                      type="number"
                      step="0.1"
                      placeholder="28.5"
                      className="pl-10"
                      value={conditions.temperature}
                      onChange={(e) => setConditions({ ...conditions, temperature: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salinity">Salinity (ppt)</Label>
                  <div className="relative">
                    <Droplets className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="salinity"
                      type="number"
                      step="0.1"
                      placeholder="32.0"
                      className="pl-10"
                      value={conditions.salinity}
                      onChange={(e) => setConditions({ ...conditions, salinity: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ph">pH Level</Label>
                  <div className="relative">
                    <Wind className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="ph"
                      type="number"
                      step="0.1"
                      placeholder="8.2"
                      className="pl-10"
                      value={conditions.ph}
                      onChange={(e) => setConditions({ ...conditions, ph: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="turbidity">Turbidity (NTU)</Label>
                  <div className="relative">
                    <Eye className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="turbidity"
                      type="number"
                      step="0.1"
                      placeholder="2.5"
                      className="pl-10"
                      value={conditions.turbidity}
                      onChange={(e) => setConditions({ ...conditions, turbidity: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any observations about water color, clarity, or other conditions..."
                  value={conditions.notes}
                  onChange={(e) => setConditions({ ...conditions, notes: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full">
                Log Water Conditions
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
