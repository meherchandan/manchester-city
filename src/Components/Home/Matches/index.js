import React from 'react'
import Blocks from './Blocks';
import {Tag} from '../../ui/misc';
export default function Matches() {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag 
                    background="#0e1731"
                    size="50px"
                    color="#ffffff"
                >
                matches
                </Tag>
                <Blocks />
                <Tag 
                background="#ffffff"
                size="22px"
                color="#0e1731"
                link="/the_team"

                >
                See more matches
                </Tag>
            </div>
            
        </div>
    )
}
