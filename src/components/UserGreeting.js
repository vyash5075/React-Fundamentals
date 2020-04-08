import React,{Component} from 'react';
class UserGreeting extends Component{

    constructor(props){
        super(props)
        this.state={
            isLoggedIn: false
        }
    }
    render(){
        let message;
        if(this.state.isLoggedIn)
        {
            // return(
            //     <div>welcome vishvas</div>
            // )
            message=<div>welcome vishvas</div>
        }
        else{
            // return(
            //     <div>welcome guests</div>
            // )

            message=<div>welcome guests</div>
        }
        return <div>{message}</div>
        // return(
        //     <div>
        //        <div>Welcome yash</div> 
        //         <div>Welcome Guests</div>   
        //     </div>
           
        // );
    }
}
export default UserGreeting