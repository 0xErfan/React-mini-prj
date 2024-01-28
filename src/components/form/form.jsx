import React, { useState } from "react";

export default function Form() {

    const [userName, setUserName] = useState("")
    const [userPass, setUserPass] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [isChecked, setIsChecked] = useState(false)

    const signAlert = () => {
        alert("You signed in successfully!")
        setUserName("");
        setUserPass("");
        setUserEmail("");
        setIsChecked(false);
    }

    const submitHandler = e => {
        e.preventDefault()
        userName.trim().length && userPass.trim().length && userEmail.trim().length && signAlert()
    }

    return (
        <section className="sign-form flex items-center justify-center w-full h-[600px] *:text-white/80">
            <div className="max-w-[520px] w-full p-4 bg-transparent backdrop-blur-md border rounded-md border-white/50">
                <p className="text-2xl text-center pb-6">Sign-In</p>
                <form className="flex flex-col gap-4">
                    <input onChange={e => setUserName(e.target.value)} className={`bg-transparent border-b-2 outline-none pb-2 ${!userName.length ? "border-red-600" : "border-white/80"}`} value={userName} placeholder="Enter your name" type="text" />
                    <input onChange={e => setUserEmail(e.target.value)} className={`bg-transparent border-b-2 outline-none pb-2 ${!userEmail.length ? "border-red-600" : "border-white/80"}`} value={userEmail} placeholder="Enter your password" type="text" />
                    <input onChange={e => setUserPass(e.target.value)} className={`bg-transparent border-b-2 outline-none pb-2 ${!userPass.length ? "border-red-600" : "border-white/80"}`} value={userPass} placeholder="Enter your email" type="text" />
                    <div className="flex xs:flex-row justify-between flex-col text-center">
                        <label className="flex gap-2 xs:justify-start justify-center">
                            Remember me
                            <input onChange={e => setIsChecked(e.target.checked)} checked={isChecked} type="checkbox" />
                        </label>
                        <p>Forgot password?</p>
                    </div>
                    <input onClick={e => submitHandler(e)} className="bg-white/80 text-black w-full py-2 rounded-md duration-300 hover:bg-white/50" value="Sign In" type="submit" />
                </form>
            </div>
        </section>
    )
}