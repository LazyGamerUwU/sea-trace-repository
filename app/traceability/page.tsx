import {
  QrCode,
  MapPin,
  Calendar,
  Truck,
  Package,
  CheckCircle,
  Clock,
  User,
  Thermometer,
  Droplets,
  Star,
  Shield,
  FileText,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function TraceabilityPage() {
  const traceabilityRecord = {
    batchId: "ST-ZC-2024-001547",
    qrCode: "https://seatrace.ph/trace/ST-ZC-2024-001547",
    status: "Delivered",
    farmer: {
      name: "Maria Santos",
      location: "Barangay Talon-Talon, Zamboanga City",
      farmId: "ZC-FS-0234",
      certification: "Organic Certified",
    },
    seaweed: {
      type: "Eucheuma cottonii",
      variety: "Premium Red",
      quantity: "1,200 kg",
      qualityGrade: "A+",
      harvestDate: "2024-01-15",
    },
    processor: {
      name: "Pacific Carrageenan Corp",
      location: "Cebu Industrial Zone",
      processorId: "PC-001",
      certification: "ISO 22000",
    },
    timeline: [
      {
        stage: "Farm Cultivation",
        date: "2023-11-01",
        status: "completed",
        location: "Barangay Talon-Talon",
        details: "Seaweed lines planted in optimal water conditions",
        verifiedBy: "Maria Santos",
        waterTemp: "28.5°C",
        salinity: "32 ppt",
      },
      {
        stage: "Growth Monitoring",
        date: "2023-12-15",
        status: "completed",
        location: "Farm Site ZC-FS-0234",
        details: "Mid-growth health check - no ice-ice disease detected",
        verifiedBy: "SeaTrace AI System",
        waterTemp: "29.1°C",
        salinity: "33 ppt",
      },
      {
        stage: "Harvest",
        date: "2024-01-15",
        status: "completed",
        location: "Barangay Talon-Talon",
        details: "Optimal harvest timing based on AI recommendations",
        verifiedBy: "Maria Santos",
        qualityScore: 95,
        moistureContent: "10%",
      },
      {
        stage: "Quality Grading",
        date: "2024-01-16",
        status: "completed",
        location: "Farm Processing Area",
        details: "AI-powered quality assessment completed",
        verifiedBy: "SeaTrace AI System",
        grade: "A+",
        colorScore: 98,
        foreignMatter: "None",
      },
      {
        stage: "Packaging",
        date: "2024-01-17",
        status: "completed",
        location: "Farm Storage Facility",
        details: "Properly dried and packaged for transport",
        verifiedBy: "Maria Santos",
        packagingType: "Food-grade sacks",
        batchLabels: "Applied",
      },
      {
        stage: "Transport",
        date: "2024-01-18",
        status: "completed",
        location: "En route to Cebu",
        details: "Temperature-controlled transport initiated",
        verifiedBy: "LogiTrans Philippines",
        vehicleId: "LT-TR-4521",
        temperature: "Ambient",
      },
      {
        stage: "Processor Receipt",
        date: "2024-01-20",
        status: "completed",
        location: "Pacific Carrageenan Corp",
        details: "Quality verification upon receipt - Grade A+ confirmed",
        verifiedBy: "PC Quality Team",
        receivedQuantity: "1,198 kg",
        qualityConfirmed: true,
      },
    ],
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-primary"
      case "in-progress":
        return "text-accent"
      case "pending":
        return "text-muted-foreground"
      default:
        return "text-muted-foreground"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-primary" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-accent" />
      case "pending":
        return <Clock className="h-4 w-4 text-muted-foreground" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">Traceability System</span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <QrCode className="h-4 w-4 mr-2" />
                Generate QR Code
              </Button>
              <Button size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Batch Overview */}
        <Card className="border-border mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Batch {traceabilityRecord.batchId}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-2">
                  <MapPin className="h-4 w-4" />
                  {traceabilityRecord.farmer.location} → {traceabilityRecord.processor.location}
                </CardDescription>
              </div>
              <div className="text-right">
                <Badge variant="secondary" className="bg-primary/10 text-primary mb-2">
                  {traceabilityRecord.status}
                </Badge>
                <div className="text-sm text-muted-foreground">
                  Quality Grade:{" "}
                  <span className="font-medium text-primary">{traceabilityRecord.seaweed.qualityGrade}</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-foreground flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  Farmer Details
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium">{traceabilityRecord.farmer.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Farm ID:</span>
                    <span className="font-medium">{traceabilityRecord.farmer.farmId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certification:</span>
                    <Badge variant="outline" className="text-xs">
                      {traceabilityRecord.farmer.certification}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-foreground flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  Product Details
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{traceabilityRecord.seaweed.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity:</span>
                    <span className="font-medium">{traceabilityRecord.seaweed.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Harvest Date:</span>
                    <span className="font-medium">
                      {new Date(traceabilityRecord.seaweed.harvestDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-foreground flex items-center gap-2">
                  <Truck className="h-4 w-4 text-primary" />
                  Processor Details
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Company:</span>
                    <span className="font-medium">{traceabilityRecord.processor.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processor ID:</span>
                    <span className="font-medium">{traceabilityRecord.processor.processorId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certification:</span>
                    <Badge variant="outline" className="text-xs">
                      {traceabilityRecord.processor.certification}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="timeline" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="timeline">Supply Chain Timeline</TabsTrigger>
            <TabsTrigger value="quality">Quality Records</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
          </TabsList>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Complete Supply Chain Journey
                </CardTitle>
                <CardDescription>Detailed tracking from farm to processor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {traceabilityRecord.timeline.map((stage, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          {getStatusIcon(stage.status)}
                        </div>
                        {index < traceabilityRecord.timeline.length - 1 && (
                          <div className="w-px h-16 bg-border mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-foreground">{stage.stage}</h4>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {new Date(stage.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{stage.details}</p>
                        <div className="flex items-center gap-4 text-xs">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span>{stage.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3 text-muted-foreground" />
                            <span>Verified by {stage.verifiedBy}</span>
                          </div>
                        </div>
                        {/* Additional stage-specific data */}
                        <div className="flex gap-4 mt-2 text-xs">
                          {stage.waterTemp && (
                            <div className="flex items-center gap-1">
                              <Thermometer className="h-3 w-3 text-chart-2" />
                              <span>{stage.waterTemp}</span>
                            </div>
                          )}
                          {stage.salinity && (
                            <div className="flex items-center gap-1">
                              <Droplets className="h-3 w-3 text-chart-2" />
                              <span>{stage.salinity}</span>
                            </div>
                          )}
                          {stage.qualityScore && (
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-accent" />
                              <span>Score: {stage.qualityScore}/100</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quality Records Tab */}
          <TabsContent value="quality" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Quality Assessment History
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Initial AI Grading</span>
                      <Badge className="bg-primary text-primary-foreground">Grade A+</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Color Score:</span>
                        <span className="font-medium ml-2">98/100</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Foreign Matter:</span>
                        <span className="font-medium ml-2">None</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Moisture:</span>
                        <span className="font-medium ml-2">10%</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Overall:</span>
                        <span className="font-medium ml-2">95/100</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Processor Verification</span>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        Confirmed
                      </Badge>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground">
                        Quality grade confirmed upon receipt. No degradation during transport.
                      </p>
                      <div className="mt-2">
                        <span className="text-muted-foreground">Verified by:</span>
                        <span className="font-medium ml-2">PC Quality Team</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-chart-2" />
                    Environmental Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Water Temperature Range</span>
                      <span className="font-medium">28.5°C - 29.1°C</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Salinity Levels</span>
                      <span className="font-medium">32-33 ppt</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Growth Period</span>
                      <span className="font-medium">75 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Disease Detection</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        None Detected
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium mb-2">Optimal Conditions Maintained</h4>
                    <p className="text-sm text-muted-foreground">
                      All environmental parameters remained within optimal ranges throughout the cultivation period,
                      contributing to the premium quality grade.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Verification Tab */}
          <TabsContent value="verification" className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Blockchain Verification
                </CardTitle>
                <CardDescription>Immutable record verification and authenticity proof</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <h4 className="font-medium mb-2">Digital Certificate</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Certificate ID:</span>
                          <span className="font-mono">ST-CERT-2024-001547</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Issued:</span>
                          <span>January 20, 2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status:</span>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            Verified
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-medium mb-2">QR Code Access</h4>
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                          <QrCode className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-2">
                            Scan to view complete traceability record
                          </p>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            Generate QR Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <h4 className="font-medium mb-2">Verification Checkpoints</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">Farmer identity verified</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">Quality grade authenticated</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">Transport conditions monitored</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">Processor receipt confirmed</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-chart-2/5 border border-chart-2/20">
                      <h4 className="font-medium mb-2">Premium Certification</h4>
                      <p className="text-sm text-muted-foreground">
                        This batch qualifies for premium pricing due to verified Grade A+ quality and complete
                        traceability record.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-6 border-t border-border">
                  <Button className="flex-1">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Certificate
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <QrCode className="h-4 w-4 mr-2" />
                    Share Traceability
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
