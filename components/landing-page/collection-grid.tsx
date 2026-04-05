"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const collections = [
  { 
    title: "The Skincare Edit", 
    description: "Results-driven serums and elixirs.", 
    href: "/shop/skincare", 
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    className: "md:col-span-2 md:row-span-2"
  },
  { 
    title: "Modern Makeup", 
    description: "High-pigment essentials.", 
    href: "/shop/makeup", 
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600",
    className: "md:col-span-1 md:row-span-1"
  },
  { 
    title: "Fragrance Libary", 
    description: "Captivate the room.", 
    href: "/shop/fragrance", 
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600",
    className: "md:col-span-1 md:row-span-1"
  },
  { 
    title: "Body Care", 
    description: "Daily self-reflection.", 
    href: "/shop/body", 
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=600",
    className: "md:col-span-2 md:row-span-1"
  }
]

export function CollectionGrid() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground tracking-tight">
             Shop By <span className="text-gradient">Collections</span>
          </h2>
          <p className="text-muted-foreground text-lg max-md font-light">
             From cult-favorites to new ritual essentials, discover the curated Lumière line.
          </p>
        </div>
        <Link href="/shop" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400 hover:gap-3 transition-all">
           See All Products <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {collections.map((col, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className={`group relative overflow-hidden rounded-3xl ${col.className} shadow-sm border border-pink-50 dark:border-pink-900/10 cursor-pointer`}
          >
            <Link href={col.href} className="absolute inset-0 z-10" />
            
            {/* Background Image */}
            <Image 
              src={col.image}
              alt={col.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent opacity-80" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 w-full z-20">
               <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-pink-400 mb-2">
                 Collection
               </div>
               <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:tracking-wider transition-all">
                  {col.title}
               </h3>
               <p className="text-sm text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-light">
                  {col.description}
               </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
