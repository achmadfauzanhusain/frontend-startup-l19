import Link from "next/link";
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

                <div className="mt-2">
                    <div className="grid grid-cols-3 gap-1 md:gap-2">
                        <div className="w-full aspect-square bg-blue-100">

                        </div>
                        <div className="w-full aspect-square bg-blue-100">

                        </div>
                        <div className="w-full aspect-square bg-blue-100">

                        </div>
                    </div>
                </div>
            </div>

            <ConnectWallet />
        </div>
    )
}

export default Wallet