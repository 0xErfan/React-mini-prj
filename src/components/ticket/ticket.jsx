import React from "react"
import "./ticket.css"

export default class Ticket extends React.Component {

    constructor() {
        super()

        this.state = {
            username: "",
            places: [
                [0, "Iran", ["Iran-1", "Iran-2", "Iran-3"]],
                [1, "Australia", ["Australia-1", "Australia-2", "Australia-3"]],
                [2, "Turkey", ["Turkey-1", "Turkey-2", "Turkey-3"]],
            ],
            isSelected: 0,
            isValid: 0,
            isFilled: 0,
            selectedCity: "",
            selectedCountry: 0,
        }

        this.defaultState = { ...this.state }

        this.changeHandler = this.changeHandler.bind(this)
        this.submitBuy = this.submitBuy.bind(this)
    }

    changeHandler(e) {

        const foundedCities = this.state.places.find(city => city[1] == e)

        this.setState({
            isSelected: 1,
            selectedCountry: foundedCities,
            selectedCity: foundedCities[2][0]
        })
    }

    submitBuy() {

        const { isSelected, selectedCountry, username, selectedCity } = this.state;

        if (username.length && selectedCity) {
            this.setState({ isValid: 1 });
            isSelected && selectedCountry && setTimeout(() => this.setState(this.defaultState), 2500)
        } else {
            this.setState({isFilled: 1})
            setTimeout(() => this.setState({isFilled: 0}), 2500)
        }
    }

    render() {

        const { username, places, selectedCountry, isValid, selectedCity, isFilled } = this.state;

        return (
            <section className="ticketPage bg-gray-500 py-12 ch:md:grid-cols-2">
                <div className={`w-[80%] bg-gray-600 text-center text-xl py-2 m-auto rounded-xl my-2 text-white ${isValid ? "block" : "hidden"}`}>Ticket of {selectedCountry[1]} / {selectedCity} reserved successfully Mr/Ms {username}</div>
                <div className={`w-[80%] bg-red-400 text-center text-xl py-2 m-auto rounded-xl my-2 text-white ${isFilled ? "block" : "hidden"}`}>Fill your name and select your path correctly!</div>

                <div className="box space-y-4">
                    <input type="text" className="fnameInput outline-none border invalid:border-red-700" required onChange={e => this.setState({ username: e.target.value })} value={username} placeholder="Your name" />

                    <select onChange={e => this.changeHandler(e.target.value)} className="countrySelect">
                        <option selected disabled value="Select Country">Select the country ...</option>
                        {
                            places.map(place => <option key={place[0]} className="option" value={place[1]}>{place[1]}</option>)
                        }

                    </select>

                    {
                        this.state.isSelected ? (
                            <select onChange={e => this.setState({ selectedCity: e.target.value })} className="citySelect">
                                {
                                    selectedCountry[2].map((city, index) => <option key={index} value={city}>{city}</option>)
                                }
                            </select>
                        ) : null
                    }

                    <button onClick={this.submitBuy} className="block m-auto bg-yellow-500 hover:bg-yellow-600 duration-200 transition-all rounded-xl p-2">Book a ticket</button>
                </div>
            </section>
        )
    }

}