import { create } from 'zustand'

interface Todo {
  id: string;
  todo: string;
  isDone: boolean;
}

interface TodoState {
  todoList: Todo[];
  addTodo: (val: string) => void;
  removeTodo: (id: string) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todoList: [
    {
      id: '0',
      todo: '이승원 뚝배기 깨기',
      isDone: false,
    },
    {
      id: '1',
      todo: '리액트 공부하기',
      isDone: false,
    },
    {
      id: '2',
      todo: '밥먹기',
      isDone: true,
    },
  ],
  addTodo: (val) => set((state) => ({ todoList: [...state.todoList, { id: new Date().getMilliseconds + val, todo: val, isDone: false }] })),
  removeTodo: (id) => set((state) => ({ todoList: state.todoList.filter((todo) => todo.id !== id) })),
}))
