import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Todo from "../components/Todo";
import {createTodoActionCreator,
    deleteTodoActionCreator,
    changeStatusActionCreator,
    updateTodoActionCreator,
    deleteTodosActionCreator,
    getTodosLS_ActionCreator,
    changeTitleActionCreator,
    changeTitleFromInputActionCreator} from "../store/actionCreators/todosActionsCreator";



function TodosPage() {

    const [input, setInput] = useState('');
    const {todos} = useSelector((store) => store.todosR)
    const {title} = useSelector((store) => store.titleR);



    const dispatch = useDispatch();

    function createTodo() {
        dispatch(createTodoActionCreator(input));
        setInput('')
    }

    function deleteTodo(id) {
        dispatch(deleteTodoActionCreator(id));
    }

    function changeStatus(id, checked){
        dispatch(changeStatusActionCreator({id, checked}));
    }

    function deleteAll(){
        dispatch(deleteTodosActionCreator);
    }

    function updateTodo(id, input){
        dispatch(updateTodoActionCreator( {id, input}));
        setInput('')
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    useEffect(() => {
        const dataFromLS = JSON.parse(localStorage.getItem("todos"));
        if(dataFromLS){
            dispatch(getTodosLS_ActionCreator(dataFromLS));
        }
    }, [dispatch]);

    function changeTitle(){
        dispatch(changeTitleActionCreator('new title'))
    }

    function changeTitleFromInput(){
        dispatch(changeTitleFromInputActionCreator(input));
        setInput('')
    }


    return (
        <div>
            <h2>Todos-{title}</h2>
            <input type="text" placeholder='todo' onInput={(e) => setInput(e.target.value)} value={input}/>
            <button onClick={createTodo}>add todo</button>
            <button onClick={deleteAll}>delete all</button>
            <button onClick={changeTitleFromInput}>change title from input</button>
            <button onClick={changeTitle}>change title</button>

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
            <li>{title}</li>

        </div>
    );
}

export default TodosPage;