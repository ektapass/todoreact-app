import React from 'react';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import './App.css';
import EditTodo from './components/EditTodo';
//import Create from './components/CreateTodo';
import Todo from './components/Todo';

import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      ToDo List
      <Router>
        <Routes>
          <Route path='/' element={<Todos/>}/>
          <Route path='/:id' element={<Todo/>}/>
          <Route path='/:id/edit' element={<EditTodo/>}/>
          {/* <Route path ='/:id/create' element={<Create/>}/> */}

          </Routes>

      </Router>

      
    </div>
  )
}

export default App;