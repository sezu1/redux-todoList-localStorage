import {types} from "../types";

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

export {changeTitleFromInputActionCreator, changeTitleActionCreator}