import { Search } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold">LOGO</div>
        <div className="flex flex-1 items-center justify-center gap-4 px-12">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100 flex items-center gap-2">
            <span>Filters</span>
          </button>
        </div>
        <button className="bg-[#9DCDC0] hover:bg-[#8cbeb1] text-white px-4 py-2 rounded-md">
          Become a Seller
        </button>
      </div>
    </header>
  )
}

