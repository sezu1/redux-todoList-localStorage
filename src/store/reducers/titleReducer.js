import {types} from "../types";

const initialState = {
    title: 'old title'
}

export function titleReducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return {
                ...state,
                title: action.payload
            }

        case types.CHANGE_TITLE_FROM_INPUT:
            return {
                ...state,
                title: action.payload

            }
        default: return state
    }

}