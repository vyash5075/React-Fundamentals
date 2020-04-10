import React ,{Component} from 'react'
 class LifecycleB extends Component{
     constructor(props){
        super(props)
        this.state={
            name:'vishvas'
        }
        console.log('LifecycleA constructor')
     }
     static getDerivedStateFromProps(props,state){
         console.log('LifecycleB getDerivedStateFromProps')
         return null;
     }
     componentDidMount(){
         console.log('lifecyclyeB didmount ')
         return true
     }






    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifestyleB  getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate()
    {
        console.log('lifestyleB componentDidUpdate')
    }
     shouldComponentUpdate(){
         console.log('lifecycleB shouldComponentUpdate')
         return true
     }

     render(){
         console.log('lifecycleB render')
         return(
             <div>
                    lifecycleB
                    
             </div>
         )
     }
 }
 export default LifecycleB