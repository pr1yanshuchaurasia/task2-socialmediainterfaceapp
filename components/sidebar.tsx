import Image from 'next/image'
import { Heart } from 'lucide-react'

const users = [
  { name: "Thomas Edward", username: "@thewildwithyou", image: "/images/sidepost1.png" , avatar:'/images/sideprofile1.png'},
  { name: "Chris Doe", username: "@thewildwithyou", image: "/images/sidepost2.png" , avatar:'/images/sideprofile2.png' },
  { name: "Emilie Jones", username: "@thewildwithyou", image: "/images/sidepost3.png" , avatar:'/images/sideprofile3.png'},
  { name: "Jessica Williams", username: "@thewildwithyou", image: "/images/sidepost4.png" , avatar:'/images/sideprofile4.png'},
]

export  function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={`space-y-4 ${className}`}>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex space-x-2 mb-4">
          <button className="flex-1 py-2 px-4 bg-[#9DCDC0] text-white rounded-md">Artists</button>
          <button className="flex-1 py-2 px-4 bg-gray-100 text-gray-600 rounded-md">Photographers</button>
        </div>
        <div className="space-y-4">
          {users.map((user, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl">
              <Image
                src={user.image}
                alt={user.name}
                width={400}
                height={200}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div className="text-white">
                      <p className="font-medium leading-none">{user.name}</p>
                      <p className="text-sm text-gray-300">{user.username}</p>
                    </div>
                  </div>
                  <button className="rounded-full bg-white/20 p-1.5">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

