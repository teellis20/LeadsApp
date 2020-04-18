import React from "react";
import Header from "../../Components/Header/Header";
import HowTo from "../../Components/HowTo/HowTo";
import Partner from "../../Components/Partner/Partner";
import ProductsHome from "../../Components/ProductsHome/ProductsHome";
import MyFooter from "../../Components/Footer/Footer";

const Main = props => {
    return (
        <div>
            <Header
                partnerLink={"#hero-image"}
                productLink={"#productHome"}
            />
            <HowTo />
            <ProductsHome />
            <Partner />
            <MyFooter />
        </div>
    );
};

export default Main;