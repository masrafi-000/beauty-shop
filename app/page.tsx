import { Metadata } from "next"
import { AnnouncementBar } from "@/components/landing-page/announcement-bar"
import { HeroSection } from "@/components/landing-page/hero-section"
import { TrustBar } from "@/components/landing-page/trust-bar"
import { CollectionGrid } from "@/components/landing-page/collection-grid"
import { ProductGrid } from "@/components/landing-page/product-grid"
import { BrandStory } from "@/components/landing-page/brand-story"
import { Newsletter } from "@/components/landing-page/newsletter"

export const metadata: Metadata = {
  title: "Lumière Boutique | Luxury Skincare & Modern Makeup",
  description: "Discover the Aura Collection. High-performance serums and boutique makeup formulated for your natural radiance. Clean, vegan, and cruelty-free.",
  openGraph: {
    title: "Lumière Boutique | Luxury Beauty",
    description: "Your sanctuary for high-end skincare and modern cosmetics.",
    images: ["https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=1200"],
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Lumière Boutique",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=1200",
    "description": "High-performance skincare and boutique makeup.",
    "brand": {
      "@type": "Brand",
      "name": "Lumière"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main>
          {/* Section 1: Hero */}
          <HeroSection />

          {/* Section 2: Trust Signals */}
          <TrustBar />

          {/* Section 3: Shop by Collection (Bento) */}
          <CollectionGrid />

          {/* Section 4: Best Sellers (Grid) */}
          <ProductGrid />

          {/* Section 5: Editorial Story */}
          <BrandStory />

          {/* Section 6: Retention */}
          <Newsletter />
        </main>

        {/* Potential Footer addition later, currently using layout footer if any */}
    </div>
  )
}
