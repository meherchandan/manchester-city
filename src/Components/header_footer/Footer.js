import React from 'react'
import {CityLogo} from '../ui/Icons';
export default function Footer() {
    return (
        <footer className ="bck_blue">
            <div className = "footer_logo">
                <CityLogo 
                width="70px"
                height="70px"
                link="/"
                >
                </CityLogo>
                <div className="footer_discl">
                    Manchester city 2020. All right reserved.
                </div>
            </div>
            
        </footer>
    )
}
