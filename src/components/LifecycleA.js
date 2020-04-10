import React ,{Component} from 'react'
import  LifecycleB from './LifecycleB.js'
 class LifecycleA extends Component{
     constructor(props){
        super(props)
        this.state={
            name:'vishvas'
        }
        console.log('LifecycleA constructor')
     }
     static getDerivedStateFromProps(props,state){
         console.log('LifecycleA getDerivedStateFromProps')
         return null;
     }
     componentDidMount(){
         console.log('lifecyclyeA didmount ')
     }



     getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifestyleA  getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate()
    {
        console.log('lifestyleA componentDidUpdate')
    }
     shouldComponentUpdate(){
         console.log('lifecycleA shouldComponentUpdate')
         return true
     }


     changeState =()=>
     {
        this.setState({
            name:'codeEvolution'
        })
     }
     render(){
         console.log('lifecycleA render')
         return(
             <div>
                    lifecycleA
                    <button onClick={this.changeState}>change state</button>
                    <LifecycleB></LifecycleB>
             </div>
         )
     }
 }
 export default LifecycleA