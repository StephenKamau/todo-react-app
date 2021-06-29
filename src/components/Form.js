import React from 'react';
const Form = ({todos, setTodos, inputText, setInputText,setStatus})=>{
    const inputTextHandler = (e)=>{
        setInputText(e.target.value);
    }
    const submitTextHandler = (e)=>{
        e.preventDefault();
        setTodos([{text:inputText,completed:false, id:Math.floor(Math.random() * 1000)},...todos]);
        setInputText("");
    }
    const statusHandler = (e)=>{
        setStatus(e.target.value);
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"></input>
            <button onClick={submitTextHandler} className="btn primary" type="submit">+Add</button>
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>
        </form>
    );
}

export default Form;