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

          <div className="mt-4">
            <div>
              {/* header */}
              <div>
                {/* <Image /> */}

                <div className="text-xs">
                  <h2 className="font-semibold">fauzanchenko</h2>
                  <p className="opacity-50">2 days ago</p>
                  <p className="mt-1">new artisan keycaps</p>
                </div>
              </div>

              {/* content */}
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MainContent