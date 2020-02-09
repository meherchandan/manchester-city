import React from 'react'
import Featured from './Featured';
import Matches from './Matches';
import MeetPlayer from './MeetPlayers';
import Promotion from './Promotions'
export default function Home() {
    return (
        <div className="bck_blue">
            <Featured />
            <Matches />
            <MeetPlayer />
            <Promotion /> 
        </div>
    )
}
