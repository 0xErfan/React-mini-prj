import React from "react"
import { FaPlusSquare } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
export default class Todo extends React.Component {
    
    constructor() {
        super()

        this.state = {
            idController: 0,
            todoValue: "",
            filter: 0,
            isFilled: 0,
            allTodos: [],
        }

        this.defaultState = {...this.state};

        this.addNewTodo = this.addNewTodo.bind(this) 
        this.removeTodo = this.removeTodo.bind(this) 
        this.completeTodo = this.completeTodo.bind(this) 
    }

    addNewTodo() {

        const {todoValue, idController, allTodos, } = this.state

        if (!todoValue.trim().length) {
            this.setState({isFilled: 1})

            setTimeout(() => this.setState({isFilled: 0}), 2500)
        } else {

            const newTodo = { id: idController, todoTitle: todoValue, isComplete: false }
            const currentTodos = allTodos

            currentTodos.push(newTodo)
            this.setState({
                allTodos: currentTodos,
                idController: idController + 1,
                todoValue: ""
            })
        }
    }

    removeTodo(id) {

        const currentTodos = [...this.state.allTodos]
        const todoIndex = currentTodos.findIndex(todo => todo.id == id)

        currentTodos.splice(todoIndex, 1)
        this.setState({allTodos: currentTodos})
    }

    completeTodo(id) {
        
        const currentTodos = this.state.allTodos

        currentTodos.map(todo => {
            if (todo.id == id) {
                todo.isComplete = !todo.isComplete
                return;
            }
        })

        this.setState({allTodos: currentTodos})
    }

    render() {
        
        const {isFilled, todoValue, filter, allTodos} = this.state
        let filteredTodos;

        switch (filter) {
            case 0: filteredTodos = allTodos ; break;
            case 1: filteredTodos = allTodos.filter(todo => todo.isComplete); break;
            case -1: filteredTodos = allTodos.filter(todo => !(todo.isComplete)); break;
        }

        return (
            <section className="flex items-center w-full justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 relative">

                <div className={`bg-red-400 text-center text-xl py-3 m-auto rounded-xl transition-all w-[80%] duration-200 my-2 text-white ${isFilled ? "opacity-1 absolute" : "opacity-0 hidden"}`}>Enter your todo title first!</div>

                <div className="max-w-[700px] w-full">
                    <h1 className="todo_topic text-center text-2xl pb-8 text-white">Pro Todo List</h1>

                    <div className="flex align-center justify-center gap-2 ch:h-12 ch:rounded-sm">
                        <div className="flex items-center justify-between basis-2/3 rouned-sm bg-white">
                            <input onChange={e => this.setState({ todoValue: e.target.value })} type="text" placeholder="Add Todo" value={todoValue} className="outline-none py-2 basis-[82%] text-xl px-px ml-2 placeholder:text-black text-black bg-transparent" />
                            <FaPlusSquare onClick={this.addNewTodo} title="add Todo" className="size-full basis-[12%] transition-colors duration-200  text-purple-950 px-2 hover:bg-purple-700" />
                        </div>

                        <select onChange={e => this.setState({ filter: +e.target.value})} className="flex outline-none items-center justify-between basis-1/3 px-2 rouned-sm bg-white">
                            <option value={0}>All</option>
                            <option value={1}>Completed</option>
                            <option value={-1}>In progress</option>
                        </select>
                    </div>

                    {
                        filteredTodos.map(todo => {
                            return (
                                <div key={todo.id} className={`flex items-center justify-between cont max-w-[50%] ${todo.isComplete && "opacity-40"} m-auto w-full h-12 bg-white mt-12`}>
                                    <p className={`text-md px-2 max-w-full line-clamp-1 ${todo.isComplete && "line-through"}`}>{todo.todoTitle}</p>
                                    <div className="h-full flex shrink-0 flex-nowrap">
                                        <button onClick={() => this.completeTodo(todo.id)} className={`h-full transition-colors duration-200 bg-blue-500 text-white px-2 hover:bg-blue-600 cursor-pointer`}>
                                            <TiTick className="size-5" title="complete" />
                                        </button>
                                        <button onClick={() => this.removeTodo(todo.id)} className="h-full transition-colors duration-200  text-white bg-purple-500 px-2 hover:bg-purple-700">
                                            <IoMdClose className="size-5" title="remove todo" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}