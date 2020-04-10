import React,{PureComponent} from 'react'
export class PureComp extends  PureComponent{
    
    
    render(){
        console.log("*********purecomponent*************");
        return (
            <div>
                 pure component{this.props.name}

            </div>
        )
    }
}
export default PureComp