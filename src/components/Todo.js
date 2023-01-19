import {useState, useEffect} from 'react'
import { getTodo,deleteTodo, } from "../services/Todo-api"
import{useParams,useNavigate} from 'react-router-dom'

const Todo = ()  => {
  const nav =useNavigate()// setting up our return to main page
  const {id}=useParams()//destruturing the id parameter for use
  const [todo, setTodo]= useState({})//setting up our state
  useEffect(()=>{
    getTodo(id) //getting the one Todo from the api using the id
    .then(res=>setTodo(res.data))},[])

    const deleteTheTodo =()=>{
      deleteTodo(id)//delete function goes here
      nav('/') //navigate back to the main screen
    }
      
  return (
    <div >
      <h1>Todo:</h1>
      <h3>{todo.description}</h3>
      Completed: <input type='checkbox'
      defaultChecked={todo.complete}/>
      <button onClick={()=>{nav(`/${id}/edit`)}}>Edit</button>
      <button onClick={() =>{nav('/')}}>Main</button>
      <button onClick={deleteTheTodo}>Delete</button>
    </div>
  )
}

export default Todo

