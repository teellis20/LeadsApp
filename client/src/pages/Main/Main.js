import React from "react";
import Header from "../../Components/Header/Header";
import HowTo from "../../Components/HowTo/HowTo";
import Partner from "../../Components/Partner/Partner";
import ProductsHome from "../../Components/ProductsHome/ProductsHome";
import MyFooter from "../../Components/Footer/Footer";

import "./mainPage.css";

const Main = props => {
    return (
        <div className="body">
            <div id="content-wrap">
            <Header
                testLink={"/test"}
                partnerLink={"/partners"}
                productLink={"#productHome"}
            />
            <HowTo />
            <ProductsHome />
            <Partner />
            </div>
            <MyFooter />
        </div>
    );
};

export default Main;