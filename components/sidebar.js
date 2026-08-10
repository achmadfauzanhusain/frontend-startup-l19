import Link from 'next/link'
import Image from 'next/image'

const menuItems = [
  { label: 'Home', icon: '/icon/homepage.png', href: '/' },
  { label: 'Post', icon: '/icon/add.png', href: '/post/create' },
  { label: 'Server', icon: '/icon/community.png', href: '/server' },
  { label: 'Notifications', icon: '/icon/notifications.png', href: '/notifications' },
  { label: 'Wallet', icon: '/icon/wallet.png', href: `/your-wallet` },
]

const Sidebar = () => {
  return (
    <>
      <div
        className="
          hidden md:block
          fixed top-[73px] left-0 z-40
          w-1/4 h-[calc(100vh-73px)]
          border-r bg-white px-1 lg:px-6
          text-sm
        "
      >
        <div className="flex flex-col mt-4">
          <Link href="/" className="hover:bg-gray-200/50 py-3 px-3 rounded-sm flex items-center">
            <Image src="/icon/homepage.png" alt="Home" width={24} height={24} className="inline-block mr-2" />
            Home
          </Link>
          <Link href="/post/create" className="hover:bg-gray-200/50 py-3 px-3 rounded-sm flex items-center">
            <Image src="/icon/add.png" alt="Create Post" width={24} height={24} className="inline-block mr-2" />
            Create Post
          </Link>
          <Link href="/server" className="hover:bg-gray-200/50 py-3 px-3 rounded-sm flex items-center">
            <Image src="/icon/community.png" alt="Start Server" width={24} height={24} className="inline-block mr-2" />
            Your Server
          </Link>
          <Link href="/notifications" className="hover:bg-gray-200/50 py-3 px-3 rounded-sm flex items-center">
            <Image src="/icon/notifications.png" alt="Notifications" width={24} height={24} className="inline-block mr-2" />
            Notifications
          </Link>
          <Link href="/your-wallet" className="hover:bg-gray-200/50 py-3 px-3 rounded-sm flex items-center">
            <Image src="/icon/wallet.png" alt="Wallet" width={24} height={24} className="inline-block mr-2" />
            Wallet
          </Link>
        </div>
      </div>

      {/* bottom bar */}
      <div
        className="
          md:hidden
          fixed bottom-0 left-0 right-0 z-40
          h-16 bg-white border-t border-gray-300
          flex items-center justify-around
        "
      >
        {menuItems.map((item) => (
          <Link
            href="/"
            key={item.label}
            className="flex flex-col items-center justify-center text-xs text-gray-600"
          >
            <Image src={item.icon} alt={item.label} width={24} height={24} />
            <p className="opacity-75 text-[10px]">{item.label}</p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Sidebar