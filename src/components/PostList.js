import React ,{Component} from 'react';
import axios from 'axios';
class PostList extends Component{
constructor(props){
    super(props)
    this.state={
        posts:[],
        errormsg:''
    }
}
componentDidMount(){        //this method will be executed when the component mount fo the first timeand is only executed once
    axios.get ('https://jsonplaceholder.typicode.com/posts')   //invkoe the get method on axios library
   .then(response=>{
    console.log(response)
    this.setState({posts:response.data})
   })  
   .catch(error=>{
        console.log(error);
        this.setState({errormsg:'error in retrieving data'});
   })
}                   //axios is a ppromise based library

    render(){
        const {posts,errormsg}=this.state    //destruct the state
        return(
            <div>
                {
                    posts.length?posts.map(post=><div key ={post.id}>{post.title}</div> ):null
                }
                {
                    errormsg ? <div>{errormsg}</div>:null
                }
            </div>
        )
    }
}

export default PostList;