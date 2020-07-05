import React from "react";
import { Button } from "react-materialize";

import "./partner.css"

const Partner = props => {
    return (
        <div id="hero-image">
            <div className="hero-text">
                <h4>Be our partner!</h4>
                <Button 
                href="/partners"
                node="a"
                waves="light"
                id="partnerButton"
                > Join Us </Button>
            </div>

        </div>
    )
}

export default Partner;