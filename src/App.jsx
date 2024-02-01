import "./Input.css"
import Counter from "./components/counter/counter"
import Temp from "./components/Temp/temp"
import Timer from "./components/Timer/Timer"
import FormValidation from "./components/Form/form"
import Quiz from "./components/quiz/quiz"
import Ticket from "./components/ticket/ticket"
import BookList from "./components/bookList/bookList"
import Todo from "./components/todo/todo"
import ShopBasket from "./components/shopBasket/ShopBasket"
import HOCExsersize from "./components/HOCExsersize/HOCExsersize"
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu"
import ProMusicPlayer from "./components/ProMusicPlayer/ProMusicPlayer"

function App() {
    return (
        <div>
            <Counter />
            <Temp/>
            <Timer/>
            <FormValidation/>
            <Quiz/>
            <Ticket />
            <BookList />
            <Todo />
            <ShopBasket />
            <HOCExsersize />
            <RestaurantMenu />
            <ProMusicPlayer />
        </div>
    )
}

export default App