import React,{Component} from 'react'
import RegComp from './RegComp.js';
import PureComp from './PureComp.js';
export class ParentComp extends  Component{
    constructor(props){
        super(props)
        this.state={
            name:'vishvas'
        }

    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'vishvas'
            })
        },2000)
    }
    render(){
        
        return (
            <div>
                 parent component
                 <RegComp name={this.state.name}/>
                 <PureComp name={this.state.name}/>
            </div>
        )
    }
}
export default ParentComp 