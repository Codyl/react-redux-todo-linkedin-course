import React, { useState} from 'react'
import './TodoListItem.css'

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('')
    return (<div className="new-todo-form">
        <input className='new-todo-input' type="text" value={inputValue} onChange={e => e.target.value} placeholder='Type your new todo here' />
        <button className="new-todo-button">Create Todo</button>
    </div>);
}
export default NewTodoForm;