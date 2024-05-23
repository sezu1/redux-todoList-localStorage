import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Todo from "../components/Todo";


function TodosPage() {

    const [input, setInput] = useState('');
    const {todos} = useSelector((store) => store);


    const dispatch = useDispatch();

    function createTodo() {
        dispatch({type: 'CREATE_TODO', payload: input});
        setInput('')
    }

    function deleteTodo(id) {
        dispatch({type: 'DELETE_TODO', payload: id});
    }

    function changeStatus(id, checked){
        dispatch({type: 'CHANGE_STATUS', payload: {id, checked}});
    }

    function deleteAll(){
        dispatch({type: 'DELETE_TODOS', payload: []});
    }

    function updateTodo(id, input){
        dispatch({type: 'UPDATE_TODO', payload: {id, input}});
    }

    useEffect(() => {
        console.log('saving to ls', todos)
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    useEffect(() => {
        const dataFromLS = JSON.parse(localStorage.getItem("todos"));
        console.log('getting from ls', dataFromLS);
        if(dataFromLS){
            dispatch({type: 'GET_TODOS_LS', payload: dataFromLS});
        }
    }, [dispatch]);


    return (
        <div>
            <h2>Todos</h2>
            <input type="text" placeholder='todo' onInput={(e) => setInput(e.target.value)} value={input}/>
            <button onClick={createTodo}>add todo</button>
            <button onClick={deleteAll}>delete all</button>

            {
                todos.length > 0 ?
                    todos.map((todo) => <Todo key={todo.id}
                                              todo={todo}
                                              deleteTodo={deleteTodo}
                                              changeStatus={changeStatus}
                                              updateTodo={updateTodo}
                                              input={input}
                                         />)
                    :
                    <p>Задач нет</p>
            }
        </div>
    );
}

export default TodosPage;