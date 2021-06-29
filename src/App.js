import React,{useState,useEffect} from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText,setInputText]=useState('');
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  useEffect(()=>{getFromLocalStorage();},[]);
  useEffect(()=>{filterHandler();saveToLocalStorage();},[todos,status]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const filterHandler =()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed===true));
        break;
      case 'pending':
        setFilteredTodos(todos.filter(todo=>todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  const saveToLocalStorage = ()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  }
  const getFromLocalStorage =()=>{
    if(localStorage.getItem('todos')!==null){
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }
    return ( 
      <div className = "App" >
        <header>
          <h1>Noteway</h1>
        </header>
        <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}
        setStatus={setStatus}
        />
        <TodoList todos={filteredTodos} setTodos={setTodos}/>
      </div>
    );
}

export default App;