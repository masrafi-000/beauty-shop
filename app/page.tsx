import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-5.5rem)]">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-200/30 dark:bg-pink-900/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-100/30 dark:bg-green-900/10 rounded-full blur-3xl -z-10 animate-float" />
        
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/30 border border-pink-100 dark:border-pink-900/30 mb-6 transition-all hover:scale-105 cursor-default">
            <Sparkles className="h-4 w-4 text-pink-500 fill-pink-500" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-pink-600 dark:text-pink-400">
              New Collection: Spring Aura 2026
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6 leading-tight">
            Reveal Your Natural <span className="text-gradient">Luminescence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Curated skincare and cosmetics designed to elevate your unique glow. 
            Science meets botanical luxury for a transformative beauty ritual.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-linear-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 shadow-xl shadow-pink-500/20 border-none transition-all hover:scale-105 active:scale-95">
              <Link href="/shop">Shop the Collection</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-pink-200 dark:border-pink-900/30 hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all hover:scale-105 active:scale-95">
              <Link href="/about">Our Philosophy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Layer / Features (Briefly) */}
      <section className="bg-white/50 dark:bg-black/20 backdrop-blur-sm border-t border-pink-50 dark:border-pink-900/10 py-12">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: "Cruelty Free", detail: "Ethical Sourcing" },
             { label: "Organic", detail: "Pure Botanicals" },
             { label: "Global Shipping", detail: "Fast Delivery" },
             { label: "Luxury Rewards", detail: "Join Membership" }
           ].map((item, i) => (
             <div key={i} className="text-center group">
               <div className="text-xs uppercase tracking-[0.2em] font-bold text-pink-600 dark:text-pink-400 mb-1">
                 {item.label}
               </div>
               <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-serif italic">
                 {item.detail}
               </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
