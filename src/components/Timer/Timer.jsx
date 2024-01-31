import React, { useEffect, useState } from 'react'
import { CiStop1 } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { VscDebugStart } from "react-icons/vsc";

export default function Timer() {
    const [status, setStatus] = useState("paused")
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(59)
    const [sec, setSec] = useState(59)

    useEffect(() => {
        let interval;

        if (status == "running") {
            interval = setInterval(() => {
                if (sec == 59) {
                    setSec(0)
                    setMin(preve => preve + 1)
                } else if (min == 60) {
                    setMin(0);
                    setSec(0);
                    setHour(preve => preve + 1)
                } else setSec(preve => preve + 1)
            }, 1000)
        } else clearInterval(interval)

        return () => clearInterval(interval)
    }, [status, sec, min])

    const resetHandler = () => {
        setHour(0);
        setMin(0);
        setSec(0);
        setStatus("paused")
    }

    return (
        <section className='bg-gray-200 py-36'>
            <div className='max-w-[500px] m-auto w-full space-y-4 shadow-regular  rounded-md shadow-black p-4'>
                <div className='relative w-5/6 m-auto'>

                    <div className='circle'>
                        <p className='flex items-center size-full justify-center rounded-md text-4xl font-semibold p-2'>
                            <span className=' p-2 rounded-md bg-white tracking-wide'>{hour.toString().padStart(2, 0)}:{min.toString().padStart(2, 0)}:{sec.toString().padStart(2, 0)}</span>
                        </p>
                    </div>
                    <div className='flex items-center justify-evenly ch:cursor-pointer ch:duration-200 mt-20'>
                        <div onClick={() => setStatus("running")} className='flex items-center justify-center hover:bg-purple-800  hover:text-white text-purple-800 rounded-full p-2 border border-purple-500'>
                            <VscDebugStart className='ch: size-6 rounded-md' />
                        </div>
                        <div onClick={() => setStatus("paused")} className='flex items-center justify-center rounded-full bg-purple-800 gap-3 text-white py-2 px-4 border border-purple-500'>
                            <CiStop1 className='ch: size-6 rounded-md' />
                            <p>stop</p>
                        </div>
                        <div onClick={resetHandler} className='flex items-center justify-center hover:bg-purple-800  hover:text-white rounded-full text-purple-800 p-2 border border-purple-500'>
                            <IoReload className='ch: size-6' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}