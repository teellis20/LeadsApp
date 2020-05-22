import React, { useState } from "react";
import { Button } from "materialize-css";
import Header from "../../Components/Header/Header";
import ProductForm from "../../Components/ProductForm/ProductForm";
import LeadForm from "../../Components/LeadForm/LeadForm";
import MyFooter from "../../Components/Footer/Footer";

import products from "../../constants/products";
import LeadsForm from "../../Components/LeadForm/LeadForm";


const ProductSurvey = props => {

    const [step, setStep] = useState(1);
    let url = props.match.params.product;

    let productIndex = 0;

    const [count, setCount] = useState(1);
    let currentObj;

    // useEffect(() => , []);

    const getCurrentProduct = () => {
        productIndex = 0;
        for (let i = 0; i < products.products.length; i++) {
            if (url === products.products[i].name) {
                productIndex = i;
                // console.log("this worked! " + products.products[i].name + " array of" + i);
            }
        }
        currentObj = products.products[productIndex]
        return currentObj;
    }

    getCurrentProduct();


    let radioQ;
    let radioH;
    let radioI;
    let renderButton;

    switch (count) {
        case 1:
            radioH = currentObj.header1
            radioQ = currentObj.questions1;
            radioI = currentObj.icons1;
            renderButton = "noback";
            break;
        case 2:
            radioH = currentObj.header2;
            radioQ = currentObj.questions2;
            radioI = currentObj.icons2;
            renderButton = "back";
            break;
        case 3:
            if (currentObj.header3) {
                radioH = currentObj.header3
                radioQ = currentObj.questions3;
                radioI = currentObj.icons3;
                renderButton = "back";
                break;
            } else {
                setCount(count + 1);
                setStep(step + 1);

            };
            break;

    };

    const updateCount = () => {
        setCount(count + 1);
        setStep(step + 1);
        console.log("this is step: " + step);
        console.log("this is count: " + count);
    }

    const backStep = () => {
        setCount(count - 1);
        setStep(step - 1);
    }

    // console.log(radioI);
    // console.log(radioQ);




    const renderSwitch = () => {
        switch (step) {
            case 1:
                console.log("mic check mic check");
                return <ProductForm
                    radioH={radioH}
                    radioI={radioI}
                    radioQ={radioQ}
                    currentObj={currentObj}
                    updateCount={updateCount}
                    renderButton={renderButton}
                    backStep={backStep}

                />;
            case 2:
                console.log("mic check mic check2");
                return <ProductForm
                    radioH={radioH}
                    radioI={radioI}
                    radioQ={radioQ}
                    currentObj={currentObj}
                    updateCount={updateCount}
                    renderButton={renderButton}
                    backStep={backStep}

                />;
            case 3:
                console.log("mic check mic check3");
                return <ProductForm
                    radioH={radioH}
                    radioI={radioI}
                    radioQ={radioQ}
                    currentObj={currentObj}
                    updateCount={updateCount}
                    renderButton={renderButton}
                    backStep={backStep}

                />;
            case 4:
                return <LeadForm 
                backStep={backStep}
                />;
        }
    }



    return (
        <div>
            <Header
                partnerLink={"/partners"}
                productLink={"/#productHome"}
            />
            {renderSwitch()}
            <MyFooter />
        </div>
    );
};

export default ProductSurvey;