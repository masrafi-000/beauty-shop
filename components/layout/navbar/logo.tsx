import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group transition-all">
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-tr from-pink-500 to-rose-400 text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
        <Sparkles className="w-5 h-5 animate-pulse" />
      </div>
      <div className="flex flex-col pt-1">
        <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 font-serif leading-none">
          Lumière
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-pink-500 dark:text-pink-400 mt-1">
          Beauty Shop
        </span>
      </div>
    </Link>
  )
}
