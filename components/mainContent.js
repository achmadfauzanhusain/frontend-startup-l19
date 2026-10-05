import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { getAllPosts, toggleLikePost, checkLikePost } from "@/services/post"

// Ikon hati: merah penuh kalau sudah di-like, outline kalau belum
const HeartIcon = ({ filled, size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? "#ef4444" : "none"}
    stroke={filled ? "#ef4444" : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const MainContent = () => {
  const [posts, setPosts] = useState([])
  const [likedPosts, setLikedPosts] = useState({})

  const truncateAddress = (address, start = 6, end = 12) => {
    if (!address) return ""
    if (address.length <= start + end) return address
    return `${address.slice(0, start)}...${address.slice(-end)}`
  }
  const fetchLikeStatuses = async (postList) => {
    const results = await Promise.all(
      postList.map(async (post) => {
        const res = await checkLikePost(post.id)
        return [post.id, res ? Boolean(res.data) : false]
      })
    )
    setLikedPosts(Object.fromEntries(results))
  }

  const fetchPosts = async () => {
    const response = await getAllPosts()
    if (!response) {
      toast.error("Failed to fetch posts")
    } else {
      setPosts(response.data)
      fetchLikeStatuses(response.data)
    }
  }

  const handlerLike = async (postId) => {
    const response = await toggleLikePost(postId)
    if (!response) {
      toast.error("Failed to like post")
    } else {
      fetchPosts() // refresh jumlah like + status like
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "-"

    let date
    if (typeof timestamp === "string" || typeof timestamp === "number") {
      date = new Date(timestamp)
    } else if (timestamp.seconds) {
      date = new Date(timestamp.seconds * 1000)
    } else {
      return "-"
    }

    return date.toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="w-full md:w-2/3 border-0 md:border-r px-2">
      <div className="mt-2 md:mt-4">
        <Link
          href="/post/create"
          className="flex flex-col gap-2 py-2 md:py-4 px-2 md:px-4 bg-gray-100 text-sm rounded-xl"
        >
          <div className="flex justify-between w-full">
            <div className="opacity-50 flex gap-2 items-center">
              <Image src="/icon/write.png" alt="Create Post" width={20} height={20} />
              <p>Say something...</p>
            </div>

            <p className="bg-[#4272FC] text-white py-1 px-4 rounded-2xl">Post!</p>
          </div>

          <div className="flex justify-between w-full">
            <div className="flex gap-3 items-center">
              <Image src="/icon/image.png" alt="Create Post" width={20} height={20} />
              <Image src="/icon/camera.png" alt="Create Post" width={20} height={20} />
            </div>
          </div>
        </Link>

        <div className="mt-4 flex flex-col gap-6">
          {posts?.map((post) => {
            const isLiked = Boolean(likedPosts[post.id])

            return (
              <div key={post.id} className="border-b border-gray-300 pb-6">
                {/* header */}
                <Link href={`/${post.user}`} className="flex gap-2 items-center">
                  {/* <Image /> */}
                  <div className="bg-blue-300 rounded-4xl p-4"></div>

                  {/* user info */}
                  <div className="text-xs">
                    <h2 className="font-semibold">
                      {post.displayName ? post.displayName : truncateAddress(post.user)}
                    </h2>
                    <p className="opacity-50">
                      {post.createdAt ? formatTimestamp(post.createdAt) : "-"}
                    </p>
                    <p className="mt-1">{post.caption}</p>
                  </div>
                </Link>

                {/* content */}
                {post.image ? (
                  <div className="mt-2 flex flex-col md:flex-row">
                    <div className="flex justify-between flex-row md:flex-col py-3 md:px-3 gap-6 order-2 md:order-1">
                      <div className="flex flex-row md:flex-col gap-6">
                        <button
                          className="cursor-pointer flex md:flex-col items-center gap-1"
                          onClick={() => handlerLike(post.id)}
                          aria-label={isLiked ? "Unlike" : "Like"}
                          aria-pressed={isLiked}
                        >
                          <HeartIcon filled={isLiked} size={20} />
                          <p className="text-[10px]">{post.likesCount}</p>
                        </button>
                        <button className="cursor-pointer">
                          <Image src="/icon/comment.png" alt="Comment" width={20} height={20} />
                        </button>
                        <Link href={`/reward/123`} className="cursor-pointer">
                          <Image src="/icon/reward.png" alt="Reward This Post" width={25} height={25} />
                        </Link>
                      </div>

                      <button className="cursor-pointer">
                        <Image src="/icon/share.png" alt="Share" width={20} height={20} />
                      </button>
                    </div>
                    <div className="bg-red-200 w-full h-[280px] sm:h-[375px] md:h-[300px] lg:h-[375px] md:w-[300px] lg:w-[375px] order-1 md:order-2"></div>
                  </div>
                ) : (
                  <div className="mt-2">
                    <div className="flex justify-between py-1 md:px-2 gap-6">
                      <div className="flex gap-6">
                        <button
                          className="cursor-pointer flex items-center gap-1"
                          onClick={() => handlerLike(post.id)}
                          aria-label={isLiked ? "Unlike" : "Like"}
                          aria-pressed={isLiked}
                        >
                          <HeartIcon filled={isLiked} size={15} />
                          <p className="text-[10px]">{post.likesCount}</p>
                        </button>
                        <button className="cursor-pointer flex items-center gap-1">
                          <Image src="/icon/comment.png" alt="Comment" width={15} height={15} />
                          <p className="text-[10px]">456</p>
                        </button>
                        <Link href={`/reward/123`} className="cursor-pointer">
                          <Image src="/icon/reward.png" alt="Reward This Post" width={20} height={20} />
                        </Link>
                      </div>

                      <button className="cursor-pointer">
                        <Image src="/icon/share.png" alt="Share" width={15} height={15} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MainContent