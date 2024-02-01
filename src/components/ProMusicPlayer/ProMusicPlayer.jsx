import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export default function ProMusicPlayer() {
    return (
        <section className='container bg-[#2C2F33] text-[#DFDFDF] h-[500px]'>
            <div className='flex items-center gap-2 h-12'>
                <div className='flex items-center justify-center h-full neoM-buttons flex-1'><IoReorderThreeOutline className="size-8" /></div>
                <div className='flex items-center gap-2 justify-between h-full px-3 flex-[5] neoM-bg ' >
                    <input className='bg-transparent outline-none placeholder:text-red-400  text-red-400' placeholder='Search songs...' type="text" />
                    <div className='cursor-pointer'><CiSearch className='size-6' /></div>
                </div>
            </div>
        </section>
    )
}
