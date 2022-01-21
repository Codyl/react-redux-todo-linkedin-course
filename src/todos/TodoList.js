import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { displayAlert } from '../thunks'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import { loadTodos, removeTodoRequest, completeTodoRequest } from '../thunks'
import { completeTodo } from '../actionCreators';
import './TodoList.css'
import { isLoading, todos } from '../reducers'

const TodoList = ({ todos = [], onRemovedPressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading Todos...</div>;

    let completedTodos = [];let incompleteTodos = [];
    todos.map(todo => {
            if(todo.isCompleted) {
                completedTodos.push(<TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovedPressed} onCompletePressed={onCompletePressed} />)
            } else {
                incompleteTodos.push(<TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovedPressed} onCompletePressed={onCompletePressed} />)
            }
        });
    console.log(todos)
    const content = (
    <div className='list-wrapper'>
        <NewTodoForm/>
        <h1>Incomplete</h1>
        {incompleteTodos}
        <h1>Completed</h1>
        {completedTodos}
    </div>
    );
    return isLoading ? loadingMessage : content;
};
const mapStateToProps = state => ({
    todos: state.todos,
    isloading: state.isLoading
})
const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(completeTodoRequest(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);