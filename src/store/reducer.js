
    const initialState = {
    todos:
    JSON.parse(localStorage.getItem('todos') || []),
    }


    export function reducer(state = initialState, action) {

    if(action.type === 'CREATE_TODO') {
        let id = 1
        if(state.todos.length > 0){
            id = state.todos[state.todos.length - 1].id + 1
        }
        return{
            ...state,
            todos: [...state.todos, {id: id, status: false, title: action.payload}]
        }
    }

    if(action.type === 'DELETE_TODO') {
        const filteredTodos = state.todos.filter(todo => todo.id !== action.payload)
        return {
            ...state,
            todos: [...filteredTodos]
        }
    }

    if(action.type === 'CHANGE_STATUS') {
        console.log(action.payload)
        const newTodos = state.todos.map(todo => {
            if (todo.id === action.payload.id) {
                return{
                    ...todo,
                    status: action.payload.checked
                }
            }
            return todo
        })
        return {
            ...state,
            todos: [...newTodos]
        }
    }

    if(action.type === 'UPDATE_TODO') {
        return {
            ...state,
            todos: state.todos.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, title: action.payload.input }
                    : todo
            )
        };
    }

    if(action.type === 'DELETE_TODOS') {
        return{
            ...state,
            todos: action.payload
        }
    }

    if(action.type === 'GET_TODOS_LS'){
        return{
            ...state,
            todos: action.payload
        }
    }
return state
}