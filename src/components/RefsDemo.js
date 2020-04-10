import React,{Component} from'react'
class RefsDemo extends Component{
    constructor(props){
        super(props)
        this.inputRef=React.createRef()     //with createRef Approach you create reference using react.createRef/in createRef approach we attach reference to an elemnt using the ref prop and assigning the property. in createRef we assign value by this.createRef 
        this.cbRef=null;          // with callbackRef (cbRef) approach you firstproperty first and then create a methodthat assigns the property with a dom element passed as a parameter.in cbRef we attach the ref to an element using the method that interns assigns the element to the property    
     this.setCbRef=element=>{
            this.cbRef=element
        }
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef);
        if(this.cbRef)
        {
            this.cbRef.focus()
        }

    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    clickHandler1=()=>{
        alert(this.setCbRef.value)
    }
    render(){
        return(
            <div>
           <input type="text" ref={this.inputRef}></input>
           <button onClick={this.clickHandler}>Click</button>
           <input type="text" ref={this.setCbRef}></input>
           <button onClick={this.clickHandler1}>Click again</button>
            
           </div>
        )
    }
}
export default RefsDemo