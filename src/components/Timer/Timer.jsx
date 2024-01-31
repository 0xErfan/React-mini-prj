import React, { useEffect, useRef, useState } from 'react'
import { CiStop1 } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { VscDebugStart } from "react-icons/vsc";

export default function Timer() {
    const [isPaused, setIsPaused] = useState(0)
    const [countDown, setCountsown] = useState({
        hour: 0,
        minute: 0,
        second: 0
    })

    const countDownStart = (status = "") => {
        if (isPaused) return;
        setIsPaused(1) 
        const interval = setInterval(() => {
            setCountsown(preve => ({ ...preve, second: preve.second + 1 }))
        }, 1000)
    }

    return (
        <section className='bg-gray-200 py-36'>
            <div className='max-w-[500px] m-auto w-full space-y-4 shadow-regular  rounded-md shadow-black p-4'>
                <div className='relative w-5/6 m-auto'>

                    <div className='circle'>
                        <p className='flex items-center size-full justify-center rounded-md text-4xl font-semibold p-2'>
                            <span className=' p-2 rounded-md bg-white tracking-wide'>{(countDown.hour).toString().padStart(2, 0)}:{(countDown.minute).toString().padStart(2, 0)}:{(countDown.second).toString().padStart(2, 0)}</span>
                        </p>
                        {/* <circle className='circle bg-red-500' r={70} cx={70} cy={70} /> */}
                    </div>
                    <div className='flex items-center justify-evenly ch:cursor-pointer ch:duration-200 mt-20'>
                        <div onClick={countDownStart} className='flex items-center justify-center hover:bg-purple-800  hover:text-white text-purple-800 rounded-full p-2 border border-purple-500'>
                            <VscDebugStart className='ch: size-6 rounded-md' />
                        </div>
                        <div onClick={() => countDownStart(1)} className='flex items-center justify-center rounded-full bg-purple-800 gap-3 text-white py-2 px-4 border border-purple-500'>
                            <CiStop1 className='ch: size-6 rounded-md' />
                            <p>Pause</p>
                        </div>
                        <div onClick={countDownStart} className='flex items-center justify-center hover:bg-purple-800  hover:text-white rounded-full text-purple-800 p-2 border border-purple-500'>
                            <IoReload className='ch: size-6' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
