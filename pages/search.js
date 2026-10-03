"use client";

import { useState } from "react";
import { Search as SearchIcon, SlidersHorizontal, Send } from "lucide-react";
import ConnectWallet from "@/components/connectWallet";

const Search = () => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        const trimmed = query.trim();
        if (!trimmed) return;

        // TODO: ganti dengan logika pencarianmu (fetch API, router.push, dll)
        console.log("Searching for:", trimmed);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
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
                                onKeyDown={handleKeyDown}
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

                        <button
                            type="button"
                            aria-label="Send search"
                            onClick={handleSearch}
                            disabled={!query.trim()}
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition shrink-0"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <ConnectWallet />
        </div>
    );
};

export default Search;