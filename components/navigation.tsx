import { Home, Bell, ShoppingBag, MessageSquare, Wallet, Star, User, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: ShoppingBag, label: "Shop", href: "/shop" },
  { icon: MessageSquare, label: "Conversation", href: "/conversation" },
  { icon: Wallet, label: "Wallet", href: "/wallet" },
  { icon: Star, label: "Subscription", href: "/subscription" },
  { icon: User, label: "My Profile", href: "/profile" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Navigation({ className }: { className?: string }) {
  return (
    <nav className={`space-y-6 ${className}`}>
      <div className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-100"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </div>
      <div className="pt-6 border-t">
        <Link
          href="/logout"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-100"
        >
          <LogOut className="h-5 w-5" />
          Log out
        </Link>
      </div>
    </nav>
  )
}

