"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ArrowLeft, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const pathMap: Record<string, string> = {
  "/": "Home",
  "/dashboard": "Dashboard",
  "/marketplace": "Marketplace",
  "/quality-grading": "Quality Grading",
  "/quality-grading/history": "Quality History",
  "/quality-grading/new-assessment": "New Assessment",
  "/pricing": "Dynamic Pricing",
  "/pricing/market-alerts": "Market Alerts",
  "/pricing/set-target": "Set Price Target",
  "/traceability": "Traceability",
  "/dashboard/water-conditions": "Water Conditions",
  "/dashboard/schedule-harvest": "Schedule Harvest",
}

export function SharedHeader() {
  const pathname = usePathname()
  const router = useRouter()

  const pathSegments = pathname.split("/").filter(Boolean)
  const showBackButton = pathname !== "/" && pathname !== "/dashboard"

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      // Use browser's back functionality if available
      router.back()
    } else {
      // Fallback to parent path logic
      const pathParts = pathname.split("/").filter(Boolean)

      if (pathParts.length <= 1) {
        // If at root level page, go to home
        router.push("/")
      } else {
        // Go back one level in the path hierarchy
        const parentPath = "/" + pathParts.slice(0, -1).join("/")
        router.push(parentPath)
      }
    }
  }

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Button variant="ghost" size="sm" onClick={handleBack} className="text-slate-600 hover:text-slate-900">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
            )}

            <Link href="/" className="flex items-center gap-2">
              <Waves className="h-6 w-6 text-emerald-600" />
              <span className="font-bold text-xl text-slate-900">SeaTrace</span>
            </Link>
          </div>

          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {pathSegments.map((segment, index) => {
                const path = "/" + pathSegments.slice(0, index + 1).join("/")
                const isLast = index === pathSegments.length - 1
                const title = pathMap[path] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")

                return (
                  <div key={path} className="flex items-center">
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage>{title}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link href={path}>{title}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                )
              })}
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-2">
            {pathname !== "/marketplace" && (
              <Button asChild variant="ghost" size="sm">
                <Link href="/marketplace">Marketplace</Link>
              </Button>
            )}
            {pathname !== "/dashboard" && (
              <Button asChild variant="outline" size="sm">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
