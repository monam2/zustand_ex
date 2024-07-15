import { ChangeEvent, useState } from "react"
import TodoList from "./components/TodoList"
import { useTodoStore } from "./store/todoStore"


const App:React.FC = () => {
  const {addTodo} = useTodoStore()
  const [inputTodo, setInputTodo] = useState("");

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  }

  const addHandler = ()=> {
    addTodo(inputTodo);
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
      <h1 className="flex justify-center items-center text-3xl text-blue-400 font-bold">Todo List</h1>
      <div className="bg-blue-100 w-full gap-4 h-96 flex flex-col justify-center items-center">
        <span className="font-semibold text-gray-600">Todo Item 추가</span>
        <div className="flex gap-4 justify-center items-center w-96 h-2 rounded">
          <input type="text" className="h-8 border-gray-400 border rounded-md " onChange={onChangeHandler}/>
          <button className="bg-blue-400 px-3 py-1 rounded-md shadow-md text-white " onClick={addHandler}>추가</button>
        </div>
        <TodoList />
      </div>
    </div>
  )
}

export default App