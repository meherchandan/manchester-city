import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes'; 
import axios from 'axios';

const App = (props)=>(
  <BrowserRouter>
    <Routes {...props}/>
  </BrowserRouter>
)
export let output = false;
export const updateState = (status)=>{
  output = status;
  ReactDOM.render(<App user={output} />, document.getElementById('root'))

}
const user  = async ()=>{
  const token = localStorage.getItem('token');
   output= false;
  if(token==null){
    output =  false;
  }else{
    let data ;
    try{
      data=  await axios.get('http://localhost:3001/api/checkvalidtoken', { headers: {"Authorization" : `Bearer ${token}`} });
      if(data.status === 200){
        output = true;
      } 
    }catch(err){
      output=false;
    }
    
  }
  ReactDOM.render(<App user={output} />, document.getElementById('root'))
};
user();