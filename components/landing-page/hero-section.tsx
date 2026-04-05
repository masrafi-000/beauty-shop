"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"

export function HeroSection() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-16">
      {/* Background Decorative Blur */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-linear-to-tr from-pink-100/50 via-green-100/30 to-rose-50/50 dark:from-pink-900/10 dark:via-green-900/5 dark:to-rose-900/10 rounded-full blur-[120px] -z-10" 
      />

      <div className="max-w-4xl space-y-10 animate-fade-up">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/40 dark:bg-black/20 backdrop-blur-md border border-pink-100 dark:border-pink-900/30 transition-all hover:scale-105 shadow-sm group cursor-default">
          <Sparkles className="h-4 w-4 text-pink-500 fill-pink-500 group-hover:animate-spin" />
          <span className="text-[11px] uppercase font-bold tracking-[0.3em] text-pink-600 dark:text-pink-400">
            Aura Collection: The Glow Reformulated
          </span>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-6 leading-[0.9] tracking-tight">
            The New <br />
            <span className="text-gradient">Aura Glow</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed opacity-90">
             High-performance skincare meets the artistry of high-fashion boutique makeup. <br className="hidden md:block" />
             Designed for longevity, formulated for radiance.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Button asChild size="lg" className="h-16 px-10 text-xl font-medium rounded-full bg-linear-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 shadow-2xl shadow-pink-500/30 border-none transition-all hover:scale-105 active:scale-95 text-white">
            <Link href="/shop" className="flex items-center gap-3">
              Shop The Drop
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-16 px-10 text-xl font-medium rounded-full border-pink-200 dark:border-pink-900/30 hover:bg-pink-50 dark:hover:bg-pink-950/20 backdrop-blur-sm transition-all hover:scale-105 active:scale-95">
            <Link href="/collections">View Campaigns</Link>
          </Button>
        </div>
      </div>

      {/* Floating Marketing Elements */}
      <div className="absolute top-20 right-10 hidden xl:block animate-float">
         <div className="glass-card p-4 rounded-2xl rotate-12 flex flex-col items-center">
            <span className="text-[9px] uppercase font-bold text-pink-500 mb-1">New Arrivals</span>
            <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center">🛍️</div>
         </div>
      </div>
      <div className="absolute bottom-20 left-10 hidden xl:block animate-float" style={{ animationDelay: '1s' }}>
         <div className="glass-card p-4 rounded-2xl -rotate-12 flex flex-col items-center">
            <span className="text-[9px] uppercase font-bold text-green-600 mb-1">Clean Beauty</span>
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">🌿</div>
         </div>
      </div>
    </section>
  )
}
