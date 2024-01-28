export default function Menu({ title, price, desc, img }) {
    return (
        <div className="flex gap-3 max-h-32">
            <div className="flex-[1] border-4 border-orange-500 rounded-sm overflow-hidden"><img className="size-full object-cover" src={img} /></div>
            <div className="flex-[2]">
                <div className="flex justify-between border-b border-black/20 pb-2">
                    <p className=" first-letter:capitalize font-bold">{title}</p>
                    <p className="text-orange-500">${price}</p>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}