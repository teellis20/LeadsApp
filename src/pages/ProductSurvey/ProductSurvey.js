import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import ProductForm from "../../Components/ProductForm/ProductForm";
import MyFooter from "../../Components/Footer/Footer";

import products from "../../constants/products";


const ProductSurvey = props => {

    let url = props.match.params.product;
    const [passObj, setPassObj] = useState({});

    const getCurrentProduct = () => {
        let tempIndex = 0;
        let currentObj;
        for (let i = 0; i < products.products.length; i++) {
            if (url === products.products[i].name) {
                console.log("this worked! " + products.products[i].name + " array of" + i);
                tempIndex = i
                // setCurrentObj(products.products[tempIndex]);
                currentObj = products.products[i];
                console.log(currentObj);
                console.log(currentObj.name);
            }
        }
        setPassObj(currentObj);
    }
    getCurrentProduct();


    return (
        <div>
            <Header />
            <ProductForm 
                currentObj={passObj}
            />
            <MyFooter />
        </div>
    );
};

export default ProductSurvey;