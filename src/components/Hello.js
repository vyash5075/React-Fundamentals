import React from 'react';
import { checkPropTypes } from 'prop-types';
//   this is the jsx version of javascript
const Hello =(props)=>
{
    return(
        <div>
            <h1>With jsx: hello</h1>
            {props.children}
        </div>
    )
}

//rewriting the component without using jsx
//the given below method has must 3 parameters to pass first is string which specifies the html tag
// to be rendered , the second parat=mneter is e have to pass any optional properties 
// the third parameter tis the children for the html element
// but 
// return React.createElement('div',null,<h1>hello vishvas</h1>)  we can also writewrite like this but it is not correct syntax


const Hello1 =() =>
{
    return React.createElement('div',null,React.createElement('h1',null,'without jsx'));
}



 export default Hello;