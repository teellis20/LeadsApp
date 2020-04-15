import React from "react";
import Header from "../../Components/Header/Header";
import HowTo from "../../Components/HowTo/HowTo";
import Partner from "../../Components/Partner/Partner";
import ProductsHome from "../../Components/ProductsHome/ProductsHome";

const Main = props => {
    return (
        <div>
            <Header />
            <HowTo />
            <ProductsHome />
            <Partner />
        </div>
    );
};

export default Main;