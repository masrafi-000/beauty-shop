"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

export function BrandStory() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [1500, 2500], [0, -100])

  return (
    <section className="container mx-auto px-4 py-24 md:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Story Content */}
        <div className="space-y-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.3em] text-pink-600 dark:text-pink-400">
             <Sparkles className="h-3 w-3 fill-current" />
             Our Philosophy
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight max-w-lg">
             The Science of <br />
             <span className="text-gradient">Natural Radiance</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-sans leading-relaxed opacity-90 max-w-xl">
            <p>
              &quot;True beauty isn&apos;t about masking; it&apos;s about revealing. We spent three years in our laboratory refining the perfect botanical-to-clinical ratio.&quot;
            </p>
            <p className="not-italic text-base md:text-lg">
              Lumière was founded on the belief that your skincare should work as hard as you do. Our formulas are ethically sourced, 100% vegan, and designed to provide long-lasting hydration with a lightweight boutique-makeup finish.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-linear-to-r from-pink-500 to-rose-400 border-none hover:from-pink-600 shadow-lg shadow-pink-500/20 text-white">
              <Link href="/about" className="flex items-center gap-2">
                Discover the Laboratory <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex -space-x-3">
               {[1, 2, 3].map((_, i) => (
                 <div key={i} className="relative h-10 w-10 rounded-full border-2 border-white dark:border-black overflow-hidden shadow-sm">
                   <Image 
                     src={`https://i.pravatar.cc/100?u=${i}`} 
                     alt="User" 
                     fill
                     className="object-cover"
                   />
                 </div>
               ))}
               <div className="flex items-center pl-6 text-xs font-bold text-muted-foreground tracking-wider">
                 +12k Glowing Reviews
               </div>
            </div>
          </div>
        </div>

        {/* Story Visuals */}
        <div className="relative order-1 lg:order-2">
           <motion.div 
             style={{ y }}
             className="relative aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl border border-pink-50 dark:border-pink-900/10 group"
           >
              <Image 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800" 
                alt="Brand Story Visual" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent opacity-80" />
           </motion.div>
           
           {/* Floating Decorative Card */}
           <motion.div 
             initial={{ x: 20, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             className="absolute -bottom-10 -left-10 md:bottom-20 md:-left-20 glass-card p-6 md:p-8 rounded-[2rem] max-w-[200px] md:max-w-[280px] shadow-2xl border-white/20"
           >
              <h4 className="text-lg md:text-xl font-serif text-pink-600 dark:text-pink-400 mb-2">Clean Formulations</h4>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                 Paraben-free, sulfate-free, and always phthalate-free. We believe in transparency at every step.
              </p>
           </motion.div>
        </div>
      </div>
    </section>
  )
}
