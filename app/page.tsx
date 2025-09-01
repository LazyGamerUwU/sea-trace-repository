import { Waves, Leaf, TrendingUp, Users, Shield, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Waves className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">SeaTrace</span>
              </div>
              <span className="text-sm text-muted-foreground ml-2">AI-Powered Seaweed Value Chain</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <Link href="/marketplace" className="text-foreground hover:text-primary transition-colors">
                Marketplace
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="sm">Get Started</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Empowering Zamboanga Peninsula Farmers
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Transform Your Seaweed Farm with AI-Powered Insights
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            From disease detection to market transparency, SeaTrace provides end-to-end management for seaweed farmers
            and processors across the Philippines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Seaweed Value Chain Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed specifically for the Philippine seaweed industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Disease Detection</CardTitle>
                <CardDescription>
                  AI-powered monitoring to detect "Ice-Ice" disease early and prevent farm losses
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Dynamic Pricing</CardTitle>
                <CardDescription>
                  Real-time market analysis and fair pricing recommendations based on quality and demand
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quality Grading</CardTitle>
                <CardDescription>
                  Automated quality assessment using ML image recognition for objective grading
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Market Transparency</CardTitle>
                <CardDescription>
                  Direct connection between farmers and processors, eliminating middleman exploitation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Waves className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Farm Monitoring</CardTitle>
                <CardDescription>
                  Track water quality, growth patterns, and environmental conditions in real-time
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Traceability</CardTitle>
                <CardDescription>
                  Complete supply chain tracking from farm to processor for quality assurance
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground mb-12">Choose the plan that fits your farm size and needs</p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  ₱500<span className="text-sm text-muted-foreground">/month</span>
                </div>
                <CardDescription>Perfect for small farms (1-5 hectares)</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300 border-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  ₱1,500<span className="text-sm text-muted-foreground">/month</span>
                </div>
                <CardDescription>Ideal for medium farms (5-20 hectares)</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  ₱5,000<span className="text-sm text-muted-foreground">/month</span>
                </div>
                <CardDescription>For large operations (20+ hectares)</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Seaweed Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join farmers and processors across Zamboanga Peninsula who are already using SeaTrace to increase their
            profits and improve sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8">
                Start Your Free Trial
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About SeaTrace</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Built specifically for the Philippine seaweed industry, SeaTrace addresses the unique challenges faced by
            farmers in the Zamboanga Peninsula and beyond.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower seaweed farmers with AI-driven tools that increase profitability, ensure sustainability, and
                create transparent market connections throughout the Philippines.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Impact</h3>
              <p className="text-muted-foreground">
                Supporting over 1,000 farmers across Zamboanga Peninsula, helping prevent disease outbreaks, and
                ensuring fair pricing through direct market access and quality transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Waves className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">SeaTrace</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 SeaTrace. Empowering Philippine seaweed farmers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
