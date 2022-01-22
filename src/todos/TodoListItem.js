import React from 'react'
import styled from 'styled-components'
const TodoItemContainer = styled.div`
background: #fff;
border-radius: 8px;
margin-top: 8px;
padding: 16px;
position: relative;
box-shadow: 0 4px 8px grey;
`;

export const getBorderStyleForDate = (startingDate, currentDate) => (
    (startingDate > new Date(currentDate - 8640000 * 5)) ? 'none' : '2px solid red');


const TodoItemContainerWithWarning = styled(TodoItemContainer)`
border-bottom: ${props => getBorderStyleForDate(new Date(props.createdAt), Date.now())};
`;
const Button = styled.button`
border-radius: 6px;
margin: 10px;
cursor: pointer;
box-shadow: 2px 2px 2px grey;
border: 0px;
padding: 6px;
`
const CompletedButton = styled(Button)`
    background: linear-gradient(#0F0, #2A2);

`;
const RemoveButton = styled(Button)`
    background: linear-gradient(#F00, #A22);
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning;
    return (
    <Container createdAt={todo.createdAt}>
        <h3>{todo.text}</h3>
        <p>Created at: {(new Date(todo.createdAt)).toLocaleDateString()}</p>
        <div> {!todo.isCompleted ?
            <CompletedButton onClick={() => onCompletePressed(todo.id)}>Mark as completed</CompletedButton>
        : ''}
            <RemoveButton onClick={() => onRemovePressed(todo.id)}>Remove</RemoveButton>
        </div>
    </Container>
)
};
export default TodoListItem;