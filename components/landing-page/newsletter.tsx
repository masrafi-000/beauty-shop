"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Mail, Sparkles } from "lucide-react"

export function Newsletter() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative overflow-hidden glass-card rounded-[3rem] p-12 md:p-24 text-center border-white/20 dark:border-pink-900/10 shadow-2xl"
      >
        {/* Background Decorative Rings */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100/30 dark:bg-pink-900/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-100/20 dark:bg-green-900/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl -z-10" />

        <div className="max-w-2xl mx-auto space-y-8">
           <div className="flex flex-col items-center gap-4">
             <div className="h-14 w-14 rounded-full bg-pink-50 dark:bg-pink-950/20 flex items-center justify-center text-pink-600 dark:text-pink-400">
               <Mail className="h-6 w-6" />
             </div>
             <div className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.3em] text-pink-600 dark:text-pink-400">
               <Sparkles className="h-3 w-3 fill-current" />
               Join The Inner Circle
             </div>
           </div>

           <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-serif text-foreground tracking-tight leading-tight">
                Unlock 15% Off Your <br />
                <span className="text-gradient">First Ritual</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light max-w-md mx-auto leading-relaxed">
                Be the first to discover new collection drops, exclusive rituals, and early access events.
              </p>
           </div>

           <form className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="h-16 px-8 text-lg rounded-full border-pink-100 dark:border-pink-900/20 bg-white/50 dark:bg-black/20 focus:ring-pink-500/20 max-w-sm transition-all focus:scale-[1.02] shadow-sm font-serif"
              />
              <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-pink-600 hover:bg-pink-700 text-white shadow-xl shadow-pink-500/20 border-none transition-all active:scale-95">
                 Sign Up
              </Button>
           </form>

           <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground opacity-60">
              Personalized beauty updates. No spam, ever.
           </p>
        </div>
      </motion.div>
    </section>
  )
}
