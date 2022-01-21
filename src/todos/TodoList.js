import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { 
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos
} from './selectors';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { loadTodos, removeTodoRequest, completeTodoRequest } from '../thunks';
import styled from 'styled-components';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({ completeTodos, incompleteTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading Todos...</div>;
    const content = (
    <ListWrapper>
        <NewTodoForm/>
        <h1>Incomplete</h1>
        {incompleteTodos.map(todo => <TodoListItem
            todo={todo}
            key={todo.id}
            onRemovePressed={onRemovePressed}
            onCompletePressed={onCompletePressed}/>
        )}
        <h1>Completed</h1>
        {completeTodos.map(todo => <TodoListItem
            todo={todo}
            key={todo.id}
            onRemovePressed={onRemovePressed}
            onCompletePressed={onCompletePressed}/>
        )}
    </ListWrapper>
    );
    return isLoading ? loadingMessage : content;
};
const mapStateToProps = state => ({
    completeTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
    isloading: getTodosLoading(state)
})
const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(completeTodoRequest(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);