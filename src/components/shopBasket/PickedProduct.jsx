export default function PickedProduct(props) {

    const { src, title, price, count, id } = props;

    return (
        <div className="flex text-xl h-28 text-white/80 pt-8 justify-between gap-8">
            <div className="flex items-center gap-4 w-full border-b pb-2 border-black">
                <img src={src} className="w-[40%] h-full rounded-md" />
                <p className="text-xl">{title}</p>
            </div>
            <p className="flex items-end pb-2 w-full border-b border-black">${price}</p>
            <div className="flex items-center gap-4 w-full border-b border-black">
                <input value={count} onChange={e => props.onCountChange({ e, id })} className="outline-0 text-black w-[50%] p-1 rounded-md" type="number" />
                <button onClick={() => props.onRemove(id)} className="bg-red-500 hover:bg-red-600 duration-300 transition-colors w-[50%] text-white p-1 rounded-md">Remove</button>
            </div>
        </div>
    )
}