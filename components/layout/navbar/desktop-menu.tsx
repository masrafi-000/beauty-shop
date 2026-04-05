"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Skincare",
    href: "/shop/skincare",
    description: "Serums, moisturizers, and cleansers for every skin type.",
  },
  {
    title: "Makeup",
    href: "/shop/makeup",
    description: "Elevate your look with our professional makeup collection.",
  },
  {
    title: "Fragrance",
    href: "/shop/fragrance",
    description: "Captivating scents that leave a lasting impression.",
  },
  {
    title: "Bath & Body",
    href: "/shop/bath-body",
    description: "Indulgent treats for your daily relaxation routine.",
  },
]

export function DesktopMenu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-pink-50 dark:hover:bg-pink-950/20 data-[state=open]:bg-pink-50 dark:data-[state=open]:bg-pink-950/20">
            Shop By Category
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
            <Link href="/new-arrivals">
              New Arrivals
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
            <Link href="/best-sellers">
              Best Sellers
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-rose-500 font-semibold uppercase tracking-wider")}>
            <Link href="/sale">
              Sale
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-50 dark:hover:bg-pink-950/20 hover:text-pink-600 focus:bg-pink-50 focus:text-pink-600",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
