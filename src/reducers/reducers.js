import {SEND_TOARRAY,LÖSCH_ITEM} from '../actions/actions'

const initialState = {
    aufgabe:[],
    
  }
  
  // die Funktion für den reducer:
  
  export default function reducer (state = initialState, action){
    switch(action.type){
      case SEND_TOARRAY: 
        return { ...state,aufgabe:[...state.aufgabe,action.peyload]}

      case LÖSCH_ITEM :
        return{
          ...state,
          aufgabe:state.aufgabe.filter((element,index)=>{
            return index !== action.peyload
          })
        }
      default:
        return state;
    }
  }