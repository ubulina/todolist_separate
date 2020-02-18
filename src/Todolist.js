import React, {useState} from 'react';
import './App.css';
import TodoTable from './TodoTable';

const Todolist = () => {

  const [todo, setTodo] = useState ({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});

  }

  const addTodo = (event) => {

    event.preventDefault();

    setTodos([...todos, todo]);
  }

  const delTodo = (event) => {

    const index = parseInt(event.target.id);
    
    setTodos(todos.filter((todo, i) => i !== index));
  }
  

  return (
    <div>

      <form onSubmit={addTodo}>

      Description: <input type="text" name="desc" value= {todo.desc} onChange={inputChanged}/>
      Date: <input type="text" name="date" value={todo.date} onChange={inputChanged}/>
      <input type= "submit" value="Add"/>

      </form>
      <TodoTable 
      
      todos ={todos}
      delTodo={delTodo}

      />
    
    </div>
  );

};

export default Todolist;