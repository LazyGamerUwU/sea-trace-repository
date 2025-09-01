import { Camera, Upload, ArrowLeft, CheckCircle, AlertCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function NewAssessmentPage() {
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
                <Camera className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">New Quality Assessment</span>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Zap className="h-4 w-4 mr-2" />
              Quick Scan
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                Upload Seaweed Photos
              </CardTitle>
              <CardDescription>
                Upload clear, well-lit photos of your dried seaweed for AI-powered quality assessment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <Camera className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-medium text-foreground mb-3">Drop photos here or click to upload</p>
                    <p className="text-muted-foreground mb-4">
                      Support for JPG, PNG files. Maximum 10MB per image. Upload 3-8 photos for best results.
                    </p>
                  </div>
                  <Button size="lg">
                    <Upload className="h-5 w-5 mr-2" />
                    Choose Files
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Photo Requirements:</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Take photos in bright, natural lighting
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Ensure seaweed fills 70% of the frame
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Capture different angles and sections
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Include close-up shots for texture analysis
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Assessment Process:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary">
                        1
                      </div>
                      <span className="text-sm text-muted-foreground">AI analyzes color quality and uniformity</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary">
                        2
                      </div>
                      <span className="text-sm text-muted-foreground">Detects foreign matter and contamination</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary">
                        3
                      </div>
                      <span className="text-sm text-muted-foreground">Evaluates texture and drying quality</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary">
                        4
                      </div>
                      <span className="text-sm text-muted-foreground">Generates grade and pricing recommendation</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle>Assessment Progress</CardTitle>
              <CardDescription>Your photos will be processed in real-time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Upload Progress</span>
                <span className="text-sm text-muted-foreground">0 of 0 photos</span>
              </div>
              <Progress value={0} className="h-2" />

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                Upload photos to begin quality assessment
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
