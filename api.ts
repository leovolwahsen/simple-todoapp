import { ITask } from "./types/tasks";

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`);
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
    try {
        const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });

    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const newTodo = await res.json();
    console.log('New todo:', newTodo);
    return newTodo;
    } catch (error) {
        console.error('Error adding todo:', error);
        throw error; 
    }
    
}