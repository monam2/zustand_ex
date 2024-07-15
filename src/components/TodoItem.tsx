import React, { useState } from 'react'
import { useTodoStore } from '../store/todoStore'

interface Todo {
    id: string;
    todo: string;
    isDone: boolean;
  }

interface TodoItemProps {
    todo : Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
    const [isDone, setIsDone] = useState(todo.isDone);
    const { removeTodo} = useTodoStore();

    const removeHandler = (id:string)=>{
        removeTodo(id);
    }

    const checkHandler = ()=> {
        setIsDone((prev)=>!prev)
    }

  return (
    <div className='flex justify-between'>
        <input type="checkbox" checked={isDone} onChange={checkHandler}/>
        <span>{todo.todo}</span>
        <button 
        onClick={()=>removeHandler(todo.id)}
        className='bg-blue-400 p-1 rounded-md text-white'>제거</button>
    </div>
  )
}

export default TodoItem