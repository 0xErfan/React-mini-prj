import React, { useState } from "react";

export default function Counter() {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <section className="w-full h-[500px] bg-sky-500/75 flex items-center justify-center">
                <div className="border border-black/30 bg-blue-400 text-center space-y-6 p-12 rounded-xl">
                    <p className="text-2xl text-black">Counter</p>
                    <p className="text-white text-2xl">{counter}</p>
                    <div className="flex items-center justify-between gap-4">
                        <button onClick={() => setCounter(preve => preve + 1)} className="flex items-center justify-center p-4 cursor-pointer transition-all duration-300 hover:bg-gray-600 bg-gray-500 text-white text-xl rounded-xl">Inc</button>
                        <button onClick={() => setCounter(preve => preve - 1)} className="flex items-center justify-center p-4 cursor-pointer transition-all duration-300 hover:bg-gray-600 bg-gray-500 text-white text-xl rounded-xl">Dec</button>
                        <button onClick={() => setCounter(0)} className="flex items-center justify-center p-4 cursor-pointer transition-all duration-300 hover:bg-gray-600 bg-gray-500 text-white text-xl rounded-xl">Reset</button>
                    </div>
                </div>
            </section>
        </div>
    )
};