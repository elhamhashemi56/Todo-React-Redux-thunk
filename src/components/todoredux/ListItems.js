import {connect} from 'react-redux'
import {löschitem} from '../../thunks/thunks'

const ListItems = (props) =>{
    return(
        <li>{props.row} <span
        onClick={(event)=>(props.löschitem(Number.parseInt(event.target.id.slice('todo'.length))))}
        id={'todo'+props.löschId}>[x]</span>
     </li>
    )
}



export default connect(null,{löschitem})(ListItems)