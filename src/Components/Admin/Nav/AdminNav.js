import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { withRouter } from "react-router-dom";
 class AdminNav extends Component {
    links=[
        {
            title:'Matches',
            linkto:'admin_matches',
        },
        {
            title:'Add Match',
            linkto:'admin_matches/edit_match',
        },
        {
            title:'Player',
            linkto:'admin_players',
        },
        {
            title:'Add Players',
            linkto:'admin_players/edit_player',
        }
    ]
    style = {
        color:'#ffffff',
        fontWeight:'300',
        borderBottom:'1px solid #353535'
    }
    renderItems = ()=>{
        return (
            this.links.map((link)=>(
                <Link to={link.linkto} key={link.title}>
                    <ListItem button
                    style={this.style}>
                        {link.title}
                    </ListItem>
                </Link>
            ))

        )
    }
    logoutHandler = ()=>{
        localStorage.removeItem('token');
        this.props.history.push("/sign_in")
    }
    componentDidUpdate(prevProps) {
        // will be true
        const locationChanged =
          this.props.location !== prevProps.location;
          return locationChanged;
    
      }
      render(){
          console.log(this.props);
          return (
              <div>
                  {this.renderItems()}
                  {localStorage.getItem('token')?
                  <ListItem
                  button 
                   style={this.style} 
                   onClick={()=>{this.logoutHandler()}}>Logout
                  </ListItem>:''}
              </div>
          )

          }
}
export default withRouter(AdminNav);
