import React ,{Component} from 'react'
 class Form extends Component{


     constructor(props){
        super(props)

        this.state={
            username:'',
            comments:'',
            topic:'react'
        }
     }




     handleUsernameChange=(event)=>{                // here the event itself passed as a parameterto the handler
    this.setState({                                  // (event)=> from this event we can extract the value of the input elemnt using event.target.value
        username:event.target.value                      // the value is captured by event.target.value
    })                                              
                                                     

     }
     handleCommentsChange=event=>{
         this.setState({
             comments:event.target.value
         })
     } 
     
     
     handleTopicChamge=event=>{
         this.setState({
             topic:event.target.value
         })
     }
     handleSubmit=event=>{
         alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
         event.preventDefault()
     }
     render(){                  
         return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments}onChange={this.handleCommentsChange}></textarea>
                </div>


                <div>
                    <label>topic</label>
                    <select value={this.state.topic}onChange={this.handleTopicChamge}>
                        <option value="react">React</option>
                        <option value="Angular">angular</option>
                        <option value="vueue">vueue</option>
                    </select>

                </div>
                <button>submit</button>
                </form>
                
         )
     }
 }
 export default  Form