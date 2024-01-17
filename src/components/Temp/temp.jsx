import React from "react";

class Temp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            temp: {
                deg: 10,
                bg: "bg-blue-600"
            }
        }

    }

    renderBg(deg) {
        if (deg < 10) {
            document.querySelector("#temp").style.background = "orange"
        } else if (deg > 15) {
            document.querySelector("#temp").style.background = "red"
        } else {
            document.querySelector("#temp").style.background = "blue"
        }
    }

    addTemp() {
        this.degUpdate = this.state.temp.deg + 1 

        this.setState({
            temp: {
                deg: this.degUpdate,
            }
        })

        this.renderBg(this.degUpdate)
    }

    decTemp() {
        this.degUpdate = this.state.temp.deg - 1

        this.setState({
            temp: {
                deg: this.degUpdate,
            }
        })

        this.renderBg(this.degUpdate)
    }

    render() {
        return (
            <section className="flex items-center justify-center w-full h-[500px] bg-pink-200">
                <div className="flex flex-col w-52 h-[300px] p-4 space-y-4 rounded-md bg-blue-950 ch:flex ch:items-center ch:justify-center text-center shadow-black shadow-xl">
                    <div id="temp" className="border border-white duration-200 transition-all w-full h-[176px] rounded-full background">
                        <p className="text-white shadow-xl p-1 bg-inherit text-xl">{this.state.temp.deg} °C</p>
                    </div>
                    <div className="gap-8 ch:flex ch:items-center ch:justify-center">
                        <button onClick={this.addTemp.bind(this)} className="size-14 border border-white rounded-full duration-300 transition-all hover:bg-gray-600 p-px bg-gray-500">+</button>
                        <button onClick={this.decTemp.bind(this)} className="size-14 border border-white rounded-full duration-300 transition-all hover:bg-gray-400 p-px bg-gray-300">-</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Temp;