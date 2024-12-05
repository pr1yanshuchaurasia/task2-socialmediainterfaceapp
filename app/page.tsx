import { Header } from '../components/header'
import { Sidebar } from '@/components/sidebar'
import { Navigation } from '@/components/navigation'
import Feed from '@/components/Feed'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto grid grid-cols-12 gap-6 px-4 py-6">
        <Navigation className="col-span-2" />
        <Feed className="col-span-7" />
        <Sidebar className="col-span-3" />
      </div>
    </div>
  )
}

