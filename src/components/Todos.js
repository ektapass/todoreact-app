import Todo from "./Todo";
import { getTodos } from "../services/Todo-api";
import Create from './CreateTodo'
import {Link} from "react-router-dom"

//import data from '../data' //connecting our data. js 
import { useState, useEffect } from 'react';
export default function Todos() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        getTodos()
            .then(res => setTodos(res.data))//setting state with returned data
    }, [])
    console.log(todos)
    return (
        <div>
            
            <ul>
                {todos.map((todo) => {
                    return (
                        <div>
                            <Link to={`/${todo._id}`}>{todo.description}</Link>

                        </div>
                        // <li><a href = {`/${todo._id}`}>{todo.description}</a></li>
                    
                        )
                    
                })}

            </ul>
            <Create/>
            

        </div>
    )
}