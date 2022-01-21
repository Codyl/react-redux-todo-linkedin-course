import React from 'react'
import { connect } from 'react-redux'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import { removeTodo, completeTodo } from '../actionCreators'
import './TodoList.css'

const TodoList = ({ todos = [], onRemovedPressed, onCompletePressed }) => {
    let completedTodos = [];let incompleteTodos = [];
    todos.map(todo => {
            if(todo.isCompleted) {
                completedTodos += (<TodoListItem todo={todo} onRemovePressed={onRemovedPressed} onCompletePressed={onCompletePressed} />)
            } else {
                incompleteTodos += (<TodoListItem todo={todo} onRemovePressed={onRemovedPressed} onCompletePressed={onCompletePressed} />)
            }
        });
    
    return (
    <div className='list-wrapper'>
        <NewTodoForm/>
        <h1>Incomplete</h1>
        {completedTodos}
        <h1>Completed</h1>
        {incompleteTodos}
    </div>
    )
};
const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    onRemovedPressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);