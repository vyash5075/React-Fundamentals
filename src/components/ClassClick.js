import React ,{Component} from 'react';
class ClassClick extends Component{
   clickHandler()
    {
        console.log('button clicked');
    }
    render(){
       
      return (
      <div>
          <button onClick={this.clickHandler}>Clcik meee</button> 
          </div>
      );
    //    
}
}
export default ClassClick;
