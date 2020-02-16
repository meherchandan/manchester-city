import React, { Component } from 'react'
import MatchBlock from '../../ui/match_block';
import Slide from 'react-reveal/Slide';
const axios = require('axios');
export default class Blocks extends Component {
    state={
        matches:[]
    }
    showMatches = (matches)=>{
        return matches?
        matches.map(match=>{
            return(
                    <Slide bottom key={match.id}>
                    <div className="item">
                        <div className="wrapper">
                            <MatchBlock match={match} key={match.id} />
                        </div>
                    </div>
                </Slide>
            )
        }):null;
    }
    componentDidMount(){
        axios.get('/api/matches')
            .then( (response) =>{
                this.setState({matches:response.data})
            })
    }
    
    render() {
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        )
    }
}
