import Link from "next/link"
import Image from "next/image"

const MainContent = () => {
    return (
      <div className="w-full md:w-2/3 border-0 md:border-r px-2">
        <div className="mt-2 md:mt-4">
          <Link href="/post/create" className="flex flex-col gap-2 py-2 md:py-4 px-2 md:px-4 bg-gray-100 text-sm rounded-xl">
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
            <div className="border-b border-gray-300 pb-6">
              {/* header */}
              <Link href="/fauzanchenko" className="flex gap-2 items-center">
                {/* <Image /> */}
                <div className="bg-blue-300 rounded-4xl p-4"></div>

                {/* user info */}
                <div className="text-xs">
                  <h2 className="font-semibold">fauzanchenko</h2>
                  <p className="opacity-50">2 days ago</p>
                  <p className="mt-1">new artisan keycaps</p>
                </div>
              </Link>

              {/* content */}
              <div className="mt-2 flex flex-col md:flex-row">
                <div className="flex justify-between flex-row md:flex-col py-3 md:px-3 gap-6 order-2 md:order-1">
                  <div className="flex flex-row md:flex-col gap-6">
                    <button>
                      <Image src="/icon/like.png" alt="Like" width={20} height={20} />
                    </button>
                    <button>
                      <Image src="/icon/comment.png" alt="Comment" width={20} height={20} />
                    </button>
                  </div>

                  <button>
                    <Image src="/icon/share.png" alt="Share" width={20} height={20} />
                  </button>
                </div>
                <div className="bg-red-200 h-[375px] w-[375px] order-1 md:order-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MainContent