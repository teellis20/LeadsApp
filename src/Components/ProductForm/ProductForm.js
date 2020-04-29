import React, { useState } from "react";
import { CardPanel, Button } from "react-materialize";

import Header from "../Header/Header";
import MyFooter from "../Footer/Footer";

import "./productForm.css";
import products from "../../constants/products.js";


const ProductForm = props => {

    let url = props.match.params.product;
    console.log(url + "is type of " + typeof (url));
    let productIndex = 0;
    
    const [count, setCount] = useState(1);
    let currentObj;

    // useEffect(() => getCurrentProduct(), []);

    const getCurrentProduct = () => {
        productIndex = 0;
        for (let i = 0; i < products.products.length; i++) {
            if (url === products.products[i].name) {
                productIndex = i;
                console.log("this worked! " + products.products[i].name + " array of" + i);
            }
        }
        currentObj = products.products[productIndex]
        return currentObj;
    }
    
    getCurrentProduct();

    let radioQ;
    let radioH;
    let radioI;
    switch (count) {
        case 1:
            radioH = currentObj.header1
            radioQ = currentObj.questions1;
            radioI = currentObj.icons1;
            break;
        case 2:
            radioH = currentObj.header2;
            radioQ = currentObj.questions2;
            radioI = currentObj.icons2;
            break;
    };
    
    console.log(radioI);
    console.log(radioQ);

    const Radios = () => {

        console.log("this is test/ array number " + productIndex)
        let indexNum = 0;
        let currentProduct = radioQ.map((item) => {
            // console.log("new line" + currentObj.icons1[3]);
            indexNum = radioQ.indexOf(item);
            return (
                <div className="customRadio">
                    {/* <CardPanel> */}
                    <input
                        className="with-gap" type="radio" name="product"
                        id={currentObj.name} value={currentObj.name} />
                    <label htmlFor={currentObj.name}>
                        <img className="radioImage hoverable"
                            src={radioI[indexNum]}
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
                        <h2>{radioH}</h2>
                        <div id="radioDiv">
                            <Radios />
                        </div>
                        <Button id="productBttn" onClick={() => setCount(count + 1)}> Next </Button>
                    </CardPanel>
                </div>
            </div>
            <MyFooter />
        </div>
    )
};

export default ProductForm;