"use client"

import Link from "next/link"
import { Heart, ShoppingBag, User } from "lucide-react"
import { useCartStore } from "@/store/use-cart-store"
import { useWishlistStore } from "@/store/use-wishlist-store"
import { useAuthStore } from "@/store/use-auth-store"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/custom/theme-switch-button"
import { motion } from "framer-motion"

export function ActionIcons() {
  const cartItemCount = useCartStore((state) => state.getTotalItems())
  const wishlistCount = useWishlistStore((state) => state.items.length)
  const { user, isAuthenticated, clearAuth } = useAuthStore()

  return (
    <div className="flex items-center gap-1 md:gap-3">
      {/* Search - Potential addition, keeping layout clean for now */}

      {/* Wishlist */}
      <Link href="/wishlist" className="hidden lg:flex">
        <Button variant="ghost" size="icon" className="relative group hover:text-pink-600 transition-colors">
          <Heart className="h-5 w-5 group-hover:fill-pink-600 transition-all" />
          {wishlistCount > 0 && (
            <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               className="absolute -top-1 -right-1"
            >
              <Badge variant="destructive" className="h-4 min-w-[16px] px-1 text-[10px] flex items-center justify-center bg-rose-500 border-none">
                {wishlistCount}
              </Badge>
            </motion.div>
          )}
        </Button>
      </Link>

      {/* Cart */}
      <Link href="/cart">
        <Button variant="ghost" size="icon" className="relative group hover:text-pink-600 transition-colors">
          <ShoppingBag className="h-5 w-5" />
          {cartItemCount > 0 && (
            <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               className="absolute -top-1 -right-1"
            >
              <Badge className="h-4 min-w-[16px] px-1 text-[10px] flex items-center justify-center bg-pink-500 hover:bg-pink-600 border-none">
                {cartItemCount}
              </Badge>
            </motion.div>
          )}
        </Button>
      </Link>

      {/* Theme Toggle - Keep visible and accessible */}
      <ModeToggle />

      {/* User Profile - Hidden on mobile, moved to drawer */}
      <div className="hidden lg:flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8 ring-2 ring-transparent hover:ring-pink-200 transition-all">
                <AvatarImage src={user?.image} />
                <AvatarFallback className="bg-pink-100 text-pink-600 font-bold uppercase">
                  {user?.name?.charAt(0) || <User className="h-4 w-4" />}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mt-2 p-2">
            <DropdownMenuLabel className="font-semibold text-sm">
              {isAuthenticated ? `Welcome back, ${user?.name}` : "My Account"}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {isAuthenticated ? (
              <>
                <DropdownMenuItem className="cursor-pointer py-2">Orders</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer py-2">Account Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={clearAuth} 
                  className="cursor-pointer py-2 text-rose-500 focus:text-rose-500 focus:bg-rose-50"
                >
                  Log out
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem className="cursor-pointer py-2">
                  <Link href="/login" className="w-full">Log in</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer py-2">
                   <Link href="/register" className="w-full">Register</Link>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
