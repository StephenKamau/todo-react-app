import React from 'react';
const Todo = ({text,todo, todos,setTodos}) => {
    const deleteHandler = ()=>{
        setTodos(todos.filter(t=>t.id !== todo.id));
    }
    const completeHandler=()=>{
        setTodos(todos.map(item=>{
            if(item.id===todo.id){
                return {...item,completed:!item.completed};
            }
            return item;
        }));
    }
    return (
        <div className={`todo ${todo.completed ? "complete": "pending"}`}>
            <li>
                <h2>{text}</h2>
            </li>
            <hr/>
            <button onClick={completeHandler} className="btn secondary">Mark as {`${todo.completed ? "incomplete": "complete"}`}</button>
            <button onClick={deleteHandler} className="btn danger">Remove</button>
        </div>
    );
}
export default Todo;