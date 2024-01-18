import "./Input.css"
import Counter from "./components/counter/counter"
import Temp from "./components/Temp/temp"
import News from "./components/news/news"
import FormValidation from "./components/Form/form"
import Quiz from "./components/quiz/quiz"
import Ticket from "./components/ticket/ticket"
import BookList from "./components/bookList/bookList"

function App() {
    return (
        <div>
            <Counter />
            <Temp/>
            <News/>
            <FormValidation/>
            <Quiz/>
            <Ticket />
            <BookList />
        </div>
    )
}

export default App