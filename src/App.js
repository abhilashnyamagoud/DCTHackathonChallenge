import React,{useState} from 'react'
import {Link,Route, Router} from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'
import './App.css'
import Upload from './components/Upload';
import UserShow from './components/UserShow';

const App=(props)=>{
const [Toggle,setToggle]=useState(false)
  return(
    <div className='container mt-2'>
      {
        Toggle?(
          <p className='btn btn-outline-info btn-sm'><Link to='/' className='text-dark' onClick={()=>{
            setToggle(!Toggle)
          }} >Home</Link> </p>
        ):
        (
          <p className='btn btn-outline-info btn-sm'><Link className='text-dark' to='/login' onClick={()=>{
            setToggle(!Toggle)
          }}>Login</Link> </p>
        )
      }
     
      
      <Route path='/' exact ={true} component={Home}/>
      <Route path='/login' exact={true} component={Login} />
      <Route path='/upload' exact={true} component={Upload} />
      {/* <Route path='/upload/:name' component={UserShow} /> */}
    </div>
  )
}


export default App