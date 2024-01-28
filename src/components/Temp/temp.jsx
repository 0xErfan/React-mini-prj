import React, { useEffect, useState } from "react";

export default function Temp() {

    const [temp, setTemp] = useState({ deg: 10, bg: "bg-blue-600" })

    useEffect(() => {
        if (temp.deg < 10) {
            setTemp(preve => ({ ...preve, bg: "bg-red-400" }))
        } else if (temp.deg > 15) {
            setTemp(preve => ({ ...preve, bg: "bg-blue-400" }))
        } else {
            setTemp(preve => ({ ...preve, bg: "bg-blue-700" }))
        }
    }, [temp.deg])

    return (
        <section className="flex items-center justify-center w-full h-[500px] bg-pink-200" >
            <div className="flex flex-col w-52 h-[300px] p-4 space-y-4 rounded-md bg-blue-950 ch:flex ch:items-center ch:justify-center text-center shadow-black shadow-xl">
                <div className={`border border-white ${temp.bg} duration-200 transition-all w-full h-[176px] rounded-full background`}>
                    <p className="text-white shadow-xl p-1 bg-inherit text-xl">{temp.deg} °C</p>
                </div>
                <div className="gap-8 ch:flex ch:items-center ch:justify-center">
                    <button onClick={() => setTemp(preve => ({ ...preve, deg: preve.deg + 1 }))} className="size-14 border border-white rounded-full duration-300 transition-all hover:bg-gray-600 p-px bg-gray-500">+</button>
                    <button onClick={() => setTemp(preve => ({ ...preve, deg: preve.deg - 1 }))} className="size-14 border border-white rounded-full duration-300 transition-all hover:bg-gray-400 p-px bg-gray-300">-</button>
                </div>
            </div>
        </section>
    )
}