import React from 'react'
import { connect } from 'react-redux'
import { displayAlert } from '../thunks'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import { removeTodo, completeTodo } from '../actionCreators'
import './TodoList.css'

const TodoList = ({ todos = [], onRemovedPressed, onCompletePressed, onDisplayAlertClicked }) => {
    let completedTodos = [];let incompleteTodos = [];
    todos.map(todo => {
            if(todo.isCompleted) {
                completedTodos.push(<TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovedPressed} onCompletePressed={onDisplayAlertClicked} />)
            } else {
                incompleteTodos.push(<TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovedPressed} onCompletePressed={onDisplayAlertClicked} />)
            }
        });
    console.log(incompleteTodos)
    return (
    <div className='list-wrapper'>
        <NewTodoForm/>
        <h1>Incomplete</h1>
        {incompleteTodos}
        <h1>Completed</h1>
        {completedTodos}
    </div>
    )
};
const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    onRemovedPressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);