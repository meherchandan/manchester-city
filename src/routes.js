import React from 'react';
import Layout from './Hoc/Layout';
import {Switch} from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/signin';
import Dashboard from './Components/Admin/Dashboard';
import PrivateRoutes from './Components/authRoutes/PrivateRoutes';
import PublicRoutes from './Components/authRoutes/PublicRoutes';
import AdminMatches from './Components/Admin/matches';
const routes  =(props)=> {

    return (
      <Layout >
        <Switch>
            <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches} />
            <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
            <PublicRoutes {...props} restricted={false} path="/" exact component={Home} />
            <PublicRoutes {...props} restricted={true} path="/sign_in" exact component={SignIn} />
        </Switch>
    </Layout>
    )
  }
export default routes;