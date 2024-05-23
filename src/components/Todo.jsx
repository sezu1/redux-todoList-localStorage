import React from 'react';

function Todo({todo, deleteTodo, changeStatus, updateTodo, input}) {


    function handleUpdate(){
        updateTodo(todo.id, input);
    }

    return (
        <div className="todo">
                <input type="checkbox"
                       checked={todo.status}
                       onChange={e =>
                       changeStatus(todo.id, e.target.checked)}
                />

            <p className={todo.status ? 'checkedTodo' : ''}>{todo.title}</p>
            <button onClick={() => deleteTodo(todo.id)}>удалить</button>
            <button onClick={handleUpdate}>поменять</button>

        </div>
    );
}

export default Todo;