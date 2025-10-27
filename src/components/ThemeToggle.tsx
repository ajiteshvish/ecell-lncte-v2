import { Moon, Sun, Sunrise } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-10 w-10 rounded-xl glass-effect hover:scale-110 transition-all duration-500 group overflow-hidden"
      title={isDark ? "Switch to Sunrise Theme" : "Switch to Midnight Theme"}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Sun icon for light theme */}
      <Sunrise className={`h-5 w-5 transition-all duration-500 ${
        isDark 
          ? 'rotate-90 scale-0 opacity-0' 
          : 'rotate-0 scale-100 opacity-100 text-amber-500'
      }`} />
      
      {/* Moon icon for dark theme */}
      <Moon className={`absolute h-5 w-5 transition-all duration-500 ${
        isDark 
          ? 'rotate-0 scale-100 opacity-100 text-blue-400' 
          : '-rotate-90 scale-0 opacity-0'
      }`} />
      
      <span className="sr-only">
        {isDark ? "Switch to Sunrise Innovation theme" : "Switch to Midnight Innovation theme"}
      </span>
    </Button>
  )
}