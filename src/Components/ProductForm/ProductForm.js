import React, { useState, useEffect } from "react";
import { CardPanel, Button } from "react-materialize";

import Header from "../Header/Header";
import MyFooter from "../Footer/Footer";

import "./productForm.css";
import products from "../../constants/products.js";


const ProductForm = props => {
   

    const GetBackButton = () => {
        if (props.renderButton === "back") {
            console.log(props.renderButton);
            return <Button id="backBttn" onClick={() => { props.backStep() }} > Back </Button>
        } else {
            console.log(props.renderButton)
            return null;
        }
    }


    const Radios = () => {

        // console.log("this is test/ array number " + productIndex);
        let indexNum = 0;
        let currentProduct = props.radioQ.map((item) => {
            // console.log("new line" + currentObj.icons1[3]);
            indexNum = props.radioQ.indexOf(item);
            return (
                <div className="customRadio">
                    {/* <CardPanel> */}
                    <input
                        className="with-gap" type="radio" name="product"
                        id={props.currentObj.name} value={props.currentObj.name} />
                    <label htmlFor={props.currentObj.name}>
                        <img className="radioImage hoverable"
                            src={props.radioI[indexNum]}
                            alt={item} />
                    </label>
                    <p>{item}</p>
                    {/* </CardPanel> */}
                </div>
            );
        });
        return currentProduct;
    };

    // use state once submit his hit, to slide in the second set of questions

    return (
        <div>
            <div className="content-wrap" >
                {/* <Header
                    partnerLink={"/partners"}
                    productLink={"/#productHome"}
                /> */}
                <div className="productFormContainer">
                    <CardPanel className="formCard">
                        <h2>{props.radioH}</h2>
                        <div id="radioDiv">
                            <Radios />
                        </div>
                        <GetBackButton />
                        <Button id="productBttn" onClick={() => props.updateCount()}> Next </Button>
                    </CardPanel>
                </div>
            </div>
            {/* <MyFooter /> */}
        </div>
    )
};

export default ProductForm;