"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function AnnouncementBar() {
  return (
    <motion.div 
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      className="w-full bg-pink-500 py-2.5 text-white overflow-hidden relative z-60"
    >
      <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em]">
        <Sparkles className="h-3 w-3 fill-white" />
        <span className="hidden sm:inline">Complimentary shipping on orders over $50</span>
        <span className="sm:hidden">Free shipping over $50</span>
        <Sparkles className="h-3 w-3 fill-white" />
        <div className="absolute right-4 hidden md:flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
           <span>Offer Ends Soon</span>
        </div>
      </div>
    </motion.div>
  )
}
