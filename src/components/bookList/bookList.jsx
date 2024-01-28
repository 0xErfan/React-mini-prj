import React, { useRef, useState } from "react";
import { FaBookOpen } from "react-icons/fa";

export default function BookList() {

    const clicks = useRef()

    const [booksList, setBooksList] = useState([])
    const [bookTitle, setBookTitle] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")
    const [bookYear, setBookYear] = useState("")
    const [isFilled, setIsFilled] = useState(0)


    const submithandler = e => {
        e.preventDefault()

        if (bookTitle.trim().length && bookAuthor.trim().length && bookYear.trim().length) {

            const newBook = {
                id: booksList.length,
                title: bookTitle,
                author: bookAuthor,
                year: bookYear,
            }

            setBooksList(preve => [...preve,newBook])
            

            setTimeout(() => {
                setBookAuthor("")
                setBookTitle("")
                setBookYear("")
            }, 1000)

        } else {
            setIsFilled(1)
            setTimeout(() => setIsFilled(0), 2500)
        }
    }

    return (
        <section className="flex items-center justify-center w-full m-auto p-8 h-auto py-28 bg-gray-200 text-black relative">

            <div className={`flex justify-center w-[60%] m-auto absolute right-0 left-0 py-4 rounded-xl bg-red-500 transition-all duration-300 text-xl text-white text-center ${isFilled ? "opacity-1" : "opacity-0"}`}>Please fill the dataes first!</div>
            <div className="max-w-[900px] w-full">

                <div className="flex items-center gap-2 justify-center text-center w-full m-auto pb-4">
                    <FaBookOpen className="size-8 text-orange-400" />
                    <h2 className="text-2xl">A Simple <span className="text-orange-400">Book</span> List App</h2>
                </div>

                <form className="flex flex-col space-y-3">
                    <label>
                        Title
                        <input value={bookTitle} onChange={e => setBookTitle(e.target.value)} className="w-full py-2 px-3 rounded-md border border-gray-800" type="text" placeholder="Book title" />
                    </label>
                    <label>
                        Author
                        <input value={bookAuthor} onChange={e => setBookAuthor(e.target.value )} className="w-full py-2 px-3 rounded-md border border-gray-800" type="text" placeholder="Book Author" />
                    </label>
                    <label>
                        Year
                        <input value={bookYear} onChange={e => setBookYear(e.target.value )} className="w-full py-2 px-3 rounded-md border border-gray-800" type="text" placeholder="Year of Book foundation" />
                    </label>

                    <input onClick={e => submithandler(e)} className="w-full py-2 px-3 rounded-md border border-gray-800 hover:bg-orange-600 duration-200 transition-all text-white bg-orange-500" type="submit" value="Add Book" />
                </form>

                <table className="w-full text-center mt-12">
                    <tr className="ch:border ch:border-gray-500 mt-10">
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                    </tr>

                    {
                        booksList.length > 0 && (
                            booksList.map(book => {
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
                    booksList.length == 0 && <div className="flex items-center justify-center bg-red-400 text-white/70 text-xl text-center">Book list is empty!</div>
                }
            </div>
        </section>
    )
}