import {
  Camera,
  Upload,
  CheckCircle,
  AlertCircle,
  Star,
  Eye,
  Palette,
  Droplets,
  Leaf,
  BarChart3,
  TrendingUp,
  History,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function QualityGradingPage() {
  const recentGradings = [
    {
      id: 1,
      date: "2024-01-15",
      grade: "A+",
      score: 95,
      color: "Excellent",
      foreignMatter: "None detected",
      moisture: "10%",
      images: 3,
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
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center gap-2">
                <Eye className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">AI Quality Grading</span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/quality-grading/history">
                <Button variant="outline" size="sm">
                  <History className="h-4 w-4 mr-2" />
                  View History
                </Button>
              </Link>
              <Link href="/quality-grading/new-assessment">
                <Button size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  New Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="upload" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">Upload & Grade</TabsTrigger>
            <TabsTrigger value="results">Latest Results</TabsTrigger>
            <TabsTrigger value="history">Grading History</TabsTrigger>
          </TabsList>

          {/* Upload & Grade Tab */}
          <TabsContent value="upload" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upload Section */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-primary" />
                    Upload Seaweed Photos
                  </CardTitle>
                  <CardDescription>
                    Upload clear photos of your dried seaweed for AI-powered quality assessment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Camera className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-foreground mb-2">Drop photos here or click to upload</p>
                        <p className="text-sm text-muted-foreground">
                          Support for JPG, PNG files. Maximum 10MB per image.
                        </p>
                      </div>
                      <Button className="mt-2">
                        <Upload className="h-4 w-4 mr-2" />
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Photo Guidelines:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Take photos in good lighting conditions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Ensure seaweed fills most of the frame
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Capture different angles and sections
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Include close-up shots for detail analysis
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Grading Criteria */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Grading Criteria
                  </CardTitle>
                  <CardDescription>Understanding how our AI evaluates seaweed quality</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Palette className="h-4 w-4 text-chart-2" />
                        <span className="font-medium">Color Quality</span>
                      </div>
                      <span className="text-sm text-muted-foreground">40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                    <p className="text-xs text-muted-foreground">Evaluates natural color retention and uniformity</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-chart-3" />
                        <span className="font-medium">Foreign Matter</span>
                      </div>
                      <span className="text-sm text-muted-foreground">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                    <p className="text-xs text-muted-foreground">Detects impurities and contamination</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-primary" />
                        <span className="font-medium">Texture & Structure</span>
                      </div>
                      <span className="text-sm text-muted-foreground">20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                    <p className="text-xs text-muted-foreground">Assesses drying quality and integrity</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-chart-4" />
                        <span className="font-medium">Moisture Content</span>
                      </div>
                      <span className="text-sm text-muted-foreground">15%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                    <p className="text-xs text-muted-foreground">Visual indicators of proper drying</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Latest Results Tab */}
          <TabsContent value="results" className="space-y-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Latest Quality Assessment
                </CardTitle>
                <CardDescription>AI analysis completed on January 15, 2024</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary">A+</span>
                    </div>
                    <h3 className="font-semibold text-foreground">Overall Grade</h3>
                    <p className="text-sm text-muted-foreground">Premium Quality</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-accent">95</span>
                    </div>
                    <h3 className="font-semibold text-foreground">Quality Score</h3>
                    <p className="text-sm text-muted-foreground">Out of 100</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-chart-2/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-chart-2">₱48</span>
                    </div>
                    <h3 className="font-semibold text-foreground">Suggested Price</h3>
                    <p className="text-sm text-muted-foreground">Per kilogram</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">Quality Breakdown</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Color Quality</span>
                        <div className="flex items-center gap-2">
                          <Progress value={98} className="w-20 h-2" />
                          <span className="text-sm font-medium">98%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Foreign Matter</span>
                        <div className="flex items-center gap-2">
                          <Progress value={100} className="w-20 h-2" />
                          <span className="text-sm font-medium">100%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Texture & Structure</span>
                        <div className="flex items-center gap-2">
                          <Progress value={92} className="w-20 h-2" />
                          <span className="text-sm font-medium">92%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Moisture Content</span>
                        <div className="flex items-center gap-2">
                          <Progress value={88} className="w-20 h-2" />
                          <span className="text-sm font-medium">88%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">Key Findings</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">Excellent color retention with natural golden-brown hue</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">No foreign matter or contamination detected</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">Proper drying with optimal moisture levels</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-accent mt-0.5" />
                        <span className="text-sm">Minor texture variations in some sections</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-6 border-t border-border">
                  <Link href="/marketplace" className="flex-1">
                    <Button className="w-full">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      List in Marketplace
                    </Button>
                  </Link>
                  <Button variant="outline" className="bg-transparent">
                    <History className="h-4 w-4 mr-2" />
                    Save Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5 text-primary" />
                  Quality Grading History
                </CardTitle>
                <CardDescription>Track your seaweed quality improvements over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentGradings.map((grading) => (
                    <div
                      key={grading.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <Badge
                            variant={
                              grading.grade === "A+" ? "default" : grading.grade === "A" ? "secondary" : "outline"
                            }
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
                          <div className="font-medium text-foreground">
                            {new Date(grading.date).toLocaleDateString()}
                          </div>
                          <div className="text-sm text-muted-foreground">{grading.images} images analyzed</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="grid grid-cols-3 gap-4 text-xs">
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
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
