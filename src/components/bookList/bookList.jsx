import React from "react";
import { FaBookOpen } from "react-icons/fa";
export default class BookList extends React.Component {
    constructor() {
        super()

        this.state = {
            booksList: [],
            bookTitle: "",
            bookAuthor: "",
            bookYear: "",
            isFilled: 0
        }

        this.defaultState = { ...this.state }

        this.submithandler = this.submithandler.bind(this)
    }

    submithandler(e) {
        e.preventDefault()

        const { booksList, bookTitle, bookAuthor, bookYear, } = this.state

        if (bookTitle.trim().length && bookAuthor.trim().length && bookYear.trim().length) {

            const newBook = {
                id: booksList.length,
                title: bookTitle,
                author: bookAuthor,
                year: bookYear,
            }

            const newBookArr = booksList

            newBookArr.push(newBook)
            this.setState({ booksList: newBookArr })
            setTimeout(() => this.setState(this.defaultState), 1000)
        } else {

            this.setState({ isFilled: 1 })
            setTimeout(() => this.setState({ isFilled: 0 }), 2500)
        }
    }

    render() {
        const { bookTitle, bookAuthor, bookYear, isFilled } = this.state
        return (
            <section className="flex items-center justify-center w-full m-auto p-8 h-auto py-4 bg-gray-200 text-black relative">

                <div className={`flex justify-center w-[60%] m-auto absolute right-0 left-0 py-4 rounded-xl bg-red-500 transition-all duration-300 text-xl text-white text-center ${isFilled ? "opacity-1" : "opacity-0"}`}>Please fill the dataes first!</div>
                <div className="max-w-[900px] w-full">

                    <div className="flex items-center gap-2 justify-center text-center w-full m-auto pb-4">
                        <FaBookOpen className="size-8 text-orange-400" />
                        <h2 className="text-2xl">A Simple <span className="text-orange-400">Book</span> List App</h2>
                    </div>

                    <form className="flex flex-col space-y-3">
                        <label>
                            Title
                            <input value={bookTitle} onChange={e => this.setState({ bookTitle: e.target.value })} className="w-full py-2 px-3 rounded-md border border-gray-800" type="text" placeholder="Book title" />
                        </label>
                        <label>
                            Author
                            <input value={bookAuthor} onChange={e => this.setState({ bookAuthor: e.target.value })} className="w-full py-2 px-3 rounded-md border border-gray-800" type="text" placeholder="Book Author" />
                        </label>
                        <label>
                            Year
                            <input value={bookYear} onChange={e => this.setState({ bookYear: e.target.value })} className="w-full py-2 px-3 rounded-md border border-gray-800" type="text" placeholder="Year of Book foundation" />
                        </label>

                        <input onClick={e => this.submithandler(e)} className="w-full py-2 px-3 rounded-md border border-gray-800 hover:bg-orange-600 duration-200 transition-all text-white bg-orange-500" type="submit" value="Add Book" />
                    </form>

                    <table className="w-full text-center mt-12">
                        <tr className="ch:border ch:border-gray-500 mt-10">
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>

                        {
                            this.state.booksList.length > 0 && (
                                this.state.booksList.map(book => {
                                    return (
                                        <tr key={book.id} className=" even:bg-gray-400 ch:border ch:border-gray-500 overflow-auto">
                                            <td>{book.title}</td>
                                            <td>{book.author}</td>
                                            <td>{book.year}</td>
                                        </tr>
                                    )
                                })
                            )
                        }
                    </table>

                    {
                        this.state.booksList.length == 0 && (
                            <div className="flex items-center justify-center bg-red-400 text-white/70 text-xl text-center">Book list is empty!</div>
                        )
                    }
                </div>
            </section>
        )
    }

}