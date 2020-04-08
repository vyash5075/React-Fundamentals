import React ,{Component} from 'react';
class Welcome extends Component{
render(){
        //  <h1>Class component:welcome</h1>
      return (
      <div> 
          <h1>Class component:welcome</h1> 
          <h2>state:-{this.props.state} capital :-{this.props.capital}</h2></div>
      );
    //    
}
}
export default Welcome;