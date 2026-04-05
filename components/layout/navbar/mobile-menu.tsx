"use client"

import * as React from "react"
import Link from "next/link"
import { 
  ShoppingBag, 
  Heart, 
  Sparkles, 
  ChevronRight, 
  Settings, 
  Package, 
  LogOut,
  Droplets,
  Wind,
  Bath
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useAuthStore } from "@/store/use-auth-store"
import { useWishlistStore } from "@/store/use-wishlist-store"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const mobileLinks = [
  { label: "New Arrivals", href: "/new-arrivals", icon: Sparkles },
  { label: "Best Sellers", href: "/best-sellers", icon: Sparkles },
  { label: "Skincare", href: "/shop/skincare", icon: Droplets },
  { label: "Makeup", href: "/shop/makeup", icon: Wind },
  { label: "Fragrance", href: "/shop/fragrance", icon: Wind },
  { label: "Bath & Body", href: "/shop/bath-body", icon: Bath },
  { label: "Sale", href: "/sale", highlight: true },
]

// Custom Animated Hamburger Icon
const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  const lineVariants = {
    closed: { rotate: 0, y: 0, opacity: 1 },
    open: (custom: number) => ({
      rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
      y: custom === 1 ? 8 : custom === 3 ? -8 : 0,
      opacity: custom === 2 ? 0 : 1,
    }),
  }

  return (
    <div className="relative w-6 h-5 flex flex-col justify-between items-center z-50">
      {[1, 2, 3].map((i) => (
        <motion.span
          key={i}
          custom={i}
          variants={lineVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-full h-[2px] bg-foreground rounded-full origin-center"
        />
      ))}
    </div>
  )
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { isAuthenticated, user, clearAuth } = useAuthStore()
  const wishlistCount = useWishlistStore((state) => state.items.length)

  // Motion variants for staggered arrival
  const containerVariants = {
    open: {
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    closed: {
      transition: { 
        staggerChildren: 0.05, 
        staggerDirection: -1 
      }
    }
  }

  const itemVariants = {
    open: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        y: { stiffness: 1000, velocity: -100 } 
      } 
    },
    closed: { 
      y: 20, 
      opacity: 0, 
      transition: { 
        y: { stiffness: 1000 } 
      } 
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden hover:bg-pink-50 dark:hover:bg-pink-950/20"
        >
          <AnimatedHamburger isOpen={isOpen} />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-full sm:w-[380px] p-0 flex flex-col items-stretch border-l border-white/20 bg-white/80 dark:bg-black/80 backdrop-blur-3xl shadow-none"
      >
        <SheetHeader className="p-8 text-left border-b border-pink-100 dark:border-pink-900/10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <SheetTitle className="flex items-center gap-2 italic font-serif text-3xl text-pink-600 dark:text-pink-400">
               <Sparkles className="h-6 w-6 fill-current animate-pulse" />
               Lumière
            </SheetTitle>
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-muted-foreground mt-1">
              Boutique Experience
            </p>
          </motion.div>
        </SheetHeader>
        
        <ScrollArea className="flex-1 px-8 py-6">
          <motion.div 
            variants={containerVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="flex flex-col gap-8"
          >
             <motion.div variants={itemVariants}>
               <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4 font-sans">
                 Collections
               </h3>
               <nav className="flex flex-col space-y-1">
                 {mobileLinks.map((link) => (
                   <SheetClose asChild key={link.href}>
                     <Link 
                       href={link.href}
                       className={`group flex items-center justify-between py-3 rounded-xl px-3 -mx-3 transition-all duration-300 hover:bg-pink-50 dark:hover:bg-pink-950/20 ${
                         link.highlight ? 'text-rose-500 font-bold' : 'text-foreground hover:text-pink-600'
                       }`}
                     >
                       <div className="flex items-center gap-4">
                         <div className={`flex items-center justify-center h-10 w-10 rounded-full transition-colors ${link.highlight ? 'bg-rose-50 dark:bg-rose-950/20' : 'bg-gray-50 dark:bg-gray-900/50 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30'}`}>
                           {link.icon && <link.icon className={`h-5 w-5 ${link.highlight ? 'text-rose-500' : 'text-muted-foreground group-hover:text-pink-500'}`} />}
                         </div>
                         <span className="text-xl font-medium">{link.label}</span>
                       </div>
                       <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                     </Link>
                   </SheetClose>
                 ))}
               </nav>
             </motion.div>
             
             <motion.div variants={itemVariants}>
               <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4 font-sans">
                 Your Sanctuary
               </h3>
               <div className="flex flex-col space-y-1">
                 <SheetClose asChild>
                   <Link href="/wishlist" className="group flex items-center justify-between py-3 rounded-xl px-3 -mx-3 hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-50 dark:bg-gray-900/50 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30 transition-colors">
                          <Heart className="h-5 w-5 text-muted-foreground group-hover:text-pink-500 group-hover:fill-pink-500 transition-all" />
                        </div>
                        <span className="text-xl font-medium">Wishlist</span>
                      </div>
                      {wishlistCount > 0 && (
                        <Badge variant="secondary" className="bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400">
                          {wishlistCount}
                        </Badge>
                      )}
                   </Link>
                 </SheetClose>
                 <SheetClose asChild>
                   <Link href="/cart" className="group flex items-center justify-between py-3 rounded-xl px-3 -mx-3 hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-50 dark:bg-gray-900/50 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30 transition-colors">
                          <ShoppingBag className="h-5 w-5 text-muted-foreground group-hover:text-pink-500 transition-all" />
                        </div>
                        <span className="text-xl font-medium">Shopping Bag</span>
                      </div>
                   </Link>
                 </SheetClose>
               </div>
             </motion.div>
          </motion.div>
        </ScrollArea>
        
        <div className="p-8 mt-auto border-t border-pink-100 dark:border-pink-900/10 bg-white/30 dark:bg-white/5 backdrop-blur-sm">
          {isAuthenticated ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center gap-4">
                 <div className="h-14 w-14 rounded-full bg-linear-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white text-2xl font-bold uppercase ring-4 ring-white/50 dark:ring-white/10 shadow-lg">
                   {user?.name?.charAt(0) || "U"}
                 </div>
                 <div className="flex flex-col overflow-hidden">
                   <span className="font-serif italic text-2xl truncate leading-tight">{user?.name}</span>
                   <span className="text-xs text-muted-foreground truncate">{user?.email}</span>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-1">
                <SheetClose asChild>
                  <Button variant="outline" size="sm" className="justify-center gap-2 h-12 border-pink-100 dark:border-pink-900/20 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-950/20">
                    <Package className="h-4 w-4" />
                    Orders
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant="outline" size="sm" className="justify-center gap-2 h-12 border-pink-100 dark:border-pink-900/20 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-950/20">
                    <Settings className="h-4 w-4" />
                    Account
                  </Button>
                </SheetClose>
              </div>
              
              <Button 
                variant="ghost" 
                onClick={clearAuth}
                className="w-full justify-center gap-3 h-14 text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all rounded-xl"
              >
                <LogOut className="h-5 w-5" />
                Sign Out
              </Button>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <p className="text-sm text-muted-foreground text-center mb-1">Discover exclusive collections & beauty rewards.</p>
              <div className="flex gap-3">
                <SheetClose asChild>
                  <Button asChild variant="outline" className="flex-1 h-14 border-pink-200 dark:border-pink-900/20 rounded-xl">
                    <Link href="/login">Log in</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild className="flex-1 h-14 bg-linear-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white border-none shadow-xl shadow-pink-500/20 rounded-xl">
                    <Link href="/register">Sign up</Link>
                  </Button>
                </SheetClose>
              </div>
            </motion.div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
