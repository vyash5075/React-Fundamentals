import React,{Component} from 'react'
export class RegComp extends Component{
    render(){
        console.log("*********regularcomponent*************");
        return (
            <div>
                 regular component {this.props.name}
            </div>
        )
    }
}
export default RegComp