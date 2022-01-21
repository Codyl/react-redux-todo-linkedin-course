import React, { useState} from 'react'
import { connect } from 'react-redux'
import { getTodos} from './selectors'
import { addTodoRequest } from '../thunks'
import styled from 'styled-components'

const NewTodoFormContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    width: 70%;
    outline: none;
`;
const NewTodoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background: linear-gradient(#BBB, #777);
`;

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('')
    return (<NewTodoFormContainer>
        <NewTodoInput type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Type your new todo here' />
        <NewTodoButton
        onClick={() => {
            const isDuplicateText = todos.some(todo => todo.text === inputValue)
            if(!isDuplicateText) {
                onCreatePressed(inputValue)
                setInputValue('')
            }
        }}
        >Create Todo</NewTodoButton>
    </NewTodoFormContainer>);
}

const mapStateToProps = state => ({
    todos: getTodos(state)
})
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
})
export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);