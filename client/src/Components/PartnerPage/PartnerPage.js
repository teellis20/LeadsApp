import React from "react";
import Header from "../Header/Header";
import "./partnerPage.css";
import MyFooter from "../Footer/Footer";

const PartnerPage = props => {
    return (
        <div>
            <Header 
            partnerLink={"#"}
            productLink={"/#productHome"}
            />

            <h1> This is the partners page</h1>
            <MyFooter />
        </div>
    )
}

export default PartnerPage;