"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"

const SearchBox = () => {
    const [input, setInput] = useState("");
    const router = useRouter();
    const handelSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;
        router.push(`/search?term=${input}`);
    }
    return (
        <form
            onSubmit={handelSearch}
            className="max-w-6xl mx-auto flex justify-between items-center px-5">
            <input type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search Keywords..."
                className="w-full flex-1 rounded-sm h-14 placeholder-gray-500 outline-none bg-transparent dark:text-orange-400 " />
            <button disabled={!input}
                className="text-orange-400 disabled:text-gray-400"
                type="submit">Search</button>
        </form>
    )
}

export default SearchBox