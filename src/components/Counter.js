import React ,{Component} from 'react';


 class  Counter extends Component{

    constructor(props){
        super(props)
        this.state={
            count:0
        }

    }
    
    // increment(){
    //     this.state.count=this.state.count+1;
    //     console.log(this.state.count);
    // } 


    increment(){
        this.setState({
            count:this.state.count+1
        },()=>{console.log('callback value',this.state.count)})
      //                     console.log(this.state.count);
    }



    // increment(){
    //     this.setState(prevState=>({
    //         count:prevState.count+1
            
    //     }),()=>{  console.log(this.state.count);})
      
    // }
    render(){
        return(
            <div>
                <button onClick={()=>this.increment()}>Increment</button>
                    count-{this.state.count}
            </div>
        )
    }
}
export default Counter