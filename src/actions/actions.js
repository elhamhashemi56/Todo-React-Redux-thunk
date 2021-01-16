
export const SEND_TOARRAY='SEND_TOARRAY'
export const  LÖSCH_ITEM='LÖSCH_ITEM'

// Action creators: 

export const actionSendToArray = (data) =>{
    return{
        type:SEND_TOARRAY,
        peyload:data
    }
}

export const actionLöschenItem = (data) =>{
    return{
        type:LÖSCH_ITEM,
        peyload:data
    }
}