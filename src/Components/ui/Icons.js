import React from 'react';
import {Link} from 'react-router-dom';
import mancestor_icon from  '../../Resources/images/logos/manchester_city_logo.png';

export const CityLogo = (props)=>{
    const template = <div 
        className="img_cover" 
        style={{
            width:props.width,
            height:props.height,
            background: `url(${mancestor_icon}) no-repeat`
        }}
        >

    </div>
    if(props.link){
        return (<Link to ={props.link} className="link_logo">
            {template}
        </Link>)
    }
    else return template

    
}