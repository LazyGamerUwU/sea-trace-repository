"use client"

import { useState } from "react"
import { Eye, Calendar, Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SharedHeader } from "@/components/shared-header"

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
    // Simulate export process
    setTimeout(() => {
      setShowExportSuccess(false)
      // In a real app, this would trigger actual file download
      const blob = new Blob(["Quality Grading Report - Generated on " + new Date().toLocaleDateString()], {
        type: "text/plain",
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `quality-grading-report-${new Date().toISOString().split("T")[0]}.txt`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }, 1500)
  }

  const handleViewDetails = (grading: any) => {
    const detailsMessage = `
Detailed Quality Assessment - Batch ${grading.batchId}

Assessment Date: ${new Date(grading.date).toLocaleDateString()}
Overall Grade: ${grading.grade} (${grading.score}/100)

Quality Metrics:
• Color Quality: ${grading.color}
• Foreign Matter: ${grading.foreignMatter}
• Moisture Content: ${grading.moisture}
• Images Analyzed: ${grading.images}

Market Performance:
• Listed Price: ${grading.listedPrice}
• Status: ${grading.status}

AI Analysis Notes:
This batch showed ${grading.grade === "A+" ? "exceptional" : grading.grade === "A" ? "high" : "good"} quality characteristics with ${grading.foreignMatter === "None detected" ? "no contamination" : "minimal contamination"} detected.
    `
    alert(detailsMessage)
  }

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      {showExportSuccess && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right-2">
          <Card className="border-primary bg-primary/5 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm font-medium text-primary">Report exported successfully!</div>
                  <div className="text-xs text-muted-foreground">Download will start shortly...</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Quality Grading History</h1>
          <p className="text-muted-foreground">
            Track your seaweed quality improvements and pricing performance over time.
          </p>
          <div className="mt-4">
            <Button variant="outline" size="sm" onClick={handleExportReport} disabled={showExportSuccess}>
              <Download className="h-4 w-4 mr-2" />
              {showExportSuccess ? "Exporting..." : "Export Report"}
            </Button>
          </div>
        </div>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Complete Grading History
            </CardTitle>
            <CardDescription>Detailed assessment records with AI-powered quality analysis</CardDescription>
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

                    <Button variant="outline" size="sm" onClick={() => handleViewDetails(grading)}>
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
