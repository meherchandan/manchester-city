import React from 'react';


export default function MatchBlock({match}) {
    return (
        <div className="match_block">
            <div className="match_date">
                {match.final==="Yes"?match.date:`Match not played yet: ${match.date}`}
            </div>
            <div className="match_wrapper">
                <div className="match_top">
                    <div className="left">
                        <div 
                        className="icon"
                        style={{
                            background:`url(/images/team_icons/${match.localthmb}).png`
                        }}
                        >
                        </div>
                        <div className="team_name">{match.local}</div>
                    </div>
                    <div className="right">
                        {match.final==='Yes'?match.resultLocal:'-'}
                    </div>
                </div>
                <div className="match_bottom">
                    <div className="left">
                        <div 
                        className="icon"
                        style={{
                            background:`url(/images/team_icons/${match.awaythmb}).png`
                        }}
                        >
                        </div>
                        <div className="team_name">{match.away}</div>
                    </div>
                    <div className="right">
                        {match.final==='Yes'?match.resultAway:'-'}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
