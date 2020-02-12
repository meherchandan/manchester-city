import React from 'react'
import {Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import ListItem from '@material-ui/core/ListItem';
export default function AdminNav() {
    const links=[
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
    const style = {
        color:'#ffffff',
        fontWeight:'300',
        borderBottom:'1px solid #353535'
    }
    const renderItems = ()=>{
        return (
            links.map((link)=>(
                <Link to={link.linkto} key={link.title}>
                    <ListItem button
                    style={style}>
                        {link.title}
                    </ListItem>
                </Link>
            ))

        )
    }
    const logoutHandler = ()=>{
        localStorage.removeItem('token');
    }
    return (
        <div>
            {renderItems()}
            {localStorage.getItem('token')?
            <ListItem
            button 
             style={style} 
             onClick={()=>{logoutHandler()}}>Logout
            </ListItem>:''}
        </div>
    )
}
