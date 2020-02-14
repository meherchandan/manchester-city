import React,{Component} from 'react';
import Layout from './Hoc/Layout';
import {Switch, Route,Redirect} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/signin';
import Dashboard from './Components/Admin/Dashboard';
import axios from 'axios';

export default class routes extends Component {

  state={
    auth:false
  }
   authentication =  ()=>{
    const token = localStorage.getItem('token');
    console.log(token);
    if(token==null){
      return false;
    }else{
      const data =   axios.get('http://localhost:3001/api/checkvalidtoken', { headers: {"Authorization" : `Bearer ${token}`} })
      console.log("data",data);
      return data;
    }
  }

  
  render() {
    console.log(this.state.auth);
    const vatt = this.authentication();
    console.log("vatt",vatt);
    const test = vatt?<Dashboard />:<Redirect to="/sign_in" />
    return (
      <Layout >
        <Switch>
            <Route exact component={SignIn}  path="/sign_in" />
            <Route  path="/dashboard"
            // component={Dashboard} 
            render={()=>test}
            // onEnter={(nextState, replace, callback) => this.requireAuth(nextState, replace, callback)}
              />
            <Route exact component={Home}  path="/" />


        </Switch>
    </Layout>
    )
  }
}
