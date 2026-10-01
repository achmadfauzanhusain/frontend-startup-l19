"use client";

import { useState } from "react";
import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import ConnectWallet from "@/components/connectWallet";

const Search = () => {
    const [query, setQuery] = useState("");

    return(
        <div className="flex flex-col gap-2 md:flex-row">
            <div className="w-full md:w-2/3 border-0 md:border-r px-2">
                <div className="mt-4">
                    <div className="flex items-center gap-2">
                        <label className="flex flex-1 items-center gap-2 h-10 px-3 rounded-full bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 transition">
                            <SearchIcon className="w-4 h-4 text-black shrink-0" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Find ur Interest"
                                className="w-full bg-transparent outline-none text-sm placeholder:text-gray-400"
                            />
                        </label>

                        <button
                            type="button"
                            aria-label="Filter"
                            className="p-1.5 rounded-full hover:bg-gray-100 transition"
                        >
                            <SlidersHorizontal className="w-4 h-4 text-black" />
                        </button>
                    </div>
                </div>
            </div>

            <ConnectWallet />
        </div>
    )
}

export default Search