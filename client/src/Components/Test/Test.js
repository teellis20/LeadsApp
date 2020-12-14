import React from "react";
import { Formik, Form, useField } from "formik";
import { TextInput, CardPanel, Button, RadioGroup } from "react-materialize";

import Header from "../Header/Header";
import MyFooter from "../Footer/Footer";
import "./test.css";

const MyTextInput = ({ label, type, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    const classValid = meta.error && meta.touched ? "invalid" : "";
    // make if or where if no error and touched valid, if error and touched invalid
    return (
        <TextInput {...field} error={errorText} label={label} id={props.name} className={classValid} validate />
    )
}


const MyRadio = ({ ...props }) => {
    const [field] = useField(props);
    return (
        <RadioGroup label="demo" name="demo"
            options={[
                {
                    label: 'Yes',
                    value: "yes"
                },
                {
                    label: "No",
                    value: "no"
                }
            ]}
            withGap
            {...field}
            radioClassNames="radioClass"
            required
        />
    )
}


const MyModal = () => {
let modal = document.getElementById("myModal");
    return(
    <div id="myModal" className="modal">
  {/* <!-- Modal content --> */}
  <div className="modal-content">
    <div className="modal-header">
  <h4>Thank you for your submission</h4>
    </div>
  {/* <hr/> */}
  <div className="modal-body">
    <p>Your responses and information will be forwarded to our trusted partners who will reach out to give you the best quotes possible. </p>
  </div>
  <div className="modal-footer">
    <Button flat className="close" node="button" waves="light" onClick={() => {modal.style.display = "none"; window.location = "/" }}>Close</Button>
  </div>
  </div>
</div>
    )};

    const toggleModal = () => {
let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }


const TestPage = props => {
    return (
        <div>
            <Header
                partnerLink={"#"}
                productLink={"/#productHome"}
            />

            <div>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        demo: ""
                    }}
                    validate={(values) => {
                        const errors = {};
                        const letters = /^[A-Za-z]+$/;

                        if (values.firstName.length < 1 || !values.firstName.match(letters)) {
                            errors.firstName = "First Name Required";
                        }
                        return errors;
                    }}
                    onSubmit={(data, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        // make async call
                        console.log("submit: ", data);
                        toggleModal();
                        
                        setSubmitting(false);
                        resetForm();
                    }}
                >
                    {({ values, errors, isSubmitting }) => (
                        <div>
                            <CardPanel>

                                <Form>
                                    <MyTextInput name="firstName" label="First Name"
                                    />
                                    <MyTextInput name="lastName" label="Last Name" type="input" />
                                    <MyRadio checked name="demo" />
                                    <Button id="modalBttn" className="modal-trigger" href="#testModal" disabled={isSubmitting} type="submit">Submit</Button>
                                    <pre>{JSON.stringify(values)}</pre>
                                    <pre>{JSON.stringify(errors)}</pre>
                                    {/* <Modal actions={[
                                        <Button flat modal="close" node="button" waves="light">Close</Button>
                                    ]}
                                        header="Thank You For Your Submission"
                                        id="testModal"
                                        options={{
                                            dismissible: false,
                                            onOpenStart: () => {
                                                let m = document.getElementById("testModal");
                                                m.style.display = "none";
                                            }
                                                // onCloseEnd: () => { window.location = "/" }
                                        }}>
                                        <p>This is a modal</p>
                                    </Modal> */}
                                    <MyModal/>
                                </Form>
                            </CardPanel>
                        </div>
                    )}


                </Formik>
            </div>




            <MyFooter />
        </div>
    );
};

export default TestPage;