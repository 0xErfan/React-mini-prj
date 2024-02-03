import { useState } from "react";
import Product from "./Product";
import PickedProduct from "./PickedProduct";
 

export default function ShoppingBasket() {

    const [products, setProducts] = useState(
        [
            { id: 1, title: "Ipad Pro", price: 617, src: "./images/Ipad-pro.jpg", count: 1 },
            { id: 2, title: "Iphone 15 pro", price: 1353, src: "./images/iPhone-15-pro.jpg", count: 1 },
            { id: 3, title: "Apple watch", price: 220, src: "./images/watch.jpg", count: 1 },
            { id: 4, title: "Airpod", price: 146, src: "./images/airpod.webp", count: 1 }
        ],
    )
    const [basket, setBasket] = useState([])

    let finalCost = 0;
    basket.forEach(item => finalCost += (item.count * item.price))

    const addToBaskethandler = id => {

        const newProduct = [...products].find(product => product.id == id);
        const currentBasket = basket;

        let isAdded = 0;

        currentBasket.some(product => {
            if (product.id == id) {
                currentBasket.map(data => {
                    if (data.id == id) {
                        data.count += 1
                    }
                });
                isAdded = 1
                setBasket([...currentBasket])
                return true;
            }
        })

        if (!isAdded) {
            currentBasket.push(newProduct)
            setBasket([...currentBasket])
        }
    }

    const countChangeHandler = data => {

        const currentBasket = [...basket]

        currentBasket.some(item => {
            if (item.id == data.id) {
                if (data.e.target.value > 0) {
                    item.count = +data.e.target.value;
                }
                setBasket(currentBasket)
                return true
            }
        })
    }

    const removeFromBasket = id => {
        // It is not a good move to change the products themselves but bcs i didnt build a good structure for them i did it like this.
        const currentProducts = [...products]
        const currentBasket = basket.filter(items => items.id != id)

        currentProducts.map(product => product.id == id && (product.count = 1))
        setProducts(currentProducts)
        setBasket([...currentBasket])
    }

    return (
        <section className="bg-gray-800 h-auto py-20">
            <div className="container bg-inherit">
                <h3 className=" text-white/75 text-2xl text-center pb-8">Our Products</h3>
                <div className="max-w-[1280px] w-full px-8 m-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 justify-center xl:grid-cols-4 gap-4">
                    {
                        products.map(product => <Product onBuy={addToBaskethandler} key={product.id} {...product} />)
                    }
                </div>
                <div className="max-w-[720px] w-full m-auto">
                    <div className="flex items-center text-xl text-white/80 pt-20 justify-between gap-8">
                        <p className="w-full border-b pb-1 border-black">Product</p>
                        <p className="w-full border-b pb-1 border-black">Price</p>
                        <p className="w-full border-b pb-1 border-black">Quantity</p>
                    </div>

                    {
                        <div className={`flex items-center justify-center  bg-gray-500 duration-200 transition-all ${!(basket.length) ? "max-h-auto w-full opacity-100" : "max-h-0 w-0 opacity-0"} text-white h-20 mt-12 text-xl text-center rounded-md`}>Your basket is empty!</div>
                    }

                    {
                        basket.map(items => <PickedProduct onRemove={removeFromBasket} onCountChange={countChangeHandler} key={items.id} {...items} />)
                    }
                    <div className={`max-w-[45%] m-auto mt-12 transition-all duration-200 opacity-0 ${finalCost && "opacity-100"} w-full text-xl bg-black text-white/75 text-center p-2 rounded-md`}>
                        Final cost: ${finalCost}
                    </div>
                </div>
            </div>
        </section>
    )
}