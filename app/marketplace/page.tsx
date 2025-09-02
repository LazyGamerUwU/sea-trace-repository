"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  MapPin,
  Star,
  Truck,
  MessageCircle,
  ShoppingCart,
  Leaf,
  TrendingUp,
  Users,
  Clock,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SharedHeader } from "@/components/shared-header"

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [visibleListings, setVisibleListings] = useState(3)
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [priceMin, setPriceMin] = useState("")
  const [priceMax, setPriceMax] = useState("")
  const [selectedQuantity, setSelectedQuantity] = useState("all")
  const [selectedFreshness, setSelectedFreshness] = useState("all")

  const allListings = [
    {
      id: 1,
      farmer: "Maria Santos",
      location: "Barangay Talon-Talon, Zamboanga City",
      seaweedType: "Eucheuma cottonii",
      quantity: "1,200 kg",
      quality: "Grade A",
      price: "₱45/kg",
      totalValue: "₱54,000",
      harvestDate: "2024-01-15",
      dryingMethod: "Solar dried",
      moistureContent: "12%",
      rating: 4.8,
      completedOrders: 23,
      description: "Premium quality seaweed, properly dried and sorted. No foreign matter detected.",
      images: ["/dried-seaweed-grade-a.png"],
      verified: true,
      freshness: "2 days",
    },
    {
      id: 2,
      farmer: "Juan Dela Cruz",
      location: "Barangay Recodo, Zamboanga City",
      seaweedType: "Kappaphycus alvarezii",
      quantity: "800 kg",
      quality: "Grade A+",
      price: "₱48/kg",
      totalValue: "₱38,400",
      harvestDate: "2024-01-14",
      dryingMethod: "Solar dried",
      moistureContent: "10%",
      rating: 4.9,
      completedOrders: 31,
      description: "Exceptional quality with excellent color retention. Ideal for carrageenan production.",
      images: ["/premium-dried-seaweed.png"],
      verified: true,
      freshness: "1 day",
    },
    {
      id: 3,
      farmer: "Rosa Mendoza",
      location: "Barangay Sangali, Zamboanga City",
      seaweedType: "Eucheuma cottonii",
      quantity: "2,000 kg",
      quality: "Grade B+",
      price: "₱42/kg",
      totalValue: "₱84,000",
      harvestDate: "2024-01-13",
      dryingMethod: "Solar dried",
      moistureContent: "14%",
      rating: 4.6,
      completedOrders: 18,
      description: "Good quality seaweed with minor color variations. Suitable for various applications.",
      images: ["/seaweed-grade-b.png"],
      verified: true,
      freshness: "3 days",
    },
    {
      id: 4,
      farmer: "Pedro Ramirez",
      location: "Barangay Tetuan, Zamboanga City",
      seaweedType: "Eucheuma cottonii",
      quantity: "1,500 kg",
      quality: "Grade A",
      price: "₱44/kg",
      totalValue: "₱66,000",
      harvestDate: "2024-01-12",
      dryingMethod: "Solar dried",
      moistureContent: "13%",
      rating: 4.7,
      completedOrders: 15,
      description: "High-quality seaweed with consistent color and texture.",
      images: ["/dried-seaweed-grade-a.png"],
      verified: true,
      freshness: "4 days",
    },
    {
      id: 5,
      farmer: "Ana Gutierrez",
      location: "Barangay Ayala, Zamboanga City",
      seaweedType: "Kappaphycus alvarezii",
      quantity: "900 kg",
      quality: "Grade B+",
      price: "₱41/kg",
      totalValue: "₱36,900",
      harvestDate: "2024-01-11",
      dryingMethod: "Solar dried",
      moistureContent: "15%",
      rating: 4.5,
      completedOrders: 12,
      description: "Good quality seaweed suitable for various processing applications.",
      images: ["/seaweed-grade-b.png"],
      verified: true,
      freshness: "5 days",
    },
    {
      id: 6,
      farmer: "Carlos Mendez",
      location: "Barangay Putik, Zamboanga City",
      seaweedType: "Eucheuma cottonii",
      quantity: "1,800 kg",
      quality: "Grade A+",
      price: "₱47/kg",
      totalValue: "₱84,600",
      harvestDate: "2024-01-10",
      dryingMethod: "Solar dried",
      moistureContent: "11%",
      rating: 4.8,
      completedOrders: 28,
      description: "Premium grade seaweed with excellent processing characteristics.",
      images: ["/premium-dried-seaweed.png"],
      verified: true,
      freshness: "6 days",
    },
  ]

  const filteredListings = allListings.filter((listing) => {
    const matchesSearch =
      listing.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.seaweedType.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesGrade =
      selectedGrade === "all" ||
      listing.quality.toLowerCase().replace(/\s+/g, "").replace("grade", "") === selectedGrade.replace("-", "")

    const matchesLocation =
      selectedLocation === "all" || listing.location.toLowerCase().includes(selectedLocation.toLowerCase())

    const price = Number.parseFloat(listing.price.replace("₱", "").replace("/kg", ""))
    const matchesPriceMin = !priceMin || price >= Number.parseFloat(priceMin)
    const matchesPriceMax = !priceMax || price <= Number.parseFloat(priceMax)

    const quantity = Number.parseFloat(listing.quantity.replace(" kg", "").replace(",", ""))
    const matchesQuantity =
      selectedQuantity === "all" ||
      (selectedQuantity === "small" && quantity < 1000) ||
      (selectedQuantity === "medium" && quantity >= 1000 && quantity <= 2000) ||
      (selectedQuantity === "large" && quantity > 2000)

    const freshnessDay = Number.parseFloat(listing.freshness.replace(" day", "").replace("s", ""))
    const matchesFreshness =
      selectedFreshness === "all" ||
      (selectedFreshness === "fresh" && freshnessDay <= 2) ||
      (selectedFreshness === "good" && freshnessDay >= 3 && freshnessDay <= 5) ||
      (selectedFreshness === "older" && freshnessDay > 5)

    return (
      matchesSearch &&
      matchesGrade &&
      matchesLocation &&
      matchesPriceMin &&
      matchesPriceMax &&
      matchesQuantity &&
      matchesFreshness
    )
  })

  const displayedListings = filteredListings.slice(0, visibleListings)

  const handleLoadMore = () => {
    setVisibleListings((prev) => Math.min(prev + 3, filteredListings.length))
  }

  const handleResetFilters = () => {
    setSearchTerm("")
    setSelectedGrade("all")
    setSelectedLocation("all")
    setPriceMin("")
    setPriceMax("")
    setSelectedQuantity("all")
    setSelectedFreshness("all")
    setShowAdvancedFilters(false)
  }

  const handleApplyFilters = () => {
    setShowAdvancedFilters(false)
    setVisibleListings(3)
  }

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Seaweed Marketplace</h1>
          <p className="text-muted-foreground">
            Connect directly with verified farmers and find quality seaweed at fair prices.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by location, farmer name, or seaweed type..."
                className="pl-10 bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                <SelectTrigger className="w-[140px] bg-background">
                  <SelectValue placeholder="Quality Grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Grades</SelectItem>
                  <SelectItem value="a+">Grade A+</SelectItem>
                  <SelectItem value="a">Grade A</SelectItem>
                  <SelectItem value="b+">Grade B+</SelectItem>
                  <SelectItem value="b">Grade B</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-[140px] bg-background">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="zamboanga">Zamboanga City</SelectItem>
                  <SelectItem value="tawi-tawi">Tawi-Tawi</SelectItem>
                  <SelectItem value="sulu">Sulu</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                className="bg-background"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {showAdvancedFilters && (
            <Card className="mb-6 border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Advanced Filters</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setShowAdvancedFilters(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Price Range</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Min ₱"
                        className="bg-background"
                        value={priceMin}
                        onChange={(e) => setPriceMin(e.target.value)}
                        type="number"
                      />
                      <Input
                        placeholder="Max ₱"
                        className="bg-background"
                        value={priceMax}
                        onChange={(e) => setPriceMax(e.target.value)}
                        type="number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Quantity</label>
                    <Select value={selectedQuantity} onValueChange={setSelectedQuantity}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Any quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any quantity</SelectItem>
                        <SelectItem value="small">Under 1,000 kg</SelectItem>
                        <SelectItem value="medium">1,000 - 2,000 kg</SelectItem>
                        <SelectItem value="large">Over 2,000 kg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Freshness</label>
                    <Select value={selectedFreshness} onValueChange={setSelectedFreshness}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Any freshness" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any freshness</SelectItem>
                        <SelectItem value="fresh">1-2 days</SelectItem>
                        <SelectItem value="good">3-5 days</SelectItem>
                        <SelectItem value="older">Over 5 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button onClick={handleResetFilters} variant="outline" className="bg-transparent">
                    Reset All Filters
                  </Button>
                  <Button onClick={handleApplyFilters}>Apply Filters</Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Active Listings</span>
                </div>
                <div className="text-2xl font-bold text-foreground mt-1">{filteredListings.length}</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-chart-2" />
                  <span className="text-sm font-medium">Avg. Price</span>
                </div>
                <div className="text-2xl font-bold text-foreground mt-1">₱44/kg</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">Active Farmers</span>
                </div>
                <div className="text-2xl font-bold text-foreground mt-1">89</div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-chart-3" />
                  <span className="text-sm font-medium">Avg. Freshness</span>
                </div>
                <div className="text-2xl font-bold text-foreground mt-1">2.1 days</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayedListings.map((listing) => (
            <Card key={listing.id} className="border-border hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={listing.images[0] || "/placeholder.svg"}
                  alt={`${listing.seaweedType} from ${listing.farmer}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-3 left-3">
                  <Badge
                    variant={listing.quality === "Grade A+" ? "default" : "secondary"}
                    className={
                      listing.quality === "Grade A+"
                        ? "bg-primary text-primary-foreground"
                        : listing.quality === "Grade A"
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground"
                    }
                  >
                    {listing.quality}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  {listing.verified && (
                    <Badge variant="secondary" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
                      Verified
                    </Badge>
                  )}
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{listing.seaweedType}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {listing.location}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{listing.price}</div>
                    <div className="text-sm text-muted-foreground">{listing.quantity}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Farmer:</span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{listing.farmer}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      <span className="text-xs">{listing.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Harvest Date:</span>
                    <div className="font-medium">{new Date(listing.harvestDate).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Freshness:</span>
                    <div className="font-medium text-primary">{listing.freshness}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Moisture:</span>
                    <div className="font-medium">{listing.moistureContent}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Method:</span>
                    <div className="font-medium">{listing.dryingMethod}</div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">{listing.description}</p>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Order Now
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                  <span>{listing.completedOrders} completed orders</span>
                  <div className="flex items-center gap-1">
                    <Truck className="h-3 w-3" />
                    <span>Free delivery available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {visibleListings < filteredListings.length && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="bg-transparent" onClick={handleLoadMore}>
              Load More Listings ({filteredListings.length - visibleListings} remaining)
            </Button>
          </div>
        )}

        {filteredListings.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground">No listings match your current filters.</p>
            <Button onClick={handleResetFilters} variant="outline" className="mt-4 bg-transparent">
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
