import React from "react";
import { Formik, Form, useField } from "formik";
import { TextInput, Button, Select, CardPanel, Icon, RadioGroup, Modal } from "react-materialize";

import "./leadForm.css";

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

const MyTextInput = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const classValid = meta.error && meta.touched ? "invalid" : "";

  return <TextInput {...field} error={errorText} label={label}  id={props.name} validate className={classValid}/>
};


const MySelect = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <Select
      // label="state"
      field {...field}
      options={{
        classes: "validate",
        dropdownOptions: {
          alignment: "right",
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          required: true,
        }
      }}
    >
      <option value="select">State</option>
      <option value="Alabama">AL</option>
      <option value="Alaska">AK</option>
      <option value="Arizona">AZ</option>
      <option value="Arkansas">AR</option>
      <option value="California">CA</option>
      <option value="Colorado">CO</option>
      <option value="Connecticut">CT</option>
      <option value="Deleware">DE</option>
      <option value="Florida">FL</option>
      <option value="Georgia">GA</option>
      <option value="Hawaii">HI</option>
      <option value="Idaho">ID</option>
      <option value="Illinois">IL</option>
      <option value="Indiana">IN</option>
      <option value="Iowa">IA</option>
      <option value="Kansas">KS</option>
      <option value="Kentucky">KY</option>
      <option value="Louisiana">LA</option>
      <option value="Maine">ME</option>
      <option value="Maryland">MD</option>
      <option value="Massachusetts">MA</option>
      <option value="Michigan">MI</option>
      <option value="Minnesota">MN</option>
      <option value="Mississippi">MS</option>
      <option value="Missouri ">MO</option>
      <option value="Montana">MT</option>
      <option value="Nebraska">NE</option>
      <option value="Nevada">NV</option>
      <option value="New Hampshire">NH</option>
      <option value="New Jersey">NJ</option>
      <option value="New Mexico">NM</option>
      <option value="New York">NY</option>
      <option value="North Carolina">NC</option>
      <option value="North Dakota">ND</option>
      <option value="Ohio">OH</option>
      <option value="Oklahoma">OK</option>
      <option value="Oregon">OR</option>
      <option value="Pennsylvania">PA</option>
      <option value="Rhode Island">RI</option>
      <option value="South Carolina">SC</option>
      <option value="South Dakota">SD</option>
      <option value="Tennessee">TN</option>
      <option value="Texas">TX</option>
      <option value="Utah">UT</option>
      <option value="Vermont">VT</option>
      <option value="Virginia">VA</option>
      <option value="Washington">WA</option>
      <option value="West Virginia">WV</option>
      <option value="Wisconsin">WI</option>
      <option value="Wyoming">WY</option>
    </Select>
  )
}

// Beginning of the Formik disma


const LeadsForm = props => {
  return (
    // <div id="form">
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          demo: "",
          phoneNumber: "",
          state: "select",
          zip: ""
        }}
        validate={(values) => {
          const errors = {
            email: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            zip: "",

          };

          if (!values.email) {
            errors.email = "Email is required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }

          if (!values.firstName) {
            errors.firstName = "First name is required"
          }

          if (!values.lastName) {
            errors.lastName = "Last name is required"
          }

          if (!values.phoneNumber) {
            errors.phoneNumber = "Phone number is required"
          }
          if (!values.zip) {
            errors.zip = "Zip Code is required"
          }

          return errors;
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          //make async call
          setTimeout(() => {
            alert(JSON.stringify(data, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
          console.log("submitted: ", data);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit }) => (
          <div id="form">
            <CardPanel className="formCard">
              <Form onSubmit={handleSubmit}>
                <div>
                  <div className="halves">
                    <MyTextInput id="firstName" name="firstName" type="text" label="First Name" onChange={handleChange} />
                  </div>
                  <div className="halves">
                    <MyTextInput name="lastName" id="lastName" type="text" label="Last Name" onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <div className="halves">
                    <MyTextInput name="email" id="email" type="email" label="Email" onChange={handleChange} />
                  </div>
                  <div className="halves">
                    <div id="demoText">
                      <h6>Would you like a free demo?</h6>
                    </div>
                    <div id="radios">
                      <MyRadio name="demo" checked />
                    </div>
                  </div>
                </div>
                {/* phone number */}
                <div>
                  <div className="thirds">
                    <MyTextInput name="phoneNumber" id="phoneNumber" type="tel" label="Phone Number" onChange={handleChange} />
                  </div>
                  <div className="thirds" id="dropdown">
                    <MySelect name="state" id="state" error={errors.state}
                      validate />
                  </div>
                  <div className="thirds" id="zipDiv">
                    <MyTextInput name="zip" id="zip" type="tel" label="Zip Code" onChange={handleChange} />
                  </div>

                  <div id="buttonDiv" >
                    <Button type="button" id="backButton" onClick={() => { props.backStep() }} >Back</Button>
                    <Button
                        id="submitButton"
                        className="modal-trigger"
                        href="#submittedModal"
                        node="button"
                        type="button"
                        onClick={() => {
                          props.submitForms(values);
                        }}
                        disabled={isSubmitting}
                        waves="light"
                      >Submit
              <Icon right className="material-icon" id="icon">keyboard_arrow_right</Icon>
                      </Button>
                  </div>
                  <Modal
                      actions={[
                        <Button flat modal="close" node="button" waves="light">Close</Button>
                      ]}
                      header="Thank You For Your Submission"
                      id="submittedModal"
                      options={{
                        dismissible: false,
                        onCloseEnd: () => { window.location = "/" }
                      }}
                    >
                      <p>Your responses and information will be forwarded to our trusted partners who will reach out to give you the best quotes possible.</p>
                    </Modal>
                </div>
                {/* <Button type="button" onClick={() => {console.log(errors)}}>log</Button> */}

              </Form>
            </CardPanel>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </div>
        )}
      </Formik>


    </div>

  )
};

export default LeadsForm;