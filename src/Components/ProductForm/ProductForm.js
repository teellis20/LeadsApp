import React, { useEffect } from "react";
import { CardPanel, Button } from "react-materialize";

import Header from "../Header/Header";
import MyFooter from "../Footer/Footer";

import "./productForm.css";
import products from "../../constants/products.js";


const ProductForm = props => {

    let url = props.match.params.product;
    console.log(url + "is type of " + typeof (url));
    let productIndex = 0;

    useEffect(() => getCurrentProduct(), []);

    const getCurrentProduct = () => {
        productIndex = 0;
        for (let i = 0; i < products.products.length; i++) {
            if (url === products.products[i].name) {
                productIndex = i;
                console.log("this worked! " + products.products[i].name + " array of" + i);
            }
        }
        return productIndex;
    }


    const Radios = () => {

        getCurrentProduct();
        console.log("this is test/ array number " + productIndex)
        let currentObj = products.products[productIndex];
        let indexNum = 0;
        let currentProduct = currentObj.questions1.map((item) => {
            console.log("new line" + currentObj.icons1[3]);
            indexNum = currentObj.questions1.indexOf(item);
            return (
                <div className="customRadio">
                    {/* <CardPanel> */}
                    <input
                        className="with-gap" type="radio" name="product"
                        id={currentObj.name} value="test" />
                    <label for='test'>
                        <img className="radioImage hoverable"
                            src={currentObj.icons1[indexNum]}
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
                <Header
                    partnerLink={"/partners"}
                    productLink={"/#productHome"}
                />
                <div className="productFormContainer">
                    <CardPanel className="formCard">
                        <h2>{}</h2>
                        <div id="radioDiv">
                            <Radios />
                        </div>
                        <Button id="productBttn"> Next </Button>
                    </CardPanel>
                </div>
            </div>
            <MyFooter />
        </div>
    )
};

export default ProductForm;