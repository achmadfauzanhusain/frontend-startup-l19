import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import ConnectWallet from "@/components/connectWallet";

const Wallet = () => {
    const router = useRouter()
    const { hashAddress } = router.query

    const truncateAddress = (address, start = 6, end = 12) => {
        if (!address) return "";
        if (address.length <= start + end) return address;
        return `${address.slice(0, start)}...${address.slice(-end)}`;
    }
    return (
        <div className="flex flex-col gap-2 md:flex-row pb-12">
            <div className="w-full md:w-2/3 border-0 md:border-r border-gray-200 px-4 md:px-6">
                <div className="flex flex-col sm:flex-row gap-5 mt-8">
                    <div className="flex justify-center sm:block">
                        <div className="relative w-24 h-24 sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
                            <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">FC</span>
                        </div>
                    </div>

                    <div className="w-full text-center sm:text-left">
                        <h2 className="text-base font-semibold md:text-lg">fauzanchenko</h2>

                        <div className="mt-2 inline-flex sm:flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1.5 max-w-full">
                            <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-4 4a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l4-4a4 4 0 015.656 5.656l-1.5 1.5" />
                            </svg>
                            <span className="text-xs font-mono text-gray-600 truncate">
                                {hashAddress ? truncateAddress(hashAddress) : "Not available"}
                            </span>
                        </div>

                        <div className="mt-4 flex gap-2 justify-center sm:justify-start">
                            <button
                                href="/edit-profile"
                                className="text-xs font-medium py-2 px-6 sm:px-4 sm:w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-center transition-colors"
                            >
                                follow
                            </button>
                            <Link
                                href="/edit-profile"
                                className="text-xs font-medium py-2 px-6 sm:px-4 sm:w-full rounded-lg bg-gray-200 hover:bg-gray-300 text-center transition-colors"
                            >
                                Edit profile
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-4 text-center sm:text-left">
                    <p className="text-xs md:text-sm text-gray-500">supporting high tech & high testosterone</p>
                    
                    <div className="mt-2 flex gap-2 items-center justify-center sm:justify-start">
                        <Link href="https://github.com/achmadfauzanhusain" className="text-xs md:text-sm text-blue-500 hover:text-blue-700">
                            github
                        </Link>

                        <Link href="https://fauzanhusain.com" className="text-xs md:text-sm text-blue-500 hover:text-blue-700">
                            portfolio
                        </Link>

                        <Link href="https://fauzanhusain.com" className="text-xs md:text-sm text-blue-500 hover:text-blue-700">
                            bitcoin
                        </Link>
                    </div>
                </div>
                <hr className="mt-4 text-gray-300" />

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
                                <button className="cursor-pointer">
                                <Image src="/icon/like.png" alt="Like" width={20} height={20} />
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
                    </div>
                </div>
            </div>

            <ConnectWallet />
        </div>
    )
}

export default Wallet