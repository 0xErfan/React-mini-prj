import React from "react";

class Form extends React.Component {

    constructor() {
        super()

        this.state = {
            userName: "",
            userEmail: "",
            userPass: "",
            isChecked: false,
            isComplete: false
        }

        this.defaultState = {...this.state}

        this.nameHandler.bind(this)
        this.emailHandler.bind(this)
        this.passwordHandler.bind(this)
        this.checkBoxHandler.bind(this)
        this.submitHandler.bind(this)
        this.signAlert.bind(this)
    }

    nameHandler(event) {
        this.setState({
            userName: event.target.value,
        })
    }

    emailHandler(event) {
        this.setState({
            userEmail: event.target.value,
        })
    }

    passwordHandler(event) {
        this.setState({
            userPass: event.target.value,
        })
    }

    checkBoxHandler(event) {
        this.setState({
            isChecked: event.target.checked,
        })
    }

    signAlert() {

        alert("You signed in successfully!")
        console.log(this.defaultState);
        this.setState(this.defaultState)
    }

    submitHandler(event) {
        event.preventDefault()

        let inputCheck;

        Object.values(this.state).slice(0, 3).map(data => {
            if (data.length == 0) {
                inputCheck = 0
                return;
            }
        })

        inputCheck != 0 && (this.setState({isComplete: true}, this.signAlert())) 
    }

    render() {
        return (
            <section className="sign-form flex items-center justify-center w-full h-[600px] *:text-white/80">
                <div className="max-w-[520px] w-full p-4 bg-transparent backdrop-blur-md border rounded-md border-white/50">
                    <p className="text-2xl text-center pb-6">Sign-In</p>
                    <form className="flex flex-col gap-4">
                        <input onChange={() => this.nameHandler(event)} className={`bg-transparent border-b-2 outline-none pb-2 ${this.state.userName.length == 0 ? "border-red-600" : "border-white/80"}`} value={this.state.userName} placeholder="Enter your name" type="text" />
                        <input onChange={() => this.emailHandler(event)} className={`bg-transparent border-b-2 outline-none pb-2 ${this.state.userEmail.length == 0 ? "border-red-600" : "border-white/80"}`} value={this.state.userEmail} placeholder="Enter your password" type="text" />
                        <input onChange={() => this.passwordHandler(event)} className={`bg-transparent border-b-2 outline-none pb-2 ${this.state.userPass.length == 0 ? "border-red-600" : "border-white/80"}`} value={this.state.userPass} placeholder="Enter your email" type="text" />
                        <div className="flex xs:flex-row justify-between flex-col text-center">
                            <label className="flex gap-2 xs:justify-start justify-center">
                                Remember me
                                <input onChange={() => this.checkBoxHandler(event)} checked={this.state.isChecked} type="checkbox" />
                            </label>
                            <p>Forgot password?</p>
                        </div>
                        <input onClick={() => this.submitHandler(event)} className="bg-white/80 text-black w-full py-2 rounded-md duration-300 hover:bg-white/50" value="Sign In" type="submit" />

                    </form>
                </div>
            </section>
        )
    }
}

export default Form;