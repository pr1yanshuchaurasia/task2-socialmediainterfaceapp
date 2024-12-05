import { Header } from "./components/header"
import { Navigation } from "./components/navigation"
import { Sidebar } from './components/sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto grid grid-cols-12 gap-6 px-4 py-6">
        <Navigation className="col-span-2" />
        <main className="col-span-7">{children}</main>
        <Sidebar className="col-span-3" />
      </div>
    </div>
  )
}

