import React from 'react'
import Person from './Person';
 function NameList2(){
     const names=['bruce','clark','dayana']
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'react'
        },
        {
            id:2,
            name:'yash',
            age:20,
            skill:'Angular'
        },
        {
            id:3,
            name:'vivek',
            age:23,
            skill:'vuejs'
        },
        {
            id:4,
            name:'vinay',
            age:30,
            skill:'html'
        }
    ]
       
   // const personList=persons.map(person=><h2>I am {person.name}. I am {person.age} years old. My skills are {person.skill}</h2>)
    const personList= persons.map(person =>
        <Person key ={person.id} person={person}></Person>
    )
    const nameList=names.map((name,index)=><h2 key={index}>{index}{name}</h2>)
   return(
       <div>
         <div>
             {/* <h2>{names[0]}</h2>
             <h2>{names[1]}</h2>
             <h2>{names[2]}</h2> */}
             {
                
                personList
             }
         </div>
         <div>{nameList}</div>
         </div>
     )
 }
 export default NameList2