import React ,{Component} from 'react';
class Message extends Component{
//step1: create a state object and initialize it and this step should took place inside class constructor
// in constructoe we call super method this is the required because we extend react component class and a call has to be made ton a base class constructor
//then we create state object     === state is a reserve keyword
//step2 : bind this state value in render function.
//


    constructor(){
        super()
        this.state={
            message:'welcome visitor'   

        }
    }
    changeMessage()
    {
        if(this.state.message=='welcome visitor')
        {
            this.setState({
                message:'thank-you for subscribing'
            })

        }
        else{
            this.setState({
                message:'welcome visitor'
            }) 
        }
       
    }
render(){
      return (
      <div>

<span><button onClick={()=>this.changeMessage()}>Subscribe</button></span><label> <h1>{this.state.message}</h1></label>
          </div>
          
      );
      
}
}
export default Message;