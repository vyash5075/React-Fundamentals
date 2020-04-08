import React from 'react';


// const proper =()=>
// <h1>sdsds</h1>

const Fake = props =>{
    console.log(props);
    return<h1>   props:fake -   hello {props.name} {props.lastName} </h1>
}
//  return <h1>{{props.name}} </h1>


export default Fake