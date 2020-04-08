import React,{Component} from 'react';

class EventBind extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'hello'
        }
    }
    clickHandler()
    {
        this.setState({
            message:'goodbye'
        })
        console.log(this)                  //output: undefined
    }
    // two ways of binding evenst are use of bind keyword and use arrow functions
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)} >click</button>//way1
                <button onClick={()=>this.clickHandler()} >click</button>     //way2
            </div>
        );
    }
}
export default EventBind