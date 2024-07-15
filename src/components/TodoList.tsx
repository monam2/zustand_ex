import React from 'react'
import { useTodoStore } from '../store/todoStore'
import TodoItem from './TodoItem'

const TodoList:React.FC = () => {
    const { todoList} = useTodoStore()

    return (
        <div className='mt-5 w-64 flex flex-col gap-3'>
            {todoList.map((todo)=>{
                return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    )
}

export default TodoList