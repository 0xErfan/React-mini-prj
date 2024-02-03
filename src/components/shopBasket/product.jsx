export default function Product(props) {

    const { src, title, price, onBuy, id } = props;

    return (
        <div className="flex flex-col justify-between gap-1 items-center overflow-hidden hover:-translate-y-2 min-h-[330px] duration-300 transition-all flex-grow rounded-xl p-4 bg-white text-center">
            <div className="w-full h-[65%]">
                <img className="size-full object-cover shrink-0" src={src} />
            </div>
            <div className="flex flex-col w-full h-[35%]">
                <div className="mt-auto">
                    <p className="text-black text-xl">{title}</p>
                    <p className="text-md text-gray-800">${price}</p>
                    <button onClick={() => onBuy(id)} className="outline-0 max-w-[95%] mt-4 w-full m-auto rounded-xl bg-black px-2 py-3 hover:text-yellow-400 text-white/80 duration-300 transition-colors">Buy now</button>
                </div>
            </div>
        </div>
    )
};