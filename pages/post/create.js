import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPost } from "@/services/post";
import ConnectWallet from "@/components/connectWallet";
import { toast } from "react-toastify";

const CreatePost = () => {
    const [caption, setCaption] = useState("");

    const handleCreatePost = async() => {
      const data = { caption }

      if(!data.caption) {
        toast.error("Caption is required")
      } else {
        const res = await createPost(data)
        if(!res) {
          toast.error(res.message)
        } else {
          toast.success("Post created successfully")
          setCaption("")
        }
      }
    }
    return (
    <div className="flex flex-col gap-2 md:flex-row">
      {/* post create */}
      <div className="w-full md:w-2/3 border-0 md:border-r px-2">
        <div className="mt-2 md:mt-4">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="bg-gray-100 w-full placeholder:text-sm focus:outline-none py-4 px-4 rounded-xl"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          <button onClick={handleCreatePost} className="bg-[#4272FC] mt-5 w-full cursor-pointer text-white py-3 px-4 rounded-lg hover:bg-blue-500 flex justify-center items-center text-xs md:text-sm gap-3">
            <Image src="/icon/add_white.png" alt="Create Post" width={20} height={20} />
            Create Post
          </button>
        </div>
        <hr className="mt-4 text-gray-400" />

        {/* example content / prototype */}
        <div className="mt-8 flex flex-col gap-6 opacity-75">
          <div className="border-b border-gray-300 pb-6">
            {/* header */}
            <Link href="/fauzanchenko" className="flex gap-2 items-center">
                {/* <Image /> */}
                <div className="bg-blue-300 rounded-4xl p-4"></div>

                {/* user info */}
                <div className="text-xs">
                  <h2 className="font-semibold">fauzanchenko</h2>
                  <p className="opacity-50">Now</p>
                  <p className="mt-1">-</p>
                </div>
            </Link>

            {/* content */}
            {/* <div className="mt-2 flex flex-col md:flex-row">
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
                <div className="bg-gray-200 h-[375px] w-[375px] order-1 md:order-2"></div>
            </div> */}
          </div>
        </div>
      </div>

      {/* connect wallet */}
      <ConnectWallet />
    </div>
    )
}

export default CreatePost