import { PureComponent } from "react"
import Product from "./product";

class PickedProduct extends PureComponent {

    render() {

        const { src, title, price, count, id } = this.props;

        return (
            <div className="flex text-xl h-28 text-white/80 pt-8 justify-between gap-8">
                <div className="flex items-center gap-4 w-full border-b pb-2 border-black">
                    <img src={src} className="w-[40%] h-full rounded-md" />
                    <p className="text-xl">{title}</p>
                </div>
                <p className="flex items-end pb-2 w-full border-b border-black">{price}$</p>
                <div className="flex items-center gap-4 w-full border-b border-black">
                    <input value={count} onChange={(e, id) => this.props.onCountChange(e.target.value, id)} className="outline-0 text-black w-[50%] p-1 rounded-md" type="number" />
                    <button className="bg-red-500 hover:bg-red-600 duration-300 transition-colors w-[50%] text-white p-1 rounded-md">Remove</button>
                </div>
            </div>
        )
    }
}

export default class ShoppingBasket extends PureComponent {
    constructor() {
        super()

        this.state = {
            products: [
                { id: 1, title: "Ipad Pro", price: 617, src: "./images/Ipad-pro.jpg", count: 1 },
                { id: 2, title: "Iphone 15 pro", price: 1353, src: "./images/iPhone-15-pro.jpg", count: 1 },
                { id: 3, title: "Apple watch", price: 220, src: "./images/watch.jpg", count: 1 },
                { id: 4, title: "Airpod", price: 146, src: "./images/airpod.webp", count: 1 }
            ],
            basket: [],
            finalCost: 0,
        }

        this.addToBaskethandler = this.addToBaskethandler.bind(this)
    }

    addToBaskethandler(id) {

        const newProduct = this.state.products.find(product => product.id == id);
        const currentBasket = this.state.basket;

        let isAdded  = 0;

        currentBasket.some(product => {
            if (product.id == id) {
                const updateCount = this.state.basket
                updateCount.map(data => {
                    if (data.id == id) {
                        data.count += 1
                    }
                });
                isAdded = 1
                this.setState({ basket: [...updateCount]});
                return true;
            }
        })

        if (!isAdded) {
            console.log("i added");
            currentBasket.push(newProduct)
            this.setState({ basket: [...currentBasket] })
        }
    }

    countChangeHandler(e, id) {
        console.log(e, id);
    }

    render() {
        return (
            <div className="w-full bg-gray-800 h-auto py-20">
                <h3 className=" text-white/75 text-2xl text-center pb-8">Our Products</h3>
                <div className="max-w-[1280px] w-full px-8 m-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 justify-center xl:grid-cols-4 gap-4">
                    {
                        this.state.products.map(product => <Product onBuy={price => this.addToBaskethandler(price)} key={product.id} {...product} />)
                    }
                </div>
                <div className="max-w-[720px] w-full m-auto">
                    <div className="flex items-center text-xl text-white/80 pt-20 justify-between gap-8">
                        <p className="w-full border-b pb-1 border-black">Product</p>
                        <p className="w-full border-b pb-1 border-black">Price</p>
                        <p className="w-full border-b pb-1 border-black">Quantity</p>
                    </div>

                    {
                        this.state.basket.map(items => <PickedProduct onCountChange={value => this.countChangeHandler(value)} key={items.id} {...items} />)
                    }

                </div>
            </div>
        )
    }
}