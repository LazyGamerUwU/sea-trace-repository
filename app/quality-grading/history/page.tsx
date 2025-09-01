"use client"

import { useState } from "react"
import { History, ArrowLeft, Eye, Calendar, Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function QualityGradingHistoryPage() {
  const [showExportSuccess, setShowExportSuccess] = useState(false)
  const gradingHistory = [
    {
      id: 1,
      date: "2024-01-15",
      grade: "A+",
      score: 95,
      color: "Excellent",
      foreignMatter: "None detected",
      moisture: "10%",
      images: 3,
      batchId: "SW-2024-001",
      listedPrice: "₱48/kg",
      status: "Listed",
    },
    {
      id: 2,
      date: "2024-01-12",
      grade: "A",
      score: 88,
      color: "Good",
      foreignMatter: "Minimal",
      moisture: "12%",
      images: 5,
      batchId: "SW-2024-002",
      listedPrice: "₱42/kg",
      status: "Sold",
    },
    {
      id: 3,
      date: "2024-01-08",
      grade: "B+",
      score: 82,
      color: "Fair",
      foreignMatter: "Some detected",
      moisture: "15%",
      images: 4,
      batchId: "SW-2024-003",
      listedPrice: "₱38/kg",
      status: "Sold",
    },
    {
      id: 4,
      date: "2024-01-05",
      grade: "A",
      score: 90,
      color: "Good",
      foreignMatter: "Minimal",
      moisture: "11%",
      images: 6,
      batchId: "SW-2024-004",
      listedPrice: "₱44/kg",
      status: "Sold",
    },
  ]

  const handleExportReport = () => {
    setShowExportSuccess(true)
    setTimeout(() => setShowExportSuccess(false), 3000)
  }

  const handleViewDetails = (gradingId: number) => {
    // In a real app, this would navigate to a detailed view
    alert(`Viewing details for grading ID: ${gradingId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/quality-grading" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5 text-muted-foreground" />
              </Link>
              <div className="flex items-center gap-2">
                <History className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">Quality Grading History</span>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={handleExportReport}>
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </header>

      {showExportSuccess && (
        <div className="fixed top-4 right-4 z-50">
          <Card className="border-primary bg-primary/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Report exported successfully!</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Complete Grading History
            </CardTitle>
            <CardDescription>Track your seaweed quality improvements and pricing performance over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {gradingHistory.map((grading) => (
                <div
                  key={grading.id}
                  className="flex items-center justify-between p-6 rounded-lg border border-border hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <Badge
                        variant={grading.grade === "A+" ? "default" : grading.grade === "A" ? "secondary" : "outline"}
                        className={
                          grading.grade === "A+"
                            ? "bg-primary text-primary-foreground"
                            : grading.grade === "A"
                              ? "bg-accent text-accent-foreground"
                              : ""
                        }
                      >
                        Grade {grading.grade}
                      </Badge>
                      <div className="text-sm font-medium text-foreground mt-1">{grading.score}/100</div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">Batch {grading.batchId}</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(grading.date).toLocaleDateString()} • {grading.images} images analyzed
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                    <div className="grid grid-cols-3 gap-6 text-xs">
                      <div>
                        <div className="text-muted-foreground">Color</div>
                        <div className="font-medium">{grading.color}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Foreign Matter</div>
                        <div className="font-medium">{grading.foreignMatter}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Moisture</div>
                        <div className="font-medium">{grading.moisture}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-medium text-foreground">{grading.listedPrice}</div>
                      <Badge variant={grading.status === "Sold" ? "default" : "secondary"} className="mt-1">
                        {grading.status}
                      </Badge>
                    </div>

                    <Button variant="outline" size="sm" onClick={() => handleViewDetails(grading.id)}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
