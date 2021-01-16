
import {actionSendToArray,actionLöschenItem} from '../actions/actions'

export const sendToArray = (data) => dispatch =>{
    dispatch(actionSendToArray(data))
}

export const löschitem = (data) => dispatch => {
    dispatch(actionLöschenItem(data))
}