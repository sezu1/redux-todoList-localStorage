import {types} from "../types";


function createTodoActionCreator(title) {
    return {
        type: types.CREATE_TODO,
        payload: title
    }
}

function deleteTodoActionCreator(id) {
    return {
        type: types.DELETE_TODO,
        payload: id
    }
}

function changeStatusActionCreator({id, checked}){
    return {
        type: types.CHANGE_STATUS,
        payload: {id, checked}
    }
}


function updateTodoActionCreator({id, input}){
    return {
        type: types.UPDATE_TODO,
        payload: {id, input}
    }
}

function deleteTodosActionCreator(){
    return {
        type: types.DELETE_TODOS,
        payload: []
    }
}

function getTodosLS_ActionCreator(todos){
    return {
        type: types.GET_TODOS_LS,
        payload: todos
    }
}

function changeTitleActionCreator(){
    return {
        type: types.CHANGE_TITLE,
        payload: 'new title'
    }
}

function changeTitleFromInputActionCreator(title){
    return {
        type: types.CHANGE_TITLE_FROM_INPUT,
        payload: title
    }
}

export {createTodoActionCreator,
    deleteTodoActionCreator,
    changeStatusActionCreator,
    updateTodoActionCreator,
    deleteTodosActionCreator,
    getTodosLS_ActionCreator,
    changeTitleActionCreator,
    changeTitleFromInputActionCreator}