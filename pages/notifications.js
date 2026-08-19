import Image from "next/image"
import Link from "next/link"

import ConnectWallet from "@/components/connectWallet"

const Notifications = () => {
    return (
        <div className="flex flex-col gap-2 md:flex-row">
            <div className="w-full md:w-2/3 border-0 md:border-r px-2">
                <div className="mt-4 md:mt-8">
                    <div className="flex items-center gap-2">
                        <Image src="/icon/notifications.png" alt="Notifications" width={20} height={20} />
                        <h1 className="text-lg font-semibold">Notifications</h1>
                    </div>
                    <hr className="border-gray-300 mt-4" />

                    <div className="mt-4 flex flex-col gap-3">
                        <Link href="/fauzanchenko" className="flex gap-2 items-center py-1 px-2">
                            {/* <Image /> */}
                            <div className="bg-blue-300 rounded-4xl p-4"></div>

                            {/* user info */}
                            <div className="text-xs flex justify-between items-center w-full">
                                <div>
                                        <h2><span className="font-semibold">fauzanchenko</span> liked your post</h2>
                                    <p className="opacity-50">Now</p>
                                </div>
                                <div className="w-[38px] h-[38px] rounded-md bg-blue-300"></div>
                            </div>
                        </Link>
                        <Link href="/fauzanchenko" className="flex gap-2 items-center py-1 px-2">
                            {/* <Image /> */}
                            <div className="bg-blue-300 rounded-4xl p-4"></div>

                            {/* user info */}
                            <div className="text-xs flex justify-between items-center w-full">
                                <div>
                                        <h2><span className="font-semibold">fauzanchenko</span> liked your post</h2>
                                    <p className="opacity-50">Now</p>
                                </div>
                                <div className="w-[38px] h-[38px] rounded-md bg-blue-300"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <ConnectWallet />
        </div>
    )
}

export default Notifications