import React from "react";

class Counter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    addCounter() {
        this.setState(prevState => ({ counter: prevState.counter + 1 }))
    }

    lowerCounter() {
        this.setState(prevState => ({ counter: prevState.counter - 1 }))
    }

    resetCounter() {
        this.setState(() => ({ counter: 0 }))
    }

    render() {
        return (
            <div>
                <section className="w-full h-[500px] bg-sky-500/75 flex items-center justify-center">
                    <div className="border border-black/30 bg-blue-400 text-center space-y-6 p-12 rounded-xl">
                        <p className="text-2xl text-black">Counter</p>
                        <p className="text-white text-2xl">{this.state.counter}</p>
                        <div className="flex items-center justify-between gap-4">
                            <button className="flex items-center justify-center p-4 cursor-pointer transition-all duration-300 hover:bg-gray-600 bg-gray-500 text-white text-xl rounded-xl" onClick={this.addCounter.bind(this)}>Inc</button>
                            <button className="flex items-center justify-center p-4 cursor-pointer transition-all duration-300 hover:bg-gray-600 bg-gray-500 text-white text-xl rounded-xl" onClick={this.lowerCounter.bind(this)}>Dec</button>
                            <button className="flex items-center justify-center p-4 cursor-pointer transition-all duration-300 hover:bg-gray-600 bg-gray-500 text-white text-xl rounded-xl" onClick={this.resetCounter.bind(this)}>Reset</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};

export default Counter;