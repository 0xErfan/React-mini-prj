import "./Input.css"
import Counter from "./components/counter/counter"
import Temp from "./components/Temp/temp"
import FormValidation from "./components/Form/form"
import Quiz from "./components/quiz/quiz"
import Ticket from "./components/ticket/ticket"
import BookList from "./components/bookList/bookList"
import Todo from "./components/todo/todo"
import ShopBasket from "./components/shopBasket/ShopBasket"
import HOCExsersize from "./components/HOCExsersize/HOCExsersize"
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu"

function App() {
    return (
        <div>
            <Counter />
            <Temp/>
            <FormValidation/>
            <Quiz/>
            <Ticket />
            <BookList />
            <Todo />
            <ShopBasket />
            <HOCExsersize />
            <RestaurantMenu />
        </div>
    )
}

export default App