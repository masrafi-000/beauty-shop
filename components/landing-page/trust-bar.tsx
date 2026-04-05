"use client"

import { ShieldCheck, Leaf, Truck, Heart } from "lucide-react"

const items = [
  { icon: Leaf, label: "Vegan & Clean", detail: "Formulated without toxins" },
  { icon: Heart, label: "Cruelty Free", detail: "No animal testing, ever" },
  { icon: Truck, label: "Global Shipping", detail: "Free over $50" },
  { icon: ShieldCheck, label: "100% Secure", detail: "Safeguarded checkout" },
]

export function TrustBar() {
  return (
    <section className="bg-white/50 dark:bg-black/20 backdrop-blur-sm border-y border-pink-100 dark:border-pink-900/10 py-12 md:py-16">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center group cursor-default">
            <div className="h-12 w-12 rounded-full bg-pink-50 dark:bg-pink-950/20 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4 transition-transform duration-300 group-hover:scale-110">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-pink-600 dark:text-pink-400 mb-1">
              {item.label}
            </h3>
            <p className="text-xs text-muted-foreground font-serif">
               {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
