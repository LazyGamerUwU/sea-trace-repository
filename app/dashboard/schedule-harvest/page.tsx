"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SharedHeader } from "@/components/shared-header"
import Link from "next/link"

export default function ScheduleHarvestPage() {
  const [harvest, setHarvest] = useState({
    date: "",
    time: "",
    location: "",
    estimatedQuantity: "",
    transportMethod: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Harvest scheduled:", harvest)
    alert("Harvest scheduled successfully!")
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
          <h1 className="text-2xl font-bold text-foreground">Schedule Harvest</h1>
          <p className="text-muted-foreground">Plan your upcoming seaweed harvest activities.</p>
        </div>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Harvest Planning</CardTitle>
            <CardDescription>Schedule your harvest based on growth progress and market conditions.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Harvest Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="date"
                      type="date"
                      className="pl-10"
                      value={harvest.date}
                      onChange={(e) => setHarvest({ ...harvest, date: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Start Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="time"
                      type="time"
                      className="pl-10"
                      value={harvest.time}
                      onChange={(e) => setHarvest({ ...harvest, time: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Farm Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="Barangay Talon-Talon, Section A"
                    className="pl-10"
                    value={harvest.location}
                    onChange={(e) => setHarvest({ ...harvest, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Quantity (kg)</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="1200"
                    value={harvest.estimatedQuantity}
                    onChange={(e) => setHarvest({ ...harvest, estimatedQuantity: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transport">Transport Method</Label>
                  <Select
                    value={harvest.transportMethod}
                    onValueChange={(value) => setHarvest({ ...harvest, transportMethod: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select transport" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="boat">Boat</SelectItem>
                      <SelectItem value="truck">Truck</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="manual">Manual Carry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Harvest Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Special instructions, weather considerations, or other notes..."
                  value={harvest.notes}
                  onChange={(e) => setHarvest({ ...harvest, notes: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full">
                Schedule Harvest
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
