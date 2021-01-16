import React from 'react'
import {connect} from 'react-redux'
import ListTodo from './ListTodo'
import Header from './Header'
import './Todo.css'
import {sendToArray} from '../../thunks/thunks'

class TodoRedux extends React.Component{
   
    constructor(props){
        // console.log('hallllllo',props.aufgabe);
        super(props)
        this.state={
            inputname:''
        }
        this.Handelchange=this.Handelchange.bind(this)
    }

Handelchange(event){
    this.setState({inputname:event.target.value})
}


    render(){
        return(
          
            <div className='Todo'>
                <Header />
                <input type="text" onChange={this.Handelchange} value={this.state.inputname}/>
                <br/>
                <button onClick={()=>{
                    this.props.sendToArray(this.state.inputname)
                    this.setState({inputname:''})
                }}>send to todo</button>
                <ListTodo />
            </div>
            
        )
    }
}



export default connect(null,{sendToArray})(TodoRedux)