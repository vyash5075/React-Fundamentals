import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
 import Hello from './components/Hello';
 import Fake from './components/Fake';
 import Message from './components/Message';
 import Counter from './components/Counter';
 import FunctionClick from './components/FunctionClick';
 import ClassClick from './components/ClassClick';
 import ParentComponent from './components/ParentComponent';
 import EventBind from './components/EventBind';
 import NameList from './components/NameList';
 import NameList2 from './components/NameList2';
 import Stylesheet from './components/Stylesheet'
 import UserGreeting from './components/UserGreeting';
 import Form from './components/Form';
 import LifecycleA  from './components/LifecycleA';
 import Inline from './components/inline';
 import FragmentDemo from './components/FragmentDemo';
 import Table from './components/Table.js'
//  import PureComp from './components/PureComp'
 import ParentComp from './components/ParentComp'
 import RefsDemo from './components/RefsDemo'
 import FRParentInput from './components/FRParentInput'
 import Input from './components/Input'
 import './appStyles.css'
 import styles from './appStyles.module.css'
 import {Navbar} from 'reactstrap';
// import { PureComponent } from './components/PureComponent';
// import Hello1 from './components/Hello1';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <h1>hello world</h1>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
      
//     </div>
//   );
// }

class App extends Component{
  render(){
    return(
      <div className="App">
      <Navbar dark color="primary">
      <div className="container"><h1>this is my navbar</h1>
        {/* <NavBrand href="/">Ristonranet</NavBrand> */}
        </div>
      </Navbar>

      <Greet></Greet>
      <Welcome></Welcome>
      <Hello><p>this is children props</p>
      <button>Action</button> </Hello>
      <Hello ></Hello>
      <Fake name="yash" lastName="verma"></Fake>



      <Welcome state="haryana" capital="chandigarh"></Welcome>
      <Welcome state="punjab" capital="chandigarh"></Welcome>
      <Welcome state="himachal-pradesh" capital="shimla"></Welcome>
      <Welcome state="jammu-kashmir" capital="srinagar"></Welcome>
      <Message></Message>
      <Counter></Counter>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <EventBind></EventBind>
     <ParentComponent></ParentComponent>
     <UserGreeting></UserGreeting>
     <NameList></NameList>
     <NameList2></NameList2>
     <Stylesheet primary={true}></Stylesheet>
     <Stylesheet primary={false}></Stylesheet>
     <Inline></Inline>
     <h1 className='error'>error</h1>
     <h1 className={styles.success}>success</h1>
     <Form></Form>
     <LifecycleA></LifecycleA>
     <FragmentDemo></FragmentDemo>
     <Table></Table>
     {/* <PureComp></PureComp> */}
     <ParentComp></ParentComp>
     <RefsDemo></RefsDemo>
     <FRParentInput></FRParentInput>
     {/* <Input></Input> */}
      </div>
    );
  }

}
export default App;
