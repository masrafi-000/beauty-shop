"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const products = [
  { id: 1, name: "Divine Glow Elixir", price: 78, category: "Serums", rating: 4.9, reviews: 124, image: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Satin Silk Cream", price: 92, category: "Moisturizers", rating: 4.8, reviews: 89, image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbb4c7a?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Rose Aura Balm", price: 45, category: "Lip Care", rating: 5.0, reviews: 342, image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Midnight Recovery Oil", price: 84, category: "Night Care", rating: 4.7, reviews: 56, image: "https://images.unsplash.com/photo-1608247764146-d73833f2c9b6?auto=format&fit=crop&q=80&w=600" },
]

export function ProductGrid() {
  return (
    <section className="bg-gray-50/50 dark:bg-black/40 py-24 md:py-32 border-y border-pink-50 dark:border-pink-900/10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground tracking-tight">
             Curated <span className="text-gradient">Best Sellers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
             Explore the most loved essentials that have become staples in the Lumière community.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {products.map((product) => (
             <motion.article 
               key={product.id}
               whileHover={{ y: -10 }}
               className="group glass-card overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10"
             >
               <div className="relative aspect-4/5 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                     <Badge className="bg-white/90 dark:bg-black/80 text-pink-600 dark:text-pink-400 font-bold text-[10px] uppercase tracking-wider backdrop-blur-md border-none px-3 py-1">
                        Best Seller
                     </Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-white/90 dark:bg-black/80 backdrop-blur-md border-none shadow-lg text-pink-500">
                        <Heart className="h-5 w-5" />
                     </Button>
                  </div>
               </div>

               <div className="p-6 space-y-3">
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
                    {product.category}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-serif text-foreground leading-snug">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-pink-400 text-pink-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-[10px] text-muted-foreground font-bold">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                     <span className="text-lg font-bold">${product.price}</span>
                     <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 hover:bg-pink-100">
                        <ShoppingBag className="h-5 w-5" />
                     </Button>
                  </div>
               </div>
             </motion.article>
           ))}
        </div>
      </div>
    </section>
  )
}
